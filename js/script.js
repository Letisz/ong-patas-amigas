// SPA - navegação entre seções
const homeBtn = document.getElementById('homeBtn');
const projetosBtn = document.getElementById('projetosBtn');
const voluntariosBtn = document.getElementById('voluntariosBtn');

function mostrarSecao(secaoId) {
  document.querySelectorAll('main > section').forEach(sec => {
    sec.style.display = 'none';
  });
  document.getElementById(secaoId).style.display = 'block';
}

homeBtn.addEventListener('click', () => mostrarSecao('home'));
projetosBtn.addEventListener('click', () => mostrarSecao('projetos'));
voluntariosBtn.addEventListener('click', () => mostrarSecao('voluntarios'));

// Template de projetos
const projetos = [
  { nome: "Castração de cães", descricao: "Projeto para castrar animais de rua" },
  { nome: "Adoção responsável", descricao: "Campanha de adoção de pets" },
  { nome: "Campanhas de arrecadação", descricao: "Doações para ração e remédios" }
];

function renderProjeto(projeto) {
  return `
    <div class="projeto">
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
    </div>
  `;
}

const projetosContainer = document.getElementById('projetosContainer');
projetos.forEach(proj => {
  projetosContainer.innerHTML += renderProjeto(proj);
});

// Sistema de cadastro de voluntários usando LocalStorage
const volForm = document.getElementById('volForm');
const volList = document.getElementById('volList');

function carregarVoluntarios() {
  const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
  volList.innerHTML = '';
  voluntarios.forEach(v => {
    const li = document.createElement('li');
    li.textContent = `${v.nome} (${v.email})`;
    volList.appendChild(li);
  });
}

volForm.addEventListener('submit', e => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
  voluntarios.push({ nome, email });
  localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

  volForm.reset();
  carregarVoluntarios();
});

carregarVoluntarios();
