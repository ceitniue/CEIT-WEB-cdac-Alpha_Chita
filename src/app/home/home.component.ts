import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config.service';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
public sliderImage: {};
  public isControls = true;

  constructor(config:NgbCarouselConfig,private configService:ConfigService) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit() {
    this.sliderImage = this.getSliderImages();
  }

  getSliderImages(){
    return this.configService.getConfig().imageSliders;
  }

}
