package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {
	
	@FindBy(className = "login")
	private WebElement botaoSignIn;
	
	@FindBy(id = "email")
	private WebElement campoUsuario;
	
	@FindBy(id = "passwd")
	private WebElement campoSenha;
	
	@FindBy(id = "SubmitLogin")
	private WebElement botaoLogin;
	
	public void acionarBotaoSignIn() {
		botaoSignIn.click();
	}
	
	public void informarCampoUsuario(String usuario) {
		campoUsuario.sendKeys(usuario);
	}
	
	public void informarCampoSenha(String senha) {
		campoSenha.sendKeys(senha);
	}
	
	public void acionarBotaoLogin() {
		botaoLogin.click();
	}
	
	public void realizarLogin(String usuario, String senha) {
		acionarBotaoSignIn();
		informarCampoUsuario(usuario);
		informarCampoSenha(senha);
		acionarBotaoLogin();
	}
}
