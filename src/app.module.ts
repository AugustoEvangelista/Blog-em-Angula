import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './routes/app.routes';
import { PostListComponent } from './post-list/post-list.component'; // Importando o componente

@NgModule({
  declarations: [
    PostListComponent // Declarando o componente
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configurando as rotas corretamente
  ],
  providers: [],
  bootstrap: [] // AppComponent é standalone, então não precisa ser declarado aqui
})
export class AppModule { }
