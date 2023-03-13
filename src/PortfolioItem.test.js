import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom'; //For BrowserRouter elements

import App from './App';
import PortfolioList from './Pages/Portfolio/PortfolioList'
import PortfolioItem from './Pages/Portfolio/PortfolioItem'
import Nav from './Pages/Nav'
import NavOptions from './Pages/Nav'



import './intersectionmock'
//because this page contains an intersection observer, this must be mocked and imported to test this page
test('check PortfolioItem will render', () => {
    render(<Router><PortfolioItem /></Router>);
    expect(true).toBeTruthy();
  });
test('Check that navigation is present', ()=> {
    render(<PortfolioItem />, {wrapper: MemoryRouter});
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument
  })
test('Check that navigation is present', ()=> {
    render(<PortfolioItem />, {wrapper: MemoryRouter});
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument
  })
  