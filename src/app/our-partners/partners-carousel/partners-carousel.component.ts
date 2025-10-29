import { Component, OnInit } from '@angular/core';
import { Partner } from '../../interface/partner';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-partners-carousel',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './partners-carousel.component.html',
  styleUrl: './partners-carousel.component.scss'
})
export class PartnersCarouselComponent {
partners: Partner[] = [
    {
      name: 'RBGROUP DIAMOND CORPORATION',
      description: 'RBGROUP Diamond Corporation is a construction and engineering company known for delivering high-quality infrastructure projects and skilled labor services across the region.',
      logo: './../../assets/partners/rbgroup.png'
    },
    {
      name: 'CreoSync',
      description: 'CREOSYNC is a media technology company focused on enabling remote creative workflows and intelligent media management. With a compact and agile team, they support modern production environments where collaboration, speed, and flexibility are key.',
      logo: './../../assets/partners/creosync.png'
    },
    {
      name: 'BytePlus',
      description: 'BytePlus is a technology company that provides enterprise-grade AI and data solutions, leveraging the core innovations of ByteDance. It enables businesses to deliver personalized, data-driven experiences through scalable infrastructure and intelligent APIs.',
      logo: './../../assets/partners/byteplus.png'
    },
    {
      name: 'Projective',
      description: 'Projective.io is a software company specializing in post-production collaboration tools for media teams, with its flagship platform Strawberry streamlining creative workflows across storage environments.',
      logo: './../../assets/partners/projective.png'
    },
    {
      name: 'Mistika Workflows',
      description: 'Mistika Workflows is a powerful node-based automation platform developed by SGO, designed to streamline media management, transcoding, and delivery for post-production teams. It enables professionals to build custom workflows without coding, saving time and reducing manual effort across the entire production pipeline.',
      logo: './../../assets/partners/mistika.png'
    },
  ];

  selectedPartner: Partner | null = null;

  selectPartner(partner: Partner): void {
    this.selectedPartner = partner;
  }
}
