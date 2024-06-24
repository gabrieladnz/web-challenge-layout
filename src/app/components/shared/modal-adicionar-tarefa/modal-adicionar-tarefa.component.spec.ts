import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarTarefaComponent } from './modal-adicionar-tarefa.component';

describe('ModalAdicionarTarefaComponent', () => {
  let component: ModalAdicionarTarefaComponent;
  let fixture: ComponentFixture<ModalAdicionarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAdicionarTarefaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAdicionarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
