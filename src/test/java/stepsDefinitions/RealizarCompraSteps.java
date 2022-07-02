package stepsDefinitions;

import static org.junit.Assert.assertTrue;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import cucumber.api.PendingException;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.RealizarCompraPage;

public class RealizarCompraSteps {
	@Quando("eu clicar no botao dresses")
	public void euClicarNoBotaoDresses() {
		Na(RealizarCompraPage.class).botaoDresses();
	}
	
	@E("^selecionar a categoria casual dresses$")
	public void selecionarACategoriaCasualDresses() throws Throwable {
		Na(RealizarCompraPage.class).selecionarCategoria();
	}
	
	@Quando("selecionar o vestido certo")
	public void selecionarOVestidoCerto() {
		Na(RealizarCompraPage.class).selecionarVestido();
	}

	@Quando("adicionar o vestido no carrinho")
	public void adicionarOVestidoNoCarrinho() {
		Na(RealizarCompraPage.class).botaoAdicionarCarrinho(); 
	}
	@Quando("selecionar o botao proceed to checkout")
	public void selecionarOBotaoProceedToCheckout() {
		Na(RealizarCompraPage.class).botaoProceedCheckout();
		Na(RealizarCompraPage.class).botaoProceedToCheckout();
		Na(RealizarCompraPage.class).botaoProceedToCheckoutAddress();
		Na(RealizarCompraPage.class).botaoProceedToCheckoutTermos();
	
	}

	@Quando("aceitar os termos de servico")
	public void aceitarOsTermosDeServico() {
		Na(RealizarCompraPage.class).botaoAceitarTermosEContinuar();
	}

	@Quando("Selecionar a forma de pagamento")
	public void selecionarAFormaDePagamento() {
		Na(RealizarCompraPage.class).selecionarFormaDePagamento();
	}

	@Quando("confirmar pedido")
	public void confirmarPedido() {
		Na(RealizarCompraPage.class).botaoDresses();
	}

	@Quando("selecionar a categoria casual dresses pela lateral esquerda do site")
	public void selecionarACategoriaCasualDressesPelaLateralEsquerdaDoSite() {
		Na(RealizarCompraPage.class).selecionarCategoriaLateral();
	}

	@E("^Selecionar a forma de pagamento Bankwire$")
	public void selecionarAFormaDePagamentoBankwire() throws Throwable {
		Na(RealizarCompraPage.class).RealizarCompraComBankwire();
	}
	
	@E("^Selecionar a forma de pagamento Check$")
	public void selecionarAFormaDePagamentoCheck() throws Throwable {
		Na(RealizarCompraPage.class).RealizarCompraComCheck();
	}
	@Entao("o sistema informa que o pedido foi realizado")
	public void oSistemaInformaQueOPedidoFoiRealizado() {
	    // Write code here that turns the phrase above into concrete actions
		assertTrue(driver.findElement(By.className("dark")).getText().contains("Your order on My Store is complete."));
	}
	@Entao("o sistema informa que ? necess?rio aceitar os termos de servico")
	public void oSistemaInformaQueNecessRioAceitarOsTermosDeServico() {
	    // Write code here that turns the phrase above into concrete actions
		assertTrue(driver.findElement(By.xpath("//p[contains(.,'You must agree to the terms of service before continuing.')]")).isDisplayed());
	}

	
}
