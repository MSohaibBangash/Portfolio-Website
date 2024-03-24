import React from 'react'
import headSet  from "../../assets/headset.png";
import sheild  from "../../assets/shield.png";
import lock  from "../../assets/lock.png";
import './service.css'
function Services() {
    return (
        <>
            <section id='service' className='container section'>
                <div className='d-block m-auto w-100  lg-w-50 mb-3'>
                    <h2 className='text-center'>Our Services</h2>
                    <p className='text-grey text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, non eveniet impedit nostrum perspiciatis aspernatur quaerat. </p>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-4 mb-4 lg-mb-0'>
                        <div className="card service-card transition-all">
                            <div className='service-bg-img d-block m-auto my-3'>
                            <img src={headSet} className="card-image w-100 p-4 " alt="..." />
                            </div>
                            <div className="card-body">
                                <h6 className="card-title fs-7 fw-medium text-black text-center mb-2 ">Awesome Support</h6>
                                <p className="card-text text-center text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div >
                                   <a className='d-block m-auto text-decoration-none  more-info' style={{width:"max-content"}} href="">More <span><i className="bi bi-arrow-right"></i></span></a>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-4 lg-mb-0'>
                        <div className="card service-card transition-all">
                            <div className='service-bg-img d-block m-auto my-3'>
                            <img src={sheild} className="card-image w-100 p-4 " alt="..." />
                            </div>
                            <div className="card-body">
                                <h6 className="card-title fs-7 fw-medium text-black text-center mb-2 ">Analytics Security</h6>
                                <p className="card-text text-center text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div >
                                   <a className='d-block m-auto text-decoration-none  more-info' style={{width:"max-content"}} href="">More <span><i className="bi bi-arrow-right"></i></span></a>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-4 lg-mb-0'>
                        <div className="card service-card transition-all">
                            <div className='service-bg-img d-block m-auto my-3'>
                            <img src={lock} className="card-image w-100 p-4 " alt="..." />
                            </div>
                            <div className="card-body">
                                <h6 className="card-title fs-7 fw-medium text-black text-center mb-2 ">Data Privacy</h6>
                                <p className="card-text text-center text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div >
                                   <a className='d-block m-auto text-decoration-none  more-info' style={{width:"max-content"}} href="">More <span><i className="bi bi-arrow-right"></i></span></a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services