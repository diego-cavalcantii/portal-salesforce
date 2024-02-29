import "./Icons.css";
import { Photos } from "../../Photos";



export const Icons = () => {
  return (
    <div className="icones">
      <img src={Photos.lupa}></img>
      <img className="globe" src={Photos.globe}></img>
      <div className="user">
        <img src={Photos.user}></img>
        <p>Login</p>
      </div>
    </div>
  )
}