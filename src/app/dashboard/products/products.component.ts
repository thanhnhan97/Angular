import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../shared/models/product';
import { Productcategory } from '../../shared/models/productcategory';
import { BaseService } from '../../shared/base.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProduct$: Observable<Product[]> = of([]);
  productForm: FormGroup;
  //of(): ép về kiểu observable 
  category$: Observable<Productcategory[]> = of([]);
  message: string = null;
  constructor(
    private builder: FormBuilder,
    private service : BaseService
  ) {
    this.createProductForm();
  }

  ngOnInit() {
    this.loadProduct();
    this.loadProductCategory();
  }

  loadProduct()
  {
    this.service.getAll('/product').subscribe(
        data => {
          this.listProduct$ = of(data as Product[]);  
        }
    );
  }

  loadProductCategory()
  {
    this.service.getAll('/productcategories').subscribe(

        data => {
          this.category$ = of(data as Productcategory[]);
        }
      )

  }

  createProductForm() {
    this.productForm = this.builder.group({
      ProductID: [],
      ProductCategoryID: [],
      ProductName: ['', [Validators.required]],
      ProductPrice: ['1'],
      ProductLocation: ['',[Validators.required]],
      ProductImage: []
    });
  }

  addItem() {
    this.service.add('/product', this.productForm.value).subscribe(
        data => {
          if(data)
          {
            this.listProduct$.forEach(
              x => {
                x.push(data as Product);
              }
            );
            this.showMessageBox('Add Item Success');
          }
          else{
            this.showMessageBox('Add Item Fail');
          }
        }
    );
    
  }

  deleteItem(item: Product, index: number) {
    this.service.delete(`/product/${item.ProductID}`).subscribe(
        data => {
          if(data)
          {
            this.listProduct$.forEach(
              data => {
                data.splice(index,1);
              }
            );
            this.showMessageBox('Delete Item Success');
          }
          else{
            this.showMessageBox('Delete Item Fail');
          }
        }
    );
    
  }

  updateItem() {
    this.listProduct$.forEach(
      data => {
        let index = data.findIndex( x => x.ProductID === this.productForm.controls['ProductID'].value);
        data[index] = this.productForm.value;
      }
    );
    this.showMessageBox('Update success');
  }

  pathValueItem(item: Product) {
    this.productForm.patchValue({
      ProductCategoryID: item.ProductCategoryID,
      ProductName: item.ProductName,
      ProductPrice: item.ProductPrice,
      ProductLocation: item.ProductLocation,
      ProductID: item.ProductID
    });
  }

  uploadFile($event: FileList) {
    if ($event) {

      let url = `assets/imgs/${$event.item(0).name}`;
      this.productForm.patchValue({
        ProductImage: url
      });
    }

  }

  selectChagneItem($event) {
    this.productForm.patchValue({
      ProductCategoryID: $event
    });
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

}
