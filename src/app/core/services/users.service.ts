import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TagContentType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserResponseDto } from '../models/user-response-dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUser(idOrName: string) {
    return this.httpClient.get<UserResponseDto>('https://localhost:7153/api/users/' + idOrName);
  }

  setRole(id: string, role: string) {
    return this.httpClient.post<UserResponseDto>('https://localhost:7153/api/users/' + id + '/role?role=' + role, null);
  }

}