import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';


export const API = 'https://hn.algolia.com/api/v3';
export const getData = async query => {
  const url = `https://api.github.com/search/repositories?q=created:2021-10-31&sort=stars&order=desc&per_page=10`;

  return await axios.get(url);
};
getData('react');


describe('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/List of repositories/i);
  expect(linkElement).toBeInTheDocument();
});

describe('getData', () => {
  it('fetches successfully data from an API', async () => { });

  it('fetches erroneously data from an API', async () => { });
});
