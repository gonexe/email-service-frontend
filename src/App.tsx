import React from 'react';
import EmailForm from './components/EmailForm';
import ProviderList from './components/ProviderList';
import SwitchProvider from './components/SwitchProvider';
import { ProviderProvider } from './context/ProviderContext';
import SwaggerLink from './components/SwaggerLink';
//import './App.css';

const App: React.FC = () => {
  return (
    <ProviderProvider>
      <div className="container">
        <header className="header">
          <h1>Email Client</h1>
        </header>
        <div className="section">
          <div className="form-container">
            <EmailForm />
          </div>
        </div>
        <div className="section">
          <h2>Available Providers</h2>
          <div className="provider-list-container">
            <ProviderList />
          </div>
        </div>
        <div className="section">
          <h2>Switch Preferred Provider</h2>
          <div className="form-container">
            <SwitchProvider />
          </div>
        </div>
        <SwaggerLink />
      </div>
    </ProviderProvider>
  );
};

export default App;
