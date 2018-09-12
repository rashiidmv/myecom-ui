import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject,ReplaySubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  restItemsUrl: string = "https://address-book-demo.herokuapp.com/api/contacts";
  restItems: any[];
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  personStream: ReplaySubject<any> = new ReplaySubject();

  constructor(private http: HttpClient) {

  }
  getProducts(): any {
    return ["assets/test-images/test1.jpg","assets/test-images/test2.jpg","assets/test-images/test1.jpg","assets/test-images/test2.jpg"];
  }

    public getRestItemss() {
    return this.restItems;
  }

  // Read all REST Items
  getRestItems() {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          this.personStream.next(restItems);
          console.log(this.restItems);
        }
      )
  }
  // The person observable
  person$(): Observable<any> {
    return this.personStream.asObservable();
}

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }


}
