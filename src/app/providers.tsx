import React from 'react'
import {RouterProvider} from 'react-router-dom'
import { rootRoute } from './routes/rootRoute'

export const Providers = () => {
  return (
    <div className='bg-stone-950 text-gray-100 h-screen overflow-hidden'>
      <RouterProvider router={rootRoute}/>
    </div>
  )
}
