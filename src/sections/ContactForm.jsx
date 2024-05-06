import { useEffect, useState } from 'react'
import arrow from '/arrow.svg'
import { Oval } from 'react-loader-spinner';

function ContactForm() {

  useEffect(() => {
    if (window._fd && typeof window._fd.scan === 'function') {
      window._fd.scan();
    }
  }, []); 


  const initialFormData = {
    name: '',
    email: '',
    message: '', 
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isFetching, setFetching] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    
      setFormData({
        ...formData,
        [name]: value
      });

  };

 








  const handleSubmit = async (event) => {
    event.preventDefault();

    if(formData.name === '' || formData.email === '' || formData.message === ''){
      return;
    }

    setSuccess(false);
    setError(false);
    setFetching(true);

    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('message', formData.message);

  
    try {
      const response = await fetch('https://api.form-data.com/f/lp6t7nvovr73ssa8xslhw', {
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
        <label>Your Name</label>
        <input
          className='textInput'
          placeholder='Name'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Your E-mail</label>
        <input
          className='textInput'
          placeholder='E-mail'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Message'
          required
        />
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
          <>Send <img src={arrow} alt="" /></>
        }
      </button>

      {isSuccess && <div className='alert success'>Your message has been sent</div>}
      {isError && <div className='alert error'>An error has occured, try again later</div>}


    </form>
  )
}

export default ContactForm
