import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDosComponent } from './to-dos.component';

describe('ToDosComponent', () => {
  let component: ToDosComponent;
  let fixture: ComponentFixture<ToDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
