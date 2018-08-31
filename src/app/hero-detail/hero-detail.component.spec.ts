import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "../hero.service";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs/observable/of";
import { FormsModule } from "@angular/forms";
import { Location } from "@angular/common";

describe('HeroDetailComponent', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockHeroService, mockActivatedRoute, mockLocation;

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: { paramMap: { get: () => {
        return '3';
      }}}
    }
    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
    mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: HeroService, useValue: mockHeroService},
        {provide: Location, useValue: mockLocation}
      ]
    });

    fixture = TestBed.createComponent(HeroDetailComponent);
    mockHeroService.getHero.and.returnValue(of({id: 3, name: 'SuperDude', strength: 100}));

  });

  it('should render the hero name in an H2 tag', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
  })

})
