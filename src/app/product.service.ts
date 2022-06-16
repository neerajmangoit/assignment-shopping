import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products = [
    {
      name: 'Shoe',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'footware',
    },
    {
      name: 'chair',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'furniture',
    },
    {
      name: 'washing mashine',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'electronic',
    },
    {
      name: 'winter cloths',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'cloath',
    },
    {
      name: 'refigirator',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'electronic',
    },
    {
      name: 'AC',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'electronic',
    },
    {
      name: 'Table',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'furniture',
    },
    {
      name: 'Men Cloth',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'cloth',
    },
    {
      name: 'children cloth',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'cloth',
    },
    {
      name: 'phone',
      price: '230$',
      color: 'red',
      size: '45',
      category: 'electronic',
    },
  ];
  
  show() {
    return this.products;
  }

}
