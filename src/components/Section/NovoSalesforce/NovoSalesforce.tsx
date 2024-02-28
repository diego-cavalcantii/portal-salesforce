import "./NovoSalesforce.css";
import imgMarket from "../../../img/market-salesforce.webp";
import findIa from "../../../img/find-ia.webp";
import appGuide from "../../../img/app-guide.webp";
import { Card } from "../../Card/Card";
import { SubTitulo } from "../../SubTitulo/SubTitulo";
import { Link } from "../../Link/Link";
import { Artigo } from "../../Artigo/Artigo";
import { Titulo } from "../../Titutlo/Titulo";
import { Sessao } from "../../Sessao/Sessao";

export const NovoSalesforce = () => {
  return (
    <Sessao>  
      <Titulo>O que há de novo na Salesforce ? </Titulo>
      <Artigo>
        <Card>
          <img className="img-article"src={imgMarket} alt="imagem do salesforce starter suiter" />
          <SubTitulo>Conheça o Salesforce Starter: o pacote de CRM simples e poderoso.</SubTitulo>
          <Link>Conheça agora</Link>
        </Card>
        <Card>
          <img className="img-article" src={findIa} alt="imagem sobre a ia da salesforce" />
          <SubTitulo>Encontre uma solução de IA adaptada às suas necessidades de negócios.</SubTitulo>
          <Link>Crie seu próprio Customer 360</Link>
        </Card>
        <Card>
          <img className="img-article" src={appGuide} alt="imagem sobre o app guide" />
          <SubTitulo>Expanda sua pequena empresa com um CRM projetado para você.</SubTitulo>
          <Link>Explore a solução</Link>
        </Card>
      </Artigo>
    </Sessao>
  )
}