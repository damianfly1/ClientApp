import { Component, Input, OnInit } from '@angular/core';
import { CategoryNestedResponseDto, CreateCategoryDto } from 'src/app/core/models';
import { ForumsService } from 'src/app/core/services';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() categories: CategoryNestedResponseDto[] | null | undefined = {} as Array<CategoryNestedResponseDto>;
  @Input() forumId = '';

  newCategory: CreateCategoryDto = {} as CreateCategoryDto;
  addingNewCategory = false;
  createdNewCategory: CategoryNestedResponseDto = {} as CategoryNestedResponseDto;

  constructor(private forumsService : ForumsService) { }

  ngOnInit(): void {
  }

  addNewCategory(){
    console.log(this.forumId)
    this.forumsService.apiForumsIdCategoriesPost$Json({id: this.forumId, body: this.newCategory} )
    .subscribe(category =>{
      Object.assign(this.createdNewCategory, category);
      this.categories?.push(this.createdNewCategory);
    });
    this.addingNewCategory=false;
  }

  removeCategory(categoryId : string){
    this.categories = this.categories?.filter(item => item.id !== categoryId);
  }

  startAddingNewCategory(){
    this.addingNewCategory = true;
  }

}
