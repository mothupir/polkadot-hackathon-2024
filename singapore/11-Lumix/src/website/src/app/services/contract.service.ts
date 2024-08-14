import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { Status } from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  categories: CategoryModel[] = [];

  constructor() {
    this.getCategories();
   }

  getCategories() {
    this.categories = [
      { id: 0, name: 'Top Hello Hello', active: true },
      { id: 1, name: 'Just In', active: false },
      { id: 2, name: 'Coming', active: false },
      { id: 3, name: 'Sport', active: false },
      { id: 4, name: 'Water', active: false },
      { id: 5, name: 'Marine', active: false },
      { id: 6, name: 'Life Style', active: false },
      { id: 7, name: 'Joburg', active: false },
      { id: 8, name: 'Music', active: false },
      { id: 9, name: 'Theatre', active: false },
      { id: 10, name: 'Art', active: false },
      { id: 11, name: 'Diving', active: false },
    ];
  }

  getEvents() {
    return [
      {
        uuid: '1',
        name: 'Event 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: Status.ACTIVE
      },
      {
        uuid: '2',
        name: 'Event 2',
        description: 'Description 2',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: Status.ACTIVE
      },
      {
        uuid: '1',
        name: 'Sport 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: Status.ACTIVE
      },
    ];
  }
}
