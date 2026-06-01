'use strict'

import { uploadParaCloudinary } from './cloudinay.js'


function preview ({target}) {
    document.getElementById('preview-image')
    //utiliza um array para pode selecionar várias imagens 
            .src = URL.createObjectURL(target.files[0])
   
}
//quando muda algo no input file, ele chama a função acima 
async function enviarFoto() {
        const input = document.getElementById('preview-input')
        const linkPublico = await uploadParaCloudinary(input.files[0])
        console.log('Link público da imagem:', linkPublico)
}

document.getElementById('preview-input')
        .addEventListener('change', preview)

document.getElementById('upload-button')
        .addEventListener('click', enviarFoto)
//o código nao manda para lugar nenhum, apenas mostra para o usuario a imagem que ele escolheu 