import React from 'react'
import HomeImg from "../../assets/home.png"
import "./home.css"
function Home() {
    return (
        <>
            <section id='home' className='section position-relative overflow-hidden'>
                <div className='container '>

                    <div className='row align-items-center '>
                        <div className='col-lg-6'>
                            <div className='mb-4'>
                                <h1 className='title  mt-5 mt-lg-0 mb-4'>Create Amazing Landing Page With <span className='text-primary'>Nody</span></h1>
                                <p className='text-grey'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nihil, dignissimos mollitia molestias voluptas eius at sed. </p>
                            </div>
                            <div className="input-group ">
                                <input type="text" className="form-control" placeholder="Enter Your Email..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary btn-primary text-white px-3" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                        <div className='col-lg-6 '>
                            <div className='home-img '>
                                <img src={HomeImg}  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home