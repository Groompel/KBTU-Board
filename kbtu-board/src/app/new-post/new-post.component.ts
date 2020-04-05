import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor() {
  }

  help = new FormGroup({
    head: new FormControl(),
    description: new FormControl(),
    reward: new FormControl(),
  });

  lost = new FormGroup({
    head: new FormControl(),
    description: new FormControl(),
    time: new FormControl(),
    place: new FormControl(),
    left: new FormControl(),
    photo: new FormControl()
  });

  study = new FormGroup({
    head: new FormControl(),
    description: new FormControl(),
    subject: new FormControl(),
    reward: new FormControl()
  });

  submitHelp() {
    console.warn(this.help.value);
  }

  submitLost() {
    console.warn(this.lost.value);
  }

  submitStudy() {
    console.warn(this.study.value);
  }

  ngOnInit(): void {
  }

  openCategory(evt, category) {
    // Declare all variables
    let i;
    let tabcontent;
    let tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(category).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
}
