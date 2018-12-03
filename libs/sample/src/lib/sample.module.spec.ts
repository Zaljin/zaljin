import { async, TestBed } from '@angular/core/testing';
import { SampleModule } from './sample.module';

describe('SampleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SampleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SampleModule).toBeDefined();
  });
});
