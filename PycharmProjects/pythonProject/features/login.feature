Feature: showing off behave

  Scenario: run a simple test
     Given I launch browser
     When I open login page
     Then I see Log in to your account text
     When Enter email "Kateryna.Budanova@djangostars.com" and password "1QAZ2wsx!"
     When I click on Log in button
     Then I see New application button
     Then I close browser