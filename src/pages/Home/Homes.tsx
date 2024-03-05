import "./Home.css";
import { Header } from "../../components/Header/Header";
import { Body } from "../../components/Body/Body";
import {Footer} from "../../components/Footer/Footer";
import { Sessao,Titulo,SubTitulo,Artigo,Card,Link,Button } from "../../components";
import { Photos } from "../../components/Photos";

export default function Home(){

    return (
      <>
        <Header/>
        <Body>
        <div className="container">
        <section className="sectionAdver">
            <h1>Experimente o Salesforce Starter Suite gratuitamente.</h1>
            <p>Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. Não é necessário cartão de crédito.</p>
            <div>
              <Button variant="blue">Inicie teste gratuito</Button>
              <Button variant="white-blue">Assista à demo</Button>
            </div>
            <img src={Photos.imgMarket} alt="imagem do salesforce starter suiter" />
        </section>
      <Sessao>  
        <Titulo>O que há de novo na Salesforce?</Titulo>
        <Artigo>
          <Card>
            <img src={Photos.imgMarket} alt="imagem do salesforce starter suiter" />
            <SubTitulo>Conheça o Salesforce Starter: o pacote de CRM simples e poderoso.</SubTitulo>
            <Link>Conheça agora</Link>
          </Card>
          <Card>
            <img src={Photos.findIa} alt="imagem sobre a ia da salesforce" />
            <SubTitulo>Encontre uma solução de IA adaptada às suas necessidades de negócios.</SubTitulo>
            <Link>Crie seu próprio Customer 360</Link>
          </Card>
          <Card>
            <img src={Photos.appGuide} alt="imagem sobre o app guide" />
            <SubTitulo>Expanda sua pequena empresa com um CRM projetado para você.</SubTitulo>
            <Link>Explore a solução</Link>
          </Card>
        </Artigo>
      </Sessao>
      <Sessao>
        <Titulo>Saiba como o Salesforce ajuda você a trabalhar de maneira mais inteligente e a crescer com mais rapidez.</Titulo>
        <Artigo>
          <Card variant="small-card">
            <img src={Photos.pequenasEmpresas} alt="foto ilustrativa sobre o nicho pequenas empresas" />
            <SubTitulo variant="small-subtitulo">Pequenas Empresas</SubTitulo>
            <p>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.</p>
            <Link variant="small-link">Assistir a demo</Link>
          </Card>
          <Card variant="small-card">
            <img src={Photos.vendas} alt="oto ilustrativa sobre o nicho vendas " />
            <SubTitulo variant="small-subtitulo">Vendas</SubTitulo>
            <p>Feche mais negócios e acelere o crescimento com o CRM nº1.</p>
            <Link variant="small-link">Assistir a demo</Link>
          </Card>
          <Card variant="small-card">
            <img src={Photos.atendimento} alt="foto ilustrativa sobre o nicho atendimento " />
            <SubTitulo variant="small-subtitulo">Atendimento</SubTitulo>
            <p>Gaste menos com serviços escaláveis que os clientes adoram.</p>
            <Link variant="small-link">Assistir a demo</Link>
          </Card>
          <Card variant="small-card">
            <img src={Photos.todosProdutos} alt="foto ilustrativa sobre todos os produtos  " />
            <SubTitulo variant="small-subtitulo">Todos os Produtos</SubTitulo>
            <p>Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato.</p>
            <Link variant="small-link">Assistir a demo</Link>
          </Card>
        </Artigo>
      </Sessao>
      <Sessao>
        <Titulo>Veja como os clientes da Salesforce se tornam empresas clientes.</Titulo>
        <Artigo>
          <Card variant="card-industry">
            <img className="logo-industrias" src={Photos.logoSumup} alt="logo sumup" />
            <SubTitulo>Sumup</SubTitulo>
            <p>Indústria</p>
            <span>Serviços Financeiros</span>
            <Link>Veja a história</Link>
          </Card>
          <Card variant="card-industry">
            <img className="logo-industrias" src={Photos.logoGympass} alt="logo Gympass" />
            <SubTitulo>Sumup</SubTitulo>
            <p>Indústria</p>
            <span>Saúde</span>
            <Link>Veja a história</Link>
          </Card>
          <Card variant="card-industry">
            <img className="logo-industrias" src={Photos.logoVipal} alt="logo Vipal" />
            <SubTitulo>Sumup</SubTitulo>
            <p>Indústria</p>
            <span>Manufatura</span>
            <Link>Veja a história</Link>
          </Card>
          <Card variant="card-industry">
            <img className="logo-industrias" src={Photos.logoTigre} alt="logo Tigre" />
            <SubTitulo>Sumup</SubTitulo>
            <p>Indústria</p>
            <span>Construção civil</span>
            <Link>Veja a história</Link>
          </Card>
        </Artigo>
      </Sessao>
      <Sessao>
          <div className="wrappen">
            <Titulo>Encontre inovações para qualquer setor de indústria.</Titulo>
            <p>Seja qual for a sua indústria, oferecemos soluções para modernizar o seu negócio, economizar tempo e reduzir custos.</p>
            <Button variant="white-blue">Veja todas as indústrias</Button>
          </div>
        <Artigo variant="ball-artigo">
          <div>
            <Card variant="ball-card">
              <img src={Photos.financeiro} alt="" />
            </Card>
            <p>Serviços Financeiros</p>
          </div>
          <div>
            <Card variant="ball-card">
              <img src={Photos.varejo} alt="" />
            </Card>
            <p>Varejo</p>
          </div>
          <div>
            <Card variant="ball-card">
              <img src={Photos.saude} alt="" />
            </Card>
            <p>Saúde e Ciências da Vida</p>
          </div>
          <div>
            <Card variant="ball-card">
              <img src={Photos.manufatura} alt="" />
            </Card>
            <p>Manufatura</p>
          </div>
        </Artigo>
      </Sessao>
      </div>
      <img className="bg" src={Photos.bgRosa} alt="" />
      <div className="container">
        <Sessao>
          <Titulo>Todo tipo de conteúdo. Tudo para te ajudar a crescer.</Titulo>
          <Artigo>
            <div className="whats-crm">
              <Titulo>O que é CRM?</Titulo>
              <p>Aprenda tudo sobre o CRM, como unificar todas as suas equipes e como impulsionar o crescimento e a produtividade em toda a sua empresa.</p>
              <Button variant="white-blue">Saiba mais</Button>
              <img src={Photos.whatsCRM} alt="" />
            </div>
          </Artigo>
        </Sessao>
        <Sessao>
          <Artigo>
            <Card>
              <img src={Photos.imgRelatório} alt="" />
              <span>Relatório</span>
              <SubTitulo variant="sublime-titulo">Leia nosso último relatório da Pesquisa State of Sales.</SubTitulo>
              <p>Saiba como mais de 7.700 profissionais de vendas estão obtendo sucesso imediato.</p>
              <Link>Leia o relatório</Link>
            </Card>
            <Card>
              <img src={Photos.astroBlog} alt="" />
              <span>Blog</span>
              <SubTitulo variant="sublime-titulo">Conheça o Blog da Salesforce.</SubTitulo>
              <p>Notícias e percepções para impulsionar a transformação de seus negócios.</p>
              <Link>Saiba mais</Link>
            </Card>
            <Card>
              <img src={Photos.blogSalesforce} alt="" />
              <span>Webinar</span>
              <SubTitulo variant="sublime-titulo">Salesforce e inter: Faça mais com menos.</SubTitulo>
              <p>Aprenda como conectar os dados do cliente para impulsionar a eficiência do marketing.</p>
              <Link>Participe do webinar</Link>
            </Card>
          </Artigo>
        </Sessao>
        <Sessao>
          <Titulo>Participe de eventos virtuais da Salesforce. Agora a inspiração vem até você.</Titulo>
          <Artigo>
            <Card>
              <img src={Photos.eventos} alt="" />
              <SubTitulo>Mergulhe em paixão, aprendizado e conhecimento.</SubTitulo>
              <Link>Explore os eventos</Link>
            </Card>
            <Card>
              <img src={Photos.customer} alt="" />
              <SubTitulo>Aprenda tudo sobre o Customer 360 em workshops práticos.</SubTitulo>
              <Link>Confira nossos workshops (Inglês)</Link>
            </Card>
            <Card>
              <img src={Photos.webinars} alt="" />
              <SubTitulo>Descubra como impulsionar o crescimento com o Salesforce gratuitamente.</SubTitulo>
              <Link>Assista os Webinars</Link>
            </Card>
          </Artigo>
        </Sessao>
        <Sessao>
          <div className="wrappen">
            <Titulo>Aprenda habilidades valiosas gratuitamente com o Trailhead.</Titulo>
            <p>Siga os caminhos de aprendizado guiados e aprenda na prática as habilidades interpessoais, digitais e do Salesforce de qualquer lugar.</p>
          </div>
          <Artigo>
            <Card>
              <img src={Photos.iconeCalen} alt="" />
              <SubTitulo>Noções básicas de inteligência artificial</SubTitulo>
              <p>Aprenda as noções básicas de IA e a tecnologia por trás dos seus recursos incríveis.</p>
              <Link>Comece a aprender</Link>
            </Card>
            <Card>
              <img src={Photos.iconeCell} alt="" />
              <SubTitulo>Noções básicas do Salesforce Einstein</SubTitulo>
              <p>Descubra insights e preveja resultados com esse avançado conjunto de recursos aprimorados de IA.</p>
              <Link>Comece a aprender</Link>
            </Card>
            <Card>
              <img src={Photos.iconeMedalha} alt="" />
              <SubTitulo>IA generativa do Einstein: início rápido</SubTitulo>
              <p>Descubra como a IA generativa e o Einstein estão transformando o futuro do trabalho.</p>
              <Link>Comece a aprender</Link>
            </Card>
          </Artigo>
        </Sessao>
        
        <Sessao>
          <div className="wrappen">
            <Titulo>Experimente o Salesforce gratuitamente. Não é necessário cartão de crédito nem instalação de software.</Titulo>
            <Button variant="blue">Comece o teste gratuito</Button>
            <img src={Photos.freeTest} alt="" />
          </div>
        </Sessao>
        <Sessao>
          <Card variant="big-card">
            <Titulo>Perguntas? Vamos colocá-lo no caminho certo.</Titulo>
            <Button variant="blue">Entre em contato</Button>
            <img src={Photos.imgQuests} alt="" />
          </Card>
        </Sessao>
        <Sessao>
          <Titulo>Encontre aplicativos e experiência para estender o Salesforce.</Titulo>
          <Artigo>
            <Card>
              <img src={Photos.appExchange} alt="" />
              <SubTitulo>O que é AppExchange?</SubTitulo>
              <Link>Descubra o AppExchange (inglês)</Link>
            </Card>
            <Card>
              <img src={Photos.allApps} alt="" />
              <SubTitulo>Encontre todos os apps</SubTitulo>
              <Link>Explore todos os apps (Inglês)</Link>
            </Card>
            <Card>
              <img src={Photos.consultor} alt="" />
              <SubTitulo>Obtenha orientação especializada.</SubTitulo>
              <Link>Encontre consultores (inglês)</Link>
            </Card>
          </Artigo>
        </Sessao>
        <Sessao>
          <Card variant="big-card">
            <Titulo>Perguntas? Te colocamos no caminho correto.</Titulo>
            <Button variant="blue">Entre em contato</Button>
            <img src={Photos.imgQuests} alt="" />
          </Card>
        </Sessao>
      </div>
        </Body>
        <Footer/>
      </>
    )
}