import {Routes, Route} from 'react-router';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductPage';
import AboutPage from '../pages/About';
import MainLayout from '../layouts/MainLayout';
import UsersPage from '../pages/UsersPage';

function Router() {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage />} />
        <Route path='/Products'  element= {<ProductsPage />} />
        <Route path='/About'  element= {<AboutPage />} />
        <Route path='/Users'  element= {<UsersPage />} />
        </Route>
    </Routes>
  )
}

export default Router 