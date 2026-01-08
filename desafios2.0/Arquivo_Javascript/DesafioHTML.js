const imagens=document.querySelectorAll('.imgs img');const modal=document.getElementById('modal');const modalImg=document.getElementById('imgModal');const btnFechar=document.querySelector('.btnfechar img');const btnPrev=document.querySelector('.prev img');const btnNext=document.querySelector('.next img');let index=0;function abrirModal(i){index=i;modalImg.src=imagens[index].src;modal.style.display='flex';mostrarControles()}
function fecharModal(){modal.style.display='none';modalImg.src='';esconderControles()}
function atualizarImagem(){modalImg.src=imagens[index].src}
function mostrarControles(){btnFechar.style.display='block';btnPrev.style.display='block';btnNext.style.display='block'}
function esconderControles(){btnFechar.style.display='none';btnPrev.style.display='none';btnNext.style.display='none'}
imagens.forEach((img,i)=>{img.addEventListener('click',()=>abrirModal(i))});btnFechar.addEventListener('click',fecharModal);{}
btnNext.addEventListener('click',()=>{index=(index+1)%imagens.length;atualizarImagem()});btnPrev.addEventListener('click',()=>{index=(index-1+imagens.length)%imagens.length;atualizarImagem()});modal.addEventListener('click',(e)=>{if(e.target===modal){fecharModal()}})
