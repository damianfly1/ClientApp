import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CreatePostDto, CreateTopicDto, Post, SubForum, SubForumParentNestedResponseDto, Topic, TopicNestedResponseDto, TopicResponseDto, UpdateTopicDto } from 'src/app/core/models';
import { PostsService, SubForumsService, TopicsService } from 'src/app/core/services';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

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
  userRole: string | null = null;
  pinnedExist = false;

  pinned: TopicNestedResponseDto[] = {} as Array<TopicNestedResponseDto>;
  normal: TopicNestedResponseDto[] = {} as Array<TopicNestedResponseDto>

  constructor(private subforumsService : SubForumsService,
    private activatedRoute: ActivatedRoute,
    private topicsService: TopicsService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.sub=this.activatedRoute.paramMap.subscribe(params => { 
       this.subforumId = params.get('id'); 
       this.subforumsService.apiSubForumsIdGet$Json({id: this.subforumId!}).subscribe(
       response =>{
        this.subforum = response;
        this.topics = response.topics!;
        this.pinned = this.topics.filter(x => x.isPinned == true);
        this.normal = this.topics.filter(x => x.isPinned == false);
        this.checkIfPinnedExist();
       })
   });
   if(this.authenticationService.isUserAuthenticated()){
    this.userRole = this.authenticationService.getUserRole()!;
    }
    this.authenticationService.authChanged
    .subscribe(res => {
      this.userRole = null;
    })
  }

  updateTopic(){
    //czesc do api
    this.updateDto.name = this.selectedTopic.name;
    this.updateDto.isClosed = this.selectedTopic.isClosed;
    this.updateDto.isPinned = this.selectedTopic.isPinned;
    this.topicsService.apiTopicsIdPut$Json({id: this.updateId, body: this.updateDto}).subscribe();

    //czesc moja
    console.log("STAN PRZYPIECIA AKTUALNEGO TOPICA: ", this.topics[this.findIndexById(this.updateId)].isPinned);
    console.log("STAN PRZYPIECIA UPDATE: ", this.selectedTopic.isPinned );
    if (this.topics[this.findIndexById(this.updateId)].isPinned != this.selectedTopic.isPinned) this.moveTopic(this.selectedTopic);
    Object.assign(this.topics[this.findIndexById(this.updateId)], this.selectedTopic);
    this.editingTopic = false;
    this.selectedTopic = {} as TopicNestedResponseDto;
    this.checkIfPinnedExist();
  }

  startEditingTopic(topic: TopicNestedResponseDto){
    console.log("TEMAT DO EDYCJI KTORY DOSTAJE: ", topic);
    this.updateId = topic.id!;
    Object.assign(this.selectedTopic, topic);
    this.editingTopic = true;
  }

  addNewTopic(){
    this.subforumsService.apiSubForumsIdTopicsPost$Json({id: this.subforumId!, body: this.newTopic})
    .subscribe(response => {
      Object.assign(this.createdNewTopic, response);
      this.createdNewTopic.responseCount = 1;
      this.topics.push(this.createdNewTopic);
      if(this.createdNewTopic.isPinned) this.pinned.push(this.createdNewTopic);
      else this.normal.push(this.createdNewTopic);
      this.checkIfPinnedExist();
      this.topicsService.apiTopicsIdPostsPost$Json({id: response.id!, body: this.firstPost}).subscribe();
    })
    this.addingNewTopic = false;
  }

  startAddingNewTopic(){
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
  this.normal = this.normal.filter(x => x.id != this.updateId);
  this.pinned = this.pinned.filter(x => x.id != this.updateId);
  this.checkIfPinnedExist();
}

checkIfPinnedExist(){
  if (this.topics.filter(x => x.isPinned == true).length != 0) this.pinnedExist = true;
  else this.pinnedExist = false;
}

moveTopic(topic: TopicNestedResponseDto){
  console.log("WYKRYLEM ZMIANE!");
  console.log("DOSTAJE TOPIC DO PRZESUNIECIA", topic);
  if(topic.isPinned == false){
    this.normal.push(topic);
    this.pinned = this.pinned.filter(x => x.id != topic.id);
  }
  if(topic.isPinned == true){
    this.normal = this.normal.filter(x => x.id != topic.id);
    this.pinned.push(topic);
  }
  console.log(this.pinned);
  console.log(this.normal);
  console.log(this.topics);
}
}
