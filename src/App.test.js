import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom'; //For BrowserRouter elements
import userEvent from '@testing-library/user-event';

import App from './App';
import PortfolioList from './Pages/Portfolio/PortfolioList'
import PortfolioItem from './Pages/Portfolio/PortfolioItem'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'
import Nav from './Pages/Nav'
import NavOptions from './Pages/Nav'

test('check Nav exists', () => {
  render(<Nav />, {wrapper: MemoryRouter});
  expect(true).toBeTruthy();
});
test("Contact render", () => {
  const actual = () => {
    render(<Contact />);
  };
  expect(actual).toThrow();
});
test('check NavOptions exists', () => {
  render(<NavOptions />, {wrapper: MemoryRouter});
  expect(true).toBeTruthy();
});
test('Check for Nav element on Nav Page', () => {
  render(<Router><NavOptions /></Router>);
  const navElements = screen.getByRole("navigation") 
  expect(navElements).toBeInTheDocument();
})
test('Check for 6 links on Nav Page', () => {
  render(<Router><NavOptions /></Router>);
  const linkElements = screen.getAllByRole("link") 
  expect(linkElements.length).toBe(6);
})
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
describe('check links', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('check links are present and can be clicked', async function() {
    await driver.get("https://vorstermans.netlify.app/")
    await driver.manage().window().setRect({ width: 1169, height: 1022 })
    await driver.findElement(By.linkText("Home")).click()
    {
      const elements = await driver.findElements(By.linkText("Home"))
      assert(elements)
    }
    await driver.findElement(By.linkText("Portfolio")).click()
    {
      const elements = await driver.findElements(By.linkText("Portfolio"))
      assert(elements)
    }
    await driver.findElement(By.linkText("About Us")).click()
    {
      const elements = await driver.findElements(By.linkText("About Us"))
      assert(elements)
    }
    await driver.findElement(By.linkText("Contact Us")).click()
    {
      const elements = await driver.findElements(By.linkText("Contact Us"))
      assert(elements)
    }
  })
})

