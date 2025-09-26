import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { ProjectList } from './pages/projet/project-list/project-list';
import { TacheList } from './pages/tache/tache-list/tache-list';
import { NewProject } from './pages/projet/new-project/new-project';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "",
        component: Layout,
        children: [
            {
                path: "dashboard",
                component: Dashboard
            },
            {
                path: "projects",
                component: ProjectList
            },
            {
                path: "addProject",
                component: NewProject
            },
            {
                path: "taches",
                component: TacheList
            }
        ]
    }

];
