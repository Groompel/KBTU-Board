import {Component, OnInit} from '@angular/core';
declare const showProfileWindow: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileWindowVisible = true;

  toggleProfileWindow() {
    showProfileWindow();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
