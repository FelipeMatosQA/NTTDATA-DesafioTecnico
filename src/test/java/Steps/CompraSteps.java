package Steps;

import Pages.*;
import Suport.ScreenShotUtils;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.ca.I;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class CompraSteps {
    InventoryPage inventoryPage = new InventoryPage();
    CartPage cartPage = new CartPage();
    CheckoutOnePage checkoutOnePage = new CheckoutOnePage();
    CheckoutTwoPage checkoutTwoPage = new CheckoutTwoPage();
    CheckoutCompletePage checkoutCompletePage = new CheckoutCompletePage();

    @E("^selecionou um produto \"([^\"]*)\"$")
    public void selecionouUmProduto(String index)  {
        inventoryPage.selectItemByIndex(index);
        inventoryPage.clickCartButton();
        cartPage.validateNameItem();
        cartPage.validatePriceItem();
        cartPage.clickBtnCheckout();
    }

    @Quando("^feito o checkout e preenchido \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void feito_o_checkout_e_preenchido(String fisrtName, String lastName, String postalCode){
        checkoutOnePage.completeCheckout(fisrtName,lastName,postalCode);
    }

    @Quando("^as informacoes de checkou sao exibidas$")
    public void as_informacoes_de_checkou_sao_exibidas(){

        checkoutTwoPage.validateNameItem();
        checkoutTwoPage.validateTotalPrice();

    }

    @Quando("^clicado em Finish$")
    public void clicado_em_Finish(){
        checkoutTwoPage.clickFinishBtn();

    }

    @Entao("^a compra e efetuada$")
    public void a_compra_e_efetuada() {
        checkoutCompletePage.validatePurchase();
    }

    @After
    public static void afterScenario(Scenario scenario) {
        ScreenShotUtils.takeScreenshotOnScenario(scenario);
    }



}
