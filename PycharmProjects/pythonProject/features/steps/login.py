from behave import *
from selenium import webdriver

@given('I launch browser')
def launchBrowser(context):
    context.driver = webdriver.Chrome()

@when('I open login page')
def openHomePage(context):
    context.driver.get("https://@uat.molofinance.com/apply/login")

@then('I see Log in to your account text')
def findButton(context):
    status = context.driver.find_element_by_xpath("//h1[contains(text(),'Log in to your account')]").is_displayed()
    assert status is True

@when('Enter email "{email}" and password "{pwd}"')
def openHomePage(context, email, pwd):
    context.driver.find_element_by_xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[1]/input[1]").send_keys(email)
    context.driver.find_element_by_xpath( "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]").send_keys(pwd)

@when('I click on Log in button')
def openHomePage(context):
    context.driver.find_element_by_xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/button[1]").click()

@then('I see New application button')
def findText(context):
    status = context.driver.find_element_by_xpath("//header/div[1]/div[1]/div[2]/a[1]").is_displayed()
    assert status is True

@then('I close browser')
def closeBrowser(context):
    context.driver.close()



