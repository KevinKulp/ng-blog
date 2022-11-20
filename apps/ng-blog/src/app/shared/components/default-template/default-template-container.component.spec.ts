import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTemplateContainerComponent } from './default-template-container.component';

describe('DefaultTemplateContainerComponent', () => {
  let component: DefaultTemplateContainerComponent;
  let fixture: ComponentFixture<DefaultTemplateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultTemplateContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultTemplateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
