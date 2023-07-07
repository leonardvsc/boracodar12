// Selecionando os elementos relevantes no DOM
const cards = document.querySelectorAll('.card');
const columns = document.querySelectorAll('.cards');

// Adicionando eventos de arrastar aos cards
cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

// Adicionando eventos de soltar aos recipientes das colunas
columns.forEach(column => {
  column.addEventListener('dragover', dragOver);
  column.addEventListener('dragenter', dragEnter);
  column.addEventListener('dragleave', dragLeave);
  column.addEventListener('drop', drop);
});

// Funções de manipulação de eventos
let draggedCard = null;

function dragStart() {
  draggedCard = this;
  setTimeout(() => {
    this.classList.add('invisible');
  }, 0);
}

function dragEnd() {
  this.classList.remove('invisible');
  draggedCard = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function drop() {
  this.classList.remove('hovered');
  this.appendChild(draggedCard);
}
