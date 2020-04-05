import {Component, OnInit, ViewEncapsulation, AfterViewInit} from '@angular/core';
import { ApiService } from '../api.service';
declare const changeSubcategories: any;
declare const initMainPage: any;
declare const showCategoryWindow: any;
declare const showSubcategoryWindow: any;
declare const searchSubmitCheck: any;
declare const showAd: any;
declare const removeBgFromNavbar: any;

@Component({
  selector: 'app-main-page',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  lastAds: any;
  bestTeachers: any;


  selectedCategory = {
    id: 0,
    name: "Категория",
  }
  selectedSubcategory = {
    method: 0,
    name: "Тип",
  };

  CATEGORY_IDS = [
    {
      id: 0,
      name: "Категория",
      subcategories: {
        first: "Тип",
      }
    },
    {
      id: 1,
      name: "Услуги",
      subcategories: {
        first: "Получить",
        second: "Предложить",
      }
    },
    {
      id: 2,
      name: "Потеряно и найдено",
      subcategories: {
        first: "Потерял",
        second: "Нашел",
      }
    },
    {
      id: 3,
      name: "Учеба",
      subcategories: {
        first: "Научить",
      }
    },

  ]

  getArray(n) {
    n = parseInt(n);
    return Array(n).fill(0,0,n);
  }

  showAd(id, adType) {
    showAd(id, adType);
  }

  submitForm() {
    searchSubmitCheck();
  }

  handleClicks(show: string) {
    if (show === "category")
      showCategoryWindow();
    else if (show === "subcategory")
      showSubcategoryWindow();
  }

  changeCategoryById(id) {
    this.selectedCategory.id = id;
    this.CATEGORY_IDS.forEach(category => {
      if (category.id === id) {
        this.selectedCategory.name = category.name;
        this.selectedSubcategory.method = 1;
        this.selectedSubcategory.name = category.subcategories.first;
      }
    });
    changeSubcategories(id);
  }

  changeSubcategory(method, name) {
    this.selectedSubcategory.method = method;
    this.selectedSubcategory.name = name;
  }



  constructor(
    private apiService: ApiService,
  ) {
  }
  ngAfterViewInit(): void {
    initMainPage();
    removeBgFromNavbar();
  }

  ngOnInit(): void {

    this.apiService.getLastAds(6).subscribe(data => {
      this.lastAds = data;
    });

    this.apiService.getBestTeachers(3).subscribe(data => {
      this.bestTeachers = data;
    });



  }


}
