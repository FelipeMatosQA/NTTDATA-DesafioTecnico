package Suport;

import Runner.RunCucumberTest;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Random;

public class Utils extends RunCucumberTest {

    public static void waitToElementBeClicable(By element, int time){

        WebDriverWait wait = new WebDriverWait(getDriver(),time);
        wait.until(ExpectedConditions.elementToBeClickable(element));

    }

    public static void waitToElementBeVisible(By element, int time){

        WebDriverWait wait = new WebDriverWait(getDriver(), time);
        wait.until(ExpectedConditions.visibilityOfElementLocated(element));

    }

    public static String gerarEmailAleatorio(){

        String email_init = "seleniumEmail";
        String email_final = "@yopmail.com";

        Random random = new Random();

        int minimo = 1;
        int maximo = 999999;
        int resultado = random.nextInt(maximo-minimo) + minimo;

        return email_init + resultado + email_final;
    }
}
