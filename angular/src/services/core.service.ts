import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoreService {

  list = new BehaviorSubject<any[]>([]);

  constructor() { }

  async getList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    this.list.next(data);
  }
}
