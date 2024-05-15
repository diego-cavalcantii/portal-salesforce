import { Form, Layout, Footer } from "../../components";
import { Astros, Photos } from "../../components/Imgs";
import { BlueButton } from "../../styles/Button";
import { FontBlack } from "../../styles/GlobalStyles";
import { CardFormsElement, Historys, PageForm, CardHistory } from "./Formulario.style";
import { TituloElement, SessaoElement, TituloForms } from "../../styles/style";

export default function Formulario() {
    return (
        <Layout>
            <PageForm>
                <TituloForms>Construa o seu amanhã agora! Preencha nosso formulário e comece  a moldar o futuro que você deseja.</TituloForms>
                <Form />
                <CardFormsElement>
                    <FontBlack>O Formulário nos ajuda a recolher informações prévias para que o seu atendimento seja o mais preciso e personalizado possível. </FontBlack>
                    <img src={Astros.astroCont} alt="imagen ilustrativa do astro com telefone" />
                </CardFormsElement>
                <CardFormsElement>
                    <FontBlack>Assim que as informações forem preenchidas, uma equipe preparada ira entrar em contato. Pronto para dar mais um passo rumo ao sucesso ?</FontBlack>
                    <img src={Photos.einstenProf} alt="imagem ilustrativa do personagem Einstein ensina" />
                </CardFormsElement>
                <SessaoElement>
                    <Historys>
                        <TituloElement>Caso ainda esteja em dúvida, veja aqui, histórias de grandes empresas que possam te motivar.</TituloElement>
                        <CardHistory>
                            <img src={Astros.astroAudi} alt="imagem do astro com a marca Audi" />
                            <div>
                                <BlueButton>História</BlueButton>
                            </div>
                        </CardHistory>
                        <CardHistory>
                            <img src={Astros.astroaMahindra} alt="imagem do astro com a marca Mahindra" />
                            <div>
                                <BlueButton>História</BlueButton>
                            </div>
                        </CardHistory>
                    </Historys>
                </SessaoElement>
            </PageForm>
            <Footer />
        </Layout>
    )
}