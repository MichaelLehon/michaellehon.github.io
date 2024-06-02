import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent {
  @Input() list: any[];

  constructor() {
    this.list = [];
  }
}
