import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];

  items = [
    {
      image:
        'https://images.unsplash.com/photo-1575501265016-ae78c708a09c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on',
    },
    {
      image:
        'https://images.unsplash.com/photo-1616627562192-d78d5f28bd26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3NlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
