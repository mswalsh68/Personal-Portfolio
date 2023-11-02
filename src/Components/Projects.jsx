import React from 'react'
import '../styles.css'
import Card from './Card'
import ProjectsData from '../Data/ProjectsData'


export default function Projects() {

  const featuredProjects = ProjectsData.map(item =>{
    return <Card 
    key={item.key}
    item={item}
    />
  })

  return (
    <div className='main-body'>
      <h2>Projects Page</h2>
      <p>Click <a target='blank' href="https://github.com/mswalsh68"> HERE </a> to my Github account
      </p>

      <div className="wrapper">
          {featuredProjects}
        </div>


    </div>
  )
}
