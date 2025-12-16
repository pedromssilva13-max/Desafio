const imagens = document.querySelectorAll('.imgs img')
const modal = document.getElementById('modal')
const modalimg = document.getElementById('imgModal')
const fecharImg = document.querySelector('.btnfechar img')

const prev = document.querySelector('.prev img')
const next = document.querySelector('.next img')

let index = 0

// Abre modal ao clicar
imagens.forEach((imagem, i) =>{
    imagem.addEventListener('click', () =>{
        index = i
        modalimg.src = imagens[index].src
        modal.style.display = 'flex';

        fecharImg.style.display = 'block';
        prev.style.display = 'block';
        next.style.display = 'block';
    })
})

// Botão fechar
fecharImg.addEventListener('click', ()=>{
    modal.style.display = 'none';
    fecharImg.style.display = 'none';
    prev.style.display = 'none';
    next.style.display = 'none';
})

// Navegação carousel
function atualizarImagem(){
    modalimg.src = imagens[index].src
}

next.addEventListener('click', ()=>{
    index = (index + 1) % imagens.length
    atualizarImagem()
})

prev.addEventListener('click', ()=>{
    index = (index - 1 + imagens.length) % imagens.length
    atualizarImagem()
})

