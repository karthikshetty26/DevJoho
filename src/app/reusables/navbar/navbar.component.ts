import { Component, HostListener, Renderer2 } from '@angular/core';
// declare var $:any;
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  showCategory: boolean = false;

  categoryList: any[] = [
    {name:'Fonts'},
    {name:'Stock Photos'},
    {name:'Stock Videos'},
    {name:'SVG Images'},
    {name:'Icons'},
    {name:'Illustrations'},
    {name:'Patterns'}
  ]

  showHideCategoryPc() {
    console.log("Clicked", this.categoryList)
    this.showCategory = !this.showCategory;
  }

  HideCategoryPc() {
    console.log("Clicked Ouside")
    this.showCategory = false;
  }
}
