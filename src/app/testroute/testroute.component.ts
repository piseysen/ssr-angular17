import { NgIf, NgFor, AsyncPipe, TitleCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-testroute',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, AsyncPipe, TitleCasePipe, DatePipe],
  templateUrl: './testroute.component.html',
  styleUrl: './testroute.component.scss'
})
export class TestrouteComponent {

}
