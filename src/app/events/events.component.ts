import { Component, OnInit } from '@angular/core';
import { Event } from './events.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventList: Event[];

  constructor() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventList = [
      { id: 1, name: 'Angular 2 Lab', startDate: '23-09-2016', endDate: '23-09-2016', description: 'Laboratorio su Angular 2', visible: true, location: 'casoria' },
      { id: 2, name: 'Meetup salerno', startDate: '24-09-2016', endDate: '24-09-2016', description: 'Typescript e Angular 2', visible: true, location: 'salerno' }
    ];
  }

  ngOnInit() {
  }

}
