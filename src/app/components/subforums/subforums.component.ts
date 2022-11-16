import { Component, Input, OnInit } from '@angular/core';
import { CreateSubForumDto, SubForumNestedResponseDto, UpdateSubForumDto } from 'src/app/core/models';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-subforums',
  templateUrl: './subforums.component.html',
  styleUrls: ['./subforums.component.css']
})
export class SubforumsComponent implements OnInit {

  @Input() subForums: SubForumNestedResponseDto[] | null | undefined = {} as Array<SubForumNestedResponseDto>;
  @Input() categoryId = '';

  newSubForum: CreateSubForumDto = {} as CreateSubForumDto;
  addingNewSubForum = false;
  createdNewSubForum: SubForumNestedResponseDto = {} as SubForumNestedResponseDto;
  updateDto: UpdateSubForumDto = {} as UpdateSubForumDto;

  constructor(private categoriesService : CategoriesService) { }

  ngOnInit(): void {
  }

  addNewSubForum(){
    this.categoriesService.apiCategoriesIdSubForumsPost$Json({id:this.categoryId, body: this.newSubForum})
    .subscribe(subForum => {
      Object.assign(this.createdNewSubForum, subForum);
      this.subForums?.push(this.createdNewSubForum);
    });
    this.addingNewSubForum = false;
  }

  removeSubForum(subForumId : string){
    this.subForums = this.subForums?.filter(item => item.id !== subForumId);
  }

  startAddingNewSubForum(){
    this.addingNewSubForum = true;
  }

}
