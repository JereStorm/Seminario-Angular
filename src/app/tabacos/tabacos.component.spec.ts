import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabacosComponent } from './tabacos.component';

describe('TabacosComponent', () => {
  let component: TabacosComponent;
  let fixture: ComponentFixture<TabacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabacosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
