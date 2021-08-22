import { Injectable } from '@angular/core';

export interface IBroadcastEvent {
  key: EventKeys;
  data?: any;
}

export enum EventKeys {
  ALL = 'all-events',
  LOGIN_BUTTON_CLICKED = 'login_button_clicked',
  USER_LOGIN_EVENT = 'user_login_event'
}

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  constructor() { }
}
