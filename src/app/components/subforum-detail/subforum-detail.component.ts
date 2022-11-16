import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SubForumNestedResponseDto, UpdateSubForumDto } from 'src/app/core/models';
import { SubForumsService } from 'src/app/core/services';

@Component({
  selector: 'app-subforum-detail',
  templateUrl: './subforum-detail.component.html',
  styleUrls: ['./subforum-detail.component.css']
})
export class SubforumDetailComponent implements OnInit {

  @Input() subForum: SubForumNestedResponseDto = {} as SubForumNestedResponseDto;
  @Output() removeSubForum: EventEmitter<any> = new EventEmitter();
  editing = false;
  updateDto: UpdateSubForumDto = {} as UpdateSubForumDto;

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

  constructor(private subForumsService : SubForumsService) { }

  ngOnInit(): void {
  }

  delete() {
    this.subForumsService.apiSubForumsIdDelete$Json({id: this.subForum.id!}).subscribe();
    this.removeSubForum.emit(this.subForum.id);
  }
  startEditing() {
    this.editing = true;
  }
  update(){
    this.updateDto = {name: this.subForum.name, description: this.subForum.description}
    this.subForumsService.apiSubForumsIdPut$Json({id: this.subForum.id!, body: this.updateDto}).subscribe();
    this.editing = false;
  }

}
