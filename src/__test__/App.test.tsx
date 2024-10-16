import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders Email Client header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Email Client/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders EmailForm component', () => {
  render(<App />);
  const emailFormElement = screen.getByRole('form');
  expect(emailFormElement).toBeInTheDocument();
});

test('renders ProviderList component', () => {
  render(<App />);
  const providerListElement = screen.getByText(/Available Providers/i);
  expect(providerListElement).toBeInTheDocument();
});

test('renders SwitchProvider component', () => {
  render(<App />);
  const switchProviderElement = screen.getByText(/Switch Preferred Provider/i);
  expect(switchProviderElement).toBeInTheDocument();
});

test('renders SwaggerLink component', () => {
  render(<App />);
  const swaggerLinkElement = screen.getByRole('link');
  expect(swaggerLinkElement).toBeInTheDocument();
});
