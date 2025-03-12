import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PostListComponent } from '../post-list/post-list.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'posts', component: PostListComponent },
    { path: 'posts/:id', component: PostDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
];
