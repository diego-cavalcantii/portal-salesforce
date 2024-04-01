import { Titulo, Form, Sessao, Button, Article, CardForms } from "../../components";
import { Footer } from "../../components/Footer/Footer";
import { Photos } from "../../components/Photos";
import { Link } from "react-router-dom";
import "./Formulario.css";
import { Layout } from "../../components/Layout/Layout";
import { PageForm, SectionHistorys } from "./Formulario.styled";

export default function Formulario() {
    return (
        <Layout>
            <PageForm>
                <Article variant="row-article">
                    <div>
                        <Link to={"/"}><img src={Photos.logoSalesforce} alt="" /></Link>
                    </div>
                    <Titulo>Construa o seu amanhã agora! Preencha nosso formulário e comece  a moldar o futuro que você deseja.</Titulo>
                </Article>
                <Form />
                <CardForms>
                    <p>O Formulário nos ajuda a recolher informações prévias para que o seu atendimento seja o mais preciso e personalizado possível. </p>
                    <img src={Photos.astroCont} alt="" />
                </CardForms>
                <CardForms>
                    <p>Assim que as informações forem preenchidas, uma equipe preparada ira entrar em contato. Pronto para dar mais um passo rumo ao sucesso ?</p>
                    <img src={Photos.einstenProf} alt="" />
                </CardForms>
                <Sessao>
                    <SectionHistorys>
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
                    </SectionHistorys>
                </Sessao>
            </PageForm>
            <Footer />
        </Layout>
    )
}