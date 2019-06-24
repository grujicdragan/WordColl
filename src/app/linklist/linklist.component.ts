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
  items : Item[];

  constructor(
    private itemService:ItemServiceService,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      console.log("rezultat");
      console.log(this.items);
    },(err) => {
      console.log('err',err);
    }, () => {
      console.log("odradio");
    })
  }

  prepareExternalUrl(code){
    window.open(code ,'_blank');
  }

}
