import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('on init the component, the test must be hidden', () => {
    expect(fixture.nativeElement.querySelector('.test-text')).toBeFalsy;
  });

  it('when change value for show text, it must shown', () => {
    component.showText = true;
    expect(fixture.nativeElement.querySelector('.test-text')).toBeTruthy;
  });

  it(`on press button method 'switchShowText' must be called`, () => {
    const switchButton = jest.spyOn(component, 'switchShowText');
    const button = fixture.nativeElement.querySelector('.test-button');
    button.click();
    expect(switchButton).toHaveBeenCalled();
  });

  it(`on press button the value for 'showTest' must change`, () => {
    const currentValue = component.showText;
    const button = fixture.nativeElement.querySelector('.test-button');
    button.click();
    expect(component.showText !== currentValue).toBe(true);
  });
});
