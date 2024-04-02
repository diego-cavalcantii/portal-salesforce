import { FontBlack } from "../../styles/GlobalStyles";
import { Photos } from "../Photos";
import { BoxLogin, CheckboxElement, FormElement, InputsElement } from "./Form.style";

export const Form = () => {
    return (
        <FormElement action="">
            <FontBlack>Preencha  o formulário abaixo e em breve
                entraremos em contato.</FontBlack>
            <div>
                <BoxLogin>
                    <img src={Photos.google} alt="icone do google" />
                    <FontBlack>Continue with Google</FontBlack>
                </BoxLogin>
                <BoxLogin>
                    <img src={Photos.linkedin} alt="icone do linkedin" />
                    <FontBlack>Continue with Linkedin</FontBlack>
                </BoxLogin>
            </div>
            <hr />
            <section>
                <InputsElement>
                    <div>
                        <input type="text" name="nome" id="nome" placeholder="Nome" />
                        <label htmlFor="nome"></label>
                    </div>
                    <div>
                        <input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" />
                        <label htmlFor="sobrenome"></label>
                    </div>
                </InputsElement>
                <div>
                    <input type="text" name="cargo" id="cargo" placeholder="Cargo" />
                    <label htmlFor="cargo"></label>
                </div>
                <div>
                    <input type="email" name="email-corporativo" id="email-corporativo" placeholder="Email Corporativo" />
                    <label htmlFor="Email Corporativo"></label>
                </div>
                <div>
                    <input type="tel" name="telefone" id="telefone" placeholder="Telefone" />
                    <label htmlFor="Telefone"></label>
                </div>
                <div>
                    <input type="text" name="empresa" id="empresa" placeholder="Empresa" />
                    <label htmlFor="Empresa"></label>
                </div>
                <div>
                    <input type="text" name="tamanho-empresa" id="tamanho-empresa" placeholder="Tamanho Empresa" />
                    <label htmlFor="Tamanho Empresa"></label>
                </div>
                <div>
                    <label htmlFor="Pais/Região">País/Região</label>
                    <input type="text" name="pais" id="pais" placeholder="Pais/Região" />
                </div>
                <div>
                    <input type="text" name="idioma" id="idioma" placeholder="Idioma" />
                    <label htmlFor="Idioma"></label>
                </div>
                <CheckboxElement>
                    <input type="checkbox" name="termos" id="termos" />
                    <label htmlFor="Idioma">Estou de acordo com o Main Service Agreement</label>
                </CheckboxElement>

            </section>
        </FormElement>
    )
}