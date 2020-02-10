import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularEvaluation1';
  docs = [];
  url = environment.baseURL;
  constructor(private http: HttpClient) {
    this.getLogs();
  }
  getLogs() {
    // this.http.get<any>(`${this.url}`)
    this.http.get<any>(this.url + '/auditLog')
      .subscribe(
        response => this.docs = response.docs,
        error => console.log(`Error is : ${error.toString}`)
      );
  }
}
