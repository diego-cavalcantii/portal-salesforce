import { Sessao, Footer, Titulo, Article, Layout } from "../../components";
import { Photos } from "../../components/Photos";
import { FontBlack } from "../../styles/GlobalStyles";
import { CaixaIntegrantesElement, IntegrantesElement } from "./Integrantes.style";

export default function Integrantes() {
  return (
    <Layout>
      <Sessao>
        <div>
          <Titulo>MAVIDI-SOLUTIONS</Titulo>
          <p>Integrantes</p>
        </div>
        <Article>
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
        </Article>
      </Sessao>
      <Footer />
    </Layout>
  )
}