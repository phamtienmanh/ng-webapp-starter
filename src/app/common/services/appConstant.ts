import {
  Injectable
} from '@angular/core';
declare const VARS: any;

@Injectable()
export class AppConstant {
  public static domain = VARS.API_DOMAIN;
}
