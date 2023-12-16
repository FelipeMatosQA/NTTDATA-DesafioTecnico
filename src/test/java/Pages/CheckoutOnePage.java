package Pages;

import Runner.RunCucumberTest;
import Suport.Comands;
import org.openqa.selenium.By;

import static Suport.Comands.clickElement;
import static Suport.Comands.fillField;

public class CheckoutOnePage extends RunCucumberTest {

    private By fistNameField = By.id("first-name");

    private By lastNameField = By.id("last-name");

    private By postalCodeField = By.id("postal-code");

    private By btnContinue = By.id("continue");

    public void fillFirstNameField(String firstName){
        fillField(fistNameField,firstName);
    }

    public void fillLastNameFIeld(String lastName){
        fillField(lastNameField,lastName);
    }

    public void fillPostalCode(String postalCode){
        fillField(postalCodeField,postalCode);
    }

    public void clickBtnContinue(){
        clickElement(btnContinue);
    }

    public void completeCheckout(String fistName, String lastName, String postalCode){
        fillFirstNameField(fistName);
        fillLastNameFIeld(lastName);
        fillPostalCode(postalCode);
        clickBtnContinue();
    }
}
