import "./Icons.css";
import globe from "../../../assets/globe.svg";
import user from "../../../assets/user.svg";
import lupa from "../../../assets/lupa.svg";



export const Icons = () => {
  return (
    <div className="icones">
      <img src={lupa}></img>
      <img className="globe" src={globe}></img>
      <div className="user">
        <img src={user}></img>
        <p>Login</p>
      </div>
    </div>
  )
}