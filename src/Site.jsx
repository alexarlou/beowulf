import { useEffect, useState } from 'react'
import './Site.scss';
import './scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderMain from './sections/Header';
import HomePage from './pages/home/HomePage';
import MobileMenu from './sections/MobileMenu';
import NotFoundPage from './pages/not-found/NotFoundPage';
import Footer from './sections/Footer';





function Site() {

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  

  return (
    <BrowserRouter>
        <MobileMenu mobileMenuOpened={mobileMenuOpened} setMobileMenuOpened={setMobileMenuOpened} />
        <div id="site">
          <div id="siteInner">

            <HeaderMain setMobileMenuOpened={setMobileMenuOpened} />

            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="*" element={<NotFoundPage />} /> 
            </Routes>


            <Footer/>

          </div>
        </div>
    </BrowserRouter>
  );
}

export default Site
