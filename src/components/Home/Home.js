import React from 'react';
import { Carousel } from 'react-bootstrap';
import useProducts from '../Hooks/Customhook';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import './Home.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'

const Home = () => {
    const [items] = useProducts();
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
                <h1>Items</h1>
                <div className="container">
                    <div className="cards">
                        {
                            items.slice(0, 6).map(item => <InventoryProduct key={item._id} item={item}></InventoryProduct>)
                        }
                    </div>
                    <Link to='/inventory'>See More Inventorys <span className='ms-2'><BsArrowRightCircleFill></BsArrowRightCircleFill></span></Link>   
                </div>
            </div>
            <div>
                <div className="container">
                    <div className='row justify-content-around align-items-center'>
                        <div className='col-6 photo'>
                            <div><img className="w-100" src="https://scontent.cdnsnapwidget.com/vp/75d8eba0ae916b00d4cd8512e8fb3396/5E33C80A/t51.2885-15/e35/s320x320/69951229_2458583207560204_8041728927736586474_n.jpg" alt="" /></div>
                            <div><img className="w-100" src="https://scontent.cdnsnapwidget.com/vp/8d8d4a6fc555551ca7ec7a2e26043b31/5E38F369/t51.2885-15/e35/s320x320/69515470_138408190717018_1062281302192476586_n.jpg" alt="" /></div>
                            <div><img className="w-100" src="https://scontent.cdnsnapwidget.com/vp/1605ef574f7d3184a7592462c336dcf8/5E38DC82/t51.2885-15/e35/s320x320/69821335_164800097975395_8727959338597306307_n.jpg" alt="" /></div>
                            <div><img className="w-100" src="https://scontent.cdnsnapwidget.com/vp/f54204b82192ff73b13d19f74745e681/5E26E63E/t51.2885-15/e35/s320x320/70654093_442064943061649_2456592324297552521_n.jpg" alt="" /></div>
                            <div><img className="w-100" src="https://scontent.cdnsnapwidget.com/vp/f59ddac80ff3cd1dd25ad10664a4bbe9/5E271416/t51.2885-15/e35/s320x320/69418260_925568347795734_8552601192800500429_n.jpg" alt="" /></div>
                            <div><img className="w-100" src="https://scontent.cdnsnapwidget.com/vp/f6a128629cc1717bb033bebd5680e1de/5E1F9249/t51.2885-15/e35/s320x320/69547155_134846834468548_2818066308345193167_n.jpg" alt="" /></div>
                            <div><img className="w-100" src="https://scontent.cdnsnapwidget.com/vp/7fde87ae317b8cf22b12ea5efacde588/5E1A7986/t51.2885-15/e35/s320x320/69388391_379907252937119_695707368907141271_n.jpg" alt="" /></div>
                            <div><img className="w-100" src="https://scontent.cdnsnapwidget.com/vp/ec4bd6dc09f46b0f327de030d730d7df/5E194D5E/t51.2885-15/e35/s320x320/69122606_511655879392394_3301552035478794855_n.jpg" alt="" /></div>
                            <div><img className="w-100" src="https://scontent.cdnsnapwidget.com/vp/5828cef16cafdbc22168aef6d3bbc832/5E3937BF/t51.2885-15/e35/s320x320/68664807_176661040122236_2394840165104772818_n.jpg" alt="" /></div>
                           
                        </div>
                        <div className='col-6'>
                            <h1>Welcome to Philadelphia Cycle Center</h1>
                            <div>
                                <a className='text-decoration-none' href="#"><span className='icons'><BsFacebook></BsFacebook></span>FaceBook</a>
                                <a className='text-decoration-none' href="#"><span className='icons icon'><AiFillInstagram></AiFillInstagram></span>Instagram</a>
                            </div>
                            <p>Philly Cycle has been serving the Delaware Valley SINCE 1985. We are a factory authorized dealer for Honda, Kawasaki and Suzuki. We recently received commendation from Suzuki for placing as one of the top 50 dealers in the nation. Our accessory department carries all top name brands, such as Shoei, Arai, HJC, Fulmer and THH, at discounted prices. Our service department has factory certified technicians. Browse through our web-site or give us a call. We will be happy to answer your questions, or hear your suggestions. "Come Ride With Us". </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <h1>Suzuki Care</h1>
                    <div className='svg-photo'>
                        <div className='border p-5'>
                            <img className='w-100' src="https://2d5cd3.hostroomcdn.com/wp-content/uploads/2020/02/finance.svg" alt="" />
                            <h1>
                                Suzuki Finance
                            </h1>
                            <p>A finance experience for your Suzuki lifestyle. Flexible, hassle-free solutions tailored to your needs. On the road today, financial freedom tomorrow.</p>
                        </div>
                        <div className='border p-5'>
                            <img className='w-100' src="https://2d5cd3.hostroomcdn.com/wp-content/uploads/2020/02/insurance.svg" alt="" />
                            <h1>Suzuki Insurance
                            </h1>
                            <p>Protection for every rider, and every motorcycle. Competitive insurance for your needs on or off-road, at the right price. Gear up with peace of mind.</p>
                        </div>
                        <div className='border p-5'>
                            <img className='w-100' src="https://2d5cd3.hostroomcdn.com/wp-content/uploads/2020/02/roadside.svg" alt="" />
                            <h1>
                                Roadside Assistance
                            </h1>
                            <p>No matter where you are, no matter when. Roadside assistance from the people who know you and know your Suzuki. Support for when you need it the most.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;