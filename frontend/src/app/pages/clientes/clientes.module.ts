import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClientesCreateComponent } from './clientes-create/clientes-create.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ClientesComponent,
    ClientesCreateComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientesComponent,
      },
    ]),
  ],
})
export class ClientesModule { }
