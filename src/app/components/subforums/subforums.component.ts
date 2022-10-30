import { Component, Input, OnInit } from '@angular/core';
import { SubForumNestedResponseDto } from 'src/app/core/models';

@Component({
  selector: 'app-subforums',
  templateUrl: './subforums.component.html',
  styleUrls: ['./subforums.component.css']
})
export class SubforumsComponent implements OnInit {

  @Input() subforums!: SubForumNestedResponseDto[] | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
