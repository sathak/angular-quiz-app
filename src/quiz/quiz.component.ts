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
  currentQn = 0;
  showResult = false;
  showLoader = true;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getData('https://my-json-server.typicode.com/sathak/fakeDb/db').subscribe(response => {
      this.data = response["data"];
      this.showLoader = false;
      this.currentQn = 1;
    }
    );

  }
  onAnswerClick(item, ans, data, index) {
    item.selectedans = ans;
    item.selectedIndex = index;
   
  }
  onPrevClick(currentIndex, data) {
     this.currentQn -= 1;
    data[currentIndex-1].active = false;
    data[this.currentQn-1].active = true;
  }
   onNextClick(currentIndex, data) {
      this.currentQn += 1;
    data[currentIndex-1].active = false;
    data[currentIndex].active = true;   
  }
  onSubmitClick(data) {
    this.showResult = true;
 data.forEach(element => {
    if(element.selectedans!=undefined &&element.selectedans==element.ans){
      this.score+=1;
    }
});
      
   
  }
}
