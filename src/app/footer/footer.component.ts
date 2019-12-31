import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public links: {};
   
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.links = this.getGovernmentLink();
  }

  getGovernmentLink() {
    return this.config.getConfig().footer;
  }
}
