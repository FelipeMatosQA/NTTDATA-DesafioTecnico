package Pages;

import Runner.RunCucumberTest;
import Suport.Comands;
import org.openqa.selenium.By;

import static Suport.Comands.*;

public class CheckoutOnePage extends RunCucumberTest {

    private By fistNameField = By.id("first-name");

    private By lastNameField = By.id("last-name");

    private By postalCodeField = By.id("postal-code");

    private By continueBtn = By.id("continue");

    private By errorMessage = By.xpath("//h3[@data-test=\"error\"]");

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
        clickElement(continueBtn);
    }

    public void completeCheckout(String fistName, String lastName, String postalCode){
        fillFirstNameField(fistName);
        fillLastNameFIeld(lastName);
        fillPostalCode(postalCode);
        clickBtnContinue();
    }

    public void validateMessageError(String message){
        checkText(errorMessage,message);
    }
}
