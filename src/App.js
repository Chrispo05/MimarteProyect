import React, { createContext, useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from "./Components/js/Header";
import "./GlobalStyles.scss";
import HeaderBanner from './Components/js/HeaderBanner';
import CategoryHomeSlider from  './Components/js/categorýHomeSlider';
import ExtraServicesHomeSection from './Components/js/ExtraServicesHomeSection';
import Footer from './Components/js/Footer';
import ProductSectionCategoryCards from './Components/js/ProductSectionCategoryCards';
import ProductsSection from './Components/js/ProductMainSection';





function App() {

  
  return (
   <div>
      <ProductsSection/>
   </div> 
  );
}

export default App;



function HomePage (){
  return(
   <div>
     <Header/>
    
    <HeaderBanner connectorType="homeConnector"/>
    <CategoryHomeSlider categoryTitle="Productos Top."/>
    <ExtraServicesHomeSection />
    <CategoryHomeSlider categoryTitle="Nueva Colección."/>
    <Footer/>
   </div>
  )
}



