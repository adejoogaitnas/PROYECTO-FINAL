import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
  
export class GithubComponent {
  private _github=inject(GithubService)
  username: string = '';
  userData: any = {};
  jsonSnippet: string = '';

  constructor(private githubService: GithubService) {}

  getUserInfo() {
    this._github.getUserInfo(this.username)
      .subscribe(
        userData => {
          this.userData = userData;
          this.jsonSnippet = JSON.stringify(userData, null, 2);
        },
        error => {
          console.error('Error:', error.message);
          this.userData = {};
          this.jsonSnippet = '';
        }
      );
  }
}
