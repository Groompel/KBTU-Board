import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileWindowVisible = false;

  toggleProfileWindow() {
    this.profileWindowVisible = !this.profileWindowVisible;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
