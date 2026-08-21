import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>Smart Stock Insights, Powered by AI. Analyze historical trends, evaluate market performance, and preview data-backed price predictions to make smarter, faster financial moves.</p>
                <Button text="Login" class="btn-info"></Button>
            </div>
        </div>    
    </>
  )
}

export default Main