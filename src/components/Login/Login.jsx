import React, { useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [apiError, setApiError] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    function handleRegister(values) {
    try{
      setLoading(true)
      console.log(values);
      navigate('/')
    } catch (err){
      console.log(err);
      setApiError(err);
      setLoading(false)
    }
    
  }
  let validationSchema = yup.object().shape({
    email: yup.string().email('Email Invalid, please write your correct email').required('Email is required, please enter your email'),
    password:yup.string().matches(/^[A-Z]\w{3,10}$/, 'Password invalid ex(Eman123)').required('Password is required'),
  })

  let formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema,
    onSubmit: handleRegister
  })


  return (
    <div>
      <h2 className='text-3xl font-semibold text-center md:pt-8 pb-4'>Login</h2>
      <hr/>
      <form onSubmit={formik.handleSubmit} className='w-1/2 mx-auto py-8'>
        {apiError && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {apiError}.
        </div>}

        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "/>
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email: </label>
        </div>
        {formik.errors.email && formik.touched.email &&
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.email}.
        </div>}
        <div className="relative z-0 w-full mb-5 group">
          <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "/>
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password: </label>
        </div>
        {formik.errors.password && formik.touched.password &&
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.password}.
        </div>}

          {loading? <button type="button" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
          <i className='fas fa-spinner fa-spin-pulse'></i>
        </button> : <button type="submit" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Login</button>
          }
      </form>
    </div>
  )
}

