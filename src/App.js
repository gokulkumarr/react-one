import React from "react";
import "./App.css";
import HeaderComponent from "./components/header/Header";
import BodySection from './components/body/BodySection';
import FooterComponent from "./components/footer/Footer";


function App() {
 
  return (
    <div className="wrapper-container container-fluid px-0">
      <HeaderComponent />
      <BodySection />
      <FooterComponent />
    </div>
  );
}

export default App;
