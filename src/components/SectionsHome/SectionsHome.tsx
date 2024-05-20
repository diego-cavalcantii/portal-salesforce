import { useState, useEffect } from "react";
import { AstroComponent } from '../../components/index'
import { ContainerAstroElementLeft, ContainerAstroElementRight, CloseAstroElement } from "../../components/AstroComponent/AstroComponent.style";
import { Astros, Icones, Logos, Photos } from "../../components/Imgs";
import { BubleElement, ContainerElement, GridSection, GridWhatsCrm, WrappenElement } from "../../pages/Home/Home.style";
import { ArticleElement, ArticleElementBall, BallCard, BigCard, BlueButton, CardElement, CardIndustry, SmallCard, WhiteBlueButton, TituloElement, TituloLeft, SubTituloElement, SublimeTituloElement, SmallSubTituloElement, LinksElement, SmallLinksElement, SessaoElement, ButtonAstro } from "../../styles/style";
import { AstroData } from '../AstroComponent/AstroComponent';


interface ShowBoxesState {
  box1: boolean;
  box2: boolean;
  box3: boolean;
  box4: boolean;
}

interface SectionsHomeProps {
  children: React.ReactNode;
}

export const SectionsHome = ({ children }: SectionsHomeProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [astro, setAstro] = useState<AstroData[]>([]);
  const [showText, setShowText] = useState<boolean>(false);
  const [showImages, setShowImages] = useState<ShowBoxesState>({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
  });

  const allBoxesVisible = showImages.box1 && showImages.box2 && showImages.box3 && showImages.box4;

  const handleButtonClick = () => {
    setShowText(!showText);
    setShowImages({
      box1: !allBoxesVisible,
      box2: !allBoxesVisible,
      box3: !allBoxesVisible,
      box4: !allBoxesVisible,
    });
  };


  const handleCloseBox = (boxKey: keyof ShowBoxesState) => {
    setShowImages((prevShowBoxes) => ({
      ...prevShowBoxes,
      [boxKey]: false,
    }));
  };

  const getAstro = async () => {
    const url = "http://localhost:9090/astro";
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setAstro(data);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (astro.length) {
      return;
    }

    return () => {
      getAstro();
    };
  }, []);

  return (
    <>
      <ButtonAstro onClick={handleButtonClick}>{!showText ? 'Ativar Astro' : 'Desativar Astro'}</ButtonAstro>
      <ContainerElement>
        <GridSection>
          <TituloLeft>Experimente o Salesforce Starter Suite gratuitamente.</TituloLeft>
          <p>Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. Não é necessário cartão de crédito.</p>
          <div>
            <BlueButton>Inicie teste gratuito</BlueButton>
            <WhiteBlueButton>Assista à demo</WhiteBlueButton>
          </div>
          <img src={Photos.imgMarket} alt="imagem do salesforce starter suiter" />
        </GridSection>
        <SessaoElement>
          <TituloElement>O que há de novo na Salesforce?</TituloElement>
          <ArticleElement>
            <CardElement>
              <img src={Photos.imgMarket} alt="imagem do salesforce starter suiter" />
              <SubTituloElement>Conheça o Salesforce Starter: o pacote de CRM simples e poderoso.</SubTituloElement>
              <LinksElement>Conheça agora</LinksElement>
            </CardElement>
            <CardElement>
              <img src={Photos.findIa} alt="imagem sobre a ia da salesforce" />
              <SubTituloElement>Encontre uma solução de IA adaptada às suas necessidades de negócios.</SubTituloElement>
              <LinksElement>Crie seu próprio Customer 360</LinksElement>
            </CardElement>
            <CardElement>
              <img src={Photos.appGuide} alt="imagem sobre o app guide" />
              <SubTituloElement>Expanda sua pequena empresa com um CRM projetado para você.</SubTituloElement>
              <LinksElement>Explore a solução</LinksElement>
            </CardElement>
          </ArticleElement>
        </SessaoElement>
        <SessaoElement>
          <TituloElement>Saiba como o Salesforce ajuda você a trabalhar de maneira mais inteligente e a crescer com mais rapidez.</TituloElement>
          <ArticleElement>
            <SmallCard>
              <img src={Photos.pequenasEmpresas} alt="foto ilustrativa sobre o nicho pequenas empresas" />
              <SmallSubTituloElement>Pequenas Empresas</SmallSubTituloElement>
              <p>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.</p>
              <SmallLinksElement>Assistir a demo</SmallLinksElement>
            </SmallCard>
            <SmallCard>
              <img src={Photos.vendas} alt="oto ilustrativa sobre o nicho vendas " />
              <SmallSubTituloElement>Vendas</SmallSubTituloElement>
              <p>Feche mais negócios e acelere o crescimento com o CRM nº1.</p>
              <SmallLinksElement>Assistir a demo</SmallLinksElement>
            </SmallCard>
            <SmallCard>
              <img src={Photos.atendimento} alt="foto ilustrativa sobre o nicho atendimento " />
              <SmallSubTituloElement>Atendimento</SmallSubTituloElement>
              <p>Gaste menos com serviços escaláveis que os clientes adoram.</p>
              <SmallLinksElement>Assistir a demo</SmallLinksElement>
            </SmallCard>
            <SmallCard>
              <img src={Photos.todosProdutos} alt="foto ilustrativa sobre todos os produtos  " />
              <SmallSubTituloElement>Todos os Produtos</SmallSubTituloElement>
              <p>Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato.</p>
              <SmallLinksElement>Assistir a demo</SmallLinksElement>
            </SmallCard>
          </ArticleElement>
          {isLoading ? (
            <p>Carregando...</p>
          ) : (
            showImages.box1 &&
            <ContainerAstroElementLeft>
              <CloseAstroElement onClick={() => handleCloseBox('box1')}>X</CloseAstroElement>
              <AstroComponent data={astro} filterId={1} />
            </ContainerAstroElementLeft>
          )}
        </SessaoElement>
        <SessaoElement>
          <TituloElement>Veja como os clientes da Salesforce se tornam empresas clientes.</TituloElement>
          <ArticleElement>
            <CardIndustry>
              <img className="logo-industrias" src={Logos.logoSumup} alt="logo sumup" />
              <SubTituloElement>Sumup</SubTituloElement>
              <p>Indústria</p>
              <p>Serviços Financeiros</p>
              <LinksElement>Veja a história</LinksElement>
            </CardIndustry>
            <CardIndustry>
              <img className="logo-industrias" src={Logos.logoGympass} alt="logo Gympass" />
              <SubTituloElement>Sumup</SubTituloElement>
              <p>Indústria</p>
              <p>Saúde</p>
              <LinksElement>Veja a história</LinksElement>
            </CardIndustry>
            <CardIndustry>
              <img className="logo-industrias" src={Logos.logoVipal} alt="logo Vipal" />
              <SubTituloElement>Sumup</SubTituloElement>
              <p>Indústria</p>
              <p>Manufatura</p>
              <LinksElement>Veja a história</LinksElement>
            </CardIndustry>
            <CardIndustry>
              <img className="logo-industrias" src={Logos.logoTigre} alt="logo Tigre" />
              <SubTituloElement>Sumup</SubTituloElement>
              <p>Indústria</p>
              <p>Construção civil</p>
              <LinksElement>Veja a história</LinksElement>
            </CardIndustry>
          </ArticleElement>
          {isLoading ? (
            <p>Carregando</p>
          ) : (
            showImages.box2 &&
            <ContainerAstroElementRight>
              <CloseAstroElement onClick={() => handleCloseBox('box2')}>X</CloseAstroElement>
              <AstroComponent data={astro} filterId={2} />
            </ContainerAstroElementRight>
          )
          }
        </SessaoElement>
        <SessaoElement>
          <WrappenElement>
            <TituloElement>Encontre inovações para qualquer setor de indústria.</TituloElement>
            <p>Seja qual for a sua indústria, oferecemos soluções para modernizar o seu negócio, economizar tempo e reduzir custos.</p>
            <WhiteBlueButton>Veja todas as indústrias</WhiteBlueButton>
          </WrappenElement>
          <ArticleElementBall>
            <div>
              <BallCard>
                <img src={Photos.financeiro} alt="icone sobre financeiro" />
              </BallCard>
              <p>Serviços Financeiros</p>
            </div>
            <div>
              <BallCard>
                <img src={Photos.varejo} alt="icone sobre varejo" />
              </BallCard>
              <p>Varejo</p>
            </div>
            <div>
              <BallCard>
                <img src={Photos.saude} alt="icone sobre saude" />
              </BallCard>
              <p>Saúde e Ciências da Vida</p>
            </div>
            <div>
              <BallCard>
                <img src={Photos.manufatura} alt="icone sobre manufatura" />
              </BallCard>
              <p>Manufatura</p>
            </div>
          </ArticleElementBall>
          {isLoading ? (
            <p>Carregando</p>
          ) : (
            showImages.box3 &&
            <ContainerAstroElementLeft>
              <CloseAstroElement onClick={() => handleCloseBox('box3')}>X</CloseAstroElement>
              <AstroComponent data={astro} filterId={3} />
            </ContainerAstroElementLeft>
          )}
        </SessaoElement>
      </ContainerElement>
      {children}
      <ContainerElement>
        <SessaoElement>
          <TituloElement>Todo tipo de conteúdo. Tudo para te ajudar a crescer.</TituloElement>
          <ArticleElement>
            <GridWhatsCrm>
              <TituloElement>O que é CRM?</TituloElement>
              <p>Aprenda tudo sobre o CRM, como unificar todas as suas equipes e como impulsionar o crescimento e a produtividade em toda a sua empresa.</p>
              <WhiteBlueButton>Saiba mais</WhiteBlueButton>
              <img src={Photos.whatsCRM} alt="imagem ilustrativa do que é crm" />
            </GridWhatsCrm>
          </ArticleElement>
        </SessaoElement>
        <SessaoElement>
          <ArticleElement>
            <CardElement>
              <img src={Photos.imgRelatório} alt="imagem ilustrativa sobre relatório da Salesforce" />
              <BubleElement>Relatório</BubleElement>
              <SublimeTituloElement>Leia nosso último relatório da Pesquisa State of Sales.</SublimeTituloElement>
              <p>Saiba como mais de 7.700 profissionais de vendas estão obtendo sucesso imediato.</p>
              <LinksElement>Leia o relatório</LinksElement>
            </CardElement>
            <CardElement>
              <img src={Astros.astroBlog} alt="Imagem ilustrativa do Astro no Blog" />
              <BubleElement>Blog</BubleElement>
              <SublimeTituloElement>Conheça o Blog da Salesforce.</SublimeTituloElement>
              <p>Notícias e percepções para impulsionar a transformação de seus negócios.</p>
              <LinksElement>Saiba mais</LinksElement>
            </CardElement>
            <CardElement>
              <img src={Photos.blogSalesforce} alt="Imagem ilustrativa do Blog da Salesforce" />
              <BubleElement>Webinar</BubleElement>
              <SublimeTituloElement>Salesforce e inter: Faça mais com menos.</SublimeTituloElement>
              <p>Aprenda como conectar os dados do cliente para impulsionar a eficiência do marketing.</p>
              <LinksElement>Participe do webinar</LinksElement>
            </CardElement>
          </ArticleElement>
        </SessaoElement>
        <SessaoElement>
          <TituloElement>Participe de eventos virtuais da Salesforce. Agora a inspiração vem até você.</TituloElement>
          <ArticleElement>
            <CardElement>
              <img src={Photos.eventos} alt="imagem ilustrativa sobre eventos na salesforce" />
              <SubTituloElement>Mergulhe em paixão, aprendizado e conhecimento.</SubTituloElement>
              <LinksElement>Explore os eventos</LinksElement>
            </CardElement>
            <CardElement>
              <img src={Photos.customer} alt="imagem sobre o customer da Salesforce" />
              <SubTituloElement>Aprenda tudo sobre o Customer 360 em workshops práticos.</SubTituloElement>
              <LinksElement>Confira nossos workshops (Inglês)</LinksElement>
            </CardElement>
            <CardElement>
              <img src={Photos.webinars} alt="Imagem sobre o Webinars" />
              <SubTituloElement>Descubra como impulsionar o crescimento com o Salesforce gratuitamente.</SubTituloElement>
              <LinksElement>Assista os Webinars</LinksElement>
            </CardElement>
          </ArticleElement>
        </SessaoElement>
        <SessaoElement>
          <WrappenElement>
            <TituloElement>Aprenda habilidades valiosas gratuitamente com o Trailhead.</TituloElement>
            <p>Siga os caminhos de aprendizado guiados e aprenda na prática as habilidades interpessoais, digitais e do Salesforce de qualquer lugar.</p>
          </WrappenElement>
          <ArticleElement>
            <CardElement>
              <img src={Icones.iconeCalen} alt="icone de calendario" />
              <SubTituloElement>Noções básicas de inteligência artificial</SubTituloElement>
              <p>Aprenda as noções básicas de IA e a tecnologia por trás dos seus recursos incríveis.</p>
              <LinksElement>Comece a aprender</LinksElement>
            </CardElement>
            <CardElement>
              <img src={Icones.iconeCell} alt="icone de celular" />
              <SubTituloElement>Noções básicas do Salesforce Einstein</SubTituloElement>
              <p>Descubra insights e preveja resultados com esse avançado conjunto de recursos aprimorados de IA.</p>
              <LinksElement>Comece a aprender</LinksElement>
            </CardElement>
            <CardElement>
              <img src={Icones.iconeMedalha} alt="icone de medalha" />
              <SubTituloElement>IA generativa do Einstein: início rápido</SubTituloElement>
              <p>Descubra como a IA generativa e o Einstein estão transformando o futuro do trabalho.</p>
              <LinksElement>Comece a aprender</LinksElement>
            </CardElement>
          </ArticleElement>
        </SessaoElement>

        <SessaoElement>
          <WrappenElement>
            <TituloElement>Experimente o Salesforce gratuitamente. Não é necessário cartão de crédito nem instalação de software.</TituloElement>
            <BlueButton>Comece o teste gratuito</BlueButton>
            <img src={Photos.freeTest} alt="imagem sobre o teste gratis da salesforce" />
          </WrappenElement>
          {isLoading ? (
            <p>Carregando</p>
          ) : (
            showImages.box4 &&
            <ContainerAstroElementRight>
              <CloseAstroElement onClick={() => handleCloseBox('box4')}>X</CloseAstroElement>
              <AstroComponent data={astro} filterId={4} />
            </ContainerAstroElementRight>
          )
          }
        </SessaoElement>
        <SessaoElement>
          <BigCard>
            <TituloElement>Perguntas? Vamos colocá-lo no caminho certo.</TituloElement>
            <BlueButton>Entre em contato</BlueButton>
            <img src={Photos.imgQuests} alt="imagem sobre perguntas para Salesforce" />
          </BigCard>
        </SessaoElement>
        <SessaoElement>
          <TituloElement>Encontre aplicativos e experiência para estender o Salesforce.</TituloElement>
          <ArticleElement>
            <CardElement>
              <img src={Photos.appExchange} alt="imagem da mascote appy" />
              <SubTituloElement>O que é AppExchange?</SubTituloElement>
              <LinksElement>Descubra o AppExchange (inglês)</LinksElement>
            </CardElement>
            <CardElement>
              <img src={Photos.allApps} alt="imagem ilustrativa sobre todos os apps" />
              <SubTituloElement>Encontre todos os apps</SubTituloElement>
              <LinksElement>Explore todos os apps (Inglês)</LinksElement>
            </CardElement>
            <CardElement>
              <img src={Photos.consultor} alt="imagem de um consultor" />
              <SubTituloElement>Obtenha orientação especializada.</SubTituloElement>
              <LinksElement>Encontre consultores (inglês)</LinksElement>
            </CardElement>
          </ArticleElement>
        </SessaoElement>
        <SessaoElement>
          <BigCard>
            <TituloElement>Perguntas? Te colocamos no caminho correto.</TituloElement>
            <BlueButton>Entre em contato</BlueButton>
            <img src={Photos.imgQuests} alt="imagem sobre perguntas para Salesforce" />
          </BigCard>
        </SessaoElement>
      </ContainerElement>
    </>
  )
}



