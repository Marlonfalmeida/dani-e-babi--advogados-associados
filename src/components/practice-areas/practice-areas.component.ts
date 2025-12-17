
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PracticeAreasComponent {
  constructor(private sanitizer: DomSanitizer) {}

  areas = [
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<img src="/direitoFamilia.png" class="h-20 w-20 object-contain" alt="Direito de Família" />`),
      title: 'Direito de Família',
      description: 'Soluções sensíveis e eficazes para questões como divórcio, guarda de filhos e partilha de bens.',
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<img src="/direitoImobiliario.png" class="h-20 w-20 object-contain" alt="Direito Imobiliário" />`),
      title: 'Direito Imobiliário',
      description: 'Assessoria em compra e venda, regularização de imóveis, locações e condomínios com segurança jurídica.',
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<img src="/direitoExtrajudicial.png" class="h-20 w-20 object-contain" alt="Direito Extrajudicial" />`),
      title: 'Direito Extrajudicial',
      description: 'Soluções ágeis em cartório para inventários, divórcios e usucapião, sem a burocracia judicial.',
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<img src="/direitoSussecoes.png" class="h-20 w-20 object-contain" alt="Planejamento Sucessório" />`),
      title: 'Planejamento Sucessório',
      description: 'Organização e proteção do seu patrimônio para o futuro, garantindo a tranquilidade da sua família.',
    }
  ];
}
