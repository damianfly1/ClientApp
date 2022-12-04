import { Component, Input, OnInit } from '@angular/core';
import { CreatePostDto, PostNestedResponseDto } from 'src/app/core/models';
import { TopicsService } from 'src/app/core/services';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() posts: PostNestedResponseDto[] = {} as Array<PostNestedResponseDto>
  @Input() topicId = "";
  @Input() isClosed = false;
  userRole: string | null | undefined = null;

  newPost: CreatePostDto = {} as CreatePostDto;
  addingNewPost = false;
  createdNewPost: PostNestedResponseDto = {} as PostNestedResponseDto;

  constructor(private topicsService: TopicsService, private authenticationService: AuthenticationService ) { }

  ngOnInit(): void {
    if(this.authenticationService.isUserAuthenticated()){
      this.userRole = this.authenticationService.getUserRole()!;
    }
    this.authenticationService.authChanged
    .subscribe(res => {
      this.userRole = null;
    })
  }

  removePost(postId : string){
    this.posts = this.posts?.filter(item => item.id !== postId);
  }

  startAddingNewPost(){
    this.addingNewPost = true;
  }

  addNewPost(){
    this.topicsService.apiTopicsIdPostsPost$Json({id: this.topicId, body: this.newPost} )
    .subscribe(response =>{
      Object.assign(this.createdNewPost, response);
      this.posts?.push(this.createdNewPost);
    });
    this.addingNewPost=false;
  }

}
