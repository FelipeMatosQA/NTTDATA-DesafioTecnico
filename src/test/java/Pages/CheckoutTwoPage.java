package Pages;

import Runner.RunCucumberTest;
import org.junit.Assert;
import org.openqa.selenium.By;

import static Suport.Comands.*;

public class CheckoutTwoPage extends RunCucumberTest {

    private By nameItem = By.xpath("//div[@class=\"cart_item\"][1]//div[@class=\"inventory_item_name\"]");

    private By priceItem = By.xpath("//div[@class=\"cart_item\"][1]//div[@class=\"inventory_item_price\"]");

    private By totalPrice = By.cssSelector(".summary_subtotal_label");

    private By taxPrice = By.cssSelector(".summary_tax_label");

    private By totalPriceSumTax = By.cssSelector(".summary_info_label.summary_total_label");

    private By finishBtn = By.id("finish");

    public void validateNameItem(){
        InventoryPage inventoryPage = new InventoryPage();
        checkText(nameItem,inventoryPage.getNameItem());
    }

    public void validateTotalPrice(){
       float itemValue = convertStringToFloat(totalPrice);
       float taxValue =  convertStringToFloat(taxPrice);
       float totalSum = itemValue + taxValue;

       float totalValue = convertStringToFloat(totalPriceSumTax);
       floatAssert(totalSum,totalValue);
    }

    public void clickFinishBtn(){
        clickElement(finishBtn);
        validateCurrentUrl("https://www.saucedemo.com/checkout-complete.html");
    }

}
