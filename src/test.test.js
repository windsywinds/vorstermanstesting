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
  render(<App />);
  expect(true).toBeTruthy();
});
test('check Nav exists', () => {
  render(<Nav />, {wrapper: MemoryRouter});
  expect(true).toBeTruthy();
});
test('check NavOptions exists', () => {
  render(<NavOptions />, {wrapper: MemoryRouter});
  expect(true).toBeTruthy();
});
test('check Nav exists', () => {
    render(<About />, {wrapper: MemoryRouter});
    expect(true).toBeTruthy();
});


