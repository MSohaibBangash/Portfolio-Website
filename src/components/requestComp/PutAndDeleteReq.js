import React from 'react'
import contactUs from "../../assets/contactUs.png"
import { useFormik } from 'formik'
import * as Yup from "yup"
import handlePutRequest from '../../services/handlePutRequest'
import handleDeleteRequest from '../../services/handleDeleteRequest'
function PutAndDeleteReq() {
    const validateYupSchema = Yup.object().shape({
        name: Yup.string().required("Name field is required"),
        email: Yup.string().required("Email Address field is required"),
        subject: Yup?.string().required('Subject field is required'),
        message: Yup?.string().required('Message is field is required')
    })
    const formik = useFormik({
        validationSchema: validateYupSchema,
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }, onSubmit: async (data) => {
            const response = await handlePutRequest("https://jsonplaceholder.typicode.com/posts/1", data);
            console.log(response)
        }
    })
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const handleDeleteData = async()=>{
       const response = await handleDeleteRequest('https://jsonplaceholder.typicode.com/posts/1')
       console.log(response)
    }

    return (
        <>
            <section id='contact' className='container section'>
                <div className='d-block m-auto w-100 lg-w-50 mb-3'>
                    <h2 className='text-center'>PUT REQUEST</h2>
                    <p className='text-grey text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, non eveniet impedit nostrum perspiciatis aspernatur quaerat. </p>
                </div>
                <div className='row mt-4 align-items-center justify-content-between '>
                    <div className='col-lg-6 text-center'>
                        <img src={contactUs} className='w-75' alt="" />
                        <h4 className='my-3'>Are You Facing Any Problem..?</h4>
                        <p className='text-grey my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, non eveniet impedit nostrum perspiciatis aspernatur quaerat.</p>
                        <div className='d-flex justify-content-center'>
                            <button className='btn chat-btn d-flex align-items-center  px-4 py-2'>
                                <span><i className="bi bi-chat fs-4 "></i></span>
                                <span className='ms-2'>Start Live Chat</span>
                            </button>
                        </div>
                        <p className='my-3'>Or you can contact at</p>
                        <div className='d-flex align-items-center justify-content-md-center justify-content-lg-between gap-5 '>
                            <p className='bg-color mb-0 py-1 px-3 rounded fs-8'><span>Email:</span> <span className='text-grey fs-10'>Youremailid@gmail.com</span></p>
                            <p className='bg-color mb-0 py-1 px-3 rounded fs-8'><span>phone:</span> <span className='text-grey fs-10'> (001) 1234 567 890</span></p>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <h5 className='mb-4 mt-5 fs-4 mt-lg-0'>Get in Touch</h5>
                        <div>
                            <form onSubmit={formik.handleSubmit} action="">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label className='' >Name</label>
                                        <input type="text" name='name' value={formik.values.name} className="form-control mt-1 p-2" placeholder='Enter Name...' onChange={formik.handleChange} />
                                        {getFormErrorMessage("name")}
                                    </div>
                                    <div className='col-md-6 mt-3 mt-md-0'>
                                        <label className='' >Email address</label>
                                        <input type="text" name='email' value={formik.values.email} className="form-control mt-1 p-2" placeholder='Enter Your Email...' onChange={formik.handleChange} />
                                        {getFormErrorMessage("email")}
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <label className='' >Subject</label>
                                    <input type="text" name='subject' value={formik.values.subject} className="form-control mt-1 p-2" placeholder='Enter Subject...' onChange={formik.handleChange} />
                                    {getFormErrorMessage("subject")}
                                </div>
                                <div className='my-3'>
                                    <label className='' >Message</label>
                                    <textarea rows={1} name='message' value={formik.values.message} className="form-control mt-1 p-2" placeholder='Enter Your Message...' onChange={formik.handleChange} />
                                    {getFormErrorMessage("message")}
                                </div>
                                <div className='flex align-items-center '>
                                    <button type='submit' className='form-btn px-4 mt-2 me-5 rounded'>Update</button>
                                    <button  className='form-btn px-4 mt-2 rounded' onClick={()=> handleDeleteData()} >Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PutAndDeleteReq