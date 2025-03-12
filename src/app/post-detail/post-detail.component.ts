import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common'; // Importando CommonModule

@Component({
  selector: 'app-post-detail',
  standalone: true, // Garantindo que ele é standalone
  imports: [CommonModule], // Adicionando CommonModule para suportar *ngIf
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  post: any;

  posts = [
    {
      id: 1,
      title: 'Os Benefícios do TypeScript',
      content: 'O TypeScript melhora o JavaScript ao adicionar tipagem estática...',
      details: `Além disso, o TypeScript oferece recursos como interfaces, 
                genéricos e decoradores, tornando o código mais seguro e legível.`,
      author: 'Augusto E. Domingues',
      date: '11 de Março de 2025'
    },
    {
      id: 2,
      title: 'Inteligência Artificial no Desenvolvimento Web',
      content: 'A IA está revolucionando o desenvolvimento web...',
      details: `Com a IA, sites podem personalizar a experiência do usuário, 
                prever necessidades e automatizar processos.`,
      author: 'Augusto E. Domingues',
      date: '12 de Março de 2025'
    }
  ];

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.posts.find(post => post.id === id);

    if (!this.post) {
      console.error('Post não encontrado');
    }
  }

  goBack() {
    this.location.back();
  }
}
