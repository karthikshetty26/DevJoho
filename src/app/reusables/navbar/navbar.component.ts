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
    if($('#showCategoryPc').hasClass('display_none')){
      $('#showCategoryPc').removeClass('display_none');
    } else {
      $('#showCategoryPc').addClass('display_none');
    }
  }

}
