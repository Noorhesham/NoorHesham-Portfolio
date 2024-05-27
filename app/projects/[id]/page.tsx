import { projects } from '@/data'
import React from 'react'

const page = ({params}:{params:any}) => {
    const project=projects.findIndex(p=>p.id===params.id)
    console.log(project)
  return (
    <div>
      
    </div>
  )
}

export default page
