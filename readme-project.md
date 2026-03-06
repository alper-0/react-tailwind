#  PSY-TDS

Aplicação frontend desenvolvida com **React + TypeScript + Tailwind CSS**, utilizando **Vite** como ferramenta de build.

O projeto simula uma interface moderna com foco em componentização, organização de código e integração com backend via requisições HTTP.

---

##  Tecnologias Utilizadas

-  React 19
-  TypeScript
-  Vite
-  Tailwind CSS
-  React Router DOM
-  Axios
-  Framer Motion
-  Lucide React (ícones)

---

##  Estrutura do Projeto

PSY-TDS/
│
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── App.tsx
│ └── main.tsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json


---

##  Instalação

Clone o repositório:

</>bash
```
git clone https://github.com/AnaRamos2110/react-e-tailwind.git
cd react-e-tailwind/PSY-TDS
```

Instale as dependências:

npm install

---

## Executando o Projeto
</ Bash>

npm run dev

O projeto iniciará em:

```
http://localhost:5173
```
---

## Integração com Backend:

A comunicação com o backend é feita utilizando Axios para realizar requisições HTTP.

### Criação do serviço de API

Arquivo: src/services/api.ts

</> TypeScript
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // URL do backend
});


### Enviando dados para o backend

```
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

   if (!input.trim()) return;

  try {
    const response = await api.post("/chat", {
      message: input,
    });

    setMessages((prev) => [
      ...prev,
      { text: input, isAi: false },
      { text: response.data.reply, isAi: true },
    ]);

    setInput("");
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}; 
```
---
## Fluxo da Integração

1. O usuário digita uma mensagem no frontend.
2. O formulário dispara uma requisição POST para o backend.
3. O backend processa a mensagem.
4. O backend retorna uma resposta em JSON.
5. O frontend recebe a resposta e atualiza o estado da aplicação.
6. A mensagem da IA é renderizada na interface.

------
## Exemplo de resposta esperada do backend:

</>JSON

```
{
  "response": "Olá! Como posso ajudar você hoje?"
}
``` 
