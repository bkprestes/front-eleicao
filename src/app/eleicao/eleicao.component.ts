import { EleicaoService } from './../core/services/eleicao/eleicao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.component.html',
  styleUrls: ['./eleicao.component.scss']
})
export class EleicaoComponent implements OnInit {

  eleicoes: any[];

  constructor(private eleicaoService: EleicaoService) { }

  ngOnInit(): void {
    this.getEleicoes();
  }

  private getEleicoes() {
    this.eleicaoService.getEleicoes().subscribe(data => {
      this.eleicoes = data;
    })
  }

}
