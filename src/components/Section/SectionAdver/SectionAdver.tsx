import "./SectionAdver.css";
import imgMarket from "../../../img/market-salesforce.webp";


export const SectionAdver = () => {
  return (
    <section className="sectionAdver">
      <h1>Experimente o Salesforce Starter Suite gratuitamente.</h1>
      <p>Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. Não é necessário cartão de crédito.</p>
      <div>
        <a href="#">Inicie teste gratuito</a>
        <a href="#">Assista à demo</a>
      </div>
      <img src={imgMarket} alt="imagem do salesforce starter suiter" />
    </section>
  )
}