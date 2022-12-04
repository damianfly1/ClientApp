import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PostNestedResponseDto, UpdatePostDto } from 'src/app/core/models';
import { PostsService } from 'src/app/core/services';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post: PostNestedResponseDto = {} as PostNestedResponseDto;
  @Output() removePost: EventEmitter<any> = new EventEmitter();
  editing = false;
  updateDto: UpdatePostDto = {} as UpdatePostDto;
  userRole: string | null | undefined = null;

  options: MenuItem[] = [{
    label: 'Opcje',
    items: [
      {
        label: 'Edytuj',
        icon: 'pi pi-refresh',
        command: () => {
            this.startEditing();
        }
    },
    {
        label: 'Usuń',
        icon: 'pi pi-times',
        command: () => {
            this.delete();
        }
    }
    ]}
  ];

  constructor(private postsService: PostsService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(this.authenticationService.isUserAuthenticated()){
      this.userRole = this.authenticationService.getUserRole()!;
    }
    this.authenticationService.authChanged
    .subscribe(res => {
      this.userRole = null;
    })
    this.post.createdAt = this.getFormatedDate();
    //console.log(this.post.createdAt);
  }

  delete() {
    this.postsService.apiPostsIdDelete$Json({id: this.post.id!}).subscribe();
    this.removePost.emit(this.post.id);
  }
  startEditing() {
    this.editing = true;
  }
  update(){
    this.updateDto = {text: this.post.text}
    this.postsService.apiPostsIdPut$Json({id: this.post.id!, body: this.updateDto}).subscribe();
    this.editing = false;
  }
  getFormatedDate(){
    return formatDate(this.post.createdAt!, 'short', 'en');
  }

}
