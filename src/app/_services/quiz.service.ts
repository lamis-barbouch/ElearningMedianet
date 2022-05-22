import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {


  private baseUrl='http://localhost:8084/quiz/';
  
  constructor(private httpclient: HttpClient) { }

  createQuiz(Quiz: Object): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl}`,Quiz);
  }
}
