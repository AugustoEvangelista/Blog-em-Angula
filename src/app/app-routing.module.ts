import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'posts', component: PostListComponent }, // Lista de posts
  { path: 'posts/:id', component: PostDetailComponent }, // Detalhe de post específico
  { path: 'about', component: AboutComponent }, // Página "Sobre"
  { path: '**', component: NotFoundComponent } // Página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
