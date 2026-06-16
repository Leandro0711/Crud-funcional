import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { Aluno } from "../../../interfaces/aluno";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class CrudService {

  private http = inject(HttpClient);

  private url = 'http://localhost/api-alunos/alunos/criarAluno.php';

  criarAluno(aluno: Aluno): Observable<any>{
    return this.http.post(this.url, aluno);
  }

  private url_lista_alunos = 'http://localhost/api-alunos/alunos/criarAluno.php';

  listarAlunos(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.url_lista_alunos);
  }
}
