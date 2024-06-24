import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-adicionar-tarefa',
  templateUrl: './modal-adicionar-tarefa.component.html',
  styleUrl: './modal-adicionar-tarefa.component.scss'
})
export class ModalAdicionarTarefaComponent {
  task = { titulo: '', descricao: '', periodo: '' };

  constructor(public dialogRef: MatDialogRef<ModalAdicionarTarefaComponent>) {}

  public submeterForm() {
    this.dialogRef.close(this.task);
  }

  public fecharModal() {
    this.dialogRef.close();
  }
}
