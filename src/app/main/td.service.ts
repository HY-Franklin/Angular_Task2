import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TdService {

  letters = '0123456789ABCDEF';
  color1='#';
  color2='#';
  color3='#';
  color4='#';
  color5='#';
  color6='#';
  color7='#';
  color8='#';
  color9='#';

  clearAllColor(){
    this.color1='#66000000';
    this.color2='#66000000';
    this.color3='#66000000';
    this.color4='#66000000';
    this.color5='#66000000';
    this.color6='#66000000';
    this.color7='#66000000';
    this.color8='#66000000';
    this.color9='#66000000';
  }

  getColor1(){
      this.color1='#';
      for (let i = 0; i < 6; i++) {
        this.color1 += this.letters[Math.floor(Math.random() * 16)];
      }
      return this.color1;
  }
  getColor2(){
    this.color2='#';
    for (let i = 0; i < 6; i++) {
      this.color2 += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color2;
  }
  getColor3(){
    this.color3='#';
    for (let i = 0; i < 6; i++) {
      this.color3 += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color3;
  }
  getColor4(){
    this.color4='#';
    for (let i = 0; i < 6; i++) {
      this.color4 += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color4;
  }
  getColor5(){
    this.color5='#';
    for (let i = 0; i < 6; i++) {
      this.color5 += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color5;
  }
  getColor6(){
    this.color6='#';
    for (let i = 0; i < 6; i++) {
      this.color6 += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color6;
  }
  getColor7(){
    this.color7='#';
    for (let i = 0; i < 6; i++) {
      this.color7 += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color7;
  }
  getColor8(){
    this.color8='#';
    for (let i = 0; i < 6; i++) {
      this.color8 += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color8;
  }
  getColor9(){
    this.color9='#';
    for (let i = 0; i < 6; i++) {
      this.color9 += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color9;
  }

  constructor() { }

}
