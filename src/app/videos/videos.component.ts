import { Component, OnInit } from '@angular/core';
import { Item } from '../models/carousel-item.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {



  constructor() {

  }

  ngOnInit() {
    var item : Item[];
    item[0].decription="dsadasdda";
    item[0].title="dsadadsa";
    item[0].videoURL="https://www.youtube.com/embed/EL01-Xztuf8";
    item[1].decription="dsadasdda";
    item[1].title="dsadadsa";
    item[1].videoURL="https://www.youtube.com/embed/EL01-Xztuf8";
    item[2].decription="dsadasdda";
    item[2].title="dsadadsa";
    item[2].videoURL="https://www.youtube.com/embed/EL01-Xztuf8";
    item[3].decription="dsadasdda";
    item[3].title="dsadadsa";
    item[3].videoURL="https://www.youtube.com/embed/EL01-Xztuf8";
  }

}
