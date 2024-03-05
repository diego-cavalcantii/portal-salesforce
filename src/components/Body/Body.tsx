interface BodyProps {
  children ?: React.ReactNode
}

export const Body = ({children}:BodyProps) => {
  return (
    <body>{children}</body>
  )
}