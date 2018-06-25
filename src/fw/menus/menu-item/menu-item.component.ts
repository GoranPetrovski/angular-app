import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, MenuService } from '../../services/menu.service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() item = <MenuItem>null; //: MenuItem;


  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
