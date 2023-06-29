import {useEffect, useState} from "react";
import {BsArrowReturnRight} from "react-icons/bs";


// estado que va a manejar la cantidad de cards a renderizar, ya que varian dependiendo de la anchura de la pantalla y de si damos click en ver más.
let cardsQuantity = 0;

export default function ProductSectionCategoryCardSectionLabel({categoryProp}) {

    const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
    const [categoryProductState, setCategoryProductState] = useState();
    const [CardLabelExpandState, setCardLabelExpandState] = useState();

    useEffect(() => {
        setCategoryProductState(categoryProp.products);
        setCardLabelExpandState(categoryProp.products.length > 10);

        const manejarCambioTamaño = () => {
            setAnchoPantalla(window.innerWidth);
        };

        window.addEventListener('resize', manejarCambioTamaño);

        return() => {
            window.removeEventListener('resize', manejarCambioTamaño);
        };
    }, [categoryProp.products]);

    let breakpoints = {
        sss: [
            100, 4
        ],
        ssm: [
            400, 4
        ],
        mms: [
            500, 4
        ],
        mmm: [
            600, 4
        ],
        mml: [
            700, 4
        ],
        lls: [
            800, 4
        ],
        llm: [
            900, 4
        ],
        lll: [
            1000, 5
        ],
        xls: [
            1200, 5
        ],
        xlm: [
            1400, 5
        ],
        xll: [1600, 5]
    };

    const howManyCards = () => {
        let cardsQuantity = 0;
        let breakPointsArray = Object.entries(breakpoints);

        breakPointsArray.forEach((breakpoint) => {
            if (breakpoint[1][0] <= anchoPantalla) {
                cardsQuantity = breakpoint[1][1];
            }
        });

        return cardsQuantity;
    };

    const cardsQuantity = howManyCards();

    return (
        <div>
            <div>
                <p className="font-500">Categoría: {
                    categoryProp.category_name
                }</p>
            </div>

            {
            < Cards categoryProp = {
                categoryProp
            }
            cardsQuantity = {
                cardsQuantity
            } />
        } </div>
    );
}


function Cards({categoryProp, cardsQuantity}) {
    const [cardQuantityState, setCardQuantityState] = useState(cardsQuantity);
    const [expandedCardsState, setExpandedCardsState] = useState(false);
    let cardsRemaining = 0;

    useEffect(() => {
        setCardQuantityState(cardsQuantity);
    }, [cardsQuantity]);

    function handleCardsQuiantityExpanded() {
        setExpandedCardsState(true)
    }

    if (!expandedCardsState) {
        return (
            <div>
                <div> {
                    categoryProp.products.map((product, index) => {
                        if (index < cardQuantityState) {
                            return <p key={
                                product.product_id
                            }>
                                {
                                product.name
                            }</p>;
                        } else {
                            cardsRemaining = cardQuantityState - categoryProp.products.length;

                            return null; // Se agrega un return null para el caso en que no se renderice ninguna tarjeta
                        }
                    })
                } </div>
                {
                Math.abs(cardsRemaining) > 0 && <div>
                    <p onClick={handleCardsQuiantityExpanded}>Ver más.</p>
                    {/* icon */} </div>
            } </div>
        );
    }

    if (expandedCardsState) {


        return (
            <CardsPaginated products={
                categoryProp.products
            }/>
        )
    }
}


// logica para las label de tarjetas que tienen pagianción


function CardsPaginated({products}) {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    // Calcular el índice inicial y final de los productos a mostrar en la página actual
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calcular la cantidad total de páginas
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Función para cambiar a la página siguiente
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Función para cambiar a la página anterior
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    // funcion para el procentaje
    function porcentaje(price, Fprice) { // esta funcion crea los porcentajes entre precio y fPrecio

        let diferencia = Fprice - price;
        let porcentaje = (diferencia / price) * 100;
        return porcentaje;
    }

    return (
        <div>
            <div> {
                currentProducts.map((product) => (
                    <div key={
                        product.product_id
                    }>
                        <div>
                            <div>
                                <p>{
                                    porcentaje(product.price, product.fakeprice)
                                } </p>
                            </div>
                            <img alt="makeup"
                                src={
                                    product.img
                                }/>
                            <p>{
                                product.name
                            }</p>
                            <div>
                                <p>{
                                    product.precio
                                }</p>
                                <p>{
                                    product.Fprice
                                }</p>
                            </div>

                        </div>
                    </div>

                ))
            } </div>
            <div>
                <button onClick={prevPage}
                    disabled={
                        currentPage === 1
                }>
                    Página anterior
                </button>
                {
                Array.from({
                    length: totalPages
                }, (_, index) => (
                    <button key={
                            index + 1
                        }
                        onClick={
                            () => setCurrentPage(index + 1)
                        }
                        disabled={
                            currentPage === index + 1
                    }>
                        {
                        index + 1
                    } </button>
                ))
            }
                <button onClick={nextPage}
                    disabled={
                        currentPage === totalPages
                }>
                    Página siguiente
                </button>
            </div>
        </div>
    );
}
/* export default function ProductSectionCategoryCardSectionLabel({categoryProp}) {

    console.log(categoryProp.products)
    const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

    useEffect(() => {
        const manejarCambioTamaño = () => {
            setAnchoPantalla(window.innerWidth);
        };

        // Agregar un listener para escuchar los cambios en el tamaño de la ventana
        window.addEventListener('resize', manejarCambioTamaño);

        // Eliminar el listener cuando el componente se desmonte
        return() => {
            window.removeEventListener('resize', manejarCambioTamaño);
        };
    }, []); // El arreglo vacío asegura que solo se ejecute una vez al montar el componente


    //creamos los breakpoints para las cards
    let breakpoints = {
        ssm: [400, 3],
        mms: [500, 3],
        mmm: [600, 3],
        mml: [700, 4],
        lls: [800, 4],
        llm: [900, 4],
        lll: [1000, 5],
        xls: [1200, 5],
        xlm: [1400, 5],
        xll: [1600, 5] 
    }



    //tambien haria falta crear un estado por componente label de cards
            //con el fin de hacer el renderizado de cantidad de tarjetas, dinamico.
        const [categoryProductState, setCategoryProductState] = useState();

        setCategoryProductState(categoryProp.products)

 
    //tambien un estado para controlar la expandibilidad del label de cards
        const [CardLabelExpandState, setCardLabelExpandState] = useState();

        //aqui nos aseguramos que no se tengan mas de 10 productos , si los tiene, el componente se pone modo expandido para la paginación
        setCardLabelExpandState(categoryProp.products.length > 10 );



    //esta funcion dedicirá la cantidad de tarjetas a renderizar dependiendo del tamaño de la pantalla;
    

    const howManyCards = () => {
        let breakPointsArray = Object.entries(breakpoints);
      
        breakPointsArray.forEach((breakpoint)=>{
            if (breakpoint[1][0] <= anchoPantalla) {
                
                cardsQuantity = (breakpoint[1][1]);
            }
        })
    
    }

    howManyCards();
    




    
    return (
        <div>
           
            <div>
                <p className="font-500">
                    Categoría: {
                    categoryProp.categoria
                }</p>
            </div>

            <div> {
                    categoryProp.products.map((product, index) => {
                    
                        if (index < cardsQuantity) {
                            return (
                                <p>{
                                    product.name
                                } </p>
                            )
                        }

                    

                   

                })
            }</div>

            <div>
                <p>Ver más.</p>
                icon</div>
        </div>
    )
}
 */
