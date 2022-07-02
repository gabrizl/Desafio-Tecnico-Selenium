# Desafio-tecnico-testes-automatizados-Selenium

<div>

1) Qual a diferença entre Testes e Qualidade?

```
A diferença entre testes e qualidade é que teste avalia a funcionalidade de uma parte enquanto o teste avalia o produto num todo.
```

2) Como é o processo de testes ideal para você? O que ele precisa conter para ser um processo minimamente ideal? 

```
Primeiro deve ser Levantado os requisitos e funções da aplicação para depois ser elaborado um plano de testes seguindo o fluxo padrão e também suas excessões.
```
  
3) Como Testes/Qualidade atua na metodologia Ágil? Qual a principal diferença na
atuação em relação à metodologia Waterfall (Cascata)?

```
Ainda estou aprendendo egenharia de software e devido a alguns problemas da universidade houve um atraso na disciplina e ainda não consegui estudar metodologias ageis
```
</div>

#Bug report

CT- aceitar termos de serviço e realizar compra

PRÉ REQUISITO: 
```
O usuário deve logar no sistema como um usuário do tipo gestor.
```
PASSO A PASSO:
```
1. Autenticação no sistema;
2. Clique no botão "Dresses";
3. Selecione o vestido escolhido';
4. Adicione o vestido no carrinho;
5. Clique em "Proceed to checkout";
6. Clique em "Proceed to checkout";
7. Clique em "Proceed to checkout";
8. Aceite os termos de serviço;
9. Clique em "Proceed to checkout";
10. Selecionar a forma de pagamento;
11. Clique no botão "I confirm my order" para finalizar o pedido"
```
RESULTADO ATUAL:
```
Nos testes automatizados não é possível selecionar a checkbox para aceitar os termos e prosseguir com a compra.
```
RESULTADO ESPERADO: 
```
O teste deveria marcar a checkbox e realizar a compra do vestido concluindo o teste.
```
