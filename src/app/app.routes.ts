import { Routes } from '@angular/router';
import { CreatePraticienFormComponent } from './components/pages/create-praticien-form/create-praticien-form.component';
import { ListPraticienComponent } from './components/pages/list-praticien/list-praticien.component';

export const routes: Routes = [

    {
        path:'',
        component:CreatePraticienFormComponent,
        title: 'Gestion des praticiens'
    },
    {
        path:'list-praticiens',
        component:ListPraticienComponent,
        title: 'Liste des praticiens'
    }
];
