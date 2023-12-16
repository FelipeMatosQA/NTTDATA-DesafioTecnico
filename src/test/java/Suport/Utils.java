package Suport;

import Runner.RunCucumberTest;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



import static Suport.Comands.getTextElement;

public class Utils extends RunCucumberTest {

    public static void waitToElementBeClicable(By element, int time){

        WebDriverWait wait = new WebDriverWait(getDriver(),time);
        wait.until(ExpectedConditions.elementToBeClickable(element));

    }

    public static void waitToElementBeVisible(By element, int time){

        WebDriverWait wait = new WebDriverWait(getDriver(), time);
        wait.until(ExpectedConditions.visibilityOfElementLocated(element));

    }

    public static Float convertStringToFloat(By element){
        String stringValue = getTextElement(element);
        String numericValue = stringValue.replaceAll("[^0-9.]", "");
        float number = Float.parseFloat(numericValue);
        return number;
    }
}
