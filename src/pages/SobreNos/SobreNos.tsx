import { Header, CardForms, Sessao } from "../../components";
import { Photos } from "../../components/Photos";
import "./SobreNos.css";
import { Footer } from "../../components/Footer/Footer";


export default function SobreNos() {


  return (
    <>
      <Header />
      <div className="lateral">
        <Sessao>
          <div className="img-responsivo">
            <img src={Photos.astroGuia} alt="" />
          </div>
        </Sessao>
        <Sessao>
          <CardForms variant="card-guia">
            <div>
              <h1>Primeiro, eu preciso te apresentar o que é um CRM</h1>
              <p>O CRM, ou Customer Relationship Management, é um software estratégico utilizado por empresas para gerenciar e otimizar as interações com clientes. Essa ferramenta atua como um ponto centralizado para armazenar dados valiosos, como histórico de compras, preferências e feedbacks dos clientes.

                Ele é como um assistente digital que anota o que os clientes gostam, compram e resolve problemas rapidinho, tornando a experiência de compra mais personalizada. Ele é o intermédio perfeito para aproximar a empresa ao cliente.</p>
            </div>
            <img src={Photos.crm} alt="" />
          </CardForms>
        </Sessao>
        <Sessao>
          <CardForms variant="card-guia">
            <p>O CRM, ou Customer Relationship Management, é um software estratégico utilizado por empresas para gerenciar e otimizar as interações com clientes. Essa ferramenta atua como um ponto centralizado para armazenar dados valiosos, como histórico de compras, preferências e feedbacks dos clientes.

              Ele é como um assistente digital que anota o que os clientes gostam, compram e resolve problemas rapidinho, tornando a experiência de compra mais personalizada. Ele é o intermédio perfeito para aproximar a empresa ao cliente.</p>
            <img src={Photos.crm} alt="" />
          </CardForms>
        </Sessao>
      </div>

      <Footer />
    </>
  )
}