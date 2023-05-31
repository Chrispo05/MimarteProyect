import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState, useEffect} from "react";
import "../scss/CategoryHomeslider.scss"
import "../../GlobalStyles.scss";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '4px'
};


export default function CategoryHomeSlider(props) {
    const [isMobile, setIsMobile] = useState(false);
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '14px',
        focusOnSelect:false,
        touchThreshold: 100,
        swipeToSlide: true
    });

    const breakpoints = [
        {
            breakpoint: 1324,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 680,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
    ];

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return() => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const currentSettings = breakpoints.reduce((acc, breakpoint) => {
            if (window.innerWidth <= breakpoint.breakpoint) {
                return {
                    ... settings,
                    ...breakpoint.settings
                };
            }
            return acc;
        }, settings);

        setSettings(currentSettings);
    }, [isMobile]);

    const allProducts = [
        {
            title: "Kit de bases",
            image: "https://picsum.photos/700/400?random=2",
            description: "Descripción del producto 1",
            price: "10.00",
            elevatedPrice: "70.000"
        },
        {
            title: "Pestañina",
            image: "https://picsum.photos/200/300",
            description: "Descripción del producto 2",
            price: "20.00",
            elevatedPrice: "70.000"
        },
        {
            title: "Producto 3",
            image: "https://picsum.photos/700/400?random=1",
            description: "Descripción del producto 3",
            price: "30.00",
            elevatedPrice: "70.000"
        },
        {
            title: "Producto 4",
            image: "https://picsum.photos/700/400?random=2",
            description: "Descripción del producto 4",
            price: "40.00",
            elevatedPrice: "70.000"
        }, {
            title: "Producto 5",
            image: "https://picsum.photos/700/400?random",
            description: "Descripción del producto 5",
            price: "50.00",
            elevatedPrice: "70.000"
        }, {
            title: "Producto 6",
            image: "https://picsum.photos/700/400?random",
            description: "Descripción del producto 6",
            price: "60.00",
            elevatedPrice: "70.000"
        },
    ];

    return (
        <div className="category-home-slider__section-main-container flex-row-center ">
            <div className="category-home-slider__section-container font-color-40">
            <div className="category-home-slider__title-container ">
                <div className="font-color-30">
                    <p >{props.categoryTitle} </p>
                    <a className="category-home-slider__title-section__see-more-a text-decoration-none font-mobile-small-B  ">Ver más.</a>
                </div>
            </div>
            <Slider {...settings}>
                {
                allProducts.map((product) => (
                    <div id="category-home-slider__card-container" className="bg-B-W-100 shadow-A cursor-pointer">
                        <div className="category-gome-slider__card-percentage-container">
                            <p className="category-gome-slider__card-percentage font-mobile-small-B">{Number(product.price) * Number(product.elevatedPrice) / 100}% </p>
                        </div>
                        <img className="category-home-slider__card__img"
                            src={
                                product.image
                            }
                            alt={
                                product.title
                            }/>
                        <h3 className="font-mobile-small-A category-home-slider__card__product-title">
                            {
                            product.title
                        }</h3>

                        <div className="category-home-slider__card__price-container font-mobile-small-B " >
                            <p className="category-home-slider__card__price"><span>$</span>{
                                product.price
                            }</p>
                            <p className="font-mobile-small-C category-home-slider__card__e-price"><span>$</span>{
                                product.elevatedPrice
                            } </p>
                        </div>
                    </div>
                ))
            } </Slider>
            </div>
        </div>
    );
}

/* export default function CategoryHomeSlider() {

    



    
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return() => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        settings.slidesToShow = 2;
        settings.slidesToScroll = 2;
    }

    return (
        <div>
            <p>Productos Top.</p>
            <Slider {...settings}>
                <div>
                    <img className="category-home-slider__card__img" src="https://picsum.photos/700/400?random" alt="Card 2"/>
                </div>
                <div>
                    <img className="category-home-slider__card__img" src="https://picsum.photos/700/400?random" alt="Card 2"/>
                </div>
                <div>
                    <img className="category-home-slider__card__img" src="https://picsum.photos/700/400?random" alt="Card 3"/>
                </div>
                <div>
                    <img className="category-home-slider__card__img" src="https://picsum.photos/700/400?random" alt="Card 4"/>
                </div>
                <div>
                    <img className="category-home-slider__card__img" src="https://picsum.photos/700/400?random" alt="Card 5"/>
                </div>
                <div>
                    <img className="category-home-slider__card__img" src="https://picsum.photos/700/400?random" alt="Card 6"/>
                </div>
            </Slider>
        </div>
    );
}
 */


/* export default function CategoryHomeSlider() {
    const [isMobile, setIsMobile] = useState(false);
    const [settings, setSettings] = useState({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    });
  
    const breakpoints = [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ];
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 768);
      }
  
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    useEffect(() => {
      const currentSettings = breakpoints.reduce((acc, breakpoint) => {
        if (window.innerWidth <= breakpoint.breakpoint) {
          return { ...settings, ...breakpoint.settings };
        }
        return acc;
      }, settings);
  
      setSettings(currentSettings);
    }, [isMobile]);
  
    return (
      <div>
        <p>Productos Top.</p>
        <Slider {...settings}>
          <div>
            <img
              className="category-home-slider__card__img"
              src="https://picsum.photos/700/400?random"
              alt="Card 2"
            />
          </div>
          <div>
            <img
              className="category-home-slider__card__img"
              src="https://picsum.photos/700/400?random"
              alt="Card 2"
            />
          </div>
          <div>
            <img
              className="category-home-slider__card__img"
              src="https://picsum.photos/700/400?random"
              alt="Card 3"
            />
          </div>
          <div>
            <img
              className="category-home-slider__card__img"
              src="https://picsum.photos/700/400?random"
              alt="Card 4"
            />
          </div>
          <div>
            <img
              className="category-home-slider__card__img"
              src="https://picsum.photos/700/400?random"
              alt="Card 5"
            />
          </div>
          <div>
            <img
              className="category-home-slider__card__img"
              src="https://picsum.photos/700/400?random"
              alt="Card 6"
            />
          </div>
        </Slider>
      </div>
    );
  } */
