import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePraticienFormComponent } from './create-praticien-form.component';

describe('CreatePraticienFormComponent', () => {
  let component: CreatePraticienFormComponent;
  let fixture: ComponentFixture<CreatePraticienFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePraticienFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePraticienFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
