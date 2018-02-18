import { TestBed, inject } from '@angular/core/testing';

import { MarvelherosService } from './marvelheros.service';

describe('MarvelherosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelherosService]
    });
  });

  it('should be created', inject([MarvelherosService], (service: MarvelherosService) => {
    expect(service).toBeTruthy();
  }));
});
