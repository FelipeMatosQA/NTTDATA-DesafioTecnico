# Sobre o projeto
Desafio técnico referente à vaga de Quality Assurance Engeneer da NTTDATA, o projeto segue a estrutura passada do desafio. A aplicação testada foi "https://www.saucedemo.com/", que é um site de demonstração
 de E-commerce para automação de testes.Utilizei Java, Junit, Selenium WebDriver, Cucumber para escrita dos casos de testes em Gherkin utilizando da metodologia BDD, foi utilizado o padrão de projeto Page Objects visando organização, legibilidade e reutilização de código.
O Plugin "Cluecumber-report" gera o artefato após cada execução com todos os dados referentes à ultima execução.Quanto a execução dos testes foi configuradas uma pipelines de execução remota GitHub Actions, tendo como Trigger um [PR].

Os itens solicitados no desafio receberam uma tag respectiva de cada item ex: "@Item-1,@Item-2" itens que estavam fora do escopo receberam a tag "@Extra".

# Pré requisitos 
1. JDK 1.8+
2. Maven
3. Browser driver (Certifique-se de que a versão utilizada é compativel com o seu navegador).

# Rodando o projeto

Se você deseja executar esse projeto primeiro você precisa clonar este repositório.

Para clonar o repositório execute esses comandos:

```
# Clone o repositório para um diretorio local e acesse a pasta.

git clone https://github.com/FelipeMatosQA/NTTDATA-DesafioTecnico.git
cd NTTDATA-DesafioTecnico

# Para executar os testes utilize o comando.
# De acordo com o browser escolhido,substitua a propriedade "browser" pelos valores "chrome","firefox" ou "chrome-ci" para executar os testes em modo headless.
mvn test -Dtest=RunCucumberTest -Dbrowser=browser

# Executar o relatório.

mvn cluecumber-report:reporting
```
# Report

Foi utilizado  o plugin "Cluecumber-report" para geração de relatórias de execução. O plugin exibe informações detalhas da execução utilizando de gráficos e métricas, como demonstrado na imagem abaixo.

![REPORT](https://github.com/FelipeMatosQA/NTTDATA-DesafioTecnico/assets/121990373/10be4d2b-ede3-4456-b999-5f70853e8471)


# Hook de Screenshot

Além disso foi criado um Hook que irá tirar e anexar o print da execução nos steps, como demonstrado abaixo.


![anex print](https://github.com/FelipeMatosQA/NTTDATA-DesafioTecnico/assets/121990373/50c2cf34-0d21-4dc3-ab94-a580f570cef5)


# Pipeline 

Foi criada uma pipeline de execução de demonstração utilizando o GitHub Actions, para acessar os WorkFlors das execuções basta seguir na aba "Actions" deste repositório ou visitar o link "https://github.com/FelipeMatosQA/NTTDATA-DesafioTecnico/actions".

Após cada execução da Pipeline o artefato de execução(report) é anexado e vinculado ao workflow, veja o exemplo abaixo:

![pipeline2](https://github.com/FelipeMatosQA/NTTDATA-DesafioTecnico/assets/121990373/82d4fb44-1802-4e5e-92f5-168737d21819)

Também foi configurado uma notificação no Slack que irá informar da situação da execução do WorkFlow, exemplo abaixo:

![slack](https://github.com/FelipeMatosQA/NTTDATA-DesafioTecnico/assets/121990373/e8956421-e17f-4469-a3a7-d263887f11d6)

Qualquer dúvida ou comunicação estou disponição no email: felipematosbs@gmail.com






