package Pages;

import Runner.RunCucumberTest;
import Suport.Utils;

import org.openqa.selenium.By;


import static Suport.Comands.*;


public class InventoryPage extends RunCucumberTest {

    public static String priceItem = null;

    public static String nameItem = null;

    public static String priceItem2 = null;

    public static String nameItem2 = null;

    private String genericItemName = "//div[@class=\"inventory_item\"][%s]//div[@class=\"inventory_item_name \"]";

    private String genericPriceItem = "//div[@class=\"inventory_item\"][%s]//div[@class=\"inventory_item_price\"]";

    private String genericBtnAddToCart = "//div[@class=\"inventory_item\"][%s]//button";

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

    public String getPriceItem2(){
        return priceItem2;
    }

    public String getNameItem(){
        return nameItem;
    }

    public String getNameItem2(){
        return nameItem2;
    }

    public String getPriceItemByIndex(String index){
        String xpath = String.format(genericPriceItem,index);
        return getTextElement(By.xpath(xpath));
    }

    public void clickAddToCartByIndex(String index){
        String xpath = String.format(genericBtnAddToCart,index);
        By element = By.xpath(xpath);
        clickElement(element);
        checkText(element,"Remove");
    }

    public void selectItemByIndex(String index){

        nameItem = getNameItemByIndex(index);
        priceItem = getPriceItemByIndex(index);
        clickAddToCartByIndex(index);
    }

    public void selectSecondItemByIndex(String index2){
        nameItem2 = getNameItemByIndex(index2);
        priceItem2 = getPriceItemByIndex(index2);
        clickAddToCartByIndex(index2);
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
