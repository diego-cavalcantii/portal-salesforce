import "./Integrantes.css";
import { Header, Sessao,Footer, Titulo, Article, SubTitulo, Card } from "../../components";
import { Photos } from "../../components/Photos";

export default function Integrantes(){
  return(
    <>
    <Header/>
    <Sessao>
      <div>
      <Titulo>MAVIDI-SOLUTIONS</Titulo>
      <p>Integrantes</p>
      </div>
      <Article>
        <div className="integrantes">
          <div className="caixa">
            <img src={Photos.imgDiego} alt="Foto diego" />
            <div>
              <p>Diego Cavalcanti <br /> RM - 553351</p>
            </div>
          </div>
          <div className="caixa">
            <img src={Photos.imgMateus} alt="Foto Mateus" />
            <div>
              <p>Mateus Galeazi <br/> RM - 553352</p>
            </div>
          </div>
          <div className="caixa">
            <img src={Photos.imgVitor} alt="Foto Vitor" />
            <div>
              <p>Vitor de Melo <br/> RM - 553483</p>
            </div>
          </div>
        </div>
      </Article>
    </Sessao>
    <Footer variant="fixo"/>
    </> 
  )
}