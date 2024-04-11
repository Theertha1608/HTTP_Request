import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HttpService } from './http.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, PostComponent, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  allUserDetails: any[] = [];
  searchedUserDetails: any[] = [];
  searchIdentifier: string = '';

  constructor(private httpService: HttpService) { }

  getAllUserDetails() {
    this.httpService.getAllUsers().subscribe((data: any[]) => {
      this.allUserDetails = data;
    });
  }

  getUserDetails() {
    const userId = parseInt(this.searchIdentifier, 10);
    if (!isNaN(userId)) {
      this.httpService.getUserById(userId).subscribe((data: any[]) => {
        this.searchedUserDetails = data;
      });
    } else {
      console.log('Invalid identifier');
    }
  }
}