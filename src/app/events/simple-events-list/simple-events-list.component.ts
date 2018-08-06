import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-events-list',
  templateUrl: './simple-events-list.component.html',
  styleUrls: ['./simple-events-list.component.css']
})
export class SimpleEventsListComponent implements OnInit {

  constructor() { }

  events: any[] = [
    {
      'id': 3,
      'title': 'Demo Event',
      'starts_at': '2018-08-31T12:00:00.000Z',
      'ends_at': null,
      'description': 'Demo demo ya ya!',
      'token': 'rK1S7sJC8c4xody57bgmL1tZ',
      'created_at': '2018-08-06T19:04:49.805Z',
      'updated_at': '2018-08-06T19:04:49.805Z',
      'url': 'http://localhost:3000/events/3.json'
    },
    {
      'id': 4,
      'title': 'Demo Event',
      'starts_at': '2018-08-31T12:00:00.000Z',
      'ends_at': null,
      'description': 'Demo demo ya ya!',
      'token': '4XLa5pZ6GnjoEeoibAq5AVVe',
      'created_at': '2018-08-06T19:07:18.343Z',
      'updated_at': '2018-08-06T19:07:18.343Z',
      'url': 'http://localhost:3000/events/4.json'
    },
    {
      'id': 5,
      'title': 'Demo Event (7ee5ac52-015f-4730-a8ee-783e2682f695)',
      'starts_at': '2018-08-31T12:00:00.000Z',
      'ends_at': null,
      'description': 'Demo demo ya ya!',
      'token': '4iBm9U8vMUsymrV4DiUfcZe5',
      'created_at': '2018-08-06T19:07:59.340Z',
      'updated_at': '2018-08-06T19:07:59.340Z',
      'url': 'http://localhost:3000/events/5.json'
    },
    {
      'id': 6,
      'title': 'Demo Event (5859bea0-bb40-48fb-a4cd-b69baf124cd6)',
      'starts_at': '2018-08-31T12:00:00.000Z',
      'ends_at': null,
      'description': 'Demo demo ya ya!',
      'token': '76QRjX8YLpWQqNmgaE21GdSM',
      'created_at': '2018-08-06T19:08:01.133Z',
      'updated_at': '2018-08-06T19:08:01.133Z',
      'url': 'http://localhost:3000/events/6.json'
    },
    {
      'id': 7,
      'title': 'Demo Event (fd18d98d-acf9-40b5-97f0-98945b194a34)',
      'starts_at': '2018-08-31T12:00:00.000Z',
      'ends_at': null,
      'description': 'Demo demo ya ya!',
      'token': 'Kq2J4PNECmLu9Br4auvgQ75P',
      'created_at': '2018-08-06T19:08:01.765Z',
      'updated_at': '2018-08-06T19:08:01.765Z',
      'url': 'http://localhost:3000/events/7.json'
    },
    {
      'id': 8,
      'title': 'Demo Event (c6386c85-a78c-4532-a5d0-cc713f5598af)',
      'starts_at': '2018-08-31T12:00:00.000Z',
      'ends_at': null,
      'description': 'Demo demo ya ya!',
      'token': 'g1ULaA6HpYpybpQJvDQAby4N',
      'created_at': '2018-08-06T19:08:02.250Z',
      'updated_at': '2018-08-06T19:08:02.250Z',
      'url': 'http://localhost:3000/events/8.json'
    },
    {
      'id': 9,
      'title': 'Demo Event (9721e944-6c5d-4709-b63b-9a37e5f911ec)',
      'starts_at': '2018-08-31T12:00:00.000Z',
      'ends_at': null,
      'description': 'Demo demo ya ya!',
      'token': 'jBMQ41JYbXp4z3zHWBAWpfki',
      'created_at': '2018-08-06T19:08:02.723Z',
      'updated_at': '2018-08-06T19:08:02.723Z',
      'url': 'http://localhost:3000/events/9.json'
    },
    {
      'id': 10,
      'title': 'Demo Event (64a3200b-f99d-431c-b535-9b7f79ed2e49)',
      'starts_at': '2018-08-31T12:00:00.000Z',
      'ends_at': null,
      'description': 'Demo demo ya ya!',
      'token': 'uBYi2Ez8fHzd2psmD1uS3M1h',
      'created_at': '2018-08-06T19:08:03.201Z',
      'updated_at': '2018-08-06T19:08:03.201Z',
      'url': 'http://localhost:3000/events/10.json'
    },
    {
      'id': 11,
      'title': 'Demo Event (5dbcffa7-ab06-4210-8669-47a691a51b58)',
      'starts_at': '2018-08-31T12:00:00.000Z',
      'ends_at': null,
      'description': 'Demo demo ya ya!',
      'token': 'cnU4CezCYtVwQrAH2E9bKGna',
      'created_at': '2018-08-06T19:08:03.864Z',
      'updated_at': '2018-08-06T19:08:03.864Z',
      'url': 'http://localhost:3000/events/11.json'
    }
  ];

  ngOnInit() {
  }

}
