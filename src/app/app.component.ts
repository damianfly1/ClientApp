import { Component, OnInit } from '@angular/core';
import { ForumNestedResponseDto } from './core/models';
import { ForumsService } from './core/services';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    if(this.authService.isUserAuthenticated())
      console.log("siema jestem tutaj!");
      this.authService.sendAuthStateChangeNotification(true);
  }
}
