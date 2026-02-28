# missao_godevs

Repositório contendo desafios diários ("missões") propostos pela plataforma **godevs.in100tiva.com**. Cada pasta `missao_*` guarda os arquivos necessários para a atividade e, quando concluída, serve de base para envio no portal.

Este projeto está organizado por missões.

## Estrutura do repositório

Cada missão reside em sua própria subpasta com um `index.html` (e outros recursos se necessário). A raiz também inclui uma página principal (`index.html`) com links para todas as missões.

Exemplo de árvore de diretórios:

```
/index.html           ← navegação geral
...
/missao_04/           ← conteúdo da missão 01
  ├─ index.html
  └─ script.js
```

## Publicação com GitHub Pages

1. Acesse as **Settings → Pages** do repositório no GitHub.
2. Selecione a branch `main` como fonte (ou `main`/`docs` se utilizar a pasta `docs`).
3. Salve as configurações.

A partir daí, o conteúdo estará disponível em `https://<usuario>.github.io/missao_godevs/` e cada missão poderá ser acessada via `https://<usuario>.github.io/missao_godevs/missao_04/` (substitua pelo número adequado).

### Observações

- Certifique-se de que cada `index.html` em pastas de missão funciona isoladamente para facilitar o preview.
- Atualize a página raiz sempre que adicionar novas missões, acrescentando um `<li>` correspondente.

---

"Boa prática de organização garante navegação clara entre os projetos."