package Steps;

import Runner.RunCucumberTest;
import cucumber.api.java.pt.Dado;

import java.util.List;

public class TestStep extends RunCucumberTest {

    @Dado("^teste$")
    public void teste() {
        getDriver(System.getProperty("browser"));
        getDriver().get("https://www.google.com");

    }



}
