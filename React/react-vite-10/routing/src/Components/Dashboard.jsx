import React from 'react'
import { Outlet } from 'react-router-dom'

const dashboard = () => {
  return (
    <div>
      Dashboard Page
      <Outlet/>
    </div>
  )
}

export default dashboard
