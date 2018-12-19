import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewMarkComponent } from './user-review-mark.component';

describe('UserReviewMarkComponent', () => {
  let component: UserReviewMarkComponent;
  let fixture: ComponentFixture<UserReviewMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReviewMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
