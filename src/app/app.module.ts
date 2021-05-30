import { EleicaoService } from './core/services/eleicao/eleicao.service';
import { EleicaoModule } from './eleicao/eleicao.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EleicaoModule,
    HttpClientModule
  ],
  providers: [EleicaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
