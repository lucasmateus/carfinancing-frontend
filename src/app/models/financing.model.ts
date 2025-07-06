export interface InstallmentCalculationPayload {
  financingType: 'INTERNAL' | 'EXTERNAL';
  installmentCount: number;
  carValue: number;
}

export interface InstallmentCalculationResponse {
  monthlyInstallment: number;
  financingType: 'INTERNAL' | 'EXTERNAL';
  installmentCount: number;
  carValue: number;
}

export interface SaveInstallmentPayload {
  name: string;
  contact: string;
  financingType: 'INTERNAL' | 'EXTERNAL';
  installmentCount: number;
  carValue: number;
  monthlyInstallment: number;
}

export interface SaveInstallmentResponse {
  message: string;
} 