import classes from './gallery.module.css'
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useParams } from 'react-router-dom';

export function Gallery() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    async function getAPI() {
        try {
            const response = await fetch(`http://localhost:5001/api/oggetti/${id}`);
            const responseJson = await response.json();
            setData(responseJson);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAPI();
    }, []);

    return (
        <div className={classes.container}>

            <div className={classes.carosello}>
                <div className={classes.title}>
                    <h2>Galleria</h2>
                    <hr />
                </div>
                <Carousel

                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable

                >
                    <img
                        src={data.gallery1}

                    />
                    <img
                        src={data.gallery2}

                    />
                    <img
                        src={data.gallery3}

                    />
                    <img
                        src={data.gallery4}

                    />
                    <img
                        src={data.gallery5}

                    />
                </Carousel>
            </div>
        </div>
    )
}