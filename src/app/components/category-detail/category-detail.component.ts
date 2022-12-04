import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuItemContent } from 'primeng/menu';
import { CategoryNestedResponseDto } from 'src/app/core/models';
import { UpdateCategoryDto } from 'src/app/core/models';
import { CategoriesService } from 'src/app/core/services';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

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
  userRole: string | null = null;

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

  constructor(private categoriesService : CategoriesService, 
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(this.authenticationService.isUserAuthenticated()){
      this.userRole = this.authenticationService.getUserRole()!;
    }
    this.authenticationService.authChanged
    .subscribe(res => {
      this.userRole = null;
    })
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
