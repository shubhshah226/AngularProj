import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershowlistComponent } from './usershowlist.component';

describe('UsershowlistComponent', () => {
  let component: UsershowlistComponent;
  let fixture: ComponentFixture<UsershowlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsershowlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershowlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
