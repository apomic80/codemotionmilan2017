import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notify(message: string) {
    const options = {
      body: message
    };
    const notification = new Notification('Demo Notification', options);
    notification.onclick = () => {
      alert('notification clicked');
    };
  }

}
