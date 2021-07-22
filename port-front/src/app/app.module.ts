import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/components/home/components/header/header.component';
import { ProjetosComponent } from './pages/components/home/components/projetos/projetos.component';
import { SobreComponent } from './pages/components/home/components/sobre/sobre.component';
import { DadosComponent } from './pages/components/home/components/dados/dados.component';
import { JavascriptComponent } from './pages/components/home/components/projetos/components/javascript/javascript.component';
import { ReactComponent } from './pages/components/home/components/projetos/components/react/react.component';
import { AngularComponent } from './pages/components/home/components/projetos/components/angular/angular.component';
import { PicGalleryComponent } from './shared/modais/pic-gallery/pic-gallery.component';
import { WarzoneComponent } from './shared/modais/warzone/warzone.component';
import { AdotaPetsComponent } from './shared/modais/adota-pets/adota-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DadosComponent,
    SobreComponent,
    ProjetosComponent,
    AngularComponent,
    ReactComponent,
    JavascriptComponent,
    PicGalleryComponent,
    AdotaPetsComponent,
    WarzoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
