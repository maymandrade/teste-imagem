'use strict'

import { renderizarPagina } from "../main.js"

export function criarLogin(){
    const formulario = document.createElement('form')

    const emailInput = document.createElement('input')
    emailInput.className = 'form-input'
    emailInput.type = 'email'
    emailInput.placeholder = 'Digite seu email'

    const senhaInput = document.createElement('input')
    senhaInput.type = 'password'
    senhaInput.placeholder = 'Digite sua senha'
    senhaInput.className = 'form-input'

    const loginButton = document.createElement('button')
    loginButton.type = 'button'
    loginButton.textContent = 'ENTRAR'
    loginButton.className = 'button'
    loginButton.onclick = () => renderizarPagina('preview')

    formulario.append(emailInput, senhaInput, loginButton)

    return formulario
}