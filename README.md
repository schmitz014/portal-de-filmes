# Portal de Filmes 🎬

Um portal de filmes desenvolvido com React, Next.js e Vite, com o objetivo de oferecer uma experiência imersiva de descoberta de filmes. Este projeto utiliza a API do [The Movie DB](https://www.themoviedb.org/) para fornecer uma ampla variedade de informações sobre filmes, incluindo carrossel de destaques, listas de gêneros e funcionalidades de favoritos.

## 📋 Funcionalidades

- **Carrossel de Filmes em Destaque**: Mostra os principais filmes em cartaz.
- **Lista de Filmes**: Explora filmes populares, lançamentos recentes e muito mais.
- **Gêneros**: Navegação por categorias de gênero.
- **Favoritos**: Usuários logados podem salvar filmes na lista de favoritos.
- **Para Ver Depois**: Adicione filmes à lista de "Para Ver Depois".
- **Sistema de Autenticação**: Exibe a opção de favoritar e acessar favoritos apenas para usuários autenticados.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **Next.js (v14.2.15)**: Framework React para renderização e otimização de performance.
- **Vite**: Ferramenta de build rápida para desenvolvimento.
- **Tailwind CSS**: Estilização responsiva e rápida.
- **React Router**: Gerenciamento de rotas dinâmico para navegação.
- **API do The Movie DB**: Fonte de dados sobre filmes.

## ⚙️ Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/schmitz014/portal-de-filmes.git
   
2. Entre no diretório do projeto:
   ```bash
   cd portal-de-filmes
   
3. Instale as dependências:
   ```bash
   npm install
   
4. Crie um arquivo `.env.local` na raiz do projeto e adicione a sua chave de API do The Movie DB:
   ```bash
   NEXT_PUBLIC_API_KEY=YOUR_TMDB_API_KEY
   
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev

## 🚀 Como Usar
- Navegue pelos filmes em destaque na página inicial.
- Explore filmes por gênero.
- Autentique-se para salvar filmes em sua lista de favoritos ou para ver depois.
- Acesse a página de favoritos para ver todos os filmes salvos.

## 📄 Licença
Este projeto está licenciado sob a licença MIT.
