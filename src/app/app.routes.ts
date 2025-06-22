import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.route'),
        //TODO Guard: AuthGuard
    },
    {
        path: '',
        loadChildren: () => import('./store-front/store-front.route')
    },
];
