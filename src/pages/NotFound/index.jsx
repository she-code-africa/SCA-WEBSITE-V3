import React from 'react'
import { Link } from 'react-router-dom'

function index() {
  return (
    <>
        <div className= "not-found">
            <div className="container mx-auto px-4">
                <div className="holder">
                    <div className="card">
				        <div className="img404"></div>
				        <h1 className="errorhead">ERROR 404</h1>
				        <p className="mb-[30px] text-[15px]">We can't seem to find the page you are looking for</p>
				        <Link to="/" className="error-btn">Back to Home Page</Link>
			        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default index