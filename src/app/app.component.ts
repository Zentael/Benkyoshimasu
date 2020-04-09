import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {slideInAnimation} from './route-animation';
import {KanasService} from './kanas/app.kanas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ],
  providers: [KanasService]
})
export class AppComponent {
  title = 'benkyoshimasu';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'] || {};
  }
}
