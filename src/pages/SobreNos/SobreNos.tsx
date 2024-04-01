import { Link } from "react-router-dom";
import { Sessao, Titulo, Footer, Layout, Button } from "../../components";
import { Photos } from "../../components/Photos";
import { FontBlack } from "../../styles/GlobalStyles";
import { SectionCardGuia, ContainerGap, ExplaningCrm, ImgResposivoElement, SectionCardsInfo, CardInfo, AstroElement } from "./SobreNos.style";


export default function SobreNos() {


  return (
    <Layout>
      <ContainerGap>

        <Sessao variant="section-guia " >
          <Titulo>Olá, Me chamo Astro! <br />
            Estou aqui para ser seu guia na Salesforce. <br />
            Preparado para essa aventura?</Titulo>
          <AstroElement>
            <img src={Photos.bgAstro} alt="Personagem astro dando as boas vindas " />
          </AstroElement>
        </Sessao>


        <SectionCardGuia>
          <ExplaningCrm>
            <h3>Primeiro, eu preciso te apresentar o que é um CRM</h3>
            <span className="pzinho">O CRM, ou Customer Relationship Management, é um software estratégico como um ponto centralizado para armazenar dados valiosos, como histórico de compras, preferências e feedbacks dos clientes.
              <br />
              Ele é o intermédio perfeito para aproximar a empresa ao cliente.</span>
          </ExplaningCrm>
          <img src={Photos.crm} alt="foto explicativa sobre o crm " />
        </SectionCardGuia>


        <Sessao variant="section-guia reverse">
          <Titulo>quem somos?</Titulo>
          <ImgResposivoElement>
            <img src={Photos.howUs} alt="Personagens Astro e Einsten mostrando a Salesforce" />
          </ImgResposivoElement>
        </Sessao>

        <SectionCardGuia>
          <ExplaningCrm>
            <FontBlack>A Salesforce é uma gigante no mundo do software, famosa por criar soluções avançadas de CRM (Customer Relationship Management), que ajudam empresas a gerenciar e aprimorar seus relacionamentos com clientes. </FontBlack>
          </ExplaningCrm>
          <img src={Photos.astroSales} alt="Personagem astro mostrando o logo da salesforce" />
        </SectionCardGuia>



        <Sessao variant="section-guia ">
          <Titulo>trailblazers</Titulo>
          <ImgResposivoElement>
            <img src={Photos.bgTrailblazers} alt="Personagens Astro e Einsten mostrando a Salesforce" />
          </ImgResposivoElement>
        </Sessao>

        <SectionCardGuia>
          <ExplaningCrm>
            <FontBlack>Trailblazers na Salesforce são líderes inovadores que inspiram na plataforma, destacando-se por explorar novos caminhos, compartilhar conhecimento e construir uma comunidade colaborativa e dinâmica.</FontBlack>
          </ExplaningCrm>
          <img src={Photos.astroTrailblazer} alt="Personagem Astro mostrando o logo da salesforce" />
        </SectionCardGuia>


        <Sessao variant="section-guia reverse">
          <Titulo>Agora, vou te passar coordenadas
            para ter uma viagem mais certeira.</Titulo>
          <ImgResposivoElement>
            <img src={Photos.astroGuia} alt="Personagem Astro com um cajado de madeira " />
          </ImgResposivoElement>
        </Sessao>


        <SectionCardsInfo>

          <CardInfo>
            <FontBlack>Cardápio de Produtos que a Salesforce oferece</FontBlack>
            <div>
              <img src={Photos.pageProd} alt="print informativo sobre a pagina produtos" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Essa seção destaca como as ferramentas da Salesforce são eficazes em desafios específicos de cada indústria.</FontBlack>
            <div>
              <img src={Photos.pageIndus} alt="print informativo sobre a pagina industria" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>A plataforma interativa da Salesforce visa auxiliar usuários a aprender sobre os produtos, desenvolver habilidades práticas e obter certificações.</FontBlack>
            <div>
              <img src={Photos.pageApren} alt="print informativo sobre a pagina aprendizado" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Fornece recursos e informações para ajudar os usuários a resolverem problemas, obterem assistência técnica e acessarem recursos de suporte.</FontBlack>
            <div>
              <img src={Photos.pageSupo} alt="print informativo sobre a pagina suporte" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Todas as informações sobre a Salesforce</FontBlack>
            <div>
              <img src={Photos.pageEmpre} alt="print informativo sobre a pagina empresa" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Neste sub-menu você pode encontrar maneiras de melhorar sua navegação, como um modo Noturno ou aumentar e diminuir a fonte. </FontBlack>
            <div>
              <img src={Photos.subMenu} alt="print informativo sobre o submenu" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Neste botão você consegue ativar o Astro, onde ele ira te guiar dentro do site para ter uma melhor experiência</FontBlack>
            <div>
              <img src={Photos.buttonAstro} alt="print informativo sobre o botão para ativar o astro" />
            </div>
          </CardInfo>
          <CardInfo>
            <FontBlack>Aqui você tem acesso ao nosso formulário, que é o intermédio para pergamos algumas informações suas para nos ajudar a te atender melhor</FontBlack>
            <div>
              <img src={Photos.buttonForm} alt="print informativo sobre o botão do formulario" />
            </div>
          </CardInfo>

        </SectionCardsInfo>

        <Sessao variant="section-guia">
          <Titulo>Agora você esta oficialmente preparado para seguir viagem e aproveitar o mundo da Salesforce.</Titulo>
          <div>
            <img src={Photos.caracterSales} alt="Personagens da Salesforce comemorando" />
          </div>
        </Sessao>
        <Link to={"/"} >
          <Button variant="blue">Começar a Viagem</Button>
        </Link>
      </ContainerGap>
      <Footer />
    </Layout>
  )
}