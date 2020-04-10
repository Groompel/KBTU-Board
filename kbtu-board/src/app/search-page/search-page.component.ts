import {
  Component,
  OnInit,
  AfterViewInit,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "../_services/posts.service";
declare const $: any;
@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"],
})
export class SearchPageComponent implements OnInit, AfterViewInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) {
    // To get search parameters from url
    this.urlParams.query = this.activatedRoute.snapshot.queryParams["query"];
    this.urlParams.category = parseInt(
      this.activatedRoute.snapshot.queryParams["category"]
    );
    this.urlParams.subcategory = parseInt(
      this.activatedRoute.snapshot.queryParams["subcategory"]
    );
    this.searchQuery = new FormGroup({
      query: new FormControl(this.urlParams.query, {updateOn: "blur"}),
      category: new FormControl(this.urlParams.category),
      subcategory: new FormControl(this.urlParams.subcategory),
      searchInDescription: new FormControl(false),
      firstPostsBy: new FormControl("new"),
    });
  }

  posts;

  // To give some time before submits
  updateTimeout;

  queryResultsInfo = {
    error: {
      display: false,
      message: "",
    },
    isLoading: false,
  };

  // Parameters from url
  urlParams = {
    query: "",
    category: 1,
    subcategory: 1,
  };

  // Form group for query
  searchQuery: FormGroup;

  searchQueryFormUI: any;

  // Getters for the form group
  get query() {
    return this.searchQuery.get("query");
  }
  get category() {
    return this.searchQuery.get("category");
  }
  get subcategory() {
    return this.searchQuery.get("subcategory");
  }
  get searchInDescription() {
    return this.searchQuery.get("searchInDescription");
  }
  get firstPostsBy() {
    return this.searchQuery.get("firstPostsBy");
  }

  // Function to show select option windows
  handleSelects(event) {
    const select = $(event.currentTarget);
    const showClass = "select-shown";
    const clickedElement = $(event.target);

    // If clicked at option
    if (clickedElement.hasClass("option")) {
      // Clicked at category selector
      if (select.hasClass("category")) {
        const chosenCategory = parseInt(clickedElement.attr("data-cat-id"));
        if (chosenCategory === 3) {
          this.firstPostsBy.patchValue("rating");
        }
        this.category.patchValue(chosenCategory);
        this.subcategory.patchValue(1);
        this.searchQueryFormUI.selectedCategory = clickedElement.find(
          ".option-name"
        )[0].innerHTML;

        this.changeSelectedSubcategory();
      }
      // Clicked at subcategory selector
      else if (select.hasClass("subcategory")) {
        const chosenSubcategory = parseInt(
          clickedElement.attr("data-subcat-id")
        );
        this.changeSelectedSubcategory(chosenSubcategory);
      }
      // Clicked at order by date selector
      else if (select.hasClass("first-posts-by")) {
        if (this.firstPostsBy.value === "new") {
          this.firstPostsBy.patchValue("old");
          this.searchQueryFormUI.firstPostsBy = "Сначала старые";
        } else {
          this.firstPostsBy.patchValue("new");
          this.searchQueryFormUI.firstPostsBy = "Сначала новые";
        }
      }
    }

    if (select.hasClass(showClass)) {
      select.removeClass(showClass);
    } else {
      select.addClass(showClass);
    }

    // console.log(this.query.value);
    // console.log(this.category.value);
    // console.log(this.subcategory.value);
    // console.log(this.firstPostsBy.value);
  }

  changeSelectedSubcategory(chosenSubcategory = 1) {
    const catId = this.category.value;
    const subcategoryOptions = $(".subcategory .option");

    subcategoryOptions.each((i) => {
      const option = $(subcategoryOptions[i]);
      const optionCatId = parseInt(option.attr("data-cat-id"));
      const optionSubcatId = parseInt(option.attr("data-subcat-id"));

      if (optionCatId === catId && optionSubcatId === chosenSubcategory) {
        this.searchQueryFormUI.selectedSubcategory = option.find(
          ".option-name"
        )[0].innerHTML;
        this.subcategory.patchValue(optionSubcatId);
        return false;
      }
    });
  }

  handleCheckboxes(event) {
    const cb = $($(event.currentTarget).find(".checkbox")[0]);
    const checkedClass = "checked";

    if (cb.hasClass(checkedClass)) {
      if (cb.hasClass("search-in-description")) {
        this.searchInDescription.patchValue(false);
      }
      cb.removeClass(checkedClass);
    } else {
      if (cb.hasClass("search-in-description")) {
        this.searchInDescription.patchValue(true);
      }
      cb.addClass(checkedClass);
    }
  }

  formatDate(date: Date) {
    const now = new Date();
    let display = {
      year: false,
      weekDay: false,
    };

    // If the same day
    if (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    ) {
      return `Сегодня, ${date.getHours()}:${date.getMinutes()}`;
    }

    if (date.getFullYear() !== now.getFullYear()) {
      return date.toLocaleString("ru-KZ", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }

    return date.toLocaleString("ru-KZ", {
      day: "numeric",
      month: "short",
    });
  }

  getPosts() {
    this.queryResultsInfo.error.display = false;
    this.queryResultsInfo.isLoading = true;

    this.postsService
      .getPostsByCategoryId(this.category.value, this.subcategory.value)
      .subscribe((data) => {
        this.queryResultsInfo.isLoading = false;
        this.posts = data;
        if (this.posts === false) {
          this.queryResultsInfo.error.display = true;
          this.queryResultsInfo.error.message =
            "По вашему запросу и параметрам не было ничего найдено. Проверьте их правильность и попробуйте еще раз.";
        } else if (this.posts.length === 0) {
          this.queryResultsInfo.error.display = true;
          this.queryResultsInfo.error.message =
            "По введенному запросу и примененным фильтрам не было ничего найдено. Проверьте параметры и попробуйте еще раз.";
        } else {
          this.queryResultsInfo.error.display = false;
        }
      });
  }

  stopUpdateTimeout() {
    clearTimeout(this.updateTimeout);
  }

  initializeValues() {
    $(".category .option").each((i) => {
      const option = $($(".category .option")[i]);
      if (parseInt(option.attr("data-cat-id")) === this.category.value) {
        this.searchQueryFormUI.selectedCategory = option.find(
          ".option-name"
        )[0].innerHTML;
        return false;
      }
    });
    $(".subcategory .option").each((i) => {
      const option = $($(".subcategory .option")[i]);
      if (
        parseInt(option.attr("data-cat-id")) === this.category.value &&
        parseInt(option.attr("data-subcat-id")) === this.subcategory.value
      ) {
        this.searchQueryFormUI.selectedSubcategory = option.find(
          ".option-name"
        )[0].innerHTML;
        return false;
      }
    });

    $(document).on("click", e => {
      const clickedElement = $(e.target);
      if (!clickedElement.hasClass("selected-option") && !clickedElement.hasClass("option")) {
        $(".select").each(i => {$($(".select")[i]).removeClass("select-shown") });
        console.log("good");

      }

    });
  }

  ngAfterViewInit(): void {
    $(".select").on("click", (event) => {
      this.handleSelects(event);
    });
    $(".checkbox-container").on("click", (event) => {
      this.handleCheckboxes(event);
    });
  }

  ngOnInit(): void {
    this.searchQuery.valueChanges.subscribe((data) => {
      this.stopUpdateTimeout();
      this.queryResultsInfo.isLoading = true;

      this.updateTimeout = setTimeout(() => {
        this.getPosts();
      }, 1000);
    });

    this.searchQueryFormUI = {
      selectedCategory: "",
      selectedSubcategory: "",
      firstPostsBy: "Сначала новые",
    };
    // Set initial values
    this.initializeValues();
    this.getPosts();
  }
}
