import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent {
  nome = "Matheus";
  dataNascimento = "1990-10-01";
  urlImagem = "/assets/joao.jpg";

  mostrarDataNascimento() {
    alert('A data de nascimento do Joao é: ${this.dataNascimento}');
  }

}
