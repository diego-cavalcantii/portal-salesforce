import "./Menu.css";

const OpcoesHeader = ['Produtos', 'Indústria', 'Aprendizado', 'Suporte', 'Empresa']

export const Menu = () => {
  return (
    <nav>
      <ul>
        {OpcoesHeader.map((opcao, index) => (
          <li key={index}>
            <p>{opcao}</p>
          </li>
        ))}
      </ul>
      <div className="contato">
        <p><u>Entre em contato</u></p>
        <p>0800 891 1887</p>
      </div>
    </nav>
  );
};