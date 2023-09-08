# Projeto Gym Focus Backend

Este é um projeto desenvolvido para o meu portfólio pessoal.

## Escopo de Usuários

### Requisitos Funcionais:

- Deve ser possível cadastrar um usuário.

### Regras de Negócio:

- Não se aplicam neste contexto.

### Requisitos Não Funcionais:

- Não se aplicam neste contexto.

## Escopo de Exercício

### Requisitos Funcionais:

- Deve ser possível cadastrar um exercício.
- Deve ser possível atualizar um exercício.
- Deve ser possível buscar dados de um exercício

### Regras de Negócio:

- Ao atualizar o número de repetições (`amount_of_repetitions`), séries (`amount_of_series`) ou peso (`weight`) na tabela de treinos (`workouts`), um registro, com os dados antigos, deve ser gerado na tabela de histórico de treinos (`workout_historics`).

### Requisitos Não Funcionais:

- Populando a tabela `exercise_infos`: Inicialmente, será utilizado OpenAI GPT-3 para popular os dados. Posteriormente, serão buscadas fontes de dados mais seguras e confiáveis.
