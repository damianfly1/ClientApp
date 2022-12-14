import { Component, Input, OnInit } from '@angular/core';
import { CreatePostDto, PostNestedResponseDto } from 'src/app/core/models';
import { UserResponseDto } from 'src/app/core/models/user-response-dto';
import { TopicsService } from 'src/app/core/services';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() posts: PostNestedResponseDto[] = {} as Array<PostNestedResponseDto>
  @Input() topicId = "";
  @Input() isClosed = false;
  user: UserResponseDto | null = null;

  newPost: CreatePostDto = {} as CreatePostDto;
  addingNewPost = false;
  createdNewPost: PostNestedResponseDto = {} as PostNestedResponseDto;

  constructor(private topicsService: TopicsService,
    private authenticationService: AuthenticationService,
    private usersService: UsersService) { }

  ngOnInit(): void {
    if (this.authenticationService.isUserAuthenticated()) {
      this.usersService.getLoggedUser().subscribe(res => {
        this.user = res
      });
    }
    this.authenticationService.authChanged
      .subscribe(res => {
        this.user = null;
      })
  }

  removePost(postId: string) {
    this.posts = this.posts?.filter(item => item.id !== postId);
  }

  startAddingNewPost() {
    this.addingNewPost = true;
  }

  addNewPost() {
    this.topicsService.apiTopicsIdPostsPost$Json({ id: this.topicId, body: this.newPost })
      .subscribe(response => {
        Object.assign(this.createdNewPost, response);
        this.posts?.push(this.createdNewPost);
      });
    this.addingNewPost = false;
  }

}
