'use strict'

import { criarPreview } from './pages/preview.js'
import { criarLogin } from './pages/login.js'

const main = document.getElementById('main-content')

const paginas = {
    preview: {
        titulo: 'preview de Imagens',
        renderizar: criarPreview
    },
    login: {
        titulo: 'login',
        renderizar: criarLogin
    }
}

paginas['preview']['titulo']
 export function renderizarPagina(nomePagina) {
    const main = document.getElementById('main-content') 
    const pagina  = paginas[nomePagina].renderizar()
    //forma mais extensa
    // let pagina = null
    // if (nomePagina === 'preview'){
    //     pagina = criarPreview()
    // }else if(nomePagina === 'login'){
    //     pagina = criarLogin()
    // }
    //usando append para poder substituir
    main.replaceChildren(pagina)


}

renderizarPagina('login')