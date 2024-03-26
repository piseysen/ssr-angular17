import { NgIf, NgFor, AsyncPipe, TitleCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-404',
  standalone: true,
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss',
  imports: [
    NgIf, 
    NgFor, 
    RouterLink, 
    AsyncPipe, 
    TitleCasePipe, 
    DatePipe
  ],
})
export class Error404Component {

}
