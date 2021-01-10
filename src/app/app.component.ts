import { Component, VERSION, OnInit } from '@angular/core';
import { AdItem } from './ad-type';
import { AdService } from './ad.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
   ads: AdItem[];
  name = 'Angular ' + VERSION.major;
  constructor(private adService:AdService){
  }

ngOnInit(){
  this.ads = this.adService.getAds();
}
}
