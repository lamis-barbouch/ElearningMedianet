import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { CategoryServiceService } from '../_services/category-service.service';
import { UserAuthService } from '../_services/user-auth.service';


@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  categories:Observable<Category[]>;
  submitted = false;
  showMsg: boolean = false;
  category:Category=new Category();

  constructor(private categoryService:CategoryServiceService,private userAuthService: UserAuthService,
    private router: Router) { }

  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/login']);
    
 
   }

  ngOnInit(): void {
    this.reloadData();
 }

 newCategory():void{
  this.submitted=false;
  this.category=new Category();
}

save() {
  this.categoryService.createCategory(this.category).subscribe(data => {
    console.log(data)
    this.showMsg= true;
    this.category = new Category();
  }, 
  error => console.log(error));
}
onSubmit() {
  this.submitted = true;
  this.save();    
}

reloadData(){
  this.categories=this.categoryService.getCategoriesList();
}
deleteCategory(categoryId:number){
  this.categoryService.deleteCategory(categoryId).subscribe(
    data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
}
 
}
