import { Injectable } from "@angular/core";
import { HttpRequest } from "@angular/common/http";

@Injectable()
export default class InterceptorService {
  public cachedRequests: Array<HttpRequest<any>> = [];

  constructor() {

  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
