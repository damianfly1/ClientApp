import { Component, OnInit } from '@angular/core';
import { ForumNestedResponseDto } from './core/models';
import { ForumsService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }
}
