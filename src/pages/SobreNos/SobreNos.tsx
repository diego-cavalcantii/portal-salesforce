import { Link } from "react-router-dom";
import { Footer, Layout } from "../../components";
import { Astros, Pages, Photos } from "../../components/Imgs";
import { FontBlack } from "../../styles/GlobalStyles";
import { SectionCardGuia, ContainerGap, ExplaningCrm, ImgResposivoElement, SectionCardsInfo, CardInfo, AstroElement, SeguirViagem } from "./SobreNos.style";
import { BlueButton, SessaoGuiaElement, TituloElement, SessaoGuiaReverseElement } from "../../styles/style";



export default function SobreNos() {


  return (
    <Layout>
      <ContainerGap>

        <SessaoGuiaElement>
          <TituloElement>Olá, Me chamo Astro! <br />
            Estou aqui para ser seu guia na Salesforce. <br />
            Preparado para essa aventura?</TituloElement>
          <AstroElement>
            <img src={Photos.bgAstro} alt="Personagem astro dando as boas vindas " />
          </AstroElement>
        </SessaoGuiaElement>


        <SectionCardGuia>
          <ExplaningCrm>
            <h3>Primeiro, eu preciso te apresentar o que é um CRM</h3>
            <span className="pzinho">O CRM, ou Customer Relationship Management, é um software estratégico como um ponto centralizado para armazenar dados valiosos, como histórico de compras, preferências e feedbacks dos clientes.
              <br />
              Ele é o intermédio perfeito para aproximar a empresa ao cliente.</span>
          </ExplaningCrm>
          <img src={Photos.crm} alt="foto explicativa sobre o crm " />
        </SectionCardGuia>


        <SessaoGuiaReverseElement>
          <TituloElement>quem somos?</TituloElement>
          <ImgResposivoElement>
            <img src={Photos.howUs} alt="Astro com o logo da Salesforce" />
          </ImgResposivoElement>
        </SessaoGuiaReverseElement>

        <SectionCardGuia>
          <ExplaningCrm>
            <FontBlack>A Salesforce é uma gigante no mundo do software, famosa por criar soluções avançadas de CRM (Customer Relationship Management), que ajudam empresas a gerenciar e aprimorar seus relacionamentos com clientes. </FontBlack>
          </ExplaningCrm>
          <img src={Astros.astroSalesforce} alt="Personagem astro mostrando o logo da salesforce" />
        </SectionCardGuia>



        <SessaoGuiaElement>
          <TituloElement>trailblazers</TituloElement>
          <ImgResposivoElement>
            <img src={Photos.bgTrailblazers} alt="Astro com a blusa dos Trailblazers" />
          </ImgResposivoElement>
        </SessaoGuiaElement>

        <SectionCardGuia>
          <ExplaningCrm>
            <FontBlack>Trailblazers na Salesforce são líderes inovadores que inspiram na plataforma, destacando-se por explorar novos caminhos, compartilhar conhecimento e construir uma comunidade colaborativa e dinâmica.</FontBlack>
          </ExplaningCrm>
          <img src={Astros.astroTrailblazer} alt="Astro com a blusa dos Trailblazers" />
        </SectionCardGuia>


        <SessaoGuiaReverseElement>
          <TituloElement>Agora, vou te passar coordenadas
            para ter uma viagem mais certeira.</TituloElement>
          <ImgResposivoElement>
            <img src={Astros.astroGuia} alt="Personagem Astro com um cajado de madeira " />
          </ImgResposivoElement>
        </SessaoGuiaReverseElement>


        <SectionCardsInfo>

          <CardInfo>
            <FontBlack>Cardápio de Produtos que a Salesforce oferece</FontBlack>
            <div>
              <img src={Pages.pageProd} alt="print informativo sobre a pagina produtos" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Essa seção destaca como as ferramentas da Salesforce são eficazes em desafios específicos de cada indústria.</FontBlack>
            <div>
              <img src={Pages.pageIndus} alt="print informativo sobre a pagina industria" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>A plataforma interativa da Salesforce visa auxiliar usuários a aprender sobre os produtos, desenvolver habilidades práticas e obter certificações.</FontBlack>
            <div>
              <img src={Pages.pageApren} alt="print informativo sobre a pagina aprendizado" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Fornece recursos e informações para ajudar os usuários a resolverem problemas, obterem assistência técnica e acessarem recursos de suporte.</FontBlack>
            <div>
              <img src={Pages.pageSupo} alt="print informativo sobre a pagina suporte" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Todas as informações sobre a Salesforce</FontBlack>
            <div>
              <img src={Pages.pageEmpre} alt="print informativo sobre a pagina empresa" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Neste sub-menu você pode encontrar maneiras de melhorar sua navegação, como um modo Noturno ou aumentar e diminuir a fonte. Você tambem tem acesso ao formulário que é o nosso intermédio para conseguirmos algumas informações para te atender melhor. </FontBlack>
            <div>
              <img src={Pages.subMenu} alt="print informativo sobre o submenu" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Neste botão você consegue ativar o Astro, onde ele ira te guiar dentro do site para ter uma melhor experiência.</FontBlack>
            <div>
              <img src={Pages.buttonAstro} alt="print informativo sobre o botão para ativar o astro" />
            </div>
          </CardInfo>
        </SectionCardsInfo>

        <SessaoGuiaElement>
          <TituloElement>Agora você esta oficialmente preparado para seguir viagem e aproveitar o mundo da Salesforce.</TituloElement>
          <div>
            <img src={Photos.caracterSales} alt="Personagens da Salesforce comemorando" />
          </div>
        </SessaoGuiaElement>
        <SeguirViagem>
          <Link to={"/"} >
            <BlueButton>Começar a Viagem</BlueButton>
          </Link>
        </SeguirViagem>
      </ContainerGap>
      <Footer />
    </Layout>
  )
}