import { Component, OnInit } from '@angular/core';
import { MarvelherosService } from '../marvelheros.service';

@Component({
  selector: 'app-marvelheros',
  templateUrl: './marvelheros.component.html',
  styleUrls: ['./marvelheros.component.css']
})
export class MarvelherosComponent implements OnInit {
  heros: string[];
  btnDisable = false;
  inputHero = null;
  Adding = false;
  AddHero() {
    this.heros.push(this.inputHero);
    this.inputHero = null;
    this.Adding = false;
  }

  AddMore() {
    this.Adding = !this.Adding;
  }

  constructor(private ajax: MarvelherosService) {
    this.heros = this.ajax.heros ;
  }

  ngOnInit() {
  }

}
