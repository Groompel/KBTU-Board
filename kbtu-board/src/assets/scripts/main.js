
// For main pages
let profileWindow, categorySelect, subcategorySelect, options, searchbarForm, ads;

// For auth page
let loginTab, registerTab, currentTab;
let inputName, inputUsername, inputPassword, inputPasswordRepeat;
let isAvailableUsername = false;
let isValidAuth = {
  name: false,
  username: false,
  pass: false,
  passRepeat: false,
  telegram: false,
}





// Main page
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

          applyError(queryInput, "input-error");
          return false;

        }
        else {
          // if (isValid.category && isValid.query)
          //   $(e.target).unbind("submit").submit();
        }
      }

      if (input.name === "category") {
        if (parseInt(input.value) === 0) {

          isValid.category = false;
          const selectCategoryInput = categorySelect.find(".select");

          applyError(selectCategoryInput, "input-error");
          return false;

        }
        else {
          if (isValid.category && isValid.query)
            $(e.target).unbind("submit").submit();
        }
      }
    });

  });
}


function applyError(query, className, time = 800) {

  $(query).addClass(className);

  setTimeout(() => {
    $(query).removeClass(className);

  }, time);
}

function changeSubcategories(id) {
  const subсategoriesWindow = subcategorySelect.find(".options-window")[0];
  const allOptions = $(subсategoriesWindow).find(".select-option");

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
        if (categorySelect) {
          categorySelect.find(".triangle").removeClass("triangle-clicked");
          categorySelect.find(".options-window").removeClass("options-window-show");
          categorySelect.find(".select").removeClass("select-shown");

        }
      }
      if (clickedElement.hasClass("subcategory-option") || !clickedElement.hasClass("category-option")) {
        if (subcategorySelect) {
          subcategorySelect.find(".triangle").removeClass("triangle-clicked");
          subcategorySelect.find(".options-window").removeClass("options-window-show");
          subcategorySelect.find(".select").removeClass("select-shown");

        }
      }
    }

    if (!clickedElement.hasClass("option") && !clickedElement.hasClass("profile-container")) {
      $(".profile-window").removeClass("profile-window-show");
    }

  });


});



// Find containers
function initMainPage() {
  profileWindow = $(".profile-window");
  categorySelect = $("#category-select");
  subcategorySelect = $("#subcategory-select");
  searchbarForm = $("form.searchbar");
  ads = {
    lost: $(".ads-container .lost .ads-card-container .ads-card"),
    found: $(".ads-container .found .ads-card-container .ads-card"),
  }

}

function showProfileWindow() {
  $(".profile-window").toggleClass("profile-window-show");
}

function showCategoryWindow() {
  categorySelect.find(".triangle").toggleClass("triangle-clicked");
  categorySelect.find(".options-window").toggleClass("options-window-show");
  categorySelect.find(".select").toggleClass("select-shown");
}

function showSubcategoryWindow() {
  subcategorySelect.find(".triangle").toggleClass("triangle-clicked");
  subcategorySelect.find(".options-window").toggleClass("options-window-show");
  subcategorySelect.find(".select").toggleClass("select-shown");

}

function removeBgFromNavbar() {
  $(".nav-container").css("background", "none");
}

// Auth page section

function initAuthPage() {
  profileWindow = $(".profile-window");
  loginTab = $(".login-tab");
  registerTab = $(".register-tab");
  currentTab = "login";

  changeTab(currentTab);

}

function setIsValidUsername(f) {
  isAvailableUsername = f;
}

function setIsValidTelegram(f) {
  isValidAuth.telegram = f;
}

function checkInputs(isSubmitting = false, forLength = false) {

  const authForm = $("form.auth-form");

  let hasBeenTouched = {
    username: false,
    pass: false,
    passRepat: false,
  }
  if (isSubmitting) {
    hasBeenTouched.username = true;
    hasBeenTouched.pass = true;
    hasBeenTouched.passRepat = true;
  }
  const errClass = "input-error";

  inputName = $(authForm.find(".input-form")[1]);
  inputUsername = $(authForm.find(".input-form")[2]);
  inputPassword = $(authForm.find(".input-form")[3]);
  inputPasswordRepeat = $(authForm.find(".input-form")[4]);

  inputName.on("input", () => {
    const errorMsgDiv = inputName.find(".error")[0];
    const val = inputName.find("input").val().trim();
    if (val.length === 0) {
      isValidAuth.name = false;
      inputName.addClass(errClass);
      errorMsgDiv.innerHTML = "Поле с именем не может быть пустым!";
    }
    else if (val.length > 50) {
      isValidAuth.name = false;
      inputName.addClass(errClass);
      errorMsgDiv.innerHTML = "Длина имени не может превышать 40 символов!";
    }
    else if (val.length !== 0) {

      if (val.match(/[^a-zA-Zа-яА-Я\s]/)) {
        isValidAuth.name = false;

        inputName.addClass(errClass);
        errorMsgDiv.innerHTML = "Имя может содержать только буквы и пробелы!";
      }
      else {
        isValidAuth.name = true;
        inputName.removeClass(errClass);
        errorMsgDiv.innerHTML = "";
      }
    }

    else {
      isValidAuth.name = true;
      inputName.removeClass(errClass);
      errorMsgDiv.innerHTML = "";
    }

  });

  inputUsername.on("input", () => {

    const errorMsgDiv = inputUsername.find(".error")[0];
    const val = inputUsername.find("input").val();

    if (val.length >= 3) {
      hasBeenTouched.username = true;
    }
    if (!isAvailableUsername && !forLength) {
      isValidAuth.username = false;
      inputUsername.addClass(errClass);
      errorMsgDiv.innerHTML = "Данное имя пользователя уже занято! Попробуйте другое.";
    }
    else if (val.length > 20 && forLength) {
      isValidAuth.username = false;
      inputUsername.addClass(errClass);
      errorMsgDiv.innerHTML = "Длина имени не может превышать 20 символов!";
    }
    else if (val.length < 3 && hasBeenTouched.username && forLength) {
      isValidAuth.username = false;
      inputUsername.addClass(errClass);
      errorMsgDiv.innerHTML = "Длина имени не может быть меньше 3 символов!";
    }
    else if (val.length !== 0 && !forLength) {
      if (val.match(/[\W^.]/)) {
        isValidAuth.username = false;

        inputUsername.addClass(errClass);
        errorMsgDiv.innerHTML = "Имя может содержать только латинские буквы, цифры а так же нижнее подчеркивание (_).";
      }
      else if (val[0].match(/[\W_]+/)) {
        isValidAuth.username = false;

        inputUsername.addClass(errClass);
        errorMsgDiv.innerHTML = "Имя может начинаться только на латинскую букву!";
      }
      else if (val[val.length - 1].match(/[\W_]+/)) {
        isValidAuth.username = false;

        inputUsername.addClass(errClass);
        errorMsgDiv.innerHTML = "Имя может заканчиваться только на латинскую букву или цифру!";
      }
      else {
        isValidAuth.username = true;
        inputUsername.removeClass(errClass);
        errorMsgDiv.innerHTML = "";
      }
    }

    else {
      isValidAuth.username = true;
      inputUsername.removeClass(errClass);
      errorMsgDiv.innerHTML = "";
    }

  });

  inputPassword.on("input", () => {
    const errorMsgDiv = inputPassword.find(".error")[0];
    const val = inputPassword.find("input").val();

    if (val.length > 6) {
      hasBeenTouched.pass = true;
    }

    if (val.length < 6 && hasBeenTouched.pass && forLength) {
      isValidAuth.pass = false;
      inputPassword.addClass(errClass);
      errorMsgDiv.innerHTML = "Длина пароля не может быть меньше 6 символов!";
    }
    else if (val.length > 30 && forLength) {
      isValidAuth.pass = false;
      inputPassword.addClass(errClass);
      errorMsgDiv.innerHTML = "Длина пароля не может превышать 30 символов!";
    }
    else {
      isValidAuth.pass = true;
      inputPassword.removeClass(errClass);
      errorMsgDiv.innerHTML = "";
    }
  });

  inputPasswordRepeat.on("input", () => {
    const errorMsgDiv = inputPasswordRepeat.find(".error")[0];
    const val = inputPasswordRepeat.find("input").val();
    const passVal = inputPassword.find("input").val();

    if (val !== passVal) {
      isValidAuth.passRepeat = false;
      inputPasswordRepeat.addClass(errClass);
      errorMsgDiv.innerHTML = "Пароли не совпадают!";
    }
    else {
      isValidAuth.passRepeat = true;
      inputPasswordRepeat.removeClass(errClass);
      errorMsgDiv.innerHTML = "";
    }


  });


}

function stopCheckingInputs() {
  const authForm = $("form.auth-form");
  const errClass = "input-error";
  inputs = $(authForm.find(".input-form"));

  inputs.each(index => {

    input = $(inputs[index]);
    input.off();
    input.removeClass(errClass);
  });
}


function changeTab(tab) {
  currentTab = tab;
  const inputs = $(`.input-form`);

  if (tab === "login") {
    stopCheckingInputs();
    registerTab.removeClass('active-tab');
    loginTab.addClass('active-tab');
  }
  else if (tab === "register") {
    checkInputs();
    loginTab.removeClass('active-tab');
    registerTab.addClass('active-tab');
  }

  inputs.each(inputForm => {
    const currentInputForm = $(inputs[inputForm]);
    const currentInput = $(currentInputForm.find("input"));

    if (currentInputForm.hasClass(tab)) {
      currentInput.prop("disabled", false);
      currentInputForm.addClass("show-input");
    }
    else {
      currentInput.prop("disabled", true);
      currentInputForm.removeClass("show-input");
    }
  });
}

function authFormSubmitCheck(formType) {

  const authForm = $("form.auth-form");

  authForm.submit((e) => {

    e.preventDefault();

    if (currentTab === "register") {
      checkInputs(true, true);
      inputs = $(authForm.find(".input-form"));
      inputs.each(index => {
        input = $(inputs[index]);
        input.trigger("input");
      });
    }
    else {
      checkInputs(true, true);
      inputs = $(authForm.find(".input-form"));
      inputs.each(index => {
        input = $(inputs[index]);
        if (input.hasClass("login"))
          input.trigger("input");
      });
    }



    if (isValidAuth.name && isValidAuth.username && isValidAuth.pass && isValidAuth.passRepeat) {
      if (!isValidAuth.telegram)
        $(".input-form.telegram-verification").addClass("show-telegram-verification");
      else
        $(e.target).unbind("submit").submit();

    }
    else if ((currentTab === "login" && isValidAuth.username && isValidAuth.pass)) {
      $(e.target).unbind("submit").submit();
    }

  });
}

function copyCodeToClipboard(code) {

  const copiedDiv = $(".telegram-verification .text .code .copied");
  var $temp = $("<input>");


  $("body").append($temp);
  $temp.val($(".telegram-verification .text .code span").text()).select();
  document.execCommand("copy");
  $temp.remove();
  copiedDiv.addClass("copied-shown");
  setTimeout(() => {
    copiedDiv.animate({
      opacity: 0,
    }, 1000, function () {
      copiedDiv.css("opacity", 1);
      copiedDiv.removeClass("copied-shown");
    });
  }, 1000);
}

function isValidFormForTelegramCode() {
  return currentTab === "register" && isValidAuth.name && isValidAuth.pass && isValidAuth.passRepeat && isValidAuth.username;

}
