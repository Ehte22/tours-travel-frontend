import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import SideBar from './components/SideBar';
import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Flights from './pages/Flights';
import Footer from './components/Footer';
import Hotels from './pages/Hotels';
import Cabs from './pages/Cabs';
import Blogs from './pages/Blogs';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import BlogFull from './pages/BlogFull';
import Login from './pages/Login';
import Register from './pages/Register';
import Payment from './pages/Payment';
import Prac from './components/Prac';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

export const SideBarContext = createContext()


const App = () => {
  const [open, setOpen] = React.useState(false);
  return <>
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <SideBarContext.Provider value={{ open, setOpen }}>
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path='/' element={<><Header /> <Outlet /> <Footer /></>}>
              <Route index element={<Prac />} />
              <Route path='/hotels' element={<Hotels />} />
              <Route path='/flights' element={<Flights />} />
              <Route path='/cabs' element={<Cabs />} />
              <Route path='/tours' element={<Tours />} />
              <Route path='/tour-details/:id' element={<TourDetails />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/blog/:id' element={<BlogFull />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='*' element={<h1>Page Not Found</h1>} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </SideBarContext.Provider >
    </ThemeProvider >
  </>
}

export default App