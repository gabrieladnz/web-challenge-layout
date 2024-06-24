import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAdicionarTarefaComponent } from '../../components/shared/modal-adicionar-tarefa/modal-adicionar-tarefa.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  tasksDia: any[] = [];
  taskNoite: any[] = [];
  tasksFiltradas: any[] = [];
  tasksFiltradasNoite: any[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.carregarTarefa();
  }

  protected filtrarInput(event: Event): void {
    this.tasksFiltradas = this.tasksDia.filter(
      (tasks) =>
        tasks.titulo &&
        tasks.titulo
          .toLowerCase()
          .includes((event.target as HTMLInputElement).value.toLowerCase())
    );

    this.tasksFiltradasNoite = this.taskNoite.filter(
      (tasks) =>
        tasks.titulo &&
        tasks.titulo
          .toLowerCase()
          .includes((event.target as HTMLInputElement).value.toLowerCase())
    );
  }

  public abrirModalAdicionarTarefa(): void {
    const dialogRef = this.dialog.open(ModalAdicionarTarefaComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((retorno) => {
      if (retorno) {
        console.log(retorno);
        if (retorno.periodo === 'dia') {
          this.tasksDia.push(retorno);
        } else {
          this.taskNoite.push(retorno);
        }
        this.salvarTarefa();
      }
    });
  }

  public carregarTarefa(): void {
    const tarefasDiaSalvas = localStorage.getItem('tasksDia');
    const tarefasNoiteSalvas = localStorage.getItem('taskNoite');

    if (tarefasDiaSalvas) {
      this.tasksDia = JSON.parse(tarefasDiaSalvas);
    }

    if (tarefasNoiteSalvas) {
      this.taskNoite = JSON.parse(tarefasNoiteSalvas);
    }
  }

  public apagarTarefa(index: number, periodo: string): void {
    if (periodo === 'dia') {
      this.tasksDia.splice(index, 1);
    } else {
      this.taskNoite.splice(index, 1);
    }
    this.salvarTarefa();
  }

  public salvarTarefa(): void {
    localStorage.setItem('tasksDia', JSON.stringify(this.tasksDia));
    localStorage.setItem('taskNoite', JSON.stringify(this.taskNoite));
  }
}
