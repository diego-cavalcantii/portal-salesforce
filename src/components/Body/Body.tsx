import "./Body.css";
import "../../styles/SectionAdver.css";
import { Sessao,Titulo,SubTitulo,Artigo,Card,Link,Button } from "..";
import { Photos } from "../Photos";



export const Body = () => {
  return (
    <body>
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

      </div>
    </body>

  )
}