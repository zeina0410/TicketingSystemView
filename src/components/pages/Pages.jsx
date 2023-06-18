import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import SignInOutContainer from "../../Pages/Containers/index.container"
import Ticket from "../../Pages/Ticket/ticket.page"

const Pages = () => {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignInOutContainer/>}/>
        <Route path="/ticket" element={<Ticket/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};
export default Pages
