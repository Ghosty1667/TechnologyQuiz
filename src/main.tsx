import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Results from './pages/Results.tsx'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="Results" element={<Results/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
