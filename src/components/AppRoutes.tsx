import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import { RequiredAuth } from './SecureRoute';

import Loading from './Loading';

import Landing from './landing';
import Search from './search';
import Output from './common/output';
import Documenthistory from './common/document_history';
import Rightbar from './common/right_bar';
import { SearchOutlined } from '@mui/icons-material';
//import Input from './common/input_component';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='login/callback' element={<LoginCallback loadingElement={<Loading />} />} />
      {/* protected */}
      <Route path="/" element={<RequiredAuth />}>
        <Route path="" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        {/*<Route path="/input" element={<Input />} />*/}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
