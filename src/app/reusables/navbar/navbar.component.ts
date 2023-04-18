import { Component } from '@angular/core';
// declare var $:any;
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showCategoryPc() {
    console.log("Clicked")
    $('#showCategoryPc').removeClass('display-none');
  }

}
