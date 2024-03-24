import React, { useEffect } from 'react'
import featureImg1 from "../../assets/feature.png"
import featureImg2 from "../../assets/feature2.png"
import featureImg3 from "../../assets/feature3.png"

import './feature.css'
function Feature() {
    const handleImage = (value)=>{
        const image = document.getElementById("show-image");
       if(image && value === 1){
           image.innerHTML = `<img className='w-100' style="width:100%" src=${featureImg2} alt="" />` 
        }else if (image && value === 2){
            image.innerHTML = `<img className='w-100' style="width:100%" src=${featureImg3} alt="" />` 
        }else{
           image.innerHTML = `<img className='w-100' style="width:100%" src=${featureImg1} alt="" />`
       }
    }

    useEffect(()=>{
        handleImage()
    },[])

    return (
        <>
            <section id='feature' className='container section'>
                <div className='d-block m-auto w-100 lg-w-50 mb-3'>
                    <h2 className='text-center'>Our Features</h2>
                    <p className='text-grey text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, non eveniet impedit nostrum perspiciatis aspernatur quaerat. </p>
                </div>
                <div className='row flex-column-reverse flex-lg-row  align-items-center justify-content-between mt-5'>
                    <div id="show-image" className='col-lg-6'></div>
                    <div className='col-lg-5'>
                        <div className='card-shadow w-100 p-3 mb-3 rounded ' style={{cursor:"pointer"}} onClick={() => handleImage(0)}>
                            <div className="card-body">
                                <h6 className="card-title fs-7 fw-medium text-black  mb-2 ">Works With Existing Apps</h6>
                                <p className="card-text  text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div >
                                    <a className='text-decoration-none text-primary' style={{ width: "max-content" }} href="/">More Information <span><i className="bi bi-arrow-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='card-shadow w-100 p-3 mb-3 rounded' style={{cursor:"pointer"}} onClick={() => handleImage(1)}>
                            <div className="card-body">
                                <h6 className="card-title fs-7 fw-medium text-black  mb-2 ">Easy Email Marketing</h6>
                                <p className="card-text  text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div >
                                    <a className='text-decoration-none text-primary' style={{ width: "max-content" }} href="/">More Information <span><i className="bi bi-arrow-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='card-shadow w-100 p-3 mb-3 rounded' style={{cursor:"pointer"}} onClick={() => handleImage(2)}>
                            <div className="card-body">
                                <h6 className="card-title fs-7 fw-medium text-black  mb-2 ">Get Private Customers Feedback</h6>
                                <p className="card-text  text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div >
                                    <a className='text-decoration-none text-primary' style={{ width: "max-content" }} href="/">More Information <span><i className="bi bi-arrow-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature