import Senha from '../../../components/Senha'

const ReenvioSenha = () => {
    return (
        <>
            <div className="boxForm">
                <div className="titleForm">
                    <h1>Esqueceu sua senha de acesso?</h1>
                    <h4>Nós enviaremos para seu e-mail</h4>
                </div>
                <Senha />
            </div>
        </>
    )
}

export default ReenvioSenha