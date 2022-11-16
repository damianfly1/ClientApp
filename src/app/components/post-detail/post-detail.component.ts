import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PostNestedResponseDto, UpdatePostDto } from 'src/app/core/models';
import { PostsService } from 'src/app/core/services';

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

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
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

}
