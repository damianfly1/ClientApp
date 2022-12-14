import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserResponseDto } from 'src/app/core/models/user-response-dto';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: string | null = '';
  user: UserResponseDto = {} as UserResponseDto;
  sub: any;
  userRole: string | null = null;

  options: MenuItem[] = [{
    label: 'Opcje',
    items: [
      {
        label: 'Uczyń moderatorem',
        icon: 'pi pi-angle-up',
        command: () => {
          this.setRole("Moderator");
        }
      },
      {
        label: 'Uczyń administratorem',
        icon: 'pi pi-angle-double-up',
        command: () => {
          this.setRole("Administrator");
        }
      },
      {
        label: 'Uczyń normalnym użytkownikiem',
        icon: 'pi pi-times',
        command: () => {
          this.setRole("User");
        }
      },
      {
        label: 'Zbanuj/odbanuj',
        icon: 'pi pi-ban',
        command: () => {
          if (this.user.isBanned) this.setRole("Unban");
          else this.setRole("Ban");
        }
      }
    ]
  }
  ];

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      this.usersService.getUser(this.userId!).subscribe(
        response => {
          this.user = response;;
        })
    });
    if (this.authenticationService.isUserAuthenticated()) {
      this.userRole = this.authenticationService.getUserRole()!;
    }
    this.authenticationService.authChanged
      .subscribe(res => {
        this.userRole = null;
      })
  }

  public createImgPath = (serverPath: any) => {
    return `https://localhost:7153/${serverPath}`;
  }

  setRole(command: string) {
    this.usersService.setRole(this.userId!, command).subscribe(
      response => this.user = response
    );
  }

  isOwner() {
    if (this.authenticationService.getCurrentUserName() == this.user.userName) return true;
    else return false;
  }

}
