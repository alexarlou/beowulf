import { useEffect, useState } from 'react'
import arrow from '/arrow.svg'
import { Oval } from 'react-loader-spinner';

function Form() {


  const saved = localStorage.getItem('submitted');

  const [isSuccess, setSuccess] = useState(() => {
    return saved ? JSON.parse(saved) : false;
  });

  const [modalOpened, setModalOpened] = useState(() => {
    return saved ? JSON.parse(saved) : false;
  });


  useEffect(()=>{
    if (isSuccess === true) {
      localStorage.setItem('submitted', JSON.stringify(isSuccess));
      setModalOpened(true);
      addModalClass(true);
    }
  }, [isSuccess])



  useEffect(()=>{
    if (isSuccess === true) {
      setModalOpened(true);
      addModalClass(true);
    }
  }, [])

  function addModalClass(open) {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }






  useEffect(() => {
    if (window._fd && typeof window._fd.scan === 'function') {
      window._fd.scan();
    }
  }, []); 


  const initialFormData = {
    name: '',
    email: '',
    operating_system: 'iOS', 
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isError, setError] = useState(false);
  const [isFetching, setFetching] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === 'radio') {
      setFormData({
        ...formData,
        operating_system: value === 'iOS' ? 'iOS': 'Android',
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

 








  const handleSubmit = async (event) => {
    event.preventDefault();

    if(formData.name === '' || formData.email === '' ){
      return;
    }

    setSuccess(false);
    setError(false);
    setFetching(true);

    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('operating_system', formData.operating_system);

  
    try {
      const response = await fetch('https://api.form-data.com/f/st6bod91h63mxjua2l087', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        setFormData(initialFormData);
        setSuccess(true);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setFetching(false);
    }
  };




  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>YOUR FULL NAME</label>
        <input
          className='textInput'
          placeholder='Insert Your Name'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>YOUR E-MAIL ADDRESS</label>
        <input
          className='textInput'
          placeholder='Insert Your E-mail Address'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
      <label>OPERATING SYSTEM</label>
        <div className='checkboxesCont'>
        <div className='checkboxCont'>
        <label>
          <input
            type="radio"
            name="operating_system"
            value="iOS"
            checked={formData.operating_system === "iOS" }
            onChange={handleChange}
          />
          <span>iOS</span>
          </label>
          </div>


        <div className='checkboxCont'>
        <label>
          <input
            type="radio"
            name="operating_system"
            value="Android"
            checked={formData.operating_system === 'Android'}
            onChange={handleChange}
          />
          <span>Android</span>
        </label>
        </div>
        </div>
      </div>

      <input type="hidden" name="_fd" value="0" className="form-data-marker" />

      <button type="submit">
        {isFetching ? 
          <Oval
          visible={true}
          height="20"
          width="20"
          color="white"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
          :
          <>SIGN UP NOW <img src={arrow} alt="" /></>
        }
      </button>

      {isSuccess && <div className='alert success'>Your application has been sent</div>}
      {isError && <div className='alert error'>An error has occured, try again later</div>}


    </form>
  )
}

export default Form
