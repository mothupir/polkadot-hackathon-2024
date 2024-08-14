import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [ChartModule, ButtonModule, DialogModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit {
    @Input() event: EventModel | any;

    data: any;
    options: any;
    visible: boolean = false;

    constructor(private datePipe: DatePipe) {}

    ngOnInit(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        this.event.start_time = Date();
        this.event.tokens = {
          uuid: '1',
          name: 'ZAR',
          cost: 7,
          quantity: 500,
          available: 279,
          maximum: 50,
          valid_from: Date(),
          expiration: Date()
        };
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['Sold', 'Available'],
            datasets: [
                {
                    data: [this.event.tokens.quantity - this.event.tokens.available, this.event.tokens.available],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400')]
                }
            ]
        };

        this.options = {
            cutout: '70%',
            plugins: {
                legend: null
            }
        };
    }

    displayEvent() {
      this.visible = true;
    }

    getDateTime(date: Date) {
      return this.datePipe.transform(date, 'EE, dd-MM-YYYY HH:mm zz');
    }
}
