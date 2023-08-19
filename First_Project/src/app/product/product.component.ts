import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    constructor(){}
    ngOnInit(): void {
      
    }
    public isLowInventory = false;
    public dhalStorage = 10;
    public getDhalStorage(){
      if(this.dhalStorage<50){
        this.isLowInventory =true;
      }
      return this.dhalStorage;
    }
}
