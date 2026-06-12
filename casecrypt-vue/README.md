# CaseCrypt - Portal de Investigação Criminal

## Descrição

O CaseCrypt é uma aplicação web desenvolvida com Vue.js que simula um portal de investigação criminal. O sistema permite visualizar casos, suspeitos, evidências e enviar mensagens por meio de um formulário de contato.

Este projeto foi desenvolvido como atividade acadêmica da disciplina de Desenvolvimento Web utilizando Vue.js.

---

## Tecnologias Utilizadas

* Vue.js 3
* Vue Router
* Vite
* HTML5
* CSS3
* JavaScript

---

## Funcionalidades

### Página Inicial

* Apresentação do sistema
* Exibição de casos recentes
* Navegação para suspeitos e evidências

### Suspeitos

* Listagem de suspeitos
* Busca dinâmica por nome
* Botão de investigação

### Evidências

* Listagem de evidências
* Filtro de pesquisa
* Exibição de detalhes em modal
* Visualização de imagens das evidências

### Contato

* Formulário de contato
* Validação de campos
* Mensagem de sucesso e erro

---

## Estrutura do Projeto

```text
src/
├── components/
│   ├── Navbar.vue
│   ├── Footer.vue
│   ├── EvidenciaCard.vue
│   └── Modal.vue
│
├── views/
│   ├── Home.vue
│   ├── Suspeitos.vue
│   ├── EvidenciasView.vue
│   └── Contato.vue
│
├── router/
│   └── index.ts
│
├── App.vue
└── main.ts
```

---

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone LINK_DO_REPOSITORIO
```

### 2. Acessar a pasta do projeto

```bash
cd casecrypt-vue
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

### 5. Abrir no navegador

Acesse o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

---

## Integrantes

* Gabryele Camargo Oliveira
* Yasminn da Silva Carvalho

---

## Objetivo Acadêmico

Aplicar os conceitos estudados durante a disciplina por meio da construção de uma aplicação front-end utilizando Vue.js, componentes reutilizáveis, navegação entre páginas, interatividade e organização de projeto.