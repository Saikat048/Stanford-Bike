import React from 'react';
import { Carousel } from 'react-bootstrap';
import useProducts from '../Hooks/Customhook';
import './Home.css'

const Home = () => {
    const [product] = useProducts(); 
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 image"
                            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>FAST & FURIOUS</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 image"
                            src="https://cdn.luxe.digital/media/20220130151633/best-electric-motorcycles-2022-lightning-ls-218-luxe-digital-1-780x520.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>ELECTRIC MOTORCYCLE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src="https://5.imimg.com/data5/SELLER/Default/2021/1/KD/NQ/ZW/66703089/side-golden-500x500.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>ELECTRIC SCOOTER</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <h1>Services: {product.length}</h1>
                
            </div>
        </div>
    );
};

export default Home;