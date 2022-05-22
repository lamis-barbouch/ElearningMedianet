import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private baseUrl='http://localhost:8084/category/';
  private baseUrl2='http://localhost:8084/category/all-category';
  private baseUrl3='http://localhost:8084/category/delete';
  private baseUrl4='http://localhost:8084/category/update';

  constructor(private httpclient: HttpClient) { }

  getCategoriesList(): Observable<any> {
    return this.httpclient.get(`${this.baseUrl2}`);
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.httpclient.delete(`${this.baseUrl3}/${categoryId}`, { responseType: 'text' });
  }

  createCategory(Category: Object): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl}`,Category);
  }

  updateCategory(Category: Object): Observable<Object> {
    return this.httpclient.put(`${this.baseUrl4}`, Category);
  }

}

