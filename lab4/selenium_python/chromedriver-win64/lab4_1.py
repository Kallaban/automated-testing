from selenium import webdriver
from selenium.webdriver.common.by import By
import math

browser = webdriver.Chrome()

try:
    browser.get("http://suninjuly.github.io/math.html")

    x_element = browser.find_element(By.ID, "input_value")
    x = int(x_element.text)

    result = math.log(abs(12 * math.sin(x)))

    answer_input = browser.find_element(By.ID,"answer")
    answer_input.send_keys(str(result))

    robot_checkbox = browser.find_element(By.ID,"robotCheckbox")
    robot_checkbox.click()

    robots_rule_radiobutton = browser.find_element(By.ID,"robotsRule")
    robots_rule_radiobutton.click()

    submit_button = browser.find_element(By.CSS_SELECTOR, "button[type='submit']")
    submit_button.click()

finally:
    browser.quit()