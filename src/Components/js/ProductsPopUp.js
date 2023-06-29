import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import PopupProductsContext from './ProductPopUpContext';
import "../scss/ProductsPopUp.scss"


const PopupProduct = () => {


    const PopUpProductContext = useContext(PopupProductsContext);


    return ReactDOM.createPortal (
        <section className="popup">

            <div className='popup-product-main-container'>
                <div className=''>
                    <div>
                        <p>{
                            PopUpProductContext.popUpState.productInfo.title
                        }</p>
                        <p>{
                            PopUpProductContext.popUpState.productInfo.elevatedPrice
                        }</p>
                        <p>{
                            PopUpProductContext.popUpState.productInfo.price
                        }</p>
                        <p>{
                            PopUpProductContext.popUpState.productInfo.description
                        }</p>
                        <p>{
                            PopUpProductContext.popUpState.productInfo.title
                        }</p>
                        <h2 onClick={
                            () => PopUpProductContext.closePopUp()
                        }>Cerrar Modal</h2>
                    </div>
                </div>
            </div>

        </section>,
        document.getElementById('portal-root')
    );


};

export default PopupProduct;
