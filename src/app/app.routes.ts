import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', pathMatch : 'full', redirectTo: 'test'},
    {
        path: '',
        children: [
            {path: 'test', loadChildren: () => import('../app/testroute/test.routes')},
        ]
    },
    {path: 'test1', loadChildren: () => import('../app/testroute1/test1.routes')},
    // 404 & Catch all
    {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('../app/error-404/error-404.routes')},
    {path: '**', redirectTo: '404-not-found'}
];
