# Triagem API

A atividade proposta pelo professor Cristiano do Instituto Federal do Espírito Santo (IFES) era uma Hackathon virtual para mostrar algumas ideias de problemas que podem ser resolvidos com Inteligência Artificial (IA). Para o meu projeto, meu grupo e eu escolhemos resolver o problema do atraso durante o processo da triagem.

Para resolver esse problema, foram elaboradas algums pesuisas pesquisas para entender melhor o tema. Logo em seguida começaram a surgir ideias de como fazer a triagem utilizando IA.

Depois de fazer alguns designs como protótipos, o grupo decidiu fazer uma aplicação web para mostrar fluxo de como se daria o protótipo.

## Requisitos

### Requisitos funcionais

- [x] O paciente deve poder listar seus dados com o número do SUS
- [x] O paciente deve poder editar alguns de seus dados
- [x] O paciente deve poder inserir seus sintomas
- [x] O paciente deve poder inserir os medicamentos que toma
- [x] O paciente deve poder visulizar o resultado da sua triagem

### Requisitos não funcionais

- [ ] O paciente deve poder entrar com o CPF caso não lembre o número do SUS

## Banco de Dados

Para simular os dados vindos da base de dados do SUS, foi utilizado o banco relacional MySQL com uma única tabela contendo algumas informações dos pacientes.

```sql
-- CreateTable
CREATE TABLE users (
  id INTEGER AUTOINCREMENT PRIMARY KEY NOT NULL,
  sus_code VARCHAR(15) NOT NULL,
  name VARCHAR(45) NOT NULL,
  born_at DATE NOT NULL,
  sex VARCHAR(1) NOT NULL,
  color VARCHAR(20) NOT NULL,
  civil_state VARCHAR(20) NOT NULL,
  profession VARCHAR(45),
  neightborhood VARCHAR(45) NOT NULL,
  state VARCHAR(2) NOT NULL,
  street_number VARCHAR(3),
  city VARCAR(45) NOT NULL
);
```
