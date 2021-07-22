import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
    declarations: [ ],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatMenuModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatIconModule,
      MatTabsModule
    ],
    imports: [
      CommonModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatMenuModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatIconModule,
      MatTabsModule
    ]
})
export class MaterialModule { }
