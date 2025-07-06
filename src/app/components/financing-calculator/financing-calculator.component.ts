import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FinancingService } from '../../services/financing.service';
import { SaveInstallmentPayload } from '../../models/financing.model';

@Component({
  selector: 'app-financing-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './financing-calculator.component.html',
  styles: [``]
})
export class FinancingCalculatorComponent {
  financingType: 'interno' | 'externo' = 'interno';
  months: number = 12;
  carValue: number = 0;
  availableMonths: number[] = [12, 24, 36, 48];
  monthlyPayment: number | null = null;
  showMonthlyPayment = false;
  showSave = false;
  name = '';
  contact = '';
  saveSuccess = false;
  saveError = false;
  modalMessage = '';

  constructor(
    private financingService: FinancingService,
    private cdr: ChangeDetectorRef
  ) { }

  onTypeChange() {
    this.availableMonths = this.financingType === 'externo' ? [12, 24, 36, 48, 60] : [12, 24, 36, 48];
    if (!this.availableMonths.includes(this.months)) {
      this.months = this.availableMonths[0];
    }
  }

  onSubmit() {
    this.financingService.calculateInstallment(this.financingType, this.months, this.carValue)
      .subscribe({
        next: (result) => {
          this.monthlyPayment = result.monthlyInstallment;
          this.showSave = false;
          this.saveSuccess = false;
          this.saveError = false;
          this.showMonthlyPayment = true;
          this.cdr.detectChanges();
        },
        error: (result) => {
          this.monthlyPayment = null;
          this.showSave = false;
          this.saveSuccess = false;
          this.saveError = false;
          this.showMonthlyPayment = false;
          this.cdr.detectChanges();
        }
      });
  }

  onSave() {
    const payload: SaveInstallmentPayload = {
      name: this.name,
      contact: this.contact,
      financingType: this.financingType === 'interno' ? 'INTERNAL' : 'EXTERNAL',
      installmentCount: this.months,
      carValue: this.carValue,
      monthlyInstallment: this.monthlyPayment ?? 0
    };

    this.financingService.saveInfo(payload).subscribe({
      next: (res) => {
        this.saveSuccess = true;
        this.saveError = false;
        this.modalMessage = res.message;
        this.cdr.detectChanges();
      },
      error: () => {
        this.saveSuccess = false;
        this.saveError = true;
        this.modalMessage = 'Erro ao guardar informação.';
        this.cdr.detectChanges();
      }
    });
  }
} 