import { Icones } from "../../Imgs";
import { GlobeElement, IconesElemet, UserElement } from "./Icons.style";



export const Icons = () => {
  return (
    <IconesElemet>
      <img src={Icones.lupa} alt="icone lupa"></img>
      <GlobeElement src={Icones.globe} alt="icone globe"></GlobeElement>
      <UserElement>
        <img src={Icones.user}></img>
        <p>Login</p>
      </UserElement>
    </IconesElemet>
  )
}

