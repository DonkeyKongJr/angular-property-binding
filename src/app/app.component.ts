import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textInput = '';
  childValue = '';
  title = 'app';

  public updatedChildValue(value: string){
    this.childValue = value;
  }
}
