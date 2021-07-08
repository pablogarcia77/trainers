import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoAprobadoComponent } from './pago-aprobado.component';

describe('PagoAprobadoComponent', () => {
  let component: PagoAprobadoComponent;
  let fixture: ComponentFixture<PagoAprobadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoAprobadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoAprobadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
