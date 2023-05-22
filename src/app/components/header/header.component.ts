import { Component } from '@angular/core';
import { faSearch,faTruckFast,faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
faSearch = faSearch
faTruckFast = faTruckFast
faCartShopping=faCartShopping

}
