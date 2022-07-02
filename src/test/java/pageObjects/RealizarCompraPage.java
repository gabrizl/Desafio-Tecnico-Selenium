package pageObjects;

import static utils.Utils.driver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

public class RealizarCompraPage {
	@FindBy(xpath = "//div[6]/ul/li[2]/a")
	private WebElement botaoDresses;
	
	@FindBy(xpath = "//div[2]/h5")
	private WebElement selecionarVestido;
	
	@FindBy(id = "add_to_cart")
	private WebElement botaoAdicionarCarrinho;
	
	@FindBy(xpath = "//div[4]/a/span")
	private WebElement botaoProceedCheckout;
	
	@FindBy(xpath = "//div[3]/div/p[2]/a/span")
	private WebElement botaoProceedToCheckout;
	
	@FindBy(css = ".button:nth-child(4) > span")
	private WebElement botaoProceedToCheckoutAddress;
	
	@FindBy(id = "cgv")
	private WebElement caixaAceitarTermos;
	
	@FindBy(css = ".standard-checkout > span")
	private WebElement botaoProceedToCheckoutTermos;
	
	@FindBy(css = ".bankwire")
	private WebElement selecionarFormaDePagamento;
	
	@FindBy(className = "button btn btn-default button-medium")
	private WebElement botaoConfirmarPedido;
	
	@FindBy(xpath = "(//a[contains(text(),'Casual Dresses')])[2]")
	private WebElement selecionarCategoria;
	
	@FindBy(xpath = "(//a[contains(text(),'Dresses')])[5]")
	private WebElement abaCategoria;
	
	@FindBy(linkText = "Casual Dresses")
	private WebElement selecionarCategoriaLateral;
	
	@FindBy(css = "cheque > span")
	private WebElement selecionarPagamentoCheck;
	
	public void botaoDresses() {
		botaoDresses.click();
		botaoDresses.click();
	}
	
	public void selecionarVestido() {
		selecionarVestido.click();
		selecionarVestido.click();
	}
	
	public void botaoAdicionarCarrinho() {
		botaoAdicionarCarrinho.click();
	}
	
	public void botaoProceedCheckout() {
		botaoProceedCheckout.click();
	}
	
	public void botaoProceedToCheckout() {
		botaoProceedToCheckout.click();
	}
	
	public void botaoProceedToCheckoutAddress() {
		botaoProceedToCheckoutAddress.click();
	}
	
	public void botaoAceitarTermosEContinuar() {
		caixaAceitarTermos.click();
		botaoProceedToCheckoutTermos.click();
	}
	
	public void botaoProceedToCheckoutTermos() {
		botaoProceedToCheckoutTermos.click();
	}
	
	public void selecionarFormaDePagamento() {
		selecionarFormaDePagamento.click();
	}
	
	public void selecionarBankwire() {
		selecionarFormaDePagamento.click();
	}
	
	public void selecionarCheck() {
		selecionarPagamentoCheck.click();
	}
	
	public void confirmarPedido() {
		botaoConfirmarPedido.click();
	}
	
	public void selecionarCategoria() {
		
	}
	

	public void selecionarCategoriaLateral() {
		selecionarCategoriaLateral.click();
	}
	public void realizarCompraDireta() {
		botaoDresses();
		selecionarVestido();
		botaoAdicionarCarrinho();
		botaoProceedCheckout();
		botaoProceedToCheckout();
		botaoProceedToCheckoutAddress();
		botaoAceitarTermosEContinuar();
		selecionarFormaDePagamento();
		confirmarPedido();
	}
	
	
	public void realizarCompraPorCategoria() {
		Actions acao = new Actions(driver);
		acao.moveToElement(abaCategoria).build().perform();
		acao.moveToElement(selecionarCategoria).click().build().perform();
		
	}
	
	public void realizarCompraPorCategoria2() {
		selecionarCategoriaLateral();
		
	}
	
	public void RealizarCompraComBankwire() {
		selecionarBankwire();
	}
	
	public void RealizarCompraComCheck() {
		selecionarCheck();
	}

}
