import { Component, OnInit } from '@angular/core';
import { ForumNestedResponseDto } from 'src/app/core/models';
import { ForumsService } from 'src/app/core/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'ClientApp';
  forum: ForumNestedResponseDto = {} as ForumNestedResponseDto;
  forumId: string = '71AE2552-5639-4546-8AD5-BC81AE457B00';

  constructor(private ForumService : ForumsService) { }

  ngOnInit(): void {
    this.getForum();
  }
  getForum() {
    this.ForumService.getForum().subscribe(forum => this.forum = forum);
    console.log(this.forum);
  }

}
