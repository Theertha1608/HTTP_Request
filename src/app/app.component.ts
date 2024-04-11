import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './http.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userDetails: any;

  constructor(private httpService: HttpService) { }

  getUserDetails() {
    this.httpService.getUserDetails().subscribe((data: any) => {
      this.userDetails = data;
    });
  }
}
