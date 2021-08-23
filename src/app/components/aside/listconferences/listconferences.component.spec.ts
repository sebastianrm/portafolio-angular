import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconferencesComponent } from './listconferences.component';

describe('ListconferencesComponent', () => {
  let component: ListconferencesComponent;
  let fixture: ComponentFixture<ListconferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListconferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListconferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
