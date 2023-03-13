import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom'; //For BrowserRouter elements

import App from './App';
import PortfolioList from './Pages/Portfolio/PortfolioList'
import PortfolioItem from './Pages/Portfolio/PortfolioItem'





//This is a way of testing elements on which the page contains a BrowserRouter element
test('Check PortfolioList exists 1', () => {
    render(<PortfolioList />, {wrapper: MemoryRouter});
    expect(true).toBeTruthy();
  });

  test('Check that navigation is present', ()=> {
    render(<PortfolioList />, {wrapper: MemoryRouter});
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument
  })

// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('assert heading portfoliolist', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('assert title headings in portfoliolist', async function() {
    await driver.get("https://vorstermans.netlify.app/")
    await driver.manage().window().setRect({ width: 1169, height: 1022 })
    await driver.findElement(By.linkText("Portfolio")).click()
    {
      const elements = await driver.findElements(By.xpath("//h3"))
      assert(elements)
    }
    {
      const elements = await driver.findElements(By.xpath("//section[2]/a/div[2]/div/h3"))
      assert(elements)
    }
    {
      const elements = await driver.findElements(By.xpath("//section[3]/a/div[2]/div/h3"))
      assert(elements)
    }
    {
      const elements = await driver.findElements(By.xpath("//section[4]/a/div[2]/div/h3"))
      assert(elements)
    }
  })
})