import React from 'react';
import { BrowserRouter, Route, Routes as DomRoutes } from 'react-router-dom';
import { MainOutlet } from './main-outlet';

export const Router: React.FC = () => (
  <BrowserRouter>
    <DomRoutes>
      <Route Component={MainOutlet}>
        <Route index path="/" />
      </Route>
    </DomRoutes>
  </BrowserRouter>
);
