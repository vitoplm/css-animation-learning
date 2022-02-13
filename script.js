function toRight() {
  let liquid = document.getElementById('1');
  liquid.classList.remove('to-left');
  liquid.classList.add('to-right');
}

function toLeft() {
  let liquid = document.getElementById('1');
  liquid.classList.remove('to-right');
  liquid.classList.add('to-left');
}
