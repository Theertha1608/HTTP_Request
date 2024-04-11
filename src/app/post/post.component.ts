import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  showResponse: boolean = false;
  responseStatus: string = '';
  responseBody: any = null;
  age: any;

  constructor(private httpService: HttpService) { }

  saveDetails() {
    const userDetails = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      age: this.age
    };

    this.httpService.saveUserDetails(userDetails).subscribe(
      (response) => {
        this.showResponse = true;
        this.responseStatus = 'Success';
        this.responseBody = response;
      },
      (error) => {
        this.showResponse = true;
        this.responseStatus = 'Error';
        this.responseBody = error;
      }
    );
  }
}

