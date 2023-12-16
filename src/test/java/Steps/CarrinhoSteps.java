package Steps;

import Pages.CartPage;
import Pages.InventoryPage;
import Pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class CarrinhoSteps {

    LoginPage loginPage = new LoginPage();
    InventoryPage inventoryPage = new InventoryPage();
    CartPage cartPage = new CartPage();

    @Dado("^Que eu acessei a aplicacao$")
    public void que_eu_acessei_a_aplicacao() {
        loginPage.accessApp();
    }

    @Dado("^Que o usuario efetuou login incluindo \"([^\"]*)\" e \"([^\"]*)\"$")
    public void que_o_usuario_efetuou_login_incluindo_e(String username, String password){
        loginPage.fillUsername(username);
        loginPage.fillPassword(password);
        loginPage.clickLogin();
        loginPage.validateLogin();
    }

    @Quando("^o carrinho e acessado$")
    public void o_carrinho_e_acessado() {
        inventoryPage.clickCartButton();
    }

    @Entao("^o produto e adicionado ao carrinho$")
    public void o_produto_e_adicionado_ao_carrinho()  {
        cartPage.validatePriceItem();
        cartPage.validateNameItem();
    }

    @Quando("^um item \"([^\"]*)\"e adicionado ao carrinho$")
    public void umItemEAdicionadoAoCarrinho(String index) {
        inventoryPage.selectItemByIndex(index);
    }

    @E("^e feito logout$")
    public void eFeitoLogout() {
        inventoryPage.logout();
    }
}
