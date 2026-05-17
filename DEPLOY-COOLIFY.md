# Deploy no Coolify

## Estratégia

Este projeto está preparado para deploy em VPS/Coolify via Docker com `Next.js standalone`.

## Configuração no Coolify

1. Crie um novo recurso a partir do repositório `chipzoficial/site-kadoshlabs`.
2. Escolha deploy por `Dockerfile`.
3. Use a branch `main`.
4. Porta interna da aplicação: `3000`.
5. Domínio: `kadoshlabs.app.br`.

## Variáveis

Para a versão atual, nenhuma variável obrigatória é necessária.

Se quiser definir explicitamente:

- `NODE_ENV=production`
- `PORT=3000`

## Build e runtime

O container:

- instala dependências com `npm ci`
- gera build com `npm run build`
- sobe com `node server.js`

## DNS

No provedor do domínio, aponte o domínio para a VPS onde o Coolify está rodando.

Depois disso:

1. adicione o domínio no app dentro do Coolify
2. aguarde a emissão do SSL
3. valide acesso em `https://kadoshlabs.app.br`
