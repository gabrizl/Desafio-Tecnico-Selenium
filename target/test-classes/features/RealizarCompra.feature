#language: pt
#enconding: UTF-8

@RealizarCompra
Funcionalidade: Realizar compra do vestido do tipo casual
	
	@RealizarCompraDireta
	Cenario: Realizar compra direta
		Quando eu clicar no botao dresses
		E selecionar o vestido certo
		E adicionar o vestido no carrinho
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E aceitar os termos de servico
		E selecionar o botao proceed to checkout
		E Selecionar a forma de pagamento 
		E confirmar pedido
		Entao o sistema informa que o pedido foi realizado
	
	@RealizarCompraPorCategoria
		Cenario: Comprar Vestido Casual selecionando categoria
		Quando eu clicar no botao dresses
		E selecionar a categoria casual dresses
		E selecionar o vestido certo
		E adicionar o vestido no carrinho
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E aceitar os termos de servico
		E selecionar o botao proceed to checkout
		E Selecionar a forma de pagamento 
		E confirmar pedido
		Entao o sistema informa que o pedido foi realizado
		
		
		@RealizarCompraPorCategoria2
		Cenario: Comprar Vestido Casual selecionando categoria
		Quando eu clicar no botao dresses
		E selecionar a categoria casual dresses pela lateral esquerda do site
		E selecionar o vestido certo
		E adicionar o vestido no carrinho
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E aceitar os termos de servico
		E selecionar o botao proceed to checkout
		E Selecionar a forma de pagamento 
		E confirmar pedido
		Entao o sistema informa que o pedido foi realizado
		
		
		@RealizarCompraComBankwire
	Cenario: Realizar compra usando metodo de pagamento bankwire
		Quando eu clicar no botao dresses
		E selecionar o vestido certo
		E adicionar o vestido no carrinho
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E aceitar os termos de servico
		E selecionar o botao proceed to checkout
		E Selecionar a forma de pagamento Bankwire
		E confirmar pedido
		Entao o sistema informa que o pedido foi realizado
		
		
		@RealizarCompraComCheck
	Cenario: Realizar compra usando usando metodo de pagamento check
		Quando eu clicar no botao dresses
		E selecionar o vestido certo
		E adicionar o vestido no carrinho
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E aceitar os termos de servico
		E selecionar o botao proceed to checkout
		E Selecionar a forma de pagamento Check
		E confirmar pedido
		Entao o sistema informa que o pedido foi realizado
		
		
		@RealizarCompraSemAceitarTermos
	Cenario: Realizar compra sem aceitar os termos de serviço
		Quando eu clicar no botao dresses
		E selecionar o vestido certo
		E adicionar o vestido no carrinho
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		E selecionar o botao proceed to checkout
		Entao o sistema informa que é necessário aceitar os termos de servico