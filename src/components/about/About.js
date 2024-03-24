import React from 'react'
import { ReactComponent as Grid } from "../../assets/grid.svg"
import { ReactComponent as Layout } from "../../assets/layout.svg"
import { ReactComponent as Monitor } from "../../assets/monitor.svg"
import AboutBgImg from "../../assets/dashboard.png"
import './about.css'
function About() {
  return (
    <>
      <section id='about' className='container section'>
        <div className='d-block m-auto w-100  lg-w-50 mb-3'>
          <h2 className='text-center'>About Us</h2>
          <p className='text-grey text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, non eveniet impedit nostrum perspiciatis aspernatur quaerat. </p>
        </div>
        <div className='row mt-5'>
          <div className='col-lg-4'>
            <h2 className='fw-normal mb-4 lh-base'>Productive & Customizable For <span className='fw-medium'>Developers</span></h2>
            <p className='text-grey mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea facilis maxime soluta fuga perferendis eveniet mollitia nostrum quas.</p>
            <div>
              <div className='d-flex align-items-center my-3 '>
                <Grid className='me-2' />
                <p className='mb-0 text-grey fs-7'>Marketing program activities</p>

              </div>
              <div className='d-flex align-items-center my-3'>
                <Layout className='me-2' />
                <p className='mb-0 text-grey fs-7'>Customization product</p>

              </div>
              <div className='d-flex align-items-center my-3'>
                <Monitor className='me-2' />
                <p className='mb-0 text-grey fs-7'>At vero eos accusamus iusto</p>
              </div>
              <div >
                <a className='text-decoration-none fs-7  text-primary' style={{ width: "max-content" }} href="/">More Information <span><i className="bi bi-arrow-right"></i></span></a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 mt-5 mt-lg-0'>
            <div className='bg-color-1 p-6 rounded'>
              <img className='w-100' src={AboutBgImg} alt="" />
            </div>
            <p className='text-uppercase fs-8 text-grey my-2 '>Development</p>
            <h5 className='fs-9 '>Product Development</h5>
            <p className='text-grey'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero delectus repudiandae, a architecto omnis .</p>
            <div >
              <a className='text-decoration-none fs-7  text-primary' style={{ width: "max-content" }} href="/">Read More <span><i className="bi bi-arrow-right"></i></span></a>
            </div>
          </div>
          <div className='col-lg-4 mt-5 mt-lg-0'>
            <div className='bg-color-2 p-6 rounded'>
              <img className='w-100' src={AboutBgImg} alt="" />
            </div>
            <p className='text-uppercase fs-8 text-grey my-2 '>MARKETING</p>
            <h5 className='fs-9 '>Marketing Product</h5>
            <p className='text-grey'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero delectus repudiandae, a architecto omnis .</p>
            <div >
              <a className='text-decoration-none fs-7  text-primary' style={{ width: "max-content" }} href="/">Read More <span><i className="bi bi-arrow-right"></i></span></a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About