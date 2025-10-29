import { Component } from '@angular/core';
import { PartnersCarouselComponent } from './partners-carousel/partners-carousel.component';
import { SMOOTH } from '../constants/constants';

@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [PartnersCarouselComponent],
  templateUrl: './our-partners.component.html',
  styleUrl: './our-partners.component.scss'
})
export class OurPartnersComponent {
  goTo(page: string): void {
    document.getElementById(page)?.scrollIntoView({behavior: SMOOTH});
  }
}
