import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {slideInAnimation} from '../route-animation';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss'],
  animations: [ slideInAnimation ]
})
export class ExercicesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  kana: string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.kana = params.get('kana');
    });
  }
}
