import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey1',
  templateUrl: './survey1.component.html',
  styleUrls: ['./survey1.component.scss']
})
export class Survey1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkCheckBoxvalue(event){
    console.log(event.checked)
  }

  buttonHandler(){
    console.log("handled")
  }

}
