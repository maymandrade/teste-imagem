'use strict'

import { renderizarPagina } from "../main.js"

export function criarPreview() {
    const formulario = document.createElement('form')

    const previewContainer = document.createElement('div')
    previewContainer.classList.add('preview-container')

    const inputFile = document.createElement('input')
    inputFile.id = 'preview-input'
    inputFile.className = 'preview-input'
    inputFile.type = 'file'
    inputFile.accept = 'image/*'

    const previewLabel = document.createElement('label')
    previewLabel.className = 'preview-label'
    previewLabel.htmlFor = 'preview-input'
    
    const previewImage = document.createElement('img')
    previewImage.className = 'preview-image'
    previewImage.id = 'preview-image'
    previewImage.src = './img/upload-icon.svg'

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    const uploadButton = document.createElement('button')
    uploadButton.className = 'button'
    uploadButton.type = 'button'
    uploadButton.id = 'upload-button'
    uploadButton.textContent = 'Salvar'

    const cancelarButton = document.createElement('button')
    cancelarButton.className = 'button'
    cancelarButton.type = 'button'
    cancelarButton.textContent = 'Cancelar'
    cancelarButton.onclick = () => renderizarPagina('login')
    
    buttonContainer.append(uploadButton, cancelarButton)

    previewContainer.append(inputFile, previewLabel, previewImage)

    formulario.append(previewContainer, buttonContainer)
    
    return formulario
}