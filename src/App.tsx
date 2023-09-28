import React from 'react'
import { Security } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import { useNavigate } from 'react-router-dom';
import { toRelativeUrl } from '@okta/okta-auth-js';

import config from './config';
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import AppRoutes from './components/AppRoutes'
import DashboardComponent from './components/common/dashboard_component'
import Rightbar from './components/common/right_bar';
import Output from './components/common/output'
import Documenthistory from './components/common/document_history'

const oktaAuth = new OktaAuth(config.oidc);

const App: React.FC = () => {
  const navigate = useNavigate();

  const restoreOriginalUri = (_oktaAuth: any, originalUri: string) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Header />
      <div className="main-wrapper">
        <Navbar />
        <div className="main">
          <AppRoutes />
        </div>
      </div>
      {/*<div className="layout-container">
       * <Output />
      </div>*/}
    </Security>
  )
}

export default App
