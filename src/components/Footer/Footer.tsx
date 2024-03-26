import "./Footer.css";

interface FooterProps {
  variant?: string
}

export const Footer = ({variant}:FooterProps) => {
  return (
    <footer className={`footer ${variant}`}>
      <div>
        <p>Mavidi-Solutions &copy; 2023 -  Todos os direitos reservados</p>
      </div>
    </footer>
  )
}