// app.component.ts

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  imports: [FormsModule, CommonModule, RouterOutlet],
  standalone: true,
  styleUrls: ['./github.component.css']
})
export class GithubComponent {
  username: string = '';
  userData: any = {};
  jsonSnippet: string = '';

  constructor() {}

  getUserInfo() {
    const username = this.username;
    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(userData => {
        this.userData = userData;
        this.jsonSnippet = JSON.stringify(userData, null, 2);
      })
      .catch(error => {
        console.error('Error:', error.message);
        this.userData = {};
        this.jsonSnippet = '';
      });
  }
}