import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

 myHoldings=[]; 
 timer=null; 

 onStart()
 {
   this.timer=setInterval(()=>{
    this.myHoldings.push(this.myHoldings.length+1);
    console.log("hello");
   },1000);
 }

 onStop()
 {
   clearInterval(this.timer);
   console.log("stopping");
 }
}