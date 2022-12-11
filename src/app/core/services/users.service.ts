import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TagContentType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserResponseDto } from '../models/user-response-dto';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) { }

  getUser(idOrName: string) {
    return this.httpClient.get<UserResponseDto>('https://localhost:7153/api/users/' + idOrName);
  }

  getLoggedUser(){
    return this.httpClient.get<UserResponseDto>('https://localhost:7153/api/users/' + this.authenticationService.getCurrentUserName());
  }

  setRole(id: string, role: string) {
    return this.httpClient.post<UserResponseDto>('https://localhost:7153/api/users/' + id + '/role?role=' + role, null);
  }

  getAll(){
    return this.httpClient.get<Array<UserResponseDto>>('https://localhost:7153/api/users/', {headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }});
  }

}