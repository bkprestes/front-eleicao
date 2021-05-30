import { EleicaoService } from './../core/services/eleicao/eleicao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleicaoComponent } from './eleicao.component';



@NgModule({
  declarations: [
    EleicaoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [EleicaoService],
  exports: [EleicaoComponent]
})
export class EleicaoModule { }
