// 1. GESTÃO DE DADOS (Injeção Dinâmica)
const especies = [
    { nome: "Lótus Sagrado", desc: "Símbolo de pureza no Budismo." },
    { nome: "Lótus Azul", desc: "Conhecido no Egito Antigo por suas propriedades." },
    { nome: "Lótus Americano", desc: "Nativo da América do Norte, com flores amarelas." }
];

const renderizarEspecies = () => {
    const container = document.getElementById('grid-especies');
    container.innerHTML = especies.map(item => `
        <article class="card" style="border: 1px solid var(--primary); padding: 15px; border-radius: var(--radius)">
            <h3>${item.nome}</h3>
            <p>${item.desc}</p>
        </article>
    `).join('');
};

// 2. ACESSIBILIDADE: TAMANHO DA FONTE
let fontSize = 100; // percentual
const changeFontSize = (type) => {
    fontSize += (type === 'increase' ? 10 : -10);
    document.documentElement.style.fontSize = `${fontSize}%`;
};

// 3. CONTRASTE
const toggleContrast = () => {
    document.body.classList.toggle('high-contrast');
};

// 4. SISTEMA DE ACORDEÃO (EXPANDABLES)
const setupAccordion = () => {
    const container = document.getElementById('accordion-container');
    const dados = [
        { titulo: "Resiliência", texto: "A lótus cresce no lodo mas permanece limpa." },
        { titulo: "Espiritualidade", texto: "Representa a elevação do espírito humano." }
    ];

    container.innerHTML = dados.map(d => `
        <div class="accordion-item">
            <div class="accordion-header" role="button" tabindex="0">${d.titulo}</div>
            <div class="accordion-content">${d.texto}</div>
        </div>
    `).join('');

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('open');
        });
    });
};

// 5. SCROLL REVEAL (INTERSECTION OBSERVER)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

// INICIALIZAÇÃO
window.onload = () => {
    renderizarEspecies();
    setupAccordion();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};
