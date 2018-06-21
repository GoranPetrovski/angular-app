import { Component } from '@angular/core';
import { ProductSevice } from './products/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = 'G Product Management';
}
