const caixaprincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "o que você gosta de fazer?", 
    alternativas: [
       "sair",
      "ficar em casa?",
      ]
  },
   {
    enunciado: "você gosta de esportes?", 
    alternativas: [
       "sim",
      "não",
      ]
  },
   {
    enunciado: "você namora?", 
    alternativas: [
       "sim",
      "não",
      ]
  },
   {
    enunciado: "qunatos anos vc tem?", 
    alternativas: [
       "16",
      "18",
      ]
  },
   {
    enunciado: "você ja viajou?", 
    alternativas: [
       "sim",
      "não",
      ]
  },
];  

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
