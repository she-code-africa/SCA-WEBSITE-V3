import React from 'react'
import { Helmet } from "react-helmet";

import { Link } from 'react-router-dom'

function index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found</title>
        <meta
          name="description"
          content="We can't seem to find the page you are looking for"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="JOB OPPORTUNITIES" />
        <meta property="og:description" content="We can't seem to find the page you are looking for" />
        <meta name="twitter:title" content="JOB OPPORTUNITIES" />
        <meta name="twitter:description" content="We can't seem to find the page you are looking for" />
      </Helmet>
      <div className="not-found">
          <div className="container mx-auto px-4">
              <div className="holder">
                  <div className="card">
              <div className="img404"></div>
              <h1 className="errorhead">ERROR 404</h1>
              <p className="pb-4 text-[15px]">We can't seem to find the page you are looking for</p>
              <Link to="/" className="error-btn">Back to Home Page</Link>
            </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default index