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
 constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getData().subscribe(response => {
      console.log(response);
       // this.data = response;
      }
    );
    // this.data = [
    //   {
    //     key: "Which is the largest country in the world by population?",
    //     options: ["India", "USA", "China", "Russia"],
    //     ans: "China",
    //     active: true

    //   },
    //   {
    //     key: "When did the second world war end?",
    //     options: ["1945", "1939", "1944", "1942"],
    //     ans: "1945",
    //     active: false

    //   },
    //   {
    //     key: "Which was the first country to issue paper currency?",
    //     options: ["USA", "France", "Italy", "China"],
    //     ans: "China",
    //     active: false

    //   },
    //   {
    //     key: "Which city hosted the 1996 Summer Olympics?",
    //     options: ["Atlanta", "Sydney", "Athens", "Beijing"],
    //     ans: "Atlanta",
    //     active: false

    //   },
    //   {
    //     key: "Who invented telephone?",
    //     options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
    //     ans: "Alexander Graham Bell",
    //     active: false

    //   },
    // ]
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