import {useEffect, useState} from "react";


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

            {!CardLabelExpandState ? <Cards categoryProp={categoryProp} cardsQuantity={cardsQuantity} /> : "" }

            <div>
                <p>Ver más.</p>
                icon
            </div>
        </div>
    );
}









function Cards({categoryProp,cardsQuantity}) {
     //variable que controla cuantas cards quedan esperando por ser renderizadas.
        let cardsRemaining = 0;

      
   
    return (
        <div> {
            categoryProp.products.map((product, index) => {
                if (index < cardsQuantity) {
                    return <p key={
                        product.product_id
                    }>
                        {
                        product.name
                    }</p>;
                }else{
                    cardsRemaining = cardsQuantity - categoryProp.products.length;
                    console.log(cardsRemaining, product.name)
                }
            })
        } </div>
    )
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
