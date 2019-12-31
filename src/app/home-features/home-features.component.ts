import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {

  public features:{}
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.features = this.getFeturesList();
  }

getFeturesList(){
  return this.config.getConfig().homeFeatures;
}
}
