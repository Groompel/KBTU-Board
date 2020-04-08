import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { ApiService } from "../_services/api.service";
import { FormControl, FormGroup } from "@angular/forms";
import {
  cantBeZeroValidator,
} from "../_shared/main-page-validators";
import { Router } from "@angular/router";
declare const changeSubcategories: any;
declare const initMainPage: any;
declare const showCategoryWindow: any;
declare const showSubcategoryWindow: any;
declare const searchSubmitCheck: any;
declare const showAd: any;
declare const removeBgFromNavbar: any;
declare const $: any;
@Component({
  selector: "app-main-page",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit, AfterViewInit {
  // Jquery variables
  profileWindow;
  categorySelect;
  subcategorySelect;
  options;
  searchbarForm;
  ads;

  lastAds: any;
  bestTeachers: any;

  searchQuery = new FormGroup({
    query: new FormControl(""),
    category: new FormControl(0, cantBeZeroValidator()),
    subcategory: new FormControl(0, cantBeZeroValidator()),
  });

  // Getters

  get query() {
    return this.searchQuery.get("query");
  }
  get category() {
    return this.searchQuery.get("category");
  }
  get subcategory() {
    return this.searchQuery.get("subcategory");
  }

  selectedCategory = {
    id: 0,
    name: "Категория",
  };
  selectedSubcategory = {
    method: 0,
    name: "Тип",
  };

  categoryIds = [
    {
      id: 0,
      subcategories: {
        elements: ["Тип"],
      },
    },
    {
      id: 1,
      subcategories: {
        elements: ["Получить", "Предложить"],
      },
    },
    {
      id: 2,
      subcategories: {
        elements: ["Потерял", "Нашел"],
      },
    },
    {
      id: 3,
      subcategories: {
        elements: ["Научить"],
      },
    },
  ];

  getArray(n) {
    n = parseInt(n);
    return Array(n).fill(0, 0, n);
  }

  // Show lost and found ad
  showAd(id, adType) {
    $(`.${adType} .ads-card`).each((index) => {
      let ad = $(`.${adType} .ads-card`)[index];
      ad = $(ad);

      if (parseInt(ad.attr("id")) === id) {
        ad.toggleClass("ads-card-shown");
        ad.find(".triangle").toggleClass("triangle-clicked");
      } else {
        ad.removeClass("ads-card-shown");
      }
    });
  }

  handleClicks(show: string) {
    if (show === "category") {
      this.categorySelect.find(".triangle").toggleClass("triangle-clicked");
      this.categorySelect
        .find(".options-window")
        .toggleClass("options-window-show");
      this.categorySelect.find(".select").toggleClass("select-shown");
    } else if (show === "subcategory") {
      this.subcategorySelect.find(".triangle").toggleClass("triangle-clicked");
      this.subcategorySelect
        .find(".options-window")
        .toggleClass("options-window-show");
      this.subcategorySelect.find(".select").toggleClass("select-shown");
    }
  }

  changeCategoryById(id, name) {
    this.selectedCategory.id = id;
    this.categoryIds.forEach((category) => {
      if (category.id === id) {
        this.selectedCategory.name = name;
        this.category.patchValue(id);
        this.subcategory.patchValue(1);
        this.selectedSubcategory.method = 1;
        this.selectedSubcategory.name = category.subcategories.elements[0];
      }
    });
    const subсategoriesWindow = this.subcategorySelect.find(
      ".options-window"
    )[0];
    const allOptions = $(subсategoriesWindow).find(".select-option");

    // Iterate through every category
    this.categoryIds.forEach((cat) => {
      // Find chosen category
      if (cat.id === id) {
        // Iterate through every subcategory
        $(allOptions).each((index) => {
          const currentOption = $($(allOptions)[index]);
          // Find options for chosen subcategroy and show them
          if (parseInt(currentOption.attr("data-cat-id")) === id) {
            $(currentOption).addClass("subcategory-option-show");
          } else {
            $(currentOption).removeClass("subcategory-option-show");
          }
        });
      }
    });
  }

  changeSubcategory(method, name) {
    this.selectedSubcategory.method = method;
    this.selectedSubcategory.name = name;
    this.subcategory.patchValue(method);
  }

  applyError(query, className, time = 800) {
    $(query).addClass(className);

    setTimeout(() => {
      $(query).removeClass(className);
    }, time);
  }

  submitForm() {

    if (this.searchQuery.invalid) {
      if (this.category.hasError("cantBeZeroError")) {
        this.applyError(this.categorySelect.find(".select"), "input-error");
      }
    } else {
      // Move to search page
      this.router.navigate(["/search"], {queryParams: {
        query: this.query.value.trim(),
        category: this.category.value,
        subcategory: this.subcategory.value,
      }});
    }
  }

  constructor(private apiService: ApiService, private router: Router) {}

  ngAfterViewInit(): void {

    this.profileWindow = $(".profile-window");
    this.categorySelect = $("#category-select");
    this.subcategorySelect = $("#subcategory-select");
    this.searchbarForm = $("form.searchbar");
    this.ads = {
      lost: $(".ads-container .lost .ads-card-container .ads-card"),
      found: $(".ads-container .found .ads-card-container .ads-card"),
    };
  }

  ngOnInit(): void {
    this.apiService.getLastAds(6).subscribe((data) => {
      this.lastAds = data;
    });

    this.apiService.getBestTeachers(3).subscribe((data) => {
      this.bestTeachers = data;
    });
  }
}
