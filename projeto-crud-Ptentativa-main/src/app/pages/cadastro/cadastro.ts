import { Component } from '@angular/core';
import { Menu } from "../../componentes/menu/menu";
import { FormsModule } from '@angular/forms';
import { Aluno } from '../../interfaces/aluno';



@Component({
  selector: 'app-cadastro',
  imports: [Menu, FormsModule,],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  aluno: Aluno = {
    id: 0,
    nome: '',
    turma: '',
    ra: '',
    sala: '',
    periodo: '',
  }
  salvar(){

    console.log(this.aluno);
}
}
