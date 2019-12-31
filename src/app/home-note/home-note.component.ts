import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home-note',
  templateUrl: './home-note.component.html',
  styleUrls: ['./home-note.component.scss']
})
export class HomeNoteComponent implements OnInit {

  public para :{};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.para = this.getParagraphNote();
  }
getParagraphNote(){
  return this.config.getConfig().home_notes;
}
}
