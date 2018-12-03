import { async, TestBed } from '@angular/core/testing';
import { DndEncountersModule } from './dnd-encounters.module';

describe('DndEncountersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DndEncountersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DndEncountersModule).toBeDefined();
  });
});
