import "./Body.css";
import "../../styles/SectionAdver.css";
import imgMarket from "../../assets/market-salesforce.webp";
import findIa from "../../assets/find-ia.webp";
import appGuide from "../../assets/app-guide.webp";
import pequenasEmpresas from "../../assets/pequenas-empresas.webp";
import vendas from "../../assets/vendas.webp";
import atendimento from "../../assets/atendimento.webp";
import todosProdutos from "../../assets/todos-os-produtos.webp";
import { Sessao,Titulo,SubTitulo,Artigo,Card,Link,Button } from "..";



export const Body = () => {
  return (
    <body className="container">
      <section className="sectionAdver">
          <h1>Experimente o Salesforce Starter Suite gratuitamente.</h1>
          <p>Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. Não é necessário cartão de crédito.</p>
          <div>
            <Button variant="blue">Inicie teste gratuito</Button>
            <Button variant="white-blue">Assista à demo</Button>
          </div>
          <img src={imgMarket} alt="imagem do salesforce starter suiter" />
      </section>
    <Sessao>  
      <Titulo>O que há de novo na Salesforce?</Titulo>
      <Artigo>
        <Card>
          <img src={imgMarket} alt="imagem do salesforce starter suiter" />
          <SubTitulo>Conheça o Salesforce Starter: o pacote de CRM simples e poderoso.</SubTitulo>
          <Link>Conheça agora</Link>
        </Card>
        <Card>
          <img src={findIa} alt="imagem sobre a ia da salesforce" />
          <SubTitulo>Encontre uma solução de IA adaptada às suas necessidades de negócios.</SubTitulo>
          <Link>Crie seu próprio Customer 360</Link>
        </Card>
        <Card>
          <img src={appGuide} alt="imagem sobre o app guide" />
          <SubTitulo>Expanda sua pequena empresa com um CRM projetado para você.</SubTitulo>
          <Link>Explore a solução</Link>
        </Card>
      </Artigo>
    </Sessao>
    <Sessao>
      <Titulo>Saiba como o Salesforce ajuda você a trabalhar de maneira mais inteligente e a crescer com mais rapidez.</Titulo>
      <Artigo>
        <Card variant="small-card">
          <img src={pequenasEmpresas} alt="foto ilustrativa sobre o nicho pequenas empresas" />
          <SubTitulo variant="small-subtitulo">Pequenas Empresas</SubTitulo>
          <p>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.</p>
          <Link variant="small-link">Assistir a demo</Link>
        </Card>
        <Card variant="small-card">
          <img src={vendas} alt="oto ilustrativa sobre o nicho vendas " />
          <SubTitulo variant="small-subtitulo">Vendas</SubTitulo>
          <p>Feche mais negócios e acelere o crescimento com o CRM nº1.</p>
          <Link variant="small-link">Assistir a demo</Link>
        </Card>
        <Card variant="small-card">
          <img src={atendimento} alt="foto ilustrativa sobre o nicho atendimento " />
          <SubTitulo variant="small-subtitulo">Atendimento</SubTitulo>
          <p>Gaste menos com serviços escaláveis que os clientes adoram.</p>
          <Link variant="small-link">Assistir a demo</Link>
        </Card>
        <Card variant="small-card">
          <img src={todosProdutos} alt="foto ilustrativa sobre todos os produtos  " />
          <SubTitulo variant="small-subtitulo">Todos os Produtos</SubTitulo>
          <p>Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato.</p>
          <Link variant="small-link">Assistir a demo</Link>
        </Card>
      </Artigo>
    </Sessao>
    </body>
  )
}