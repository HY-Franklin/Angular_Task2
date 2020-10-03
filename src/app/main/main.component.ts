import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {TdService} from 'src/app/main/td.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isDisplay=true;

  // color='#';



  constructor(private http:HttpClient,public tdService:TdService ) {

  }


  ngOnInit(): void {
  }



}
