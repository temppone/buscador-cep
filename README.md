# BuscadorCEP!
### O que é?

SPA mobile first desenvolvido em React.js

- O **BuscadorCEP!** é um projeto que ajuda pessoas a encontrar endereços e CEPs.
- Na Home, o site é apresentado junto com  as suas funcionalidades
- Para buscar um endereço você deve ir até a página "Buscar endereço" e digitar um CEP
- Para buscar um CEP você deve ir até a página "Buscar CEP" e preencher o fomulário

### Bibliotecas

As bibliotecas utilizadas foram:

- Para melhor separação do código e compatibilidade entre os navegadores foi utilizado [styled-component](https://styled-components.com/)
- Para fazer as rotas foi utilizado [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
- Para facilitar a notificação e melhorar a experiência do usuário foi utilizado [react-hot-toast](https://react-hot-toast.com/)
- Para manipulação de forms foi utilizado [react-hook-form](https://react-hook-form.com/), foi uma alternativa viável, uma vez que o form é bem simples. Além disso, foram utilizadas as bibliotecas [yup](https://github.com/jquense/yup) + [yup-locale-pt](https://www.npmjs.com/package/yup-locale-pt) para a validação do form, pois já existe uma integração entre as bibliotecas.
- Para icones e autocomplete, foi utilizada a biblioteca [mui](https://mui.com/)
- Para testes e2e foi utilizada a biblioteca [cypress](https://cypress.io/)
- Apis utilizadas [IBGE](https://servicodados.ibge.gov.br/api/v1/) e [viacep](https://viacep.com.br/ws/)


### Como rodar o projeto

```
yarn para instalar os pacotes
yarn start para rodar o projeto
```
### Como rodar os testes com Cypress

```
yarn cy:open para iniciar via browser
yarn cy:run para iniciar no modo headless
```


### Demo

Demo [aqui](https://cep-buscador.netlify.app/)
