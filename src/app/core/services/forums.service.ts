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

  /**
   * Path part for operation apiForumsIdGet
   */
  static readonly ApiForumsIdGetPath = 'https://localhost:7153/api/Forums/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiForumsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiForumsIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ForumNestedResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ForumsService.ApiForumsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ForumNestedResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiForumsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiForumsIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ForumNestedResponseDto> {

    return this.apiForumsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ForumNestedResponseDto>) => r.body as ForumNestedResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiForumsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiForumsIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ForumNestedResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ForumsService.ApiForumsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ForumNestedResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiForumsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiForumsIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ForumNestedResponseDto> {

    return this.apiForumsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ForumNestedResponseDto>) => r.body as ForumNestedResponseDto)
    );
  }

  /**
   * Path part for operation apiForumsIdPut
   */
  static readonly ApiForumsIdPutPath = 'https://localhost:7153/api/Forums/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiForumsIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiForumsIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateForumDto
  }
): Observable<StrictHttpResponse<ForumResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ForumsService.ApiForumsIdPutPath, 'put');
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
        return r as StrictHttpResponse<ForumResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiForumsIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiForumsIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: UpdateForumDto
  }
): Observable<ForumResponseDto> {

    return this.apiForumsIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ForumResponseDto>) => r.body as ForumResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiForumsIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiForumsIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateForumDto
  }
): Observable<StrictHttpResponse<ForumResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ForumsService.ApiForumsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ForumResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiForumsIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiForumsIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: UpdateForumDto
  }
): Observable<ForumResponseDto> {

    return this.apiForumsIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ForumResponseDto>) => r.body as ForumResponseDto)
    );
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
