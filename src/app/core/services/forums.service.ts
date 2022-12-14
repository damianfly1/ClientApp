/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CategoryResponseDto } from '../models/category-response-dto';
import { CreateCategoryDto } from '../models/create-category-dto';
import { ForumNestedResponseDto } from '../models/forum-nested-response-dto';
import { ForumResponseDto } from '../models/forum-response-dto';
import { UpdateForumDto } from '../models/update-forum-dto';

@Injectable({
  providedIn: 'root',
})
export class ForumsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  getForum() {
    return this.http.get('https://localhost:7153/api/forums');
  }

  /**
   * Path part for operation apiForumsIdCategoriesPost
   */
  static readonly ApiForumsIdCategoriesPostPath = 'https://localhost:7153/api/Forums/{id}/Categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiForumsIdCategoriesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiForumsIdCategoriesPost$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateCategoryDto
  }
  ): Observable<StrictHttpResponse<CategoryResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ForumsService.ApiForumsIdCategoriesPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiForumsIdCategoriesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiForumsIdCategoriesPost$Plain(params: {
    id: string;
    context?: HttpContext
    body?: CreateCategoryDto
  }
  ): Observable<CategoryResponseDto> {

    return this.apiForumsIdCategoriesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryResponseDto>) => r.body as CategoryResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiForumsIdCategoriesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiForumsIdCategoriesPost$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateCategoryDto
  }
  ): Observable<StrictHttpResponse<CategoryResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ForumsService.ApiForumsIdCategoriesPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
      rb.header('Authorization', 'Bearer ' + localStorage.getItem("token"));
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiForumsIdCategoriesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiForumsIdCategoriesPost$Json(params: {
    id: string;
    context?: HttpContext
    body?: CreateCategoryDto
  }
  ): Observable<CategoryResponseDto> {

    return this.apiForumsIdCategoriesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryResponseDto>) => r.body as CategoryResponseDto)
    );
  }

}
