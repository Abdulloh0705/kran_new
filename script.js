const title = document.querySelector('.kran_text');
const text = title.innerHTML;
title.innerHTML = '';

function rec(i = 0) {
  title.innerHTML += text[i];
  i++;
  if (i < text.length) {
    setTimeout(() => {
      rec(i);
    }, 50);
  }
}
rec();
const kran_img = document.querySelector('.kran_img');
const kran_title = document.querySelector('.kran_title');

function animation() {
  kran_img.style.transform = `translateX(${scrollY}px)`;
  kran_title.style.transform = `translateX(${scrollY}px)`;
  console.log(scrollY);
}

window.addEventListener('scroll', animation);
window.addEventListener('load', animation);
