import { basename } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey2',
  templateUrl: './survey2.component.html',
  styleUrls: ['./survey2.component.scss']
})
export class Survey2Component implements OnInit {

  base = "https://uchicago.co1.qualtrics.com/jfe/form/SV_bvd8wuBbjxNP1To?survey=survey2";
  final = this.base + "&checked=false";

  constructor() { }

  ngOnInit() {
  }

  checkCheckBoxvalue(event){
    this.final = this.base + `&checked=${event}`
    console.log(this.final)
  }

}
