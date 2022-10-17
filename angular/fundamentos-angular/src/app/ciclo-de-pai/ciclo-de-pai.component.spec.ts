import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloDePaiComponent } from './ciclo-de-pai.component';

describe('CicloDePaiComponent', () => {
  let component: CicloDePaiComponent;
  let fixture: ComponentFixture<CicloDePaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloDePaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloDePaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
