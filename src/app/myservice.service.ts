import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  showTodayDate(){
    let todayDate = new Date();
    return todayDate;
  }
}
