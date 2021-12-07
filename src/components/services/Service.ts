import axios from "axios";

export const api = axios.create({
    baseURL: "https://esobreisso.herokuapp.com/"
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
} //usuarios/logare

export const buscar = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
} //usuarios/logar

