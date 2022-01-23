import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  public arrayBadWords: Array<string> = [];
  public text: string = '';
  public text2: string = '';
  public striingBadWords: string = '';


  
  btnAdd() {
    this.arrayBadWords.push(this.text);
    console.log(this.arrayBadWords);
    this.text = '';
    this.displayElements();
  }

  displayElements() {
    let allBadWords = '';

    for (let i = 0; i < this.arrayBadWords.length; i++) {
      allBadWords += this.arrayBadWords[i] + ', ';
    }

    this.striingBadWords = allBadWords;
  }

  resetButton() {
    this.striingBadWords = '';
  }

  cenzorButton() {
      let text = this.text2; 
      for (let i = 0; i < this.arrayBadWords.length; i++) { 
          let str1: any = this.arrayBadWords[i];
          while (text.includes(str1)) { 
              let str2: string = ''; 
              for (let j = 0; j < str1.length; j++) { 
                  str2 += '*'; 
              } 
              text = text.replace(str1, str2); 
          } 
      } 
      this.text2 = text; 
  }
}