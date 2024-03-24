import React from 'react'
import lastestProject1 from "../../assets/project6.jpg"
import lastestProject2 from "../../assets/project5.jpg"
import lastestProject3 from "../../assets/project4.jpg"
import lastestProject4 from "../../assets/project3.jpg"
import lastestProject5 from "../../assets/project2.jpg"
import lastestProject6 from "../../assets/project1.jpg"
function Projects() {
  return (
    <section id='project' className='container section'>
      <div className='d-block m-auto w-100 lg-w-50 mb-3'>
        <h2 className='text-center'>Our Latest Project</h2>
        <p className='text-grey text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, non eveniet impedit nostrum perspiciatis aspernatur quaerat. </p>
      </div>
      <div className='row mt-5'>
        <div className='col-12 col-md-6 mb-md-4 col-lg-4 ' >
          <img src={lastestProject1} className='w-100 rounded' alt="" />
          <div className='pl-3 pt-3'>
            <h4 className='fs-7'>Professional Designer</h4>
            <p className='text-grey fs-6 '>UI/UX Designer</p>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-md-4 col-lg-4' >
          <img src={lastestProject2} className='w-100 rounded' alt="" />
          <div className='pl-3 pt-3'>
            <h4 className='fs-7'>Product Designer</h4>
            <p className='text-grey fs-6 '>Web Designer</p>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-md-4 col-lg-4' >
          <img src={lastestProject3} className='w-100 rounded' alt="" />
          <div className='pl-3 pt-3'>
            <h4 className='fs-7'>Design Development</h4>
            <p className='text-grey fs-6 '>PHP Developer</p>
          </div>
        </div>


        <div className='col-12 col-md-6 mb-md-4 col-lg-4' >
          <img src={lastestProject4} className='w-100 rounded' alt="" />
          <div className='pl-3 pt-3'>
            <h4 className='fs-7'>Product Designer</h4>
            <p className='text-grey fs-6 '>React Developer</p>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-md-4 col-lg-4' >
          <img src={lastestProject5} className='w-100 rounded' alt="" />
          <div className='pl-3 pt-3'>
            <h4 className='fs-7'>Design Development</h4>
            <p className='text-grey fs-6 '>UI/UX Designer</p>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-md-4 col-lg-4' >
          <img src={lastestProject6} className='w-100 rounded' alt="" />
          <div className='pl-3 pt-3'>
            <h4 className='fs-7'>Graphic Development</h4>
            <p className='text-grey fs-6 '>Web Designer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects