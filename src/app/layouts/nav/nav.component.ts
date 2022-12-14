import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isUserAuthenticated: boolean = false;
  userId: string | null = null;
  constructor(private authService: AuthenticationService, private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    if (this.authService.isUserAuthenticated()) {
      this.isUserAuthenticated = true;
      const username = this.authService.getCurrentUserName();
      this.usersService.getUser(username!).subscribe(res => this.userId = res.id);
    }

    this.authService.authChanged
      .subscribe(res => {
        this.isUserAuthenticated = res;
      })
  }

  public logout = () => {
    this.userId = null;
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
