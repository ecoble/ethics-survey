import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey1',
  templateUrl: './survey1.component.html',
  styleUrls: ['./survey1.component.scss']
})
export class Survey1Component implements OnInit {

  base = "https://uchicago.co1.qualtrics.com/jfe/form/SV_bvd8wuBbjxNP1To?survey=survey1"
  final = this.base + "checked=true";

  constructor() { }

  ngOnInit() {
  }

  checkCheckBoxvalue(event){
    this.final = this.base + `&checked=${event.checked}`
    console.log(this.final)
  }

}
