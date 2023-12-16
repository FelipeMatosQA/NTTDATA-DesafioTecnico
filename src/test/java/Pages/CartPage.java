package Pages;

import Runner.RunCucumberTest;

import org.openqa.selenium.By;

import static Suport.Comands.checkText;

public class CartPage extends RunCucumberTest {

    private By nameItem = By.xpath("//div[@class=\"cart_item\"][1]//div[@class=\"inventory_item_name\"]");

    private By priceItem = By.xpath("//div[@class=\"cart_item\"][1]//div[@class=\"inventory_item_price\"]");



    public void validatePriceItem(){
        InventoryPage inventoryPage = new InventoryPage();
        checkText(priceItem,inventoryPage.getPriceItem());
    }

    public void validateNameItem(){
        InventoryPage inventoryPage = new InventoryPage();
        checkText(nameItem,inventoryPage.getNameItem());

    }
}
