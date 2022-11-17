import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tabaqueria Smoke App';
  year = 2022;
  ngOnInit():void {
    let year = 2022;
  }
}
