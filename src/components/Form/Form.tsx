import { Photos } from "../Photos";
import { BoxLogin, FormElement, InputsElement, StyledInput } from "./Form.style";

export const Form = () => {
    return (
        <FormElement>
            <p>Preencha  o formulário abaixo e em breve
                entraremos em contato.</p>
            <div>
                <BoxLogin>
                    <img src={Photos.google} alt="icone google" />
                    <span>Continue with Google</span>
                </BoxLogin>
                <BoxLogin>
                    <img src={Photos.linkedin} alt="icone linkedin" />
                    <span>Continue with Linkedin</span>
                </BoxLogin>
            </div>
            <hr />
            <form action="">
                <InputsElement>
                    <div>
                        <StyledInput type="text" name="nome" id="nome" placeholder="Nome" />
                        <label htmlFor="nome"></label>
                    </div>
                    <div>
                        <StyledInput type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" />
                        <label htmlFor="sobrenome"></label>
                    </div>
                </InputsElement>
                <div>
                    <StyledInput type="text" name="cargo" id="cargo" placeholder="Cargo" />
                    <label htmlFor="cargo"></label>
                </div>
                <div>
                    <StyledInput type="email" name="email-corporativo" id="email-corporativo" placeholder="Email Corporativo" />
                    <label htmlFor="Email Corporativo"></label>
                </div>
                <div>
                    <StyledInput type="tel" name="telefone" id="telefone" placeholder="Telefone" />
                    <label htmlFor="Telefone"></label>
                </div>
                <div>
                    <StyledInput type="text" name="empresa" id="empresa" placeholder="Empresa" />
                    <label htmlFor="Empresa"></label>
                </div>
                <div>
                    <StyledInput type="text" name="tamanho-empresa" id="tamanho-empresa" placeholder="Tamanho Empresa" />
                    <label htmlFor="Tamanho Empresa"></label>
                </div>
                <div>
                    <label htmlFor="Pais/Região">País/Região</label>
                    <StyledInput type="text" name="pais" id="pais" placeholder="Pais/Região" />
                </div>
                <div>
                    <StyledInput type="text" name="idioma" id="idioma" placeholder="Idioma" />
                    <label htmlFor="Idioma"></label>
                </div>
                <div className="checkbox">
                    <StyledInput type="checkbox" name="termos" id="termos" />
                    <label htmlFor="Idioma">Estou de acordo com o Main Service Agreement</label>
                </div>
            </form>
        </FormElement>
    )
}