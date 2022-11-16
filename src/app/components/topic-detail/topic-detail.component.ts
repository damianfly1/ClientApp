import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicNestedResponseDto, TopicParentNestedResponseDto } from 'src/app/core/models';
import { TopicsService } from 'src/app/core/services';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {

  topicId: string | null = "";
  topic: TopicParentNestedResponseDto = {} as TopicParentNestedResponseDto;
  sub: any;

  constructor(private topicsService: TopicsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub=this.activatedRoute.paramMap.subscribe(params => { 
      this.topicId = params.get('id'); 
      this.topicsService.apiTopicsIdGet$Json({id: this.topicId!}).subscribe(
      response =>{
       this.topic = response;
      })
  });
  }

}
