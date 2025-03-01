import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPraticienComponent } from './list-praticien.component';

describe('ListPraticienComponent', () => {
  let component: ListPraticienComponent;
  let fixture: ComponentFixture<ListPraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPraticienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
