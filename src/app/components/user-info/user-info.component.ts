import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models';
import { UserResponseDto } from 'src/app/core/models/user-response-dto';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() userId!: string;
  user: UserResponseDto = {} as UserResponseDto;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUser(this.userId!).subscribe(
      response => {
        this.user = response;
      })
  }

  public createImgPath = (serverPath: any) => {
    return `https://localhost:7153/${serverPath}`;
  }

}
