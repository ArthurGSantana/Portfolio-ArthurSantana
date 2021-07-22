import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warzone',
  templateUrl: './warzone.component.html',
  styleUrls: ['./warzone.component.scss']
})
export class WarzoneComponent implements OnInit {

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
