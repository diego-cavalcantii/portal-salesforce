import { Footer, Layout } from "../../components";
import { Photos } from "../../components/Imgs";
import { FontBlack } from "../../styles/GlobalStyles";
import { CaixaIntegrantesElement, IntegrantesElement } from "./Integrantes.style";
import { TituloElement, SessaoElement, ArticleElement } from "../../styles/style";

export default function Integrantes() {
  return (
    <Layout>
      <SessaoElement>
        <div>
          <TituloElement>MAVIDI-SOLUTIONS</TituloElement>
          <p>Integrantes</p>
        </div>
        <ArticleElement>
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
        </ArticleElement>
      </SessaoElement>
      <Footer />
    </Layout>
  )
}