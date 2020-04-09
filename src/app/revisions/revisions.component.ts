import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {slideInAnimation} from '../route-animation';
import {KanasService} from '../kanas/app.kanas.service';


@Component({
  selector: 'app-revisions',
  templateUrl: './revisions.component.html',
  styleUrls: ['./revisions.component.scss'],
  animations: [ slideInAnimation ]
})
export class RevisionsComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute, private kanaService: KanasService) {}

  kana: string;

  romajis = this.kanaService.getRomajis();
  hiraganas = this.kanaService.getHiraganas();
  katakanas = this.kanaService.getKatakanas();

  objectEntries = Object.entries;

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.kana = params['kana'];
        }
    );
  }

  ngAfterViewInit() {
    console.log(this.kana);
    console.log(this.romajis);
    console.log(this.hiraganas);
    console.log(this.katakanas);
  }
}
