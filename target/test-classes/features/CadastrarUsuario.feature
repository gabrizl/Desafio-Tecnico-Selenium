#language: pt
#enconding: UTF-8

@CadastrarUsuario
Funcionalidade: Cadastrar usuario
	
	@cadastro
	Cenario: Cadastrar usuario
		Quando eu acionar a aba admin
		E acionar o botao add
		E informar no campo employer name "Rebecca Harmony"
		E informar no campo username "Rebecca"
		E informar no campo password "12345678"
		E informar no campo confirm password "12345678"
		E acionar o botao salvar
		Entao o sistema cadastra o usuario "Rebecca"
	