import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  app_title = 'App-Title';

  constructor() { }

  ngOnInit(): void {
  }
  onUserDetailEvent(event: any ){
    console.log(`event ${event}`);
  }
}
