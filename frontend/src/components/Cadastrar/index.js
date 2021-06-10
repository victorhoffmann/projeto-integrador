import React, {useState} from 'react'
import axios from 'axios'
import './style.css'
import {useHistory} from 'react-router-dom'
import { setToken, setUser } from '../../Helpers/session'

const Cadastrar = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf_cnpj, setCpf_Cnpj] = useState('');
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post('/usuarios', {
            nome,
            email,
            senha,
            cpf_cnpj,
            id_funcao: '2'
          })
          const response = await axios.post('/admin', {email, senha})
            const token = response.data.token
            setToken(token)
            setUser(response.data.user)
            history.push('/')
            history.go(0)
        } catch (error) {
            if (error.response.data) alert(error.response.data.message);
          else alert("Ops, deu ruim");
        }
      };

    return (

        <div className="container">
            <div className="bodyForm">
            Todos os campos são de preenchimento obrigatório.
                <h3>Dados Pessoais</h3>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="form-row">
                    <div className="input-data">
                        <input type="nome" id='nome' required value={nome} onChange={(e) => setNome(e.target.value)}></input>
                        <div className="underline"></div>
                        <label for="nome">Nome:</label>
                    </div>
                </div>

                <div className="form-row names">
                    <div className="input-data">
                        <input type="email" id='email' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <div className="underline"></div>
                        <label for="email">E-mail:</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="password" id='senha' required value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                        <div className="underline"></div>
                        <label for="senha">Crie sua senha:</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="input-data">
                        <input type="text" id="inputCpfOuCnpj" required value={cpf_cnpj} onChange={(e) => setCpf_Cnpj(e.target.value)}></input>
                        <div className="underline"></div>
                        <label for="inputCpfOuCnpj">CPF ou CNPJ (Apenas números):</label>
                    </div>
                </div>

                <div className="form-row submit-btn__entrar">
                    <div className="input-data btn-voltar">
                        <div className="inner"></div>
                        <a href="/login">
                            <input type="button" value="voltar"></input></a>
                    </div>
                    <div className="input-data btn-entrar">
                        <button type="submit" id='btnCadastro'>Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Cadastrar