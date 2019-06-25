import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../services/item-service.service';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public items : Item[];
  public test : any;

  yt : string = "http://www.youtube.com/embed/sFk9SN6x0c8";
  public bindSRC : string = "yt + item[0].value";

  controllerSrc: any;


  constructor(
    private itemService : ItemServiceService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) { 

  }

  ngOnInit() {

    this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.test = this.items;
      console.log("rezultat");
      console.log(this.items);
      console.log(this.test.items.length);
      console.log(this.test.items[0].type);
      for(let i =0; i < this.test.items.length; i++){
        if(this.test.items[i].type == 'video'){
          this.test.items[i].completeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/'+ this.test.items[i].value);
          console.log(this.test.items[i].completeUrl);
        }else{
          this.test.items[i].completeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.test.items[i].value);
        }

      }
      

    },(err) => {
      console.log('err',err)
    }, () => {
      console.log('odradio')
    })

    
    const url='http://www.youtube.com/embed/';
    this.controllerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  
  }

  prepareExternalUrl(code){
    window.open("https://www.youtube.com/embed/" + code ,'_blank');
  }



}
