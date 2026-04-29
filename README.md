# Skin One Site

Site institucional estatico do Skin One, desenvolvido em HTML com Tailwind CSS via CDN.

## Sobre

O projeto apresenta a solucao Skin One, com secoes institucionais, beneficios, objetivos, componentes, funcionalidades, depoimentos, cases e informacoes de contato.

Como o site e estatico, ele nao precisa de build, banco de dados ou instalacao de dependencias para funcionar.

## Estrutura do projeto

```text
.
├── index.html
├── assets/
│   ├── Andarai.jpg
│   ├── HCFMUSP.png
│   ├── HSF.jpg
│   ├── Skin 2.jpg
│   ├── SkinOne_Logo_BrancoTurquesa.png
│   ├── image_395db4.jpg
│   ├── image_39d2b5.jpg
│   ├── image_39d5dc.jpg
│   └── valsa.png
├── .gitignore
└── README.md
```

- `index.html`: pagina principal do site.
- `assets/`: imagens usadas diretamente pela pagina.
- `.gitignore`: evita enviar arquivos locais, duplicados, backups e materiais de origem que nao fazem parte do site publicado.

## Como rodar localmente

### Opcao 1: abrir direto no navegador

Como o projeto e composto apenas por arquivos estaticos, voce pode abrir o arquivo `index.html` diretamente no navegador.

No Linux:

```bash
xdg-open index.html
```

Tambem e possivel abrir o arquivo manualmente pelo explorador de arquivos.

### Opcao 2: usar um servidor local

Para simular melhor o comportamento de um site publicado, rode um servidor HTTP simples na raiz do projeto.

Com Python 3:

```bash
python3 -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

Para parar o servidor, pressione `Ctrl+C` no terminal.

## Como publicar no GitHub Pages

Este repositorio esta pronto para ser publicado pelo GitHub Pages usando a raiz da branch `main`.

No GitHub:

1. Acesse o repositorio.
2. Va em `Settings`.
3. Abra `Pages`.
4. Em `Build and deployment`, selecione:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Salve a configuracao.

Apos alguns instantes, o GitHub Pages ira gerar a URL publica do site.

## Fluxo de atualizacao

Depois de editar arquivos do site, use:

```bash
git status
git add .
git commit -m "Descreva a alteracao"
git push
```

Se o GitHub Pages estiver configurado, o site publicado sera atualizado automaticamente apos o push.

## Observacoes

- O Tailwind CSS e carregado por CDN no `index.html`.
- A fonte de icones do Google Material Icons tambem e carregada por CDN.
- As pastas antigas e arquivos de trabalho locais nao fazem parte da publicacao.
