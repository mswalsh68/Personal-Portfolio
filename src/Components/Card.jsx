import '../styles.css'
import { Link } from "react-router-dom"


export default function Card({website, title, coverImg, description, github }) {
  return (

    <div className="card">
        <a href={website} target="blank">
            <p><b>{title}</b></p>
            <img className="cardImg" src={coverImg} />
            </a>
            <p><b>{description}</b></p>
            <Link to={github} target='_blank'>GitHub Link</ Link>

    </div>
  )
}
