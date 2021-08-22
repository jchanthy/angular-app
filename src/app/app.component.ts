import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {BroadcastService, EventKeys} from './services/broadcast.service';
// @ts-ignore

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  @ViewChild('sidenav') sidenav: MatSidenav | null = null;

  constructor(broadCastService: BroadcastService) {
    _.bindAll(this, 'onLoginClicked');

    broadCastService.on(EventKeys.LOGIN_BUTTON_CLICKED)
      .subscribe(this.onLoginClicked);

  }

  onLoginClicked(){
    console.log(`AppComponent received: ${event}`);

    this.sidenav?.open();
  }
}
