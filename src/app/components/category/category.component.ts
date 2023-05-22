import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faPhone,faLaptopHouse } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private location: Location) {}
  faPhone = faPhone;
  faLaptopHouse=faLaptopHouse


navigateTo = (url:string) => {
  console.log(123);
  this.location.go(url)
}
}
