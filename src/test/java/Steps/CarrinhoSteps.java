package Steps;

import Pages.CartPage;
import Pages.InventoryPage;
import Pages.LoginPage;
import Suport.ScreenShotUtils;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.junit.AfterClass;

import java.io.IOException;

public class CarrinhoSteps {

    LoginPage loginPage = new LoginPage();
    InventoryPage inventoryPage = new InventoryPage();
    CartPage cartPage = new CartPage();

    @Dado("^Que eu acessei a aplicacao$")
    public void que_eu_acessei_a_aplicacao(){
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

    @Quando("^multiplos itens\"([^\"]*)\" \"([^\"]*)\" sao adicionados ao carrinho$")
    public void multiplosItensSaoAdicionadosAoCarrinho(String index1, String index2) {
        inventoryPage.selectItemByIndex(index1);
        inventoryPage.selectSecondItemByIndex(index2);
    }

    @Entao("^os produtos sao adicionados ao carrinho$")
    public void osProdutosSaoAdicionadosAoCarrinho() {
        cartPage.validatePriceItem();
        cartPage.validatePriceItem(2);
    }


    @Entao("^o icone do carrinho deve ser alterado com a quantidade de itens$")
    public void oIconeDoCarrinhoDeveSerAlteradoComAQuantidadeDeItens() {
        inventoryPage.validateNumberOfItensInTheCart("2");
    }

    @Dado("^que multiplos itens\"([^\"]*)\" \"([^\"]*)\" sao adicionados ao carrinho$")
    public void queMultiplosItensSaoAdicionadosAoCarrinho(String index1, String index2) {
        inventoryPage.selectItemByIndex(index1);
        inventoryPage.selectSecondItemByIndex(index2);
    }

    @Entao("^o icone do carrinho deve ser subtraido$")
    public void oIconeDoCarrinhoDeveSerSubtraido() {
        inventoryPage.validateNumberOfItensInTheCart("1");
    }

    @Quando("^o botao remover e clicado$")
    public void oBotaoRemoverEClicado() {
        inventoryPage.clickRemoveBtnFirstItem();
    }

    @AfterClass
    public static void afterScenario(Scenario scenario) {
        ScreenShotUtils.takeScreenshotOnScenario(scenario);
    }

}
