import { Component } from '@angular/core';
import {CommentsTable} from './comments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task2';
  date=new Date();
  allComments:CommentsTable[]=[];


  returnMain(){
    window.open('http://localhost:4200');
  }

  clearAll(){
    this.allComments=[];
  }

  getAll(value){
    this.allComments.push(
      {
        context:value,
        dateInfo:this.date.toDateString()
      }
    );
  }
}
