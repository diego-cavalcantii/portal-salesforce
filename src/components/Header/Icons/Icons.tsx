import { Photos } from "../../Photos";
import { GlobeElement, IconesElemet, UserElement } from "./Icons.style";



export const Icons = () => {
  return (
    <IconesElemet>
      <img src={Photos.lupa} alt="icone lupa"></img>
      <GlobeElement src={Photos.globe} alt="icone globe"></GlobeElement>
      <UserElement>
        <img src={Photos.user}></img>
        <p>Login</p>
      </UserElement>
    </IconesElemet>
  )
}

