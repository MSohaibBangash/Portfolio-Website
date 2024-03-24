import React from 'react'
import "./footer.css"
import footer_logo from "../../assets/footer_logo.png"
function Footer() {
    return (
        <section className='section  footer-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 text-white'>
                        <img src={footer_logo} className='mb-4' style={{ width: "35%" }} alt="" />
                        <p className='text-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda velit veritatis, eius tempora sequi dolore, aperiam blanditiis commodi perferendis </p>
                        <div className='d-flex align-items-center gap-2'>
                            <i className="bi bi-instagram fs-4"></i>
                            <p className='text-grey mb-0'>Join Us In Instagram</p>
                        </div>
                    </div>
                    <div className='offset-0 col-12 offset-lg-1 col-lg-7 mt-3 mt-lg-0'>
                        <div className='row '>
                            <div className='col-12 col-md-4'>
                                <h4 className='text-white fw-normal mb-3 '>Customer</h4>
                                <ul className='ps-0'>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Works</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Strategy</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Releases</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Press</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Mission</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className='col-12 col-md-4'>
                                <h4 className='text-white fw-normal mb-3'>Product</h4>
                                <ul className='ps-0'>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Trending</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Popular</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Customers</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Features</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-4'>
                                <h4 className='text-white fw-normal mb-3'>Learn More</h4>
                                <ul className='ps-0'>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Developers</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Support</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Customer Service</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Get Started</a>
                                    </li>
                                    <li className='list-group-item my-2'>
                                        <a className='text-grey fw-semibold text-decoration-none' href="">Guide</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer