function move() {
  let liquid1 = document.getElementById('1');
  let liquid2 = document.getElementById('2');

  if (liquid1.classList.contains('right')) {
    liquid1.classList.replace('right', 'right-back');
  } else if (liquid1.classList.contains('right-back')) {
    liquid1.classList.replace('right-back', 'right');
  }

  if (liquid2.classList.contains('left')) {
    liquid2.classList.replace('left', 'left-back');
  } else if (liquid2.classList.contains('left-back')) {
    liquid2.classList.replace('left-back', 'left');
  }
}
