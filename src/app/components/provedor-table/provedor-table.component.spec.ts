import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedorTableComponent } from './provedor-table.component';

describe('ProvedorTableComponent', () => {
  let component: ProvedorTableComponent;
  let fixture: ComponentFixture<ProvedorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvedorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvedorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
