import { Component, Input, OnInit } from '@angular/core';
import { CategoryNestedResponseDto } from 'src/app/core/models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() categories!: CategoryNestedResponseDto[] | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
