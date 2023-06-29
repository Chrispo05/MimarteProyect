import React, { createContext, useContext, useEffect, useState } from 'react'
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
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';


import PopupProductsContext from './Components/js/ProductPopUpContext';
import PopupProduct from './Components/js/ProductsPopUp';









function App() {


  


  const PopUpProductContext = useContext(PopupProductsContext)
  



  return (
    <Router>
      
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            
          </nav>

          <Routes> 
             
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsSection />} />
          </Routes>
        </div>
        
      {PopUpProductContext.popUpState.isOpened && <PopupProduct/> }
     
    </Router>
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



