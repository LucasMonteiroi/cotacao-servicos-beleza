import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotacoesComponent } from './cotacoes/cotacoes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: 'clientes',
        loadChildren: () => import('./clientes/clientes.module').then((m) => m.ClientesModule),
      },
      {
        path: 'produtos',
        component: ProdutosComponent,
      },
      {
        path: 'cotacoes',
        component: CotacoesComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'errors/404',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
