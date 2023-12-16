package Steps;

import Pages.CheckoutOnePage;
import Pages.CheckoutTwoPage;
import Pages.LoginPage;
import Suport.ScreenShotUtils;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class MultiplosUsuariosSteps {

    CheckoutOnePage checkoutOnePage = new CheckoutOnePage();
    LoginPage loginPage = new LoginPage();
    CheckoutTwoPage checkoutTwoPage = new CheckoutTwoPage();

    @Dado("^que foi incluido \"([^\"]*)\" e \"([^\"]*)\"$")
    public void que_foi_incluido_e(String login, String password){
        loginPage.fillUsername(login);
        loginPage.fillPassword(password);
    }

    @Quando("^clicar em Login$")
    public void clicar_em_Login(){
        loginPage.clickLogin();
    }

    @Entao("^sera exibido \"([^\"]*)\"$")
    public void sera_exibido(String message){
        loginPage.validadeErrorMessage(message);
    }

    @Entao("^e exibido \"([^\"]*)\" de erro$")
    public void eExibidoDeErro(String message){
        checkoutOnePage.validateMessageError(message);
    }

    @Entao("^a compra nao foi efetuada$")
    public void aCompraNaoFoiEfetuada() {
        checkoutTwoPage.valdateCurrentUrl();
    }

    @After
    public static void afterScenario(Scenario scenario) {
        ScreenShotUtils.takeScreenshotOnScenario(scenario);
    }
}
