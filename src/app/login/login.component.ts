import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''; password = ''; email = '';
  Ip='';


  setinfo(){
    this.username = 'admin';
    this.password = 'admin';
    this.email = 'admin@gmail.com';
  }
  clearinfo(){
    this.username = ''; this.password = ''; this.email = '';
  }

  Validation(){
    if (this.username === 'admin' && this.password === 'admin' && this.email === 'admin@gmail.com'){
      window.open('http://localhost:4200/main', '_self');
    }
    else {
      alert('Not Match! try again!');
    }
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
