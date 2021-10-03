import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  constructor() { }


  public guardArray: any[] = [];
  private currentUserNameStore = new BehaviorSubject<any>({});

  public currentUserName = this.currentUserNameStore.asObservable();


  sendMessage(message: {}) {
    this.currentUserNameStore.next(message);
  }

}
