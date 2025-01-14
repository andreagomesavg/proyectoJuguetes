import { Routes } from '@angular/router';
import { JuguetesListComponent } from './components/juguetes-list/juguetes-list.component';
import { ErrorComponent } from './components/error/error.component';
import { ModalJugueteComponent } from './components/modal-juguete/modal-juguete.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'juguetes',
        pathMatch: 'full'
    }, 
    {
        path: 'juguetes',
        component: JuguetesListComponent
    },
    {
        path: 'juguete/:id',
        component: ModalJugueteComponent
    },
    {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full' 
    }

];
