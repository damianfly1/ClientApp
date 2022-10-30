import { Component, OnInit } from '@angular/core';
import { ForumNestedResponseDto } from './core/models';
import { ForumsService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ClientApp';
  forum!: ForumNestedResponseDto;
  forumId: string = '6ce5f760-d8e1-4e0d-87ba-1c6a220306fa';

  constructor(private ForumService : ForumsService) { }

  ngOnInit(): void {
    this.getForum();
  }
  getForum() {
    this.ForumService.apiForumsIdGet$Json({id: this.forumId}).subscribe(forum => this.forum = forum);
    console.log(this.forum);
  }
  
}
