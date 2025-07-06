# 🚗 CarFinancing Frontend

[![Angular](https://img.shields.io/badge/Angular-20.0.0-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.7-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Sistema moderno de cálculo de financiamento de veículos desenvolvido com Angular 20, TypeScript e Server-Side Rendering (SSR).

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Executando o Projeto](#-executando-o-projeto)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Backend](#-api-backend)
- [Testes](#-testes)
- [Build e Deploy](#-build-e-deploy)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

O **CarFinancing Frontend** é uma aplicação web moderna para cálculo de financiamento de veículos, desenvolvida com as mais recentes tecnologias do ecossistema Angular. O sistema oferece uma interface intuitiva e responsiva para simulação de financiamentos, com suporte a diferentes tipos de financiamento e períodos de pagamento.

### Características Principais

- ⚡ **Performance Otimizada** com Server-Side Rendering (SSR)
- 📱 **Design Responsivo** com Bootstrap 5
- 🔒 **Type Safety** completo com TypeScript
- 🧪 **Testes Automatizados** com Jasmine/Karma
- 🚀 **Arquitetura Moderna** baseada em componentes
- 🔄 **Programação Reativa** com RxJS

## ✨ Funcionalidades

### 🧮 Calculadora de Financiamento
- **Tipos de Financiamento**: Interno e Externo
- **Períodos Flexíveis**: 12, 24, 36, 48 meses (interno) / até 60 meses (externo)
- **Cálculo em Tempo Real**: Prestação mensal calculada instantaneamente
- **Validação de Formulários**: Validação robusta de entrada de dados

### 💾 Persistência de Dados
- **Salvamento de Simulações**: Armazenamento de dados do cliente
- **Histórico de Cálculos**: Rastreamento de simulações realizadas
- **Tratamento de Erros**: Feedback visual para o usuário

### 🎨 Interface do Usuário
- **Design Moderno**: Interface limpa e profissional
- **Responsividade**: Adaptável a diferentes tamanhos de tela
- **Feedback Visual**: Alertas e mensagens informativas
- **Acessibilidade**: Seguindo padrões de acessibilidade web

## 🛠 Tecnologias Utilizadas

### Frontend Framework
- **[Angular 20.0.0](https://angular.io/)** - Framework principal
- **[TypeScript 5.8.2](https://www.typescriptlang.org/)** - Linguagem de programação
- **[RxJS 7.8.0](https://rxjs.dev/)** - Programação reativa

### UI/UX
- **[Bootstrap 5.3.7](https://getbootstrap.com/)** - Framework CSS
- **[Angular Forms](https://angular.io/guide/forms)** - Gerenciamento de formulários

### Server-Side Rendering
- **[Angular SSR](https://angular.dev/guide/ssr)** - Server-Side Rendering
- **[Express 5.1.0](https://expressjs.com/)** - Servidor Node.js

### Desenvolvimento e Testes
- **[Angular CLI 20.0.5](https://angular.dev/tools/cli)** - Ferramentas de desenvolvimento
- **[Jasmine](https://jasmine.github.io/)** - Framework de testes
- **[Karma](https://karma-runner.github.io/)** - Test runner
- **[Prettier](https://prettier.io/)** - Formatador de código

## 🏗 Arquitetura

### Padrões Arquiteturais
- **Component-Based Architecture**: Componentes standalone e reutilizáveis
- **Service Layer Pattern**: Separação de lógica de negócio
- **Model-Driven Development**: Interfaces TypeScript bem definidas
- **Dependency Injection**: Injeção de dependências nativa do Angular

### Estrutura de Camadas
```
┌─────────────────────────────────────┐
│           Presentation Layer        │
│        (Components + Templates)     │
├─────────────────────────────────────┤
│           Business Logic            │
│           (Services)                │
├─────────────────────────────────────┤
│           Data Layer                │
│        (Models + HTTP Client)       │
└─────────────────────────────────────┘
```

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
- **[npm](https://www.npmjs.com/)** (gerenciador de pacotes)
- **[Angular CLI](https://angular.dev/tools/cli)** (globalmente)

```bash
# Verificar versões
node --version
npm --version
ng version
```

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/carfinancing-front.git
cd carfinancing-front
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente** (se necessário)
```bash
# Crie um arquivo .env se necessário
cp .env.example .env
```

## ▶ Executando o Projeto

### Desenvolvimento Local
```bash
# Iniciar servidor de desenvolvimento
npm start
# ou
ng serve
```

Acesse `http://localhost:4200` no seu navegador.

### Server-Side Rendering (SSR)
```bash
# Build e servidor SSR
npm run build
npm run serve:ssr:carfinancing-front
```

### Modo de Observação
```bash
# Build com watch mode
npm run watch
```

## 📁 Estrutura do Projeto

```
carfinancing-front/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── financing-calculator/     # Componente principal
│   │   │       ├── financing-calculator.component.ts
│   │   │       └── financing-calculator.component.html
│   │   ├── models/
│   │   │   └── financing.model.ts        # Interfaces TypeScript
│   │   ├── services/
│   │   │   └── financing.service.ts      # Serviços de API
│   │   ├── app.ts                        # Componente raiz
│   │   ├── app.routes.ts                 # Configuração de rotas
│   │   └── app.config.ts                 # Configuração da aplicação
│   ├── main.ts                           # Entry point
│   ├── main.server.ts                    # SSR entry point
│   └── styles.css                        # Estilos globais
├── public/                               # Assets estáticos
├── angular.json                          # Configuração do Angular
├── package.json                          # Dependências do projeto
└── tsconfig.json                         # Configuração TypeScript
```

## 🔌 API Backend

O projeto se conecta a uma API backend na porta `8001`. Certifique-se de que o backend esteja rodando antes de testar as funcionalidades.

### Endpoints Utilizados
- `POST /api/installment/calculate` - Cálculo de prestações
- `POST /api/installment/save` - Salvamento de dados

### Configuração da API
```typescript
// Em src/app/services/financing.service.ts
private baseUrl = 'http://localhost:8001/api';
```

## 🧪 Testes

### Executar Testes Unitários
```bash
npm test
# ou
ng test
```

### Executar Testes com Coverage
```bash
ng test --code-coverage
```

### Executar Testes E2E
```bash
ng e2e
```

## 🏗 Build e Deploy

### Build de Produção
```bash
npm run build
```

### Build de Desenvolvimento
```bash
npm run build --configuration development
```

### Análise de Bundle
```bash
npm run build --stats-json
npx webpack-bundle-analyzer dist/carfinancing-front/stats.json
```

## 🤝 Contribuição

1. **Fork o projeto**
2. **Crie uma branch para sua feature**
```bash
git checkout -b feature/AmazingFeature
```
3. **Commit suas mudanças**
```bash
git commit -m 'Add some AmazingFeature'
```
4. **Push para a branch**
```bash
git push origin feature/AmazingFeature
```
5. **Abra um Pull Request**

### Padrões de Código
- Siga o [Angular Style Guide](https://angular.dev/style-guide)
- Use TypeScript strict mode
- Mantenha cobertura de testes acima de 80%
- Documente funções complexas

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/seu-usuario/carfinancing-front/issues)
- **Documentação**: [Angular Docs](https://angular.dev/)
- **Comunidade**: [Angular Community](https://angular.dev/community)

---

**Desenvolvido com ❤️ usando Angular 20**
