import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ApiService } from "../api.service";
declare const initAuthPage: any;
declare const changeTab: any;
declare const authFormSubmitCheck: any;
declare const copyCodeToClipboard: any;
declare const setIsValidUsername: any;
declare const isValidFormForTelegramCode: any;
declare const setIsValidTelegram: any;
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit, AfterViewInit {
  action = {
    method: "get",
    name: "login",
    buttonName: "Войти"
  };
  code = {
    code: "",
    expireDate: new Date()
  };

  telegramBotLink = "https://t.me/thugboikz";
  response = {
    message: "Подождите...",
    valid: false,
    waitingForResponse: false,
    usernameOrId: ""
  };
  showCodeProcess = false;
  codeExpireDiff;
  diff;

  codeTimer() {
    const expireMillis = this.code.expireDate.getTime();
    const currentMillis = new Date().getTime();
    this.diff = expireMillis - currentMillis;
    var minutes = Math.floor((this.diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((this.diff % (1000 * 60)) / 1000);

    if (this.diff > 0)
      this.codeExpireDiff = "Код действителен: " +
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    else
      this.codeExpireDiff =
        "Код просрочен. Для регистрации обновите страницу и попробуйте еще раз.";
  }

  checkUsername(username) {
    if (this.action.name === "register") {
      const isAvailable = this.apiService.isAvailableUsername(username);
      setIsValidUsername(isAvailable);
    }
  }

  getTelegramCode() {
    this.apiService.getTelegramCode().subscribe(obs => {
      this.code = obs;
    });
  }

  checkTelegramCode() {
    if (this.diff > 1000) {
      this.showCodeProcess = true;
      this.apiService.checkTelegramCode(this.code.code).subscribe(obs => {
        this.response = obs;
        setIsValidTelegram(this.response.valid);
      });
    }
  }

  copyCodeToClipboard() {
    copyCodeToClipboard(this.code);
  }

  authFormSubmitCheck() {
    if (this.code.code === "" && isValidFormForTelegramCode()) {
      this.getTelegramCode();
    }
    authFormSubmitCheck();
  }

  changeTab(method, tab, buttonName) {
    changeTab(tab);
    this.action.name = tab;
    this.action.method = method;
    this.action.buttonName = buttonName;
  }

  constructor(private apiService: ApiService) {
    setInterval(() => {
      if (isValidFormForTelegramCode() && !(this.code.code === "")) {
        this.codeTimer();
      }
    }, 1000);
  }

  ngAfterViewInit(): void {
    initAuthPage();
  }

  ngOnInit(): void {}
}
