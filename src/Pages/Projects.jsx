import '../styles.css'
import Card from '../Components/Card'
import ProjectsData from '../Data/ProjectsData'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



export default function Projects() {

  const featuredProjects = ProjectsData.map(item =>{
    return <Card 
    key={item.key}
    item={item}
    website={item.website}
    title={item.title}
    coverImg={item.coverImg}
    description={item.description}
    github={item.github}
    />
  })

  return (

    <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
    >


    <div className='main-body'>
      <h2>Projects Page</h2>
      <p>Click <Link target='blank' href="https://github.com/mswalsh68"> HERE </Link> to my Github account
      </p>

      <div className="wrapper">
          {featuredProjects}
        </div>


    </div>
    
    </motion.div>
  )
}
