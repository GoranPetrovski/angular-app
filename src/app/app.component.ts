import { Component } from '@angular/core';
import { MenuService } from '../fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = 'G Product Management';

  constructor(private menuService: MenuService){
    menuService.items = initialMenuItems;
  }
}
