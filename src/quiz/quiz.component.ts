import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  data = [];
  score = 0;
  arrIndex = 0;
  currentQn = 1;
  showResult = false;
  showLoader=true;
 constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getData('https://my-json-server.typicode.com/sathak/fakeDb/db').subscribe(response => {
        this.data = response["data"];
        this.showLoader=false;
      }
    );
   
  }
  onSubmitClick(item, ans, data, index) {
    if (item.ans === ans) {
      this.score += 1;
    }
    item.active = false;
    this.arrIndex = index + 1;
    if (this.arrIndex < data.length) {
      data[this.arrIndex].active = true;
      this.currentQn += 1;
    }
    if (this.arrIndex == data.length) {
      this.showResult = true;
    }
  }
}
