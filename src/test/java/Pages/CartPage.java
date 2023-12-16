package Pages;

import Runner.RunCucumberTest;

import org.openqa.selenium.By;

import static Suport.Comands.checkText;
import static Suport.Comands.clickElement;

public class CartPage extends RunCucumberTest {

    private By nameItem = By.xpath("//div[@class=\"cart_item\"][1]//div[@class=\"inventory_item_name\"]");

    private By priceItem = By.xpath("//div[@class=\"cart_item\"][1]//div[@class=\"inventory_item_price\"]");

    private By priceItem2 = By.xpath("//div[@class=\"cart_item\"][2]//div[@class=\"inventory_item_price\"]");

    private By btnCheckout = By.id("checkout");

    public void validatePriceItem(Integer index){
        InventoryPage inventoryPage = new InventoryPage();
        if(index == 1) {
            checkText(priceItem, inventoryPage.getPriceItem());
        }else if(index == 2){
            checkText(priceItem2, inventoryPage.getPriceItem2());
        }
    }

    public void validatePriceItem(){
        InventoryPage inventoryPage = new InventoryPage();
        checkText(priceItem, inventoryPage.getPriceItem());
    }

    public void validateNameItem(){
        InventoryPage inventoryPage = new InventoryPage();
        checkText(nameItem,inventoryPage.getNameItem());
    }

    public void clickBtnCheckout(){
        clickElement(btnCheckout);
    }
}
