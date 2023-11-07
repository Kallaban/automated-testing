from selenium import webdriver

# Ініціалізація веб-драйвера
browser = webdriver.Chrome()

try:
    # Відкрити сторінку реєстрації
    browser.get("http://demo-store.seleniumacademy.com/customer/account/create/")

    # Заповнити форму реєстрації
    first_name_input = browser.find_element("id", "firstname")
    first_name_input.send_keys("Yakiv")
    middle_name_input = browser.find_element("id", "middlename")
    middle_name_input.send_keys("Valeriyovich")
    last_name_input = browser.find_element("id", "lastname")
    last_name_input.send_keys("Yavdoshchen")
    email_input = browser.find_element("id", "email_address")
    email_input.send_keys("yakivvaleriyovich@gmail.com")
    password_input = browser.find_element("id", "password")
    password_input.send_keys("Qwerty789.")
    confirm_password_input = browser.find_element("id", "confirmation")
    confirm_password_input.send_keys("Qwerty789.")
    create_account_button = browser.find_element("xpath", "//button[@title='Register']")
    create_account_button.click()

    pages = ["women.html", "men.html", "accessories.html", "home-decor.html", "sale.html", "vip.html"]
    for page in pages:
        browser.get(f"http://demo-store.seleniumacademy.com/{page}")

finally:
    browser.quit()