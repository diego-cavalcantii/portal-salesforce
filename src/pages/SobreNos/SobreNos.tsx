import { Header, Sessao, Titulo } from "../../components";
import { Photos } from "../../components/Photos";
import "./SobreNos.css";
import { Footer } from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";


export default function SobreNos() {


  return (
    <Layout>
      <div className="gap">

        <div className="sessoes">
          <Titulo>Olá, Me chamo Astro! <br />
            Estou aqui para ser seu guia na Salesforce. <br />
            Preparado para essa aventura?</Titulo>
          <div className="astro">
            <img src={Photos.bgAstro} alt="Personagem astro dando as boas vindas " />
          </div>
        </div>


        <div className="card-guia">
          <div className="padding">
            <h3>Primeiro, eu preciso te apresentar o que é um CRM</h3>
            <span className="pzinho">O CRM, ou Customer Relationship Management, é um software estratégico como um ponto centralizado para armazenar dados valiosos, como histórico de compras, preferências e feedbacks dos clientes.
              <br />
              Ele é o intermédio perfeito para aproximar a empresa ao cliente.</span>
          </div>
          <img src={Photos.crm} alt="foto explicativa sobre o crm " />
        </div>


        <div className="sessoes reverse">
          <Titulo>quem somos?</Titulo>
          <div className="img-responsivo">
            <img src={Photos.howUs} alt="Personagens Astro e Einsten mostrando a Salesforce" />
          </div>
        </div>

        <div className="card-guia reverse">
          <div className="padding ">
            <span className="pzinho">A Salesforce é uma gigante no mundo do software, famosa por criar soluções avançadas de CRM (Customer Relationship Management), que ajudam empresas a gerenciar e aprimorar seus relacionamentos com clientes. </span>
          </div>
          <img src={Photos.astroSales} alt="Personagem astro mostrando o logo da salesforce" />
        </div>



        <div className="sessoes">
          <Titulo>trailblazers</Titulo>
          <div className="img-responsivo">
            <img src={Photos.bgTrailblazers} alt="Personagens Astro e Einsten mostrando a Salesforce" />
          </div>
        </div>

        <div className="card-guia">
          <div className="padding">
            <span className="pzinho">Trailblazers na Salesforce são líderes inovadores que inspiram na plataforma, destacando-se por explorar novos caminhos, compartilhar conhecimento e construir uma comunidade colaborativa e dinâmica.</span>
          </div>
          <img src={Photos.astroTrailblazer} alt="Personagem Astro mostrando o logo da salesforce" />
        </div>


        <div className="sessoes reverse">
          <Titulo>Agora, vou te passar coordenadas
            para ter uma viagem mais certeira.</Titulo>
          <div className="img-responsivo">
            <img src={Photos.astroGuia} alt="Personagem Astro com um cajado de madeira " />
          </div>
        </div>


        <div className="cards-info">

          <div className="card-info">
            <span className="pzinho">Cardápio de Produtos que a Salesforce oferece</span>
            <div className="img-info">
              <img src={Photos.pageProd} alt="print informativo sobre a pagina produtos" />
            </div>
          </div>
          <div className="card-info">
            <span>Essa seção destaca como as ferramentas da Salesforce são eficazes em desafios específicos de cada indústria.</span>
            <div className="img-info">
              <img src={Photos.pageIndus} alt="print informativo sobre a pagina industria" />
            </div>
          </div>
          <div className="card-info">
            <span>A plataforma interativa da Salesforce visa auxiliar usuários a aprender sobre os produtos, desenvolver habilidades práticas e obter certificações.</span>
            <div className="img-info">
              <img src={Photos.pageApren} alt="print informativo sobre a pagina aprendizado" />
            </div>
          </div>
          <div className="card-info">
            <span>Fornece recursos e informações para ajudar os usuários a resolverem problemas, obterem assistência técnica e acessarem recursos de suporte.</span>
            <div className="img-info">
              <img src={Photos.pageSupo} alt="print informativo sobre a pagina suporte" />
            </div>
          </div>
          <div className="card-info">
            <span>Todas as informações sobre a Salesforce</span>
            <div className="img-info">
              <img src={Photos.pageEmpre} alt="print informativo sobre a pagina empresa" />
            </div>
          </div>

        </div>

        <div className="sessoes off-gap">
          <Titulo>Agora você esta oficialmente preparado para seguir viagem e aproveitar o mundo da Salesforce.</Titulo>
          <div >
            <img src={Photos.caracterSales} alt="Personagens da Salesforce comemorando" />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}