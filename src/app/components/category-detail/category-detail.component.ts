import { Component, Input, OnInit } from '@angular/core';
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
  
  @Input() category!: CategoryNestedResponseDto;
  
  editing = false;
  updateDto!: UpdateCategoryDto;

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
    throw new Error('Method not implemented.');
  }
  startEditing() {
    this.editing = true;
  }
  update(){
    console.log(this.category);
    this.updateDto = {name: this.category.name, description: this.category.description, isModerationOnly: this.category.isModerationOnly}
    this.categoriesService.apiCategoriesIdPut({id: this.category.id!, body: this.updateDto}).subscribe();
    this.editing = false;

  }

}
