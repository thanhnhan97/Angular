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

  categoryForm: FormGroup;
  listCategory$: Observable<Productcategory[]> = of([]);
  message: string = null;
  constructor(
    private baseService: BaseService,
    private formBuilder: FormBuilder
  ) {
    this.createCategoryForm();
  }

  ngOnInit() {
    this.loadProductCategories();
    console.log(this.listCategory$);
    
  }

  loadProductCategories()
  {
    this.baseService.getAll('/productcategories').subscribe(
        data => {
          this.listCategory$ = of(data as Productcategory[]);
          console.log(this.listCategory$);
          
        }
      );
  }

  createCategoryForm() {
    this.categoryForm = this.formBuilder.group(
      {
        productCategoryID: [''],
        productCategoryName: ['', [Validators.required]]
      }
    );
  }

  addItem() {
    this.baseService.add('/productcategories', this.categoryForm.value).subscribe(
        data => {
          if (data) {
            this.listCategory$.forEach(
              x => {
                x.push(data as Productcategory);
              }
            );

            this.message = 'Add success';
            setTimeout(
              () => {
                this.message = null;
              }, 2000
            );
          }
          else {

            this.message = 'Add Fail';
            setTimeout(
              () => {
                this.message = null;
              }, 2000
            );
          }
        }
      );
  }

  showMessageBox(message: string)
  { 
    this.message = message;
    setTimeout(
      () => {
        this.message = null;
      }, 3000
    );
  }

  deleteItem(item: Productcategory, index: any) {
    this.baseService.delete(`/productcategories/${item.productCategoryID}`).pipe(
      map(
        data => {
          if(data)
          {
            this.listCategory$.forEach(
              data => {
                data.splice(index, 1);
              }
            );
            this.showMessageBox('Delete Success');
          }
          else
          {
            this.showMessageBox('Delete Fail');
          }
        }
      )
    ); 
    
  }

  updateItem() {

    let key = this.categoryForm.controls['productCategoryID'].value;

    this.listCategory$.forEach(
      data => {
        let index = data.findIndex(x => x.productCategoryID === key);
        data[index] = this.categoryForm.value;
        this.categoryForm.reset();
      }
    );
  }

  pathValueItem(value: any) {
    this.categoryForm.patchValue(
      {
        productCategoryID: value.productCategoryID,
        productCategoryName: value.productCategoryName
      }
    );
  }

}
