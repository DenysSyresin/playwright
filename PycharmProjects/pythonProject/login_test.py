from test_user_data import LoginUserData


def test_example_is_working(page):
    page.goto("https://molo:victoria@uat.molofinance.com")
    assert page.inner_text('h2') == "Why get an online buy-to-let mortgage?"
    page.click('text="Apply now"')
    assert page.inner_text('h1') == "Let's get started"
    page.click('text="Log in"')
    page.fill('input[name="email"]', LoginUserData.broker.get('email'))
    page.fill('input[name="password"]', LoginUserData.broker.get('password'))
    page.click('button[type="submit"]')
    assert page.inner_text('h1') == "Start a new application" or "Routing"

