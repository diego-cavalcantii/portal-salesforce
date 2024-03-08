import {  Titulo,Form, Sessao,Button, Article, CardForms } from "../../components";
import { Footer } from "../../components/Footer/Footer";
import { Photos } from "../../components/Photos";
import "./Formulario.css";

export default function Formulario(){
    return (
        <>
        <div className="page-form">
            <Article variant="row-article">
                <div>
                    <img src={Photos.logoSalesforce} alt="" />
                </div>
                <Titulo>Construa o seu amanhã agora! Preencha nosso formulário e comece  a moldar o futuro que você deseja.</Titulo>
            </Article>
            <Form>
                <img src={Photos.formTeste} alt="" />
            </Form>
            <CardForms>
                <p>O Formulário nos ajuda a recolher informações prévias para que o seu atendimento seja o mais preciso e personalizado possível. </p>
                <img src={Photos.astroCont} alt="" />
            </CardForms>
            <CardForms>
                <p>Assim que as informações forem preenchidas, uma equipe preparada ira entrar em contato. Pronto para dar mais um passo rumo ao sucesso ?</p>
                <img src={Photos.einstenProf} alt="" />
            </CardForms>
            <Sessao>
                <div className="section-history">
                <Titulo>Caso ainda esteja em dúvida, veja aqui, histórias de grandes empresas que possam te motivar.</Titulo>
                <CardForms variant="card-history">
                    <img src={Photos.astroAudi} alt="" />
                    <div>
                    <Button variant="blue">História</Button>
                    </div>
                </CardForms>
                <CardForms variant="card-history">
                    <img src={Photos.astroaMahindra} alt="" />
                    <div>
                    <Button variant="blue">História</Button>
                    </div>
                </CardForms>
                </div>
            </Sessao>
        </div>
        <Footer/>
        </>
    )
}