import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePraticienComponent } from './update-praticien.component';

describe('UpdatePraticienComponent', () => {
  let component: UpdatePraticienComponent;
  let fixture: ComponentFixture<UpdatePraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePraticienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
