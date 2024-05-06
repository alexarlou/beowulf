import './HomePage.scss';
import BannerSection from '../../sections/templates/banner'
import FeaturesSection from '../../sections/templates/features'
import DownloadSection from '../../sections/templates/download'
import ScreenshotSection from '../../sections/templates/screenshots'
import ServicesSection from '../../sections/templates/services'
import BuildSection from '../../sections/templates/build'
import FormSection from '../../sections/templates/form'
import ExpertSection from '../../sections/templates/expert'


function HomePage() {


  return (
    <>
      <BannerSection />
      <ServicesSection />
      <ExpertSection/>
      <BuildSection/>
      <FeaturesSection />
      <ScreenshotSection />
      <DownloadSection />
      <FormSection/>
    </>
  );
}

export default HomePage
