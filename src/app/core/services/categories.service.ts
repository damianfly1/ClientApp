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
import { CreateSubForumDto } from '../models/create-sub-forum-dto';
import { SubForumResponseDto } from '../models/sub-forum-response-dto';
import { UpdateCategoryDto } from '../models/update-category-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCategoriesIdPut
   */
  static readonly ApiCategoriesIdPutPath = 'https://localhost:7153/api/Categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriesIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriesIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateCategoryDto
  }
  ): Observable<StrictHttpResponse<CategoryResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.ApiCategoriesIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCategoriesIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriesIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: UpdateCategoryDto
  }
  ): Observable<CategoryResponseDto> {

    return this.apiCategoriesIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryResponseDto>) => r.body as CategoryResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriesIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriesIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateCategoryDto
  }
  ): Observable<StrictHttpResponse<CategoryResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.ApiCategoriesIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCategoriesIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriesIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: UpdateCategoryDto
  }
  ): Observable<CategoryResponseDto> {

    return this.apiCategoriesIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryResponseDto>) => r.body as CategoryResponseDto)
    );
  }

  /**
   * Path part for operation apiCategoriesIdDelete
   */
  static readonly ApiCategoriesIdDeletePath = 'https://localhost:7153/api/Categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriesIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriesIdDelete$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<CategoryResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.ApiCategoriesIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<CategoryResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoriesIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriesIdDelete$Plain(params: {
    id: string;
    context?: HttpContext
  }
  ): Observable<CategoryResponseDto> {

    return this.apiCategoriesIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryResponseDto>) => r.body as CategoryResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriesIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriesIdDelete$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
  ): Observable<StrictHttpResponse<CategoryResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.ApiCategoriesIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiCategoriesIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriesIdDelete$Json(params: {
    id: string;
    context?: HttpContext
  }
  ): Observable<CategoryResponseDto> {

    return this.apiCategoriesIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryResponseDto>) => r.body as CategoryResponseDto)
    );
  }

  /**
   * Path part for operation apiCategoriesIdSubForumsPost
   */
  static readonly ApiCategoriesIdSubForumsPostPath = 'https://localhost:7153/api/Categories/{id}/SubForums';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriesIdSubForumsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriesIdSubForumsPost$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateSubForumDto
  }
  ): Observable<StrictHttpResponse<SubForumResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.ApiCategoriesIdSubForumsPostPath, 'post');
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
        return r as StrictHttpResponse<SubForumResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoriesIdSubForumsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriesIdSubForumsPost$Plain(params: {
    id: string;
    context?: HttpContext
    body?: CreateSubForumDto
  }
  ): Observable<SubForumResponseDto> {

    return this.apiCategoriesIdSubForumsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SubForumResponseDto>) => r.body as SubForumResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriesIdSubForumsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriesIdSubForumsPost$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateSubForumDto
  }
  ): Observable<StrictHttpResponse<SubForumResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.ApiCategoriesIdSubForumsPostPath, 'post');
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
        return r as StrictHttpResponse<SubForumResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoriesIdSubForumsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriesIdSubForumsPost$Json(params: {
    id: string;
    context?: HttpContext
    body?: CreateSubForumDto
  }
  ): Observable<SubForumResponseDto> {

    return this.apiCategoriesIdSubForumsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SubForumResponseDto>) => r.body as SubForumResponseDto)
    );
  }

}
