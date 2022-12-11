import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PostNestedResponseDto, UpdatePostDto, User } from 'src/app/core/models';
import { LikedByDto } from 'src/app/core/models/liked-by-dto';
import { UserResponseDto } from 'src/app/core/models/user-response-dto';
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
  liked = false;
  likedBy: LikedByDto = {} as LikedByDto;
  @Input() user: UserResponseDto | null = null;

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
    ]
  }
  ];

  constructor(private postsService: PostsService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.authChanged
      .subscribe(res => {
        this.user = null;
      })
    this.post.createdAt = this.getFormatedDate();
    this.isLiked();
  }

  delete() {
    this.postsService.apiPostsIdDelete$Json({ id: this.post.id! }).subscribe();
    this.removePost.emit(this.post.id);
  }
  startEditing() {
    this.editing = true;
  }
  update() {
    this.updateDto = { text: this.post.text }
    this.postsService.apiPostsIdPut$Json({ id: this.post.id!, body: this.updateDto }).subscribe();
    this.editing = false;
  }
  getFormatedDate() {
    return formatDate(this.post.createdAt!, 'short', 'en');
  }
  upvote() {
    console.log("up");
    this.post.points++;
    this.likedBy.userId = this.user!.id;
    this.post.likedBy.push(this.likedBy);
    this.postsService.apiPostUpvote$Json$Response({ id: this.post.id }).subscribe(res => console.log(res));
    this.liked = true;
  }
  downvote() {
    console.log("down");
    this.post.points--;
    this.post.likedBy = this.post.likedBy.filter(x=> x.userId!=this.user!.id);
    this.postsService.apiPostDownvote$Json$Response({ id: this.post.id }).subscribe(res => console.log(res))
    this.liked = false;
  }
  isLiked() {
    console.log(this.post);
    if (this.user != null) {
      for (let i = 0; i < this.post.likedBy.length; i++) {
        if (this.post.likedBy[i].userId == this.user.id){
          console.log("polajkowany!");
          this.liked = true;
        } 
      }
    }
  }
}
