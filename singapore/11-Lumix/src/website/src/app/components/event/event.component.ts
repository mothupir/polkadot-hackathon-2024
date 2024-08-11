import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [ChartModule, ButtonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit {
    @Input() event: EventModel | any;

    data: any;
    options: any;

    ngOnInit(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: null,
            datasets: [
                {
                    data: [300, 50],
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
}
