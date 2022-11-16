import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CreatePostDto, CreateTopicDto, Post, SubForum, SubForumParentNestedResponseDto, Topic, TopicNestedResponseDto, TopicResponseDto, UpdateTopicDto } from 'src/app/core/models';
import { PostsService, SubForumsService, TopicsService } from 'src/app/core/services';

@Component({
  selector: 'app-subforum',
  templateUrl: './subforum.component.html',
  styleUrls: ['./subforum.component.css'],
  providers: [MessageService]
})
export class SubforumComponent implements OnInit {

  subforumId: string | null = '';
  subforum: SubForumParentNestedResponseDto = {} as SubForumParentNestedResponseDto;
  topics: TopicNestedResponseDto[] = {} as Array<TopicNestedResponseDto>
  sub: any;
  addingNewTopic = false;
  newTopic: CreateTopicDto = {} as CreateTopicDto;
  firstPost: CreatePostDto = {} as CreatePostDto;
  createdNewTopic: TopicResponseDto = {} as TopicResponseDto;
  editingTopic = false;
  updateId: string = "";
  selectedTopic: TopicNestedResponseDto = {} as TopicNestedResponseDto;
  updateDto: UpdateTopicDto = {} as UpdateTopicDto;


  constructor(private subforumsService : SubForumsService, private activatedRoute: ActivatedRoute, private topicsService: TopicsService) { }

  ngOnInit(): void {
    console.log("jestem here")
    this.sub=this.activatedRoute.paramMap.subscribe(params => { 
       this.subforumId = params.get('id'); 
       this.subforumsService.apiSubForumsIdGet$Json({id: this.subforumId!}).subscribe(
       response =>{
        this.subforum = response;
        this.topics = response.topics!;
       })
   });
  }

  updateTopic(){
    this.updateDto.name = this.selectedTopic.name;
    this.updateDto.isClosed = this.selectedTopic.isClosed;
    this.updateDto.isPinned = this.selectedTopic.isPinned;
    this.topicsService.apiTopicsIdPut$Json({id: this.updateId, body: this.updateDto}).subscribe();
    this.topics[this.findIndexById(this.updateId)] = this.selectedTopic;
    this.editingTopic = false;
  
  }

  startEditingTopic(topic: TopicNestedResponseDto){
    this.updateId = topic.id!;
    Object.assign(this.selectedTopic, topic);
    console.log(this.selectedTopic);
    this.editingTopic = true;
  }

  addNewTopic(){
    this.subforumsService.apiSubForumsIdTopicsPost$Json({id: this.subforumId!, body: this.newTopic})
    .subscribe(response => {
      Object.assign(this.createdNewTopic, response);
      this.topics.push(this.createdNewTopic);
      this.topicsService.apiTopicsIdPostsPost$Json({id: response.id!, body: this.firstPost});
    })
    this.addingNewTopic = false;
  }

  startAddingNewTopic(){
    console.log("jestem here");
    this.addingNewTopic = true;
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.topics.length; i++) {
        if (this.topics[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

deleteTopic(){
  this.topicsService.apiTopicsIdDelete$Json({id: this.updateId}).subscribe();
  this.topics = this.topics.filter(val => val.id !== this.updateId);
}

}
