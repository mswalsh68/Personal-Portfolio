import '../styles.css'
import { Link } from 'react-router-dom'
import Pic1 from '../assets/62043_1472598410706_529663_n.jpg'
import Pic2 from '../assets/94259057_10158030239975210_413679872582352896_n.jpg'
import Pic3 from '../assets/IMG_4500.jpg'


export default function Home() {
  return (
    <div className='main-body'>
      <h1>
        Welcome to my portfolio home page!
      </h1>
      <p>
        Here, you will find out about who I am.
      </p>
      <p>
        There are links to projects I have worked on, my resume, and a contact form to reach out to me.
      </p>
      <p>
        This page will constantly be updated with new things I have done along the way. 
      </p>
      <p>
        Like what you see? Feel free to head over to the <Link to='/Contact'>Contact</Link> page and reach out to me.
      </p>

    <div className="wrapper">
      <img className='homeImages'src={Pic3}></img>
      <img className='homeImages' src={Pic1} ></img>
      <img className='homeImages'src={Pic2}></img>
    </div>
      

    </div>
  )
}
