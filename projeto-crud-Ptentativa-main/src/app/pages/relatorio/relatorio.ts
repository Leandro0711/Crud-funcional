import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Menu } from "../../componentes/menu/menu";
import { Aluno } from '../../interfaces/aluno';
import { CrudService } from '../../services/crud-service/crud-service/crud-service';

@Component({
  selector: 'app-relatorio',
  imports: [Menu],
  templateUrl: './relatorio.html',
  styleUrl: './relatorio.css',
})
export class Relatorio implements OnInit {

  private crudService = inject(CrudService);
  private changeDetectorRef = inject(ChangeDetectorRef);

  alunos: Aluno[] = [];
  erro = '';

  ngOnInit() {
      this.listarAlunos();
  }

  listarAlunos(){
    this.crudService.listarAlunos().subscribe({
      next: (dados) => {
        this.alunos = dados;
        this.changeDetectorRef.detectChanges();
      },

      error:(erro) => {
        this.erro = 'Não foi possivel cadastrar';
      }
    })
  }

}
