import { Routes } from '@angular/router';
import { CrearComponent } from './components/crear/crear.component';
import { LeerComponent } from './components/leer/leer.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

export const routes: Routes = [

    {path:"crear", component: CrearComponent},
    {path:"leer", component: LeerComponent},
    {path:"eliminar", component: EliminarComponent},

];
