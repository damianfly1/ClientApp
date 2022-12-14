import { Component, OnInit } from '@angular/core';
import { UserResponseDto } from 'src/app/core/models/user-response-dto';
import { UsersService } from 'src/app/core/services/users.service';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserResponseDto[] = {} as Array<UserResponseDto>

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(res => this.users = res);
  }

}
