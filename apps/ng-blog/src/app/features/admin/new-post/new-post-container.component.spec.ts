import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostContainerComponent } from './new-post-container.component';

describe('NewPostContainerComponent', () => {
  let component: NewPostContainerComponent;
  let fixture: ComponentFixture<NewPostContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
