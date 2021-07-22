import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic-gallery',
  templateUrl: './pic-gallery.component.html',
  styleUrls: ['./pic-gallery.component.scss']
})
export class PicGalleryComponent implements OnInit {

  ponteiro: number = 1;

  constructor() { }

  ngOnInit() {
  }

  carousel(tipo: string): void {
    if(tipo === 'left'){
      if(this.ponteiro === 1) {
        this.ponteiro = 7;
      } else {
        this.ponteiro -= 1;
      }
    }
    if(tipo === 'rigth'){
      if(this.ponteiro === 7) {
        this.ponteiro = 1;
      } else {
        this.ponteiro += 1;
      }
    }
  }

}
