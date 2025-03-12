import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {
      id: 1,
      title: 'Os Benefícios do TypeScript',
      content: 'Descubra por que o TypeScript melhora o desenvolvimento em JavaScript...',
      author: 'Augusto E. Domingues',
      date: '11 de Março de 2025'
    },
    {
      id: 2,
      title: 'Inteligência Artificial no Desenvolvimento Web',
      content: 'Como a IA está revolucionando o desenvolvimento web...',
      author: 'Augusto E. Domingues',
      date: '12 de Março de 2025'
    }
  ];
}
