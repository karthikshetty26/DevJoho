import { Component } from '@angular/core';
// declare var $:any;
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  prevent: boolean = false;

  hideShowCategoryPc() {
    this.prevent = true;
  }

  showCategoryPc() {
    if ($('#showCategoryPc').hasClass('display_none') && !this.prevent) {
      $('#showCategoryPc').removeClass('display_none');
      $('#category-link').addClass('category_link');
    } else {
      $('#showCategoryPc').addClass('display_none');
      $('#category-link').removeClass('category_link');
      this.prevent = false;
    }
  }

}
