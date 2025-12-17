
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class HeaderComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  onWindowScroll() {
    this.scrolled.set(window.scrollY > 10);
  }
  
  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  scrollTo(event: Event, elementId: string) {
    event.preventDefault();
    this.menuOpen.set(false);
    document.querySelector(elementId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
