import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InstallmentCalculationPayload, InstallmentCalculationResponse, SaveInstallmentPayload, SaveInstallmentResponse } from '../models/financing.model';

@Injectable({ providedIn: 'root' })
export class FinancingService {
  constructor(private http: HttpClient) {}

  calculateInstallment(type: string, months: number, value: number): Observable<InstallmentCalculationResponse> {
    const payload: InstallmentCalculationPayload = {
      financingType: type === 'interno' ? 'INTERNAL' : 'EXTERNAL',
      installmentCount: months,
      carValue: value
    };
    return this.http.post<InstallmentCalculationResponse>('http://localhost:8001/api/installment/calculate', payload);
  }

  saveInfo(data: SaveInstallmentPayload): Observable<SaveInstallmentResponse> {
    return this.http.post<SaveInstallmentResponse>('http://localhost:8001/api/installment/save', data);
  }
} 