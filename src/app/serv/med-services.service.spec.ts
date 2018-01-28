import { TestBed, inject } from '@angular/core/testing';

import { MedServicesService } from './med-services.service';

describe('MedServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedServicesService]
    });
  });

  it('should be created', inject([MedServicesService], (service: MedServicesService) => {
    expect(service).toBeTruthy();
  }));
});
