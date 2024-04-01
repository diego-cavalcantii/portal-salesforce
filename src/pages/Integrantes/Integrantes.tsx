import { Sessao, Footer, Titulo, Article } from "../../components";
import { Photos } from "../../components/Photos";
import { Layout } from "../../components/Layout/Layout";
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
                <p>Diego Cavalcanti <br /> RM - 553351</p>
              </div>
            </CaixaIntegrantesElement>
            <CaixaIntegrantesElement>
              <img src={Photos.imgMateus} alt="Foto Mateus" />
              <div>
                <p>Mateus Galeazi <br /> RM - 553352</p>
              </div>
            </CaixaIntegrantesElement>
            <CaixaIntegrantesElement>
              <img src={Photos.imgVitor} alt="Foto Vitor" />
              <div>
                <p>Vitor de Melo <br /> RM - 553483</p>
              </div>
            </CaixaIntegrantesElement>
          </IntegrantesElement>
        </Article>
      </Sessao>
      <Footer />
    </Layout>
  )
}