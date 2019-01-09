import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 dateToday;
  constructor(private myservice : MyserviceService) { }

  ngOnInit() {
    this.dateToday = this.myservice.showTodayDate();
  }

}
