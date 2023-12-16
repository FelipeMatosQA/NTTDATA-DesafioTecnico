package Pages;

import Runner.RunCucumberTest;
import Suport.Utils;
import org.openqa.selenium.By;

import static Suport.Comands.*;


public class LoginPage extends RunCucumberTest {

    private By userNameField = By.id("user-name");

    private By passwordField = By.id("password");

    private By btnLogin = By.id("login-button");

    private By errorMsg =  By.cssSelector("h3[data-test =\"error\"]");


    public void accessApp(){
        getDriver(System.getProperty("browser"));
        getDriver().get("https://www.saucedemo.com/");
    }

    public void fillUsername(String username){
        fillField(userNameField,username);
    }

    public void fillPassword(String password){
        fillField(passwordField,password);
    }

    public void clickLogin(){
        clickElement(btnLogin);
    }

    public String errorMessageText(){
        return getTextElement(errorMsg);
    }

    public void validadeErrorMessage(String message){
        checkText(errorMsg,message);
    }

    public void validateLogin(){
        Utils.waitToElementBeVisible(By.className("app_logo"),10);
        validateCurrentUrl("https://www.saucedemo.com/inventory.html");
    }
}
