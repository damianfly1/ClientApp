import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import {HttpClientModule} from '@angular/common/http';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {Chips, ChipsModule} from 'primeng/chips';
import {FormsModule} from '@angular/forms'
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { SubforumsComponent } from './components/subforums/subforums.component';
import { SubforumDetailComponent } from './components/subforum-detail/subforum-detail.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { ProfileAvatarComponent } from './components/profile-avatar/profile-avatar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ForumsService } from './core/services';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    SubforumsComponent,
    SubforumDetailComponent,
    TopicsComponent,
    TopicDetailComponent,
    PostsComponent,
    PostDetailComponent,
    ProfileAvatarComponent,
    EditCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    PanelModule,
    HttpClientModule,
    MenuModule,
    ToolbarModule,
    ButtonModule,
    ChipsModule,
    FormsModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
