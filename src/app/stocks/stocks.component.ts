import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],  
  encapsulation: ViewEncapsulation.None,
  animations:[
    
  ]
})
export class StocksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
