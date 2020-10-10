import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.scss'],
})

export class ClientesCreateComponent {
  constructor(
    public dialogRef: MatDialogRef<ClientesCreateComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
 
}
