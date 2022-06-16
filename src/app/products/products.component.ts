import { Component, OnInit } from '@angular/core';
import { Products } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  product: Products[] = [
    {
      name: 'Shoe',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'Footware',
    },
    {
      name: 'sandals',
      price: '130$',
      color: 'Black',
      size: '43',
      category: 'Footware',
    },
    {
      name: 'chair',
      price: '230$',
      color: 'Brown',
      size: '45',
      category: 'Furniture',
    },
    {
      name: 'washing mashine',
      price: '230$',
      color: 'White',
      size: '45',
      category: 'Electronic',
    },
    {
      name: 'winter clothing',
      price: '230$',
      color: 'Blue',
      size: '45',
      category: 'Clothing',
    },
    {
      name: 'refigirator',
      price: '230$',
      color: 'Gray',
      size: '45',
      category: 'Electronic',
    },
    {
      name: 'AC',
      price: '230$',
      color: 'White',
      size: '45',
      category: 'Electronic',
    },
    {
      name: 'Table',
      price: '230$',
      color: 'Brown',
      size: '45',
      category: 'Furniture',
    },
    {
      name: 'Men Cloth',
      price: '230$',
      color: 'Black',
      size: '45',
      category: 'Clothing',
    },
    {
      name: 'children cloth',
      price: '230$',
      color: 'Pink',
      size: '45',
      category: 'Clothing',
    },
    {
      name: 'phone',
      price: '230$',
      color: 'Black',
      size: '45',
      category: 'Electronic',
    },
  ];

  productData = [];
  // Filter products by categor
  filterProducts(category: string) {
    this.productData = this.product.filter(
      (product) => product.category === category
    );
    return this.product.filter((product) => product.category === category);
  }

  // Filter unique categories
  getCategories() {
    return this.product
      .map((product) => product.category)
      .filter((category, index, array) => array.indexOf(category) === index);
  }
  
  // Show products by category
  showProducts(category: string) {
    console.log(category);
    return this.filterProducts(category);
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
