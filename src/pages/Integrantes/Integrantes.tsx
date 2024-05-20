import { Footer, Layout } from "../../components";
import { Icones, Photos } from "../../components/Imgs";
import { FontBlack } from "../../styles/GlobalStyles";
import { CaixaIntegrantesElement, ContainerLinkGitHub, IntegrantesElement, IntegrantesMain } from "./Integrantes.style";
import { TituloElement } from "../../styles/style";


export default function Integrantes() {



  return (
    <Layout>
      <IntegrantesMain>
        <div>
          <ContainerLinkGitHub>
            <TituloElement>MAVIDI-SOLUTIONS</TituloElement>
            <a href="https://github.com/diego-cavalcantii/portal-salesforce" target="blank">
              <img src={Icones.gitHub} alt="" />
            </a>
          </ContainerLinkGitHub>
          <p>Integrantes</p>
        </div>

        <IntegrantesElement>
          <CaixaIntegrantesElement>
            <img src={Photos.imgDiego} alt="Foto diego" />
            <div>
              <FontBlack>Diego Cavalcanti <br /> RM - 553351</FontBlack>
            </div>
          </CaixaIntegrantesElement>
          <CaixaIntegrantesElement>
            <img src={Photos.imgMateus} alt="Foto Mateus" />
            <div>
              <FontBlack>Mateus Galeazi <br /> RM - 553352</FontBlack>
            </div>
          </CaixaIntegrantesElement>
          <CaixaIntegrantesElement>
            <img src={Photos.imgVitor} alt="Foto Vitor" />
            <div>
              <FontBlack>Vitor de Melo <br /> RM - 553483</FontBlack>
            </div>
          </CaixaIntegrantesElement>
        </IntegrantesElement>
        <ContainerLinkGitHub>
          <a href="https://github.com/diego-cavalcantii/portal-salesforce" target="blank">
            Link do Repositorio do GitHub
          </a>
        </ContainerLinkGitHub>
      </IntegrantesMain>
      <Footer />
    </Layout>
  )
}