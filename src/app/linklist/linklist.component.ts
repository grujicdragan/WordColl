import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../services/item-service.service';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-linklist',
  templateUrl: './linklist.component.html',
  styleUrls: ['./linklist.component.css']
})
export class LinklistComponent implements OnInit {
  result: Item[];

  constructor(
    private itemService:ItemServiceService,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(v => {
      this.result = v;
      console.log("rezultat");
      console.log(this.result);
    },(err) => {
      console.log('err',err);
    }, () => {
      console.log("odradio");
    })
  }

}
