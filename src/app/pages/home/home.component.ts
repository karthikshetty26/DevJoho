import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categoryList: any[] = [
    { name: 'Fonts' },
    { name: 'Stock Photos' },
    { name: 'Stock Videos' },
    { name: 'SVG Images' },
    { name: 'Icons' },
    { name: 'Illustrations' },
    { name: 'Patterns' }
  ]

  listAlter() {
    
  }
}
