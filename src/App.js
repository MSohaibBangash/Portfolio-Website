import Navbar from "./components/navbar/Navbar";
import "./App.css"
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Feature from "./components/feature/Feature";
import Projects from "./components/latest_projects/Projects";
import Testimonial from "./components/testimonial/Testimonial";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer.js";
import PutRequest from "./components/putReqComp/PutRequest.js";
function App() {
  return (
    <>
     <Navbar/>
     <Home/> 
     <About/>
     <Services/>
     <Feature/>
     <Projects/>
     <Testimonial/>
     <ContactUs/>
     <PutRequest/>
     <Footer/>

    </>
  );
}

export default App;
