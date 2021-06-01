import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { EleicaoService } from './core/services/eleicao/eleicao.service';
import { EleicaoModule } from './eleicao/eleicao.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EleicaoModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [EleicaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
