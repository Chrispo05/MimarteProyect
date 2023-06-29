// PopupContext.js
import React, { createContext, useState } from 'react';

const PopupProductsContext = createContext();

export const PopupProvider = ({ children }) => {
  const [popUpState, setPopUpState] = useState({
    isOpened: false,
    productInfo: {}
  });

  const openPopUp = ( info) => {
    setPopUpState({
        isOpened: true,
        productInfo: info
    });
  };


  const closePopUp = ()=>{
    setPopUpState({
        isOpened:false,
        productInfo: {}
    })
  }


  return (
    <PopupProductsContext.Provider value={{ popUpState, openPopUp , closePopUp }}>
      {children}
     
    </PopupProductsContext.Provider>
  );
};

export default PopupProductsContext;