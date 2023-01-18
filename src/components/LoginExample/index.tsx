import { ContainerLogin } from "./styles";


export function LoginExample() {
    return (
        <ContainerLogin>
            <form action="#">
                <h1>Login</h1>

                <div>
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" name="Nome" placeholder="Digite seu nome" id="" />
                </div>

                <div>
                    <label htmlFor="Senha">Senha</label>
                    <input type="text" name="Senha" placeholder="Digite sua Senha" id="" />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </ContainerLogin>
    )
}