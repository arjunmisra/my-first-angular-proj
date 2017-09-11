import { Component, OnInit,ElementRef } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

   buttonStatus:boolean=false;
   styleClass='style1';

   public query='';
  public countries=[
    "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
    "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
    "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
    "Germany","Greece","Hungary","Iceland","India","Ireland","Italy","Kosovo",
    "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
    "Moldova","Malaysia","Monaco","Montenegro","Netherlands","Norway","Poland",
    "Portugal","Romania","Russia","Singapore","San Marino","Serbia","Slovakia","Slovenia",
    "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"
  ];
  public filteredList = [];
  public elementRef;
  constructor(myElement:ElementRef, public dataService:DataService) {
    this.elementRef=myElement;
   }
filter(){
  if(this.query !=="")
    {
      this.filteredList = this.countries.filter(function(cl)
      {
        return cl.toLowerCase().indexOf(this.query.toLowerCase())>-1;
      }.bind(this));
    }
    else
      this.filteredList=[];
}

select(item){
  this.query=item;
  this.filteredList=[];
}

myEvent(event)
{
	console.log(event);
}


  ngOnInit() {
  	console.log(this.dataService.names);
  }

}
