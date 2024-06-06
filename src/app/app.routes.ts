import { Routes } from '@angular/router';
import { TablaComponent } from './shared/tabla/tabla.component';
import { ContactoComponent } from './shared/contacto/contacto.component';

export const routes: Routes = [
    {path:'tabla', component: TablaComponent},
    {path: 'contacto', component: ContactoComponent}
];
