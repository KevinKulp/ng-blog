import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPostContainerComponent } from './full-post-container.component';

describe('FullPostContainerComponent', () => {
  let component: FullPostContainerComponent;
  let fixture: ComponentFixture<FullPostContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPostContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
