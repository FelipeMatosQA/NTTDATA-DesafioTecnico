package Suport;


import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.text.SimpleDateFormat;
import java.util.Date;

import static Runner.RunBase.getDriver;

public class ScreenShotUtils {

    public static void takeScreenshotOnScenario(Scenario scenario){



        System.out.println("+++++++++++++");
        System.out.println("Teste sendo exectado" + scenario.getName());
        System.out.println("Status: " + scenario.getStatus());
        System.out.println("Tag: " + scenario.getSourceTagNames());

        byte[] screenshot = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.BYTES);

        Date now = new Date();
        //define o formato de data
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd_HH-mm-ss");
        //hora de execução
        String timestamp = dateFormat.format(now);
        //nome do arquivo
        String filename = scenario.getName() + "_" + timestamp + ".jpg";
        //Anexa screenshot
        scenario.attach(screenshot, "image/jpg", filename);


    }
}
