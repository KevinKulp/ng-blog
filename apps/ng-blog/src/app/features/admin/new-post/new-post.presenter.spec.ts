import { TestBed } from '@angular/core/testing';

import { NewPostPresenter } from './new-post.presenter';

describe('NewPostPresenter', () => {
  let service: NewPostPresenter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPostPresenter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
