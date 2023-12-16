package Pages;

import Runner.RunCucumberTest;
import org.openqa.selenium.By;

import static Suport.Comands.checkText;

public class CheckoutCompletePage extends RunCucumberTest {

    private By checkoutComplete = By.className("title");

    private By thankYouMessage = By.className("complete-header");

    private By orderMessage = By.className("complete-text");

    public void validatePurchase(){
        checkText(checkoutComplete,"Checkout: Complete!");
        checkText(thankYouMessage,"Thank you for your order!");
        checkText(orderMessage,"Your order has been dispatched, and will arrive just as fast as the pony can get there!");

    }
}
