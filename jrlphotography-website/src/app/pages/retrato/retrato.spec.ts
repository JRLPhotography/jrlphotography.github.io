import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Retrato } from './retrato';

describe('Retrato', () => {
  let component: Retrato;
  let fixture: ComponentFixture<Retrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Retrato],
    }).compileComponents();

    fixture = TestBed.createComponent(Retrato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
