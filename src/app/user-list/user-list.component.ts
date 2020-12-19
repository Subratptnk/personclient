import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/person';
import { PersonService } from 'src/app/person-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  persons: person[];

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    console.log('I am running')
    this.personService.findAll().subscribe(data => {
      this.persons = data;
    });
  }

}
