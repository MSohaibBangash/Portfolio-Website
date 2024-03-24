import React from "react";
import Slider from "react-slick";
import quotation from "../../assets/Quotation.png"
import boy from "../../assets/boy.jpg"
import girl from "../../assets/girl.jpg"
import "./testimonial.css"
function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:window.screen.width < 768 ? 2 : 3,
        slidesToScroll:window.screen.width < 768 ? 2 : 3 ,
    };

    return (
        <section id="testimonial" className='container section'>
            <div className='d-block m-auto w-100 lg-w-50 mb-3'>
                <h2 className='text-center'>What our Customer Says</h2>
                <p className='text-grey text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, non eveniet impedit nostrum perspiciatis aspernatur quaerat. </p>
            </div>

            <div className="mt-4">
                <Slider {...settings}>
                    <div>
                        <div className='card-shadow2 p-3 width-95 py-4 mb-3 rounded'>
                            <div className="card-body">
                                <img className="d-block m-auto mb-4" src={quotation} alt="" />
                                <p className="card-text text-center fs-6 text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <img className="rounded-circle d-block m-auto my-3" width={"50px"} height={"50px"} src={boy} alt="" />
                            <h4 className='fs-7 text-center'>Trent Bolt</h4>
                            <p className='text-grey fs-10 text-center'>Web Developer, Pakistan</p>
                        </div>
                    </div>
                    <div>
                        <div className='card-shadow2 p-3 width-95 py-4 mb-3 rounded'>
                            <div className="card-body">
                                <img className="d-block m-auto mb-4" src={quotation} alt="" />
                                <p className="card-text text-center fs-6 text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <img className="rounded-circle d-block m-auto my-3" width={"50px"} height={"50px"} src={girl} alt="" />
                            <h4 className='fs-7 text-center'>Sarah Khan</h4>
                            <p className='text-grey fs-10 text-center'>PHP Developer, USA</p>
                        </div>
                    </div>
                    <div>
                        <div className='card-shadow2 p-3 width-95 py-4 mb-3 rounded'>
                            <div className="card-body">
                                <img className="d-block m-auto mb-4" src={quotation} alt="" />
                                <p className="card-text text-center fs-6 text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <img className="rounded-circle d-block m-auto my-3" width={"50px"} height={"50px"} src={boy} alt="" />
                            <h4 className='fs-7 text-center'>John Lee </h4>
                            <p className='text-grey fs-10 text-center'>Graphic Designer, UAE</p>
                        </div>
                    </div>
                    <div>
                        <div className='card-shadow2 p-3 width-95 py-4 mb-3 rounded'>
                            <div className="card-body">
                                <img className="d-block m-auto mb-4" src={quotation} alt="" />
                                <p className="card-text text-center fs-6 text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <img className="rounded-circle d-block m-auto my-3" width={"50px"} height={"50px"} src={boy} alt="" />
                            <h4 className='fs-7 text-center'>Trent Bolt</h4>
                            <p className='text-grey fs-10 text-center'>Web Developer, Pakistan</p>
                        </div>
                    </div>
                    <div>
                        <div className='card-shadow2 p-3 width-95 py-4 mb-3 rounded'>
                            <div className="card-body">
                                <img className="d-block m-auto mb-4" src={quotation} alt="" />
                                <p className="card-text text-center fs-6 text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <img className="rounded-circle d-block m-auto my-3" width={"50px"} height={"50px"} src={girl} alt="" />
                            <h4 className='fs-7 text-center'>Sarah Khan</h4>
                            <p className='text-grey fs-10 text-center'>PHP Developer, USA</p>
                        </div>
                    </div>
                    <div>
                        <div className='card-shadow2 p-3 width-95 py-4 mb-3 rounded'>
                            <div className="card-body">
                                <img className="d-block m-auto mb-4" src={quotation} alt="" />
                                <p className="card-text text-center fs-6 text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <img className="rounded-circle d-block m-auto my-3" width={"50px"} height={"50px"} src={boy} alt="" />
                            <h4 className='fs-7 text-center'>John Lee </h4>
                            <p className='text-grey fs-10 text-center'>Graphic Designer, UAE</p>
                        </div>
                    </div>

                </Slider>
            </div>

        </section>
    )
}

export default Testimonial