import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div>
    <h1>404, page could not be found</h1>
    <p>Please try another page or go back to the <Link to="/">home page</Link></p>
  </div>
)

export default NotFoundPage
