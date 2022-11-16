import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SubforumComponent } from './components/subforum/subforum.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  {path: 'home', component: MainComponent },//, canActivate: [AuthGuard]},
  {path: 'subforums/:id', component: SubforumComponent},
  {path: 'topics/:id', component: TopicDetailComponent},
  {path: 'authentication', loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule) },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
