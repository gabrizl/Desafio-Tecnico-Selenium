#language: pt
#enconding: UTF-8

@login
Funcionalidade: Login

#	Cenario: Usuario invalido
#		Quando eu informa o usuario "Ad"
#		E informar a senha "asd"
#		E clicar no botao de login
#		Entao o sistema exibe a mensagem de usuario invalido
	
	@loginSucesso
	Cenario: Realizar login
		Quando eu clicar no botao de sign in
		E eu informa o usuario "exemplo@email.com"
		E informar a senha "admin123"
		E clicar no botao de login
		Entao o sistema exibe o usuario logado