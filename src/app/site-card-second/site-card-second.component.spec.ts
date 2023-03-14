import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCardSecondComponent } from './site-card-second.component';

describe('SiteCardSecondComponent', () => {
  let component: SiteCardSecondComponent;
  let fixture: ComponentFixture<SiteCardSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteCardSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteCardSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
