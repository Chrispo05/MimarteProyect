import React, { useState, useEffect, useContext } from 'react';

import { ProductsContext } from '../js/ProductMainSection.jsx';

import ProductSectionCategoryCardSectionLabel from './ProductSectionCategoryCardSection.jsx';

 export default function ProductSectionCategoryCards(props) {










  //aqui nos traemos del contexto global de categorias, el array
     let productsOrdered = useContext(ProductsContext);

     


    
    

    //aqui iteramos el array para saber cuantas secciones de tarjetas hay que renderizar
    //recordemos que hay categorias que como tienen mas de 10 productos, tendrian otra propiedad que indique si es necesario realizar paginación
    //Dado el caso que si tenga paginación, un separador de condicional nos ayudaría a separar el tipo de componente de tarjeta que queremos

   /*  return productsOrdered.forEach((category, index)=>{
        return(<ProductSectinCategoryCardsLabel categoryProp={category} />)
    }) */
    console.log(productsOrdered)
    return productsOrdered.map((product,index) => {
        
        return(<div key={productsOrdered[index].products[0].id_category}>
            <ProductSectionCategoryCardSectionLabel categoryProp={product} />
        </div>)
    })

}













