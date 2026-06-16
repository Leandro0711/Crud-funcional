import { Routes } from '@angular/router';
import { Cadastro } from './pages/cadastro/cadastro';
import { Relatorio } from './pages/relatorio/relatorio';

export const routes: Routes = [
    {path: "", component: Cadastro},
    {path: "cadastro", component: Cadastro},
    {path: "relatorio", component: Relatorio}
];
