import {
  Injectable
} from '@angular/core';

import {
  HttpClient,
  HttpRequest
} from '@angular/common/http';

import {
  Router
} from '@angular/router';

// 3rd modules
import { LocalStorageService } from 'angular-2-local-storage';

import {
  ToastrService
} from 'ngx-toastr';

export class UserInfo {
  public id: number;
  public name?: string;
  public email?: string;
  public nickname?: string;
  public picture?: string;
  public phoneNumber?: string;
  public role?: string;

  constructor() {
    this.id = undefined;
    this.name = undefined;
    this.email = undefined;
    this.phoneNumber = undefined;
    this.nickname = undefined;
    this.picture = undefined;
    this.role = undefined;
  }
}

export class UserToken {
  public accessToken: string;
  public refreshToken: string;

  constructor() {
    this.accessToken = undefined;
    this.refreshToken = undefined;
  }
}

@Injectable()
export class AuthService {
  private _currentUser: UserInfo;
  private _userToken: UserToken;

  constructor(private _http: HttpClient,
              private _router: Router,
              private _toast: ToastrService,
              private localStorageService: LocalStorageService) {
  }

  get currentUser(): UserInfo {
    if (this._currentUser && this._currentUser.id) {
      return this._currentUser;
    }

    this._currentUser = this.localStorageService.get('userInfo') as UserInfo;

    if (!this._currentUser) {
      this._currentUser = new UserInfo();
    }
    return this._currentUser;
  }

  set currentUser(info: UserInfo) {
    this.localStorageService.set('userInfo', info);
  }

  get userToken(): UserToken {
    if (this._userToken && this._userToken.accessToken) {
      return this._userToken;
    }

    this._userToken = this.localStorageService.get('userToken') as UserToken;

    if (!this._userToken) {
      this._userToken = new UserToken();
    }
    return this._userToken;
  }

  set userToken(token: UserToken) {
    this.localStorageService.set('userToken', token);
  }

  get isAuthenticated(): boolean {
    return true;
  }

  /**
   * setToken
   */
  public setToken(userToken?: UserToken): void {
    if (!userToken) {
      this.clear();
    } else {
      this.userToken = userToken;
    }
  }

  /**
   * fillInfo
   * @param obj
   */
  public updateUserInfo(obj: any): void {
    this.currentUser = Object.assign(this.currentUser, obj);
  }

  /**
   * clearInfo
   */
  public clear(): void {
    this.userToken = new UserToken();
    this.currentUser = new UserInfo();
    this.localStorageService.remove('userInfo');
    this.localStorageService.remove('userToken');
  }

  public login(username: string, password: string, cb: any): void {

  }

  public signup(email: string, password: string, cb: any): void {

  }

  public logout(): void {
  }
}
