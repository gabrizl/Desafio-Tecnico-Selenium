package stepsDefinitions;

import io.cucumber.java.it.Quando;
import io.cucumber.java.pt.Entao;
import pageObjects.LoginPage;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class LoginSteps {
	
	@Quando("eu clicar no botao de sign in")
	public void euClicarNoBotaoDeSignIn() {
	 Na(LoginPage.class).acionarBotaoSignIn();
	}
	
	@Quando("eu informa o usuario {string}")
	public void euInformaOUsuario(String usuario) {
		Na(LoginPage.class).informarCampoUsuario(usuario);
	}

	@Quando("informar a senha {string}")
	public void informarASenha(String senha) {
		Na(LoginPage.class).informarCampoSenha(senha);
	}

	@Quando("clicar no botao de login")
	public void clicarNoBotaoDeLogin() {
		Na(LoginPage.class).acionarBotaoLogin();
	}

	@Entao("o sistema exibe a mensagem de usuario invalido")
	public void oSistemaExibeAMensagemDeUsuarioInvalido() {
		assertEquals("Invalid credentials", driver.findElement(By.id("spanMessage")).getText());
	}

	@Entao("o sistema exibe o usuario logado")
	public void oSistemaExibeOUsuarioLogado() {
		assertTrue(driver.findElement(By.className("account")).getText().contains("John Anderson"));
	}

}
