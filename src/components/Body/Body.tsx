import "./Body.css";

interface BodyProps {
  children?: React.ReactNode;
}

export const Body = ({ children }: BodyProps) => {
  return (
    <body className="container">{children}</body>
  )
}