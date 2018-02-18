import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelherosComponent } from './marvelheros.component';

describe('MarvelherosComponent', () => {
  let component: MarvelherosComponent;
  let fixture: ComponentFixture<MarvelherosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelherosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
