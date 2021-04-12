import { render, screen } from '@testing-library/react';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Menu from './components/Menu';
import Title from './components/Title';
import Footer from './components/Footer';
import Sample from './components/pages/Samples';
import { BrowserRouter } from 'react-router-dom';


test('renders Homepage correctly', () => {
  render(<Homepage />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders About Page correctly', () => {
  render(<About />);
  const linkElement = screen.getByText(/Results may vary/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Title Banner', () => {
  render(<Title />);
  const linkElement = screen.getByText(/Quiz Ninjas/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Menu', () => {
  render(
    <BrowserRouter>
      <Menu/>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders footer', () => {
  render( <Footer/>);
  const linkElement = screen.getByText(/Thank/i);
  expect(linkElement).toBeInTheDocument();
});

test('sample page renders', () => {
  render(<Sample/>);
  const linkElement = screen.getByText(/Miley Cyrus/i);
  expect(linkElement).toBeInTheDocument();
});