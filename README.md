# Validador de CNPJ

Uma função JavaScript para validação de novo CNPJ Alfanumérico (Cadastro Nacional da Pessoa Jurídica).

## Instalação

```bash
npm install
```

## Como Usar

```javascript
const { validaCNPJ } = require('./index');

// Validar um CNPJ
const resultado = validaCNPJ({ value: "12.345.678/0001-95" });
console.log(resultado); // true

// Você pode passar o CNPJ com ou sem formatação
validaCNPJ({ value: "12345678000195" }); // true
```

## Funcionalidades

- Valida números de CNPJ com ou sem formatação (pontos, barras e traços)
- Suporta entrada alfanumérica
- Realiza validação dos dígitos verificadores
- Valida o comprimento correto (14 dígitos)
- Previne casos inválidos comuns (todos os dígitos iguais)

## Formato de Entrada

A função aceita um objeto com uma propriedade `value` contendo a string do CNPJ. O CNPJ pode estar:
- Formatado (XX.XXX.XXX/XXXX-XX)
- Sem formatação (XXXXXXXXXXXXXX)
- Contendo caracteres alfanuméricos

## Valor de Retorno

- Retorna `true` se o CNPJ for válido
- Retorna `false` se o CNPJ for inválido

## Exemplos

```javascript
validaCNPJ({ value: "12.345.678/0001-95" }) // true
validaCNPJ({ value: "12345678000195" })     // true
validaCNPJ({ value: "93.JI3.OB5/0001-94" }) // true
validaCNPJ({ value: "00.000.000/0000-00" }) // false
validaCNPJ({ value: "11.111.111/1111-11" }) // false
validaCNPJ({ value: "" })                   // false
```

## Testes

O projeto inclui uma suíte de testes. Para executar os testes:

```bash
npm test
```
## Casos de Teste Incluídos

- Validação de CNPJ com formatação
- Validação de CNPJ sem formatação
- Verificação de dígitos verificadores inválidos
- Suporte a CNPJ alfanumérico
- Validação de comprimento incorreto
- Verificação de dígitos repetidos
- Tratamento de CNPJ vazio
- Validação de caracteres inválidos