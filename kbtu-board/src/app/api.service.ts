import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { LAST_ADS, BEST_TEACHERS } from "./backend-data";
import { stringify } from "querystring";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiUrl = "localhost:8000/api";

  constructor(private httpClient: HttpClient) {}

  checkTelegramCode(code): Observable<any> {
    return of(Math.random() < 0.5 ? {
          valid: true,
          message: "Успешно! Ваш привязанный аккаунт ",
          usernameOrId: "@thugboikz",
          waiting: false,
        } : {
          valid: false,
          message:
            "Ошибка! Код еще не был подтвержден. Если вы уже отправили команду, попробуйте еще раз через минуту.",
          usernameOrId: "",
          waiting: false,
        });
  }

  getTelegramCode(): Observable<any> {
    const expirationMinutes = 10;
    let result = {
      code: "",
      expireDate: new Date(Date.now() + expirationMinutes * 60000)
    };
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 6; i++) {
      result.code += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return of(result);
  }

  getLastAds(number): Observable<any> {
    const res = LAST_ADS;
    return of(res);
  }

  getBestTeachers(number): Observable<any> {
    const res = BEST_TEACHERS;
    return of(res);
  }

  isAvailableUsername(username) {
    const usernames = [
      "johnybravo1337",
      "rick982",
      "mukhammed123",
      "thugboikz",
      "agressive_deer",
      "jiklopo"
    ];

    let isValid = true;
    usernames.forEach(un => {
      if (un === username) {
        isValid = false;
      }
    });
    return isValid;
  }
}
