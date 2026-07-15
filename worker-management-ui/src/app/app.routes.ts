import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { WorkerList } from './components/worker-list/worker-list';
import { AddWorker } from './components/add-worker/add-worker';

export const routes: Routes = [
    {
        path:'login',
        component:Login
    },
    {
        path:'dashboard',
        component:Dashboard
    },
    {
        path:'workers',
        component:WorkerList
    },
    {
        path:'add-worker',
        component:AddWorker
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    }
];
