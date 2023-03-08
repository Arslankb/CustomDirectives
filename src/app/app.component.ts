import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirectives';

  display:boolean = false;

  occuptaion: string = 'designer';

  displayNotice(){
    this.display = true;
  }
}
