import { Product } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from '../../shared/base.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  listProduct$: Observable<Product[]>;

  constructor(
    private service: BaseService
  ) { }

  ngOnInit() {
    this.service.getAll('/product').subscribe(
      data =>  this.listProduct$ =  of(data as Product[])
    );
  }


}
