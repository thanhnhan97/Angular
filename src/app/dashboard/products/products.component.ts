import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../shared/models/product';
import { Productcategory } from '../../shared/models/productcategory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProduct$: Observable<Product[]> = of([]);
  productForm: FormGroup;
  category$: Observable<Productcategory[]> = of([]);
  message: string = null;
  constructor(
    private builder: FormBuilder
  ) {
    this.createProductForm();
  }

  ngOnInit() {
  }

  createProductForm() {
    this.productForm = this.builder.group({
      ProductID: [],
      ProductCategoryID: [],
      ProductName: ['', [Validators.required]],
      ProductPrice: ['1'],
      ProductLocation: [],
      ProductImage: []
    });
  }

  addItem() {
    this.listProduct$.forEach(
      data => {
        data.push(this.productForm.value);
      }
    );
    this.showMessageBox('Add Item Success');
  }

  deleteItem(index: number) {
    this.listProduct$.forEach(
      data => {
        data.splice(index,1);
      }
    );
    this.showMessageBox('Delete Item Success');
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
