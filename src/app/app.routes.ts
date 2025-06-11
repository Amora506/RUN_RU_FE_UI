import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { NotFound } from './Pages/not-found/not-found';
import { Home } from './Pages/home/home';
import { Administration } from './Pages/administration/administration';

export const routes: Routes = [
    {
        path: 'Login',
        component: Login,
    },
    {
        path: 'Home',
        component: Home
    },
    {
        path: 'Administration',
        component: Administration

    },
    {
        path: '**',
        component: NotFound,
    }
];
