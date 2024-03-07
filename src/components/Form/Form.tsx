import "./Form.css";

interface FormProps {
    children?: React.ReactNode
}

export const Form = ({children} : FormProps) => {
    return (
        <form action="">{children}</form>
    )
}