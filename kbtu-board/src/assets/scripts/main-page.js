let categorySelect, subcategorySelect, options, searchbarForm, ads;
// selectedCategory, selectedSubcategory;

const CATEGORY_IDS = [
  {
    id: 0,
    subcategories: {
      elements: [
        "Тип",
      ]
    }
  },
  {
    id: 1,
    subcategories: {
      elements: [
        "Получить",
        "Предложить",
      ]

    }
  },
  {
    id: 2,
    subcategories: {
      elements: [
        "Потерял",
        "Нашел",
      ]
    }
  },
  {
    id: 3,
    subcategories: {
      elements: [
        "Научить"
      ]

    }
  },

]

function showAd(id, adType) {

  $(`.${adType} .ads-card`).each(index => {

    ad = $(`.${adType} .ads-card`)[index];
    ad = $(ad);

    if (parseInt(ad.attr("id")) === id) {
      ad.toggleClass("ads-card-shown");
      ad.find(".triangle").toggleClass("triangle-clicked");
    }
    else {
      ad.removeClass("ads-card-shown");
    }
  });
}

function searchSubmitCheck() {
  console.log("Doing something...");
  console.log($(".searchbar"));

  $(".searchbar").submit((e) => {
    e.preventDefault();

    let isValid = {
      query: true,
      category: true,
    }

    const data = searchbarForm.serializeArray();

    data.forEach(input => {
      if (input.name === "q") {

        if (input.value === '') {

          isValid.query = false;

          const queryInput = searchbarForm.find("input.query");
          $(queryInput).addClass("input-error");

          setTimeout(() => {
            $(queryInput).removeClass("input-error");
            return false;

          }, 800);

        }
        else {
          if (isValid.category && isValid.query)
            $(e.target).unbind("submit").submit();
        }
      }

      if (input.name === "category") {
        if (parseInt(input.value) === 0) {
          isValid.category = false;
          const selectCategoryInput = categorySelect.find(".select");
          $(selectCategoryInput).addClass("input-error");
          setTimeout(() => {
            $(selectCategoryInput).removeClass("input-error");
            return false;
          }, 800);


        }
        else {
          if (isValid.category && isValid.query)
            $(e.target).unbind("submit").submit();
        }
      }
    });

  });
}


function changeSubcategories(id) {
  const subсategoriesWindow = subcategorySelect.find(".options-window")[0];
  const allOptions = $(subсategoriesWindow).find("option");

  // Iterate through every category
  CATEGORY_IDS.forEach(cat => {
    // Find chosen category
    if (cat.id === id) {
      // Iterate through every subcategory
      $(allOptions).each(index => {
        currentOption = $($(allOptions)[index]);
        // Find options for chosen subcategroy and show them
        if (parseInt(currentOption.attr("data-cat-id")) === id) {
          $(currentOption).addClass("subcategory-option-show");
        }
        else {
          $(currentOption).removeClass("subcategory-option-show");
        }

      });
    }
  });


}

$(document).ready(() => {
  //To close windows when clicked somewhere else
  document.addEventListener("click", (e) => {

    const clickedElement = $(e.target);
    // If clicked anywhere but the select
    if (!clickedElement.hasClass("triangle") && !clickedElement.hasClass("select-container-inner")) {
      // Hide windows and rotate triangles back
      if (clickedElement.hasClass("category-option") || !clickedElement.hasClass("subcategory-option")) {
        categorySelect.find(".triangle").removeClass("triangle-clicked");
        categorySelect.find(".options-window").removeClass("options-window-show");
      }
      if (clickedElement.hasClass("subcategory-option") || !clickedElement.hasClass("category-option")) {
        subcategorySelect.find(".triangle").removeClass("triangle-clicked");
        subcategorySelect.find(".options-window").removeClass("options-window-show");
      }
    }

  });


});

// Find containers
function init() {
  // Remove bg from navbar
  $(".nav-container").css("background", "none");
  categorySelect = $("#category-select");
  subcategorySelect = $("#subcategory-select");
  searchbarForm = $("form.searchbar");
  ads = {
    lost: $(".ads-container .lost .ads-card-container .ads-card"),
    found: $(".ads-container .found .ads-card-container .ads-card"),
  }

}


function showCategoryWindow() {
  categorySelect.find(".triangle").toggleClass("triangle-clicked");
  categorySelect.find(".options-window").toggleClass("options-window-show");
}

function showSubcategoryWindow() {
  subcategorySelect.find(".triangle").toggleClass("triangle-clicked");
  subcategorySelect.find(".options-window").toggleClass("options-window-show");
}




