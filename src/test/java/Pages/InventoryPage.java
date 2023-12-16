package Pages;

import Runner.RunCucumberTest;
import Suport.Utils;
import org.apache.commons.lang3.text.StrSubstitutor;
import org.openqa.selenium.By;

import java.util.HashMap;

import static Suport.Comands.*;
import static javax.swing.UIManager.put;

public class InventoryPage extends RunCucumberTest {

    public static String priceItem = null;

    public static String nameItem = null;

    private String genericItemName = "//div[@class=\"inventory_item\"][%s]//div[@class=\"inventory_item_name \"]";

    private String genericPriceItem = "//div[@class=\"inventory_item\"][%s]//div[@class=\"inventory_item_price\"]";

    private String gemericBtnAddToCart = "//div[@class=\"inventory_item\"][%s]//button";

    private By cartBtn = By.id("shopping_cart_container");

    private By navBar = By.id("react-burger-menu-btn");

    private By navBarLogOut = By.id("logout_sidebar_link");

    public String getNameItemByIndex(String index){
        String xpath = String.format(genericItemName,index);
        return getTextElement(By.xpath(xpath));
    }

    public String getPriceItem(){
        return priceItem;
    }

    public String getNameItem(){
        return nameItem;
    }

    public String getPriceItemByIndex(String index){
        String xpath = String.format(genericPriceItem,index);
        return getTextElement(By.xpath(xpath));
    }

    public void clickAddToCartByIndex(String index){
        String xpath = String.format(gemericBtnAddToCart,index);
        By element = By.xpath(xpath);
        clickElement(element);
        checkText(element,"Remove");
    }

    public void selectItemByIndex(String index){

        nameItem = getNameItemByIndex(index);
        priceItem = getPriceItemByIndex(index);
        clickAddToCartByIndex(index);

    }

    public void clickCartButton(){
        clickElement(cartBtn);
        Utils.waitToElementBeVisible(By.id("checkout"),10);
    }

    public void logout(){
        clickElement(navBar);
        clickElement(navBarLogOut);
        validateCurrentUrl("https://www.saucedemo.com/");
    }



}
