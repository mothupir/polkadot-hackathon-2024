import { Component, OnInit } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { ContractService } from '../../services/contract.service';
import { CategoryModel } from '../../models/category.model';
import { EventModel } from '../../models/event.model';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, ScrollPanelModule, ButtonModule, FormsModule, CardModule, CarouselModule,
    AutoCompleteModule, EventComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: CategoryModel[] = [];
  suggestions: any[] = [];
  searchValue: any;
  displayedEvents: EventModel[] = [];

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 12,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 6,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 3,
        numScroll: 1
    }
  ];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
      this.displayedEvents = this.contractService.getEvents();
  }

  getCategories(): CategoryModel[] {
    return this.contractService.categories;
  }

  filter(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];

    this.contractService.getEvents().forEach(e => {
      if (e.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        filtered.push(e);
      }
    });
    this.suggestions = filtered;
  }

  search() {
    const index = this.suggestions.indexOf(this.searchValue);

    if (index != -1) {
      console.log(`Filtered Value: ${this.searchValue.name}`);
    } else {
      console.log(`Search Value: ${this.searchValue}`);
    }
  }

  categoryChanged(id: number) {
    this.getCategories().forEach(c => c.active = false);
    const category = this.getCategories().find(c => c.id == id);
    
    if (category) {
      category.active = true;
    }
  }
}
