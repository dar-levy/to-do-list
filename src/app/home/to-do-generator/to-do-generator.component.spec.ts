import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoGeneratorComponent } from './to-do-generator.component';

describe('ToDoGeneratorComponent', () => {
  let component: ToDoGeneratorComponent;
  let fixture: ComponentFixture<ToDoGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
