import { TestBed } from '@angular/core/testing';

import { ThoughtSocketService } from './thought-socket-service';

describe('ThoughtSocketService', () => {
  let service: ThoughtSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThoughtSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
