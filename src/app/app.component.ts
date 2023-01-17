import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oracle';
  textarea:any
  addLineNumbers() {
  // Get the textarea element
  this.textarea = document.querySelector('textarea');
  // Split the value into an array of lines
  let lines = this.textarea.value.split('\n');
  // Loop through the lines and add the line number to the beginning of each line
  for (let i = 0; i < lines.length; i++) {
    lines[i] = (i + 1) + '. ' + lines[i];
  }
  // Join the lines back together and update the textarea value
  this.textarea.value = lines.join('\n');
}
}
