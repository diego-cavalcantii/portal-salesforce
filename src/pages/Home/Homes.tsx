import { useState } from "react";
import styled from "styled-components";
import { Sessao, Titulo, SubTitulo, Card, Links, Button, Article, Footer, Layout, ContainerAstro } from "../../components";
import { Photos } from "../../components/Photos";
import { BgElement, BubleElement, ContainerElement, GridSection, GridWhatsCrm, WrappenElement } from "./Home.style";

const ImageElement = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px;
  border-radius: 10px;
  border: 3px solid darkblue;

  & p {
    text-decoration: none;
  }
  &>div {
    width: 50%;
    display: flex;
    align-items: center;
  }

  & div img {
    filter: drop-shadow(3px 3px 3px #222);
  object-fit: contain;
  padding: 5px;
  }

  @media(min-width:375px){
  background-color:rgba(0,0,0,0.9);

  & p {
    color: #f5f5f5;
  }
  }

  @media(min-width:1200px){
  background-color:rgba(0,0,0,0.1);

  & p {
    color: #000;
  }
  }
`

const ButtonAstro = styled.button`
  border-radius: 4px;
  font-weight: 700;
  border: none;
  background-color: rgb(1 118 211);
  color: white;
  padding: 16px 42px;
  margin-left: 80px;
  cursor: pointer;
`

export default function Home() {

  const [showImages, setShowImages] = useState(false)

  return (
    <Layout>
      <ButtonAstro onClick={() => setShowImages(!showImages)}>{!showImages ? 'Ativar Astro' : 'Desativar Astro'}</ButtonAstro>
      <ContainerElement>
        <GridSection>
          <Titulo variant="titulo-left">Experimente o Salesforce Starter Suite gratuitamente.</Titulo>
          <p>Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. Não é necessário cartão de crédito.</p>
          <div>
            <Button variant="blue">Inicie teste gratuito</Button>
            <Button variant="white-blue">Assista à demo</Button>
          </div>
          <img src={Photos.imgMarket} alt="imagem do salesforce starter suiter" />
        </GridSection>
        <Sessao>
          <Titulo>O que há de novo na Salesforce?</Titulo>
          <Article>
            <Card>
              <img src={Photos.imgMarket} alt="imagem do salesforce starter suiter" />
              <SubTitulo>Conheça o Salesforce Starter: o pacote de CRM simples e poderoso.</SubTitulo>
              <Links>Conheça agora</Links>
            </Card>
            <Card>
              <img src={Photos.findIa} alt="imagem sobre a ia da salesforce" />
              <SubTitulo>Encontre uma solução de IA adaptada às suas necessidades de negócios.</SubTitulo>
              <Links>Crie seu próprio Customer 360</Links>
            </Card>
            <Card>
              <img src={Photos.appGuide} alt="imagem sobre o app guide" />
              <SubTitulo>Expanda sua pequena empresa com um CRM projetado para você.</SubTitulo>
              <Links>Explore a solução</Links>
            </Card>
          </Article>
        </Sessao>
        <Sessao variant="section">
          <Titulo>Saiba como o Salesforce ajuda você a trabalhar de maneira mais inteligente e a crescer com mais rapidez.</Titulo>
          <Article>
            <Card variant="small-card">
              <img src={Photos.pequenasEmpresas} alt="foto ilustrativa sobre o nicho pequenas empresas" />
              <SubTitulo variant="small-subtitulo">Pequenas Empresas</SubTitulo>
              <p>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.</p>
              <Links variant="small-link">Assistir a demo</Links>
            </Card>
            <Card variant="small-card">
              <img src={Photos.vendas} alt="oto ilustrativa sobre o nicho vendas " />
              <SubTitulo variant="small-subtitulo">Vendas</SubTitulo>
              <p>Feche mais negócios e acelere o crescimento com o CRM nº1.</p>
              <Links variant="small-link">Assistir a demo</Links>
            </Card>
            <Card variant="small-card">
              <img src={Photos.atendimento} alt="foto ilustrativa sobre o nicho atendimento " />
              <SubTitulo variant="small-subtitulo">Atendimento</SubTitulo>
              <p>Gaste menos com serviços escaláveis que os clientes adoram.</p>
              <Links variant="small-link">Assistir a demo</Links>
            </Card>
            <Card variant="small-card">
              <img src={Photos.todosProdutos} alt="foto ilustrativa sobre todos os produtos  " />
              <SubTitulo variant="small-subtitulo">Todos os Produtos</SubTitulo>
              <p>Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato.</p>
              <Links variant="small-link">Assistir a demo</Links>
            </Card>
          </Article>
          <ContainerAstro variant="left">
            <a href="https://www.salesforce.com/br/products/#products-scroll-tab" target="_blank">
              {showImages &&
                <ImageElement>
                  <p>Essa é a sessão dos nossos produtos, clique no Astro para conhece-los! </p>
                  <div>
                    <img src={Photos.astroGuia}></img>
                  </div>
                </ImageElement>
              }
            </a>
          </ContainerAstro>
        </Sessao>
        <Sessao variant="section">
          <Titulo>Veja como os clientes da Salesforce se tornam empresas clientes.</Titulo>
          <Article>
            <Card variant="card-industry">
              <img className="logo-industrias" src={Photos.logoSumup} alt="logo sumup" />
              <SubTitulo>Sumup</SubTitulo>
              <p>Indústria</p>
              <p>Serviços Financeiros</p>
              <Links>Veja a história</Links>
            </Card>
            <Card variant="card-industry">
              <img className="logo-industrias" src={Photos.logoGympass} alt="logo Gympass" />
              <SubTitulo>Sumup</SubTitulo>
              <p>Indústria</p>
              <p>Saúde</p>
              <Links>Veja a história</Links>
            </Card>
            <Card variant="card-industry">
              <img className="logo-industrias" src={Photos.logoVipal} alt="logo Vipal" />
              <SubTitulo>Sumup</SubTitulo>
              <p>Indústria</p>
              <p>Manufatura</p>
              <Links>Veja a história</Links>
            </Card>
            <Card variant="card-industry">
              <img className="logo-industrias" src={Photos.logoTigre} alt="logo Tigre" />
              <SubTitulo>Sumup</SubTitulo>
              <p>Indústria</p>
              <p>Construção civil</p>
              <Links>Veja a história</Links>
            </Card>
          </Article>
          <ContainerAstro variant="right">
            <a href="https://www.salesforce.com/br/customer-success-stories/#!page=1" target="_blank">
              {showImages &&
                <ImageElement>
                  <div>
                    <img src={Photos.astroGuia}></img>
                  </div>
                  <p>Esses são os nossos clientes, para conhecer mais clique no Astro!</p>
                </ImageElement>
              }
            </a>
          </ContainerAstro>
        </Sessao>
        <Sessao>
          <WrappenElement>
            <Titulo>Encontre inovações para qualquer setor de indústria.</Titulo>
            <p>Seja qual for a sua indústria, oferecemos soluções para modernizar o seu negócio, economizar tempo e reduzir custos.</p>
            <Button variant="white-blue">Veja todas as indústrias</Button>
          </WrappenElement>
          <Article variant="ball-article">
            <div>
              <Card variant="ball-card">
                <img src={Photos.financeiro} alt="icone sobre financeiro" />
              </Card>
              <p>Serviços Financeiros</p>
            </div>
            <div>
              <Card variant="ball-card">
                <img src={Photos.varejo} alt="icone sobre varejo" />
              </Card>
              <p>Varejo</p>
            </div>
            <div>
              <Card variant="ball-card">
                <img src={Photos.saude} alt="icone sobre saude" />
              </Card>
              <p>Saúde e Ciências da Vida</p>
            </div>
            <div>
              <Card variant="ball-card">
                <img src={Photos.manufatura} alt="icone sobre manufatura" />
              </Card>
              <p>Manufatura</p>
            </div>
          </Article>
          <ContainerAstro variant="left">
            <a href="https://www.salesforce.com/br/editions-pricing/overview/" target="_blank">
              {showImages &&
                <ImageElement>
                  <p>Quer saber mais sobre todas as nossas edições e preços para sua indústria ? <br />  Clique no Astro!</p>
                  <div>
                    <img src={Photos.astroGuia} alt="imagem do Astro Guia"></img>
                  </div>
                </ImageElement>
              }
            </a>
          </ContainerAstro>
        </Sessao>
      </ContainerElement>
      <BgElement src={Photos.bgRosa} alt="background rosa" />
      <ContainerElement>
        <Sessao>
          <Titulo>Todo tipo de conteúdo. Tudo para te ajudar a crescer.</Titulo>
          <Article>
            <GridWhatsCrm>
              <Titulo>O que é CRM?</Titulo>
              <p>Aprenda tudo sobre o CRM, como unificar todas as suas equipes e como impulsionar o crescimento e a produtividade em toda a sua empresa.</p>
              <Button variant="white-blue">Saiba mais</Button>
              <img src={Photos.whatsCRM} alt="imagem ilustrativa do que é crm" />
            </GridWhatsCrm>
          </Article>
        </Sessao>
        <Sessao>
          <Article>
            <Card>
              <img src={Photos.imgRelatório} alt="imagem ilustrativa sobre relatório da Salesforce" />
              <BubleElement>Relatório</BubleElement>
              <SubTitulo variant="sublime-titulo">Leia nosso último relatório da Pesquisa State of Sales.</SubTitulo>
              <p>Saiba como mais de 7.700 profissionais de vendas estão obtendo sucesso imediato.</p>
              <Links>Leia o relatório</Links>
            </Card>
            <Card>
              <img src={Photos.astroBlog} alt="Imagem ilustrativa do Astro no Blog" />
              <BubleElement>Blog</BubleElement>
              <SubTitulo variant="sublime-titulo">Conheça o Blog da Salesforce.</SubTitulo>
              <p>Notícias e percepções para impulsionar a transformação de seus negócios.</p>
              <Links>Saiba mais</Links>
            </Card>
            <Card>
              <img src={Photos.blogSalesforce} alt="Imagem ilustrativa do Blog da Salesforce" />
              <BubleElement>Webinar</BubleElement>
              <SubTitulo variant="sublime-titulo">Salesforce e inter: Faça mais com menos.</SubTitulo>
              <p>Aprenda como conectar os dados do cliente para impulsionar a eficiência do marketing.</p>
              <Links>Participe do webinar</Links>
            </Card>
          </Article>
        </Sessao>
        <Sessao>
          <Titulo>Participe de eventos virtuais da Salesforce. Agora a inspiração vem até você.</Titulo>
          <Article>
            <Card>
              <img src={Photos.eventos} alt="imagem ilustrativa sobre eventos na salesforce" />
              <SubTitulo>Mergulhe em paixão, aprendizado e conhecimento.</SubTitulo>
              <Links>Explore os eventos</Links>
            </Card>
            <Card>
              <img src={Photos.customer} alt="imagem sobre o customer da Salesforce" />
              <SubTitulo>Aprenda tudo sobre o Customer 360 em workshops práticos.</SubTitulo>
              <Links>Confira nossos workshops (Inglês)</Links>
            </Card>
            <Card>
              <img src={Photos.webinars} alt="Imagem sobre o Webinars" />
              <SubTitulo>Descubra como impulsionar o crescimento com o Salesforce gratuitamente.</SubTitulo>
              <Links>Assista os Webinars</Links>
            </Card>
          </Article>
        </Sessao>
        <Sessao>
          <WrappenElement>
            <Titulo>Aprenda habilidades valiosas gratuitamente com o Trailhead.</Titulo>
            <p>Siga os caminhos de aprendizado guiados e aprenda na prática as habilidades interpessoais, digitais e do Salesforce de qualquer lugar.</p>
          </WrappenElement>
          <Article>
            <Card>
              <img src={Photos.iconeCalen} alt="icone de calendario" />
              <SubTitulo>Noções básicas de inteligência artificial</SubTitulo>
              <p>Aprenda as noções básicas de IA e a tecnologia por trás dos seus recursos incríveis.</p>
              <Links>Comece a aprender</Links>
            </Card>
            <Card>
              <img src={Photos.iconeCell} alt="icone de celular" />
              <SubTitulo>Noções básicas do Salesforce Einstein</SubTitulo>
              <p>Descubra insights e preveja resultados com esse avançado conjunto de recursos aprimorados de IA.</p>
              <Links>Comece a aprender</Links>
            </Card>
            <Card>
              <img src={Photos.iconeMedalha} alt="icone de medalha" />
              <SubTitulo>IA generativa do Einstein: início rápido</SubTitulo>
              <p>Descubra como a IA generativa e o Einstein estão transformando o futuro do trabalho.</p>
              <Links>Comece a aprender</Links>
            </Card>
          </Article>
        </Sessao>

        <Sessao>
          <WrappenElement>
            <Titulo>Experimente o Salesforce gratuitamente. Não é necessário cartão de crédito nem instalação de software.</Titulo>
            <Button variant="blue">Comece o teste gratuito</Button>
            <img src={Photos.freeTest} alt="imagem sobre o teste gratis da salesforce" />
          </WrappenElement>
          <ContainerAstro variant="right">
            <a href="https://trailhead.salesforce.com/pt-BR/trails" target="_blank">
              {showImages &&
                <ImageElement>
                  <div>
                    <img src={Photos.astroGuia}></img>
                  </div>
                  <p>Antes de fazer o teste, conheça nossos caminhos de aprendizado guiado, compostos por modulos e projetos, clicando no Astro!</p>
                </ImageElement>
              }
            </a>
          </ContainerAstro>
        </Sessao>
        <Sessao>
          <Card variant="big-card">
            <Titulo>Perguntas? Vamos colocá-lo no caminho certo.</Titulo>
            <Button variant="blue">Entre em contato</Button>
            <img src={Photos.imgQuests} alt="imagem sobre perguntas para Salesforce" />
          </Card>
        </Sessao>
        <Sessao>
          <Titulo>Encontre aplicativos e experiência para estender o Salesforce.</Titulo>
          <Article>
            <Card>
              <img src={Photos.appExchange} alt="imagem da mascote appy" />
              <SubTitulo>O que é AppExchange?</SubTitulo>
              <Links>Descubra o AppExchange (inglês)</Links>
            </Card>
            <Card>
              <img src={Photos.allApps} alt="imagem ilustrativa sobre todos os apps" />
              <SubTitulo>Encontre todos os apps</SubTitulo>
              <Links>Explore todos os apps (Inglês)</Links>
            </Card>
            <Card>
              <img src={Photos.consultor} alt="imagem de um consultor" />
              <SubTitulo>Obtenha orientação especializada.</SubTitulo>
              <Links>Encontre consultores (inglês)</Links>
            </Card>
          </Article>
        </Sessao>
        <Sessao>
          <Card variant="big-card">
            <Titulo>Perguntas? Te colocamos no caminho correto.</Titulo>
            <Button variant="blue">Entre em contato</Button>
            <img src={Photos.imgQuests} alt="imagem sobre perguntas para Salesforce" />
          </Card>
        </Sessao>
      </ContainerElement>
      <Footer />
    </Layout>
  )
}