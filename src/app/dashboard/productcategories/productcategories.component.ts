import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { Observable, of } from 'rxjs';
import { Productcategory } from '../../shared/models/productcategory';
import { map, switchMap, mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-productcategories',
  templateUrl: './productcategories.component.html',
  styleUrls: ['./productcategories.component.css']
})
export class ProductcategoriesComponent implements OnInit {

  categoryForm : FormGroup;
  listCategory$ : Observable<Productcategory[]> = of([]);
  message: string = null;
  constructor(
    private baseService : BaseService,
    private formBuilder : FormBuilder
  ) {
    this.createCategoryForm();
  }

  ngOnInit() {
  }

  createCategoryForm()
  {
    this.categoryForm = this.formBuilder.group(
      {
        productCategoryID : [''],
        productCategoryName : ['',[Validators.required]]
      }
    );
  }

  addItem()
  {
    this.listCategory$.forEach(
      data => {
        data.push(this.categoryForm.value);
      }
    );
    this.message = 'Add success';
    setTimeout(
      () => {
        this.message = null;
      },2000
    );
    
    this.categoryForm.reset();
  }

  deleteItem(index: any)
  {
    this.listCategory$.forEach(
      data => {
        data.splice(index, 1);
      }
    );
  }

  updateItem()
  {
    
    let key = this.categoryForm.controls['productCategoryID'].value;
    this.listCategory$.forEach(
      data => {
        let index = data.findIndex(x => x.productCategoryID === key);
        data[index] = this.categoryForm.value;
        this.categoryForm.reset();
      }
    );
  }

  pathValueItem(value: any)
  {
    this.categoryForm.patchValue(
      {
        productCategoryID : value.productCategoryID,
        productCategoryName: value.productCategoryName
      }
    );
  }

}
