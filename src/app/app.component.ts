import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openNav(){
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px"; 
    document.getElementById("openNavIcon").style.display = "none"; 
    document.getElementById("closeNavIcon").style.display = "block";  
  }
  closeNav(){
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px"; 
    document.getElementById("openNavIcon").style.display = "block"; 
    document.getElementById("closeNavIcon").style.display = "none"; 
  }
  title = 'MyApp';
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  isVisible=true;
  todaydate = new Date();
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
 
  clickBtn(eve){
    console.log(eve)
    alert("btn clicked")
  }
  changeMonth(eve){
    console.log(eve)
    alert("dropdown is selected");
  }
  dateToday;
  constructor(private mysercice : MyserviceService ){}
  ngOnInit(){
    this.dateToday=this.mysercice.showTodayDate();
    console.log(this.mysercice.showTodayDate());
  }
}
