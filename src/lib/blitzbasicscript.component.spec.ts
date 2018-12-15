import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlitzbasicscriptComponent } from './blitzbasicscript.component';

describe('BlitzbasicscriptComponent', () => {
  let component: BlitzbasicscriptComponent;
  let fixture: ComponentFixture<BlitzbasicscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlitzbasicscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlitzbasicscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
