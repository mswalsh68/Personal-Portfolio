import '../styles.css'
import { Link } from "react-router-dom"


export default function Card({website, title, coverImg, description, github }) {
  return (

    <div className="card">
        <p><b>{title}</b></p>
            <Link href={website} target="_blank">
                <img className="cardImg blur" src={coverImg} />
            </Link>
            <p className='content fade'><b>{description}</b></p>
            <Link to={github} target='_blank'>GitHub Link</ Link>

    </div>
  )
}
