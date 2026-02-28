# missao_godevs

Repositório contendo desafios diários ("missões") propostos pela plataforma **godevs.in100tiva.com**. Cada pasta `missao_*` guarda os arquivos necessários para a atividade e, quando concluída, serve de base para envio no portal.

Este projeto está organizado por missões. Abaixo você encontra o conteúdo da pasta principal e detalhes da missão 04, que é o trabalho mais recente.

---

## Estrutura do repositório

```
missao_godevs/
├── LICENSE
├── README.md         ← documento que você está lendo
└── missao_04/        ← pasta da quarta missão
    ├── index.html    ← formulário de contato minimalista
    ├── script.js     ← validação e lógica do formulário
    └── Missao_04.md  ← enunciado da missão
```

## Missão 04 – Validação Simples de Formulário

O objetivo desta tarefa é impedir o envio de um formulário quando os campos obrigatórios estiverem vazios ou inválidos. A implementação inclui:

- Um formulário HTML estilizado com **TailwindCSS** e tipografia personalizada.
- Campos para **nome**, **e-mail** e **mensagem**.
- Interceptação do evento `submit` usando JavaScript.
- Validação de cada campo com expressões regulares e exibição de mensagens de erro inline.
- Feedback visual na borda dos campos e animações sutis.
- Auto‑redimensionamento do `<textarea>` para acompanhar o texto.
- Mensagem de sucesso fictícia e reset do formulário após envio.

## Como usar

1. Clone este repositório ou acesse a pasta localmente.
2. Abra `missao_04/index.html` em um navegador moderno (não é necessário servidor).
3. Preencha o formulário; tente enviar com campos vazios para ver as mensagens de erro.

## Tecnologias

- HTML5
- CSS com Tailwind (via CDN)
- JavaScript vanilla