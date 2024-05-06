import './NotFoundPage.scss';


function NotFoundPage() {


  return (
    <>
      <div className="title title2" style={{margin:'150px 0px'}}>
          <img alt="" className="img-fluid title-img" src="/assets/images/logo/2.png" />
          <h6 className="font-primary borders main-text text-uppercase"><span>404</span></h6>
          <div className="sub-title">
              <h2 className="title-text text-capitalize text-center">Page was not found</h2>
          </div>
      </div>
    </>
  );
}

export default NotFoundPage
