import { NgIf, NgFor, AsyncPipe, TitleCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-testroute1',
  standalone: true,
  templateUrl: './testroute1.component.html',
  styleUrl: './testroute1.component.scss',
  imports: [
    NgIf, 
    NgFor, 
    RouterLink, 
    AsyncPipe, 
    TitleCasePipe, 
    DatePipe
  ],
})
export class Testroute1Component {

}
