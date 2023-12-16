package Suport;

import Runner.RunCucumberTest;
import org.junit.Assert;
import org.openqa.selenium.By;

public class Comands extends RunCucumberTest {

    public static void clickElement(By element){
        System.out.println("######################################");
        Utils.waitToElementBeClicable(element,10);
        getDriver().findElement(element).click();
        System.out.println("Clicou no elemento "+ element);
        System.out.println("######################################");
    }

    public static void fillField(By element,String value){
        System.out.println("######################################");
        Utils.waitToElementBeVisible(element, 10);
        getDriver().findElement(element).sendKeys(value);
        System.out.println("Preencheu o campo "+ element);
        System.out.println("######################################");
    }

    public static void checkText(By element, String expectedMensage){
        System.out.println("######################################");
        Utils.waitToElementBeVisible(element,10);
        Assert.assertEquals("Erro ao validar a mensagem.",expectedMensage,getTextElement(element));
        System.out.println("Validou a mensagem "+ expectedMensage);
        System.out.println("######################################");
    }
    public static void simpleAssert(String expectedValue, String currentValue){
        Assert.assertEquals(expectedValue,currentValue);
    }

    public static void floatAssert(float value1, float value2){
        Assert.assertEquals(value1,value2,0.001f);
    }

    public static void validateCurrentUrl(String expectedUrl){
        simpleAssert(expectedUrl,getDriver().getCurrentUrl());
    }

    public static String getTextElement(By element){
        return getDriver().findElement(element).getText();
    }

}
