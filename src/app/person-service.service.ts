import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { person } from '../app/person';
import { Observable } from 'rxjs';

@Injectable()
export class PersonService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/person/users';
  }

  public findAll(): Observable<person[]> {
    return this.http.get<person[]>(this.usersUrl);
  }

  // saving the user which is a person type.
  // and saying to catch by our post method api.
  public save(user: person) {
    return this.http.post<person>(this.usersUrl, user);
  }
}