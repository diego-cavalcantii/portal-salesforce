import { Header, Titulo,Form, Sessao } from "../../components";
import { Photos } from "../../components/Photos";
import "./Formulario.css";

export default function Formulario(){
    return (
        <>
        <div className="page-form">
            <img src={Photos.logoSalesforce} alt="" />
            <Titulo>Construa o seu amanhã agora! Preencha nosso formulário e comece  a moldar o futuro que você deseja.</Titulo>
            <Form></Form>
            <div className="card-gray">
                <p>O Formulário nos ajuda a recolher informações prévias para que o seu atendimento seja o mais preciso e personalizado possível. </p>
                <img src={Photos.astroCont} alt="" />
            </div>
            <div className="card-gray">
                <p>Assim que as informações forem preenchidas, uma equipe preparada ira entrar em contato. Pronto para dar mais um passo rumo ao sucesso ?</p>
                <img src={Photos.einstenProf} alt="" />
            </div>
            <Sessao>
                <Titulo>Caso ainda esteja em dúvida, veja aqui, histórias de grandes empresas que possam te motivar.</Titulo>
                <div></div>
            </Sessao>
        </div>
        </>
    )
}