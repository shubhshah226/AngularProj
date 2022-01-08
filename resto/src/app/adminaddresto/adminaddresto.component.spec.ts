import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddrestoComponent } from './adminaddresto.component';

describe('AdminaddrestoComponent', () => {
  let component: AdminaddrestoComponent;
  let fixture: ComponentFixture<AdminaddrestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddrestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
