import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CategoryNestedResponseDto } from 'src/app/core/models';
import { UpdateCategoryDto } from 'src/app/core/models';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  
  @Input() category: CategoryNestedResponseDto = {} as CategoryNestedResponseDto;
  @Output() removeCategory: EventEmitter<any> = new EventEmitter();
  editing = false;
  updateDto: UpdateCategoryDto = {} as UpdateCategoryDto;

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

  constructor(private categoriesService : CategoriesService) { }

  ngOnInit(): void {
  }

  delete() {
    this.categoriesService.apiCategoriesIdDelete$Json({id: this.category.id!}).subscribe();
    this.removeCategory.emit(this.category.id);
  }
  startEditing() {
    this.editing = true;
  }
  update(){
    console.log(this.category);
    this.updateDto = {name: this.category.name, description: this.category.description, isModerationOnly: this.category.isModerationOnly}
    this.categoriesService.apiCategoriesIdPut$Json({id: this.category.id!, body: this.updateDto}).subscribe();
    this.editing = false;
  }

}
