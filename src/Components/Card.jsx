import '../styles.css'
import { Link } from "react-router-dom"


export default function Card({website, title, coverImg, description, github }) {
  return (

    <div className="card">
        <Link to={website} target="blank">
            <p><b>{title}</b></p>
            <img className="cardImg" src={coverImg} />
        </Link>
        <p><b>{description}</b></p>
        <Link to={github} target='_blank'>GitHub Link</ Link>

    </div>
  )
}
