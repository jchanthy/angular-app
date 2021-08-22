import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }
  logInUserName = 'login_in_user';
  @Output() notify = new EventEmitter();

  ngOnInit(): void {
  }

  onLoginClicked(){
    console.log(`UserDetailComponent: onLoginClicked()`);
    this.notify.emit('UserDetailComponent: emit value');
  }

}
