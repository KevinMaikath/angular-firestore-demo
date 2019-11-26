import {Component, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {DatabaseService} from '../../services/database.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  categories: Category[];
  items: Product[];

  constructor(private db: DatabaseService) {
  }

  ngOnInit() {
    this.categories = [];
    this.items = [];

    this.db.loadCategories()
      .then(() => {
        this.categories = this.db.getCategories();
      });
  }

  categoryClicked(index) {
    this.db.resetProducts();
    this.db.loadProducts(this.categories[index].items)
      .then(() => {
        this.items = this.db.getProducts();
      });
  }

}
