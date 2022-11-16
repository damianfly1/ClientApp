import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {Chips, ChipsModule} from 'primeng/chips';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {Table, TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {AvatarModule} from 'primeng/avatar';

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
import {InputSwitchModule} from 'primeng/inputswitch';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ErrorHandlerService } from './core/services/error-handler.service';
import { JwtModule } from "@auth0/angular-jwt";
import { SubforumComponent } from './components/subforum/subforum.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

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
    LoginComponent,
    MainComponent,
    SubforumComponent,
    UserInfoComponent,
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
    DialogModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    TableModule,
    ReactiveFormsModule,
    ToastModule,
    AvatarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
