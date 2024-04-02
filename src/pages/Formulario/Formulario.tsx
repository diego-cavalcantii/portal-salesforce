import { Titulo, Form, Sessao, Button, Article, CardForms, Layout, Footer } from "../../components";
import { Astros, Photos } from "../../components/Imgs";
import { FontBlack } from "../../styles/GlobalStyles";
import { Historys, PageForm } from "./Formulario.style";

export default function Formulario() {
    return (
        <Layout>
            <PageForm>
                <Article variant="row-article">
                    <Titulo>Construa o seu amanhã agora! Preencha nosso formulário e comece  a moldar o futuro que você deseja.</Titulo>
                </Article>
                <Form />
                <CardForms>
                    <FontBlack>O Formulário nos ajuda a recolher informações prévias para que o seu atendimento seja o mais preciso e personalizado possível. </FontBlack>
                    <img src={Astros.astroCont} alt="imagen ilustrativa do astro com telefone" />
                </CardForms>
                <CardForms>
                    <FontBlack>Assim que as informações forem preenchidas, uma equipe preparada ira entrar em contato. Pronto para dar mais um passo rumo ao sucesso ?</FontBlack>
                    <img src={Photos.einstenProf} alt="imagem ilustrativa do personagem Einstein ensina" />
                </CardForms>
                <Sessao>
                    <Historys>
                        <Titulo>Caso ainda esteja em dúvida, veja aqui, histórias de grandes empresas que possam te motivar.</Titulo>
                        <CardForms variant="card-history">
                            <img src={Astros.astroAudi} alt="imagem do astro com a marca Audi" />
                            <div>
                                <Button variant="blue">História</Button>
                            </div>
                        </CardForms>
                        <CardForms variant="card-history">
                            <img src={Astros.astroaMahindra} alt="imagem do astro com a marca Mahindra" />
                            <div>
                                <Button variant="blue">História</Button>
                            </div>
                        </CardForms>
                    </Historys>
                </Sessao>
            </PageForm>
            <Footer />
        </Layout>
    )
}