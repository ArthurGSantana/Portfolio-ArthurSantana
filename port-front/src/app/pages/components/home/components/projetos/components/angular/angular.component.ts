import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PicGalleryComponent } from './../../../../../../../shared/modais/pic-gallery/pic-gallery.component';
import { WarzoneComponent } from './../../../../../../../shared/modais/warzone/warzone.component';
import { AdotaPetsComponent } from './../../../../../../../shared/modais/adota-pets/adota-pets.component';

@Component({
  selector: 'port-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(modelo: string): void {
    switch(modelo) {
      case 'pic':
        this.dialog.open(PicGalleryComponent, {
          panelClass: 'dialog'
        });
        break;

      case 'pet':
        this.dialog.open(AdotaPetsComponent, {
          panelClass: 'dialog'
        });
        break;

      case 'war':
        this.dialog.open(WarzoneComponent, {
          panelClass: 'dialog'
        });
        break;
    };
  };

}
