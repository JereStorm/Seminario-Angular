import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabacoListComponent } from './tabaco-list.component';

describe('TabacoListComponent', () => {
  let component: TabacoListComponent;
  let fixture: ComponentFixture<TabacoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabacoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabacoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
