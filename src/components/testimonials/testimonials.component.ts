
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: 'Encontrei a tranquilidade que precisava. Fui ouvido com atenção e meu caso foi resolvido de forma ágil e profissional. Recomendo de olhos fechados.',
      author: 'J. S. Silva',
      caseType: 'Direito de Família',
    },
    {
      quote: 'Assessoria impecável para a minha empresa. A clareza e o conhecimento técnico da equipe fizeram toda a diferença na negociação de um contrato importante.',
      author: 'M. Oliveira',
      caseType: 'Direito Empresarial',
    },
    {
      quote: 'Tive um problema com uma companhia aérea e não sabia como agir. A equipe me orientou em cada passo e garantiu que meus direitos fossem respeitados.',
      author: 'A. Costa',
      caseType: 'Direito do Consumidor',
    }
  ];
}
