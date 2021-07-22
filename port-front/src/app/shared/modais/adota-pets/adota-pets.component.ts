import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adota-pets',
  templateUrl: './adota-pets.component.html',
  styleUrls: ['./adota-pets.component.scss']
})
export class AdotaPetsComponent implements OnInit {

  ponteiro: number = 1;

  constructor() { }

  ngOnInit() {
  }

  carousel(tipo: string): void {
    if(tipo === 'left'){
      if(this.ponteiro === 1) {
        this.ponteiro = 3;
      } else {
        this.ponteiro -= 1;
      }
    }
    if(tipo === 'rigth'){
      if(this.ponteiro === 3) {
        this.ponteiro = 1;
      } else {
        this.ponteiro += 1;
      }
    }
  }

}
