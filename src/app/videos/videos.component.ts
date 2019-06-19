import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../services/item-service.service';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  result : Item;



  constructor(
    private itemService : ItemServiceService,
    private http: HttpClient
    ) { 

  }

  ngOnInit() {

    this.itemService.getItems().subscribe(v => {
      this.result = v;
      console.log("rezultat");
      console.log(this.result);
    },(err) => {
      console.log('err',err)
    }, () => {
      console.log('odradio')
    })
  
  }

}
