import {useEffect, createContext, useState} from "react";
import React from 'react';





import Header from "./Header";
import "../../GlobalStyles.scss"
import HeaderBanner from './HeaderBanner';
import CategoryHomeSlider from  './categorýHomeSlider';
import ExtraServicesHomeSection from './ExtraServicesHomeSection';
import Footer from './Footer';
import ProductSectionCategoryCards from './ProductSectionCategoryCards';
import reorganizeByCategory from "./ContextFilteringHelpers";



/* //esta sección tendrá su propio contexto para manejar todo lo relacionado al buscador de categorias
const ProductSectionContext = React.createContext([]) */


// Creamos un contexto global
const ProductsContext = createContext();

export default function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
    //aqui nos aseguramos que solo se haga la llamada unicamente, la primera vez que se monte el componente.
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api-main-mimarte.azurewebsites.net/api/Product/Lista');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const jsonData = await response.json();



      //antes de poner el array en el contexto, tenemos que crear el filto y el orden, ya que vienen enlistados sin orden

      
      const categorizedProductArray = reorganizeByCategory(jsonData.list);
          //aqui esta funcion nos devuelve un array con una categorizacion separada
      
     //una vez tenemos el array, lo podemos pasar al contexto global
     setProducts(categorizedProductArray);
     

    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div>
      {/* Proporcionamos el contexto a los componentes hijos */}
      <ProductsContext.Provider value={products}>
        <Header />
        <HeaderBanner connectorType="productSectionConnector" />
        <ProductSectionCategoryCards />
      </ProductsContext.Provider>
    </div>
  );
}




export {ProductsContext}