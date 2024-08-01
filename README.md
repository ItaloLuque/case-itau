# Validation-Password-Case-Itau

## Descrição
Esse projeto é um validador de senha. Ele verifica se uma senha é válida conforme critérios específicos fornecidos no desafio técnico. O projeto é composto por um backend desenvolvido em Java com Spring Boot e um frontend em Angular.

## Repositórios
- Backend: [case-itau-back](https://github.com/seu-usuario/case-itau-back)
- Frontend: [case-itau-front](https://github.com/seu-usuario/case-itau-front)

## Requisitos do Projeto
- Java 17
- Angular
- Maven
- Spring Boot
- Node.js e npm
- Testes Unitários

## Instalação
### Backend
1. **Clone o repositório:**
    ```
    git clone https://github.com/seu-usuario/case-itau-back.git
    ```
2. **Navegue até o diretório do backend:**
    ```
    cd case-itau-back
    ```
3. **Instale as dependências com Maven:**
    ```
    mvn clean install
    ```
4. **Execute a aplicação:**
    ```
    mvn spring-boot:run
    ```

### Frontend
1. **Clone o repositório:**
    ```
    git clone https://github.com/seu-usuario/case-itau-front.git
    ```
2. **Navegue até o diretório do frontend:**
    ```
    cd case-itau-front
    ```
3. **Instale as dependências com npm:**
    ```
    npm install
    ```
4. **Execute a aplicação:**
    ```
    ng serve
    ```

## Uso
### Backend
Após instalar e iniciar o backend, ele estará disponível em `http://localhost:8080`.

### Frontend
Após instalar e iniciar o frontend, ele estará disponível em `http://localhost:4200`.

### Endpoints da API
- **POST /api/validate-password**: Valida se a senha fornecida é válida.
  - **Input:** `{"password": "suaSenha"}`
  - **Output:** `{"isValid": true}` ou `{"isValid": false}`

### Exemplo de Uso
Para validar uma senha, faça uma requisição POST para `http://localhost:8080/api/validate-password` com o seguinte payload:
{
"password": "AbTp9!fok"
}

css
Copiar código
A resposta será:
{
"isValid": true
}

less
Copiar código

## Funcionalidades
A funcionalidade principal do projeto é validar se uma senha atende aos seguintes critérios:
- Nove ou mais caracteres
- Ao menos 1 número
- Ao menos 1 letra minúscula
- Ao menos 1 letra maiúscula
- Ao menos 1 caractere especial (!@#$%^&*()-+)
- Não possuir caracteres repetidos dentro do conjunto

## Contribuição
Contribuições são bem-vindas! Para contribuir, por favor, siga as etapas abaixo:
1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-nova-feature`
3. Faça suas modificações e commit: `git commit -m 'Adiciona nova feature'`
4. Envie para a branch original: `git push origin minha-nova-feature`
5. Crie um pull request.

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## Considerações Finais
O projeto foi desenvolvido com foco em Clean Code, princípios SOLID, e boas práticas de desenvolvimento. As decisões de design foram tomadas para garantir a extensibilidade e manutenibilidade do código.

Para dúvidas e sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato.

---

**Instruções Básicas para Executar o Projeto:**
- Clone os repositórios do backend e frontend.
- Instale as dependências do backend e frontend.
- Execute o backend e o frontend.
- Acesse a aplicação em `http://localhost:4200`.

**Decisões e Racional:**
- Utilização de Java e Spring Boot para o backend devido à robustez e familiaridade com a linguagem.
- Angular foi escolhido para o frontend por sua capacidade de criar interfaces dinâmicas e reativas.
- Testes unitários e de integração foram implementados para garantir a qualidade do código.
- O design da API segue padrões RESTful para facilitar a integração com outros sistemas.

**Premissas:**
- As senhas não contêm espaços em branco.
- Caracteres especiais são limitados a !@#$%^&*()-+.
