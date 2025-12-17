
import { Component, ChangeDetectionStrategy } from '@angular/core';

// Recompilation trigger

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
