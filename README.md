# About this project 

On this portfolio automation project, I have tested the application "https://www.saucedemo.com/", this application
is a demo E-commerce website for automation tests. I've used tools like Selenium WebDriver,Java, Junit, Cucumber to write the Cenarios using Gherkin
following the BDD methodology. I also have used the design pattern "Page Objects" to have better maintenance and reusability of the code.
The plugin "Cluecumber-report" has been used to generate the execution artifact after each execution with all reference data of the last test execution.
For the execution of the suit test, was configured a pipeline execution using GitHub Actions, with a [PR] as the trigger of the execution.

By rule of the project, the  BDD Cenarios were written in Portuguese.


# Pre-requirements
1. JDK 1.8+
2. Maven
3. Browser driver (Be certified that the version used is compatible with your browser).

# Running the project

If you want to experiment with running this project, you'll need to Clone it first.

To clone this project from Github, run these commands:

```
# Clone this repository to a local directory.

git clone https://github.com/FelipeMatosQA/Selenium-Cucumber-JAVA-e2e.git
cd Selenium-Cucumber-e2e

# To run the tests use the command below.
# Depending on the chosen browser, modify the property "browser" for the values "chrome", "firefox", or "chrome-ci" if you want to run it on headless mode.
mvn test -Dtest=RunCucumberTest -Dbrowser=browser

# To execute the report use the command below.

mvn cluecumber-report:reporting
```
# Report

Was used the pluggin "Cluecumber-report" to generate execution reports of the tests. The plugin shows detailed information of the execution using graphs and metrics, How you can see in the image below.

![REPORT](https://github.com/FelipeMatosQA/NTTDATA-DesafioTecnico/assets/121990373/10be4d2b-ede3-4456-b999-5f70853e8471)


# Screenshot Hook

Moreover, was created a hook, that will annex the screenshot of each step, as demonstrated below.


![anex print](https://github.com/FelipeMatosQA/NTTDATA-DesafioTecnico/assets/121990373/50c2cf34-0d21-4dc3-ab94-a580f570cef5)


# Pipeline 

Was configured an execution pipeline using GitHub Actions, to access the WorkFlow of the executions, you have to navigate to the session "Actions" of this repository, or click this link "https://github.com/FelipeMatosQA/Selenium-Cucumber-JAVA-e2e/actions".

After each pipeline execution, the artifact(report) will be annexed and linked to the workflow, you can see the example below. 



![pipeline2](https://github.com/FelipeMatosQA/NTTDATA-DesafioTecnico/assets/121990373/82d4fb44-1802-4e5e-92f5-168737d21819)

Also was configured a Slack notification that will inform the situation of the workflow execution, example below:

![slack](https://github.com/FelipeMatosQA/NTTDATA-DesafioTecnico/assets/121990373/e8956421-e17f-4469-a3a7-d263887f11d6)








