import { Component } from '@angular/core';
import { FinancingCalculatorComponent } from './components/financing-calculator/financing-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FinancingCalculatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'carfinancing-front';
}
