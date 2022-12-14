import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {



  @Input() userId!: string;
  message: string = '';
  response!: { dbPath: '' };
  @Output() public onUploadFinished = new EventEmitter();



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  uploadFile = (files: FileList | null) => {
    if (files!.length === 0) {
      return;
    }
    let fileToUpload = <File>files![0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:7153/api/users/' + this.userId + '/avatar', formData, { observe: 'events', headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .subscribe({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            this.message = 'Awatar dodany, odśwież stronę aby zobaczyć';
            this.onUploadFinished.emit(event.body);
          }
        },
        error: (err: HttpErrorResponse) => this.message = "Wystąpił błąd"
      });
  }

  uploadFinished = (event: any) => {
    this.response = event;
  }

  deleteAvatar() {
    return this.http.delete('https://localhost:7153/api/users/' + this.userId + '/avatar', { observe: 'events', headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          this.message = 'Awatar usunięty, odśwież stronę aby zobaczyć';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => this.message = "Wystąpił błąd"
    });
  }

}
