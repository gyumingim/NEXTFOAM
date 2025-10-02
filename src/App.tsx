import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import ConsultPage from './pages/Consulting/ConsultPage'
import ConsultIntroducePage from './pages/Consulting/ConsultIntroducePage'
import ConsultPerformancePage from './pages/Consulting/ConsultPerfomance'
import BaramPage from './pages/Product/Baram'
import FamusPage from './pages/Product/Famus'
import IntroducePage from './pages/Aboutus/IntroducePage'
import AcademicPage from './pages/Aboutus/AcademicResouruce'
import TechnicalPage from './pages/Aboutus/TechnicalDocumentation'
import NewReleasePage from './pages/Aboutus/NewRealese'
import CompanyNewsPage from './pages/Aboutus/CompanyNews'
import OKUCCPage from './pages/Community/OKUCC'
import ContactUsPage from './pages/Contactus/ContactUs'
import ContentPage from './pages/Education/ContentPage'
import SchedulePage from './pages/Education/SchedulePage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />

      <Route path="/consulting/introduce" element={<ConsultIntroducePage/>} />
      <Route path="/consulting/portfolio" element={<ConsultPage/>} />
      <Route path="/consulting/performance" element={<ConsultPerformancePage/>} />

      <Route path="/product/baram" element={<BaramPage/>} />
      <Route path="/product/famus" element={<FamusPage/>} />

      <Route path="/education/content" element={<ContentPage/>} />
      <Route path="/education/schedule" element={<SchedulePage/>} />

      <Route path="/about/introduce" element={<IntroducePage/>} />
      <Route path="/about/academic" element={<AcademicPage/>} />
      <Route path="/about/technical" element={<TechnicalPage/>} />
      <Route path="/about/news-release" element={<NewReleasePage/>} />
      <Route path="/about/company-news" element={<CompanyNewsPage/>} />

      <Route path="/community/okucc" element={<OKUCCPage/>} />

      <Route path="/contact" element={<ContactUsPage/>} />
    </Routes>
  )
}

export default App
