package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BasePage {
	@FindBy(id = "menu_admin_viewAdminModule")
	WebElement abaAdmin;
	
	@FindBy(id = "menu_pim_viewPimModule")
	WebElement abaPim;
	
	@FindBy(id = "menu_pim_Configuration")
	WebElement menuConfiguration;
	
	@FindBy(id = "menu_pim_listCustomFields")
	WebElement menuField;
}
