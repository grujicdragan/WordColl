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

  item : Item[];
  yt : string = "http://www.youtube.com/embed/sFk9SN6x0c8";
  public bindSRC : string = "yt + item[0].value";


  constructor(
    private itemService : ItemServiceService,
    private http: HttpClient
    ) { 

  }

  ngOnInit() {

    this.itemService.getItems().subscribe(data => {
      this.item = data;
      console.log("rezultat");
      console.log(this.item);
    },(err) => {
      console.log('err',err)
    }, () => {
      console.log('odradio')
    })
  
  }

}
