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

import { CreateTopicDto } from '../models/create-topic-dto';
import { SubForumParentNestedResponseDto } from '../models/sub-forum-parent-nested-response-dto';
import { SubForumResponseDto } from '../models/sub-forum-response-dto';
import { TopicResponseDto } from '../models/topic-response-dto';
import { UpdateSubForumDto } from '../models/update-sub-forum-dto';

@Injectable({
  providedIn: 'root',
})
export class SubForumsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSubForumsIdGet
   */
  static readonly ApiSubForumsIdGetPath = 'https://localhost:7153/api/SubForums/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubForumsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubForumsIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SubForumParentNestedResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubForumsService.ApiSubForumsIdGetPath, 'get');
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
        return r as StrictHttpResponse<SubForumParentNestedResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubForumsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubForumsIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SubForumParentNestedResponseDto> {

    return this.apiSubForumsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SubForumParentNestedResponseDto>) => r.body as SubForumParentNestedResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubForumsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubForumsIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SubForumParentNestedResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubForumsService.ApiSubForumsIdGetPath, 'get');
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
        return r as StrictHttpResponse<SubForumParentNestedResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubForumsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubForumsIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SubForumParentNestedResponseDto> {

    return this.apiSubForumsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SubForumParentNestedResponseDto>) => r.body as SubForumParentNestedResponseDto)
    );
  }

  /**
   * Path part for operation apiSubForumsIdPut
   */
  static readonly ApiSubForumsIdPutPath = 'https://localhost:7153/api/SubForums/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubForumsIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubForumsIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSubForumDto
  }
): Observable<StrictHttpResponse<SubForumResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubForumsService.ApiSubForumsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiSubForumsIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubForumsIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSubForumDto
  }
): Observable<SubForumResponseDto> {

    return this.apiSubForumsIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SubForumResponseDto>) => r.body as SubForumResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubForumsIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubForumsIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSubForumDto
  }
): Observable<StrictHttpResponse<SubForumResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubForumsService.ApiSubForumsIdPutPath, 'put');
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
        return r as StrictHttpResponse<SubForumResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubForumsIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubForumsIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSubForumDto
  }
): Observable<SubForumResponseDto> {

    return this.apiSubForumsIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SubForumResponseDto>) => r.body as SubForumResponseDto)
    );
  }

  /**
   * Path part for operation apiSubForumsIdDelete
   */
  static readonly ApiSubForumsIdDeletePath = 'https://localhost:7153/api/SubForums/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubForumsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubForumsIdDelete$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SubForumResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubForumsService.ApiSubForumsIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<SubForumResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubForumsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubForumsIdDelete$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SubForumResponseDto> {

    return this.apiSubForumsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SubForumResponseDto>) => r.body as SubForumResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubForumsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubForumsIdDelete$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SubForumResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubForumsService.ApiSubForumsIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<SubForumResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubForumsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubForumsIdDelete$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SubForumResponseDto> {

    return this.apiSubForumsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SubForumResponseDto>) => r.body as SubForumResponseDto)
    );
  }

  /**
   * Path part for operation apiSubForumsIdTopicsPost
   */
  static readonly ApiSubForumsIdTopicsPostPath = 'https://localhost:7153/api/SubForums/{id}/Topics';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubForumsIdTopicsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubForumsIdTopicsPost$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateTopicDto
  }
): Observable<StrictHttpResponse<TopicResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubForumsService.ApiSubForumsIdTopicsPostPath, 'post');
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
        return r as StrictHttpResponse<TopicResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubForumsIdTopicsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubForumsIdTopicsPost$Plain(params: {
    id: string;
    context?: HttpContext
    body?: CreateTopicDto
  }
): Observable<TopicResponseDto> {

    return this.apiSubForumsIdTopicsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TopicResponseDto>) => r.body as TopicResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubForumsIdTopicsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubForumsIdTopicsPost$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateTopicDto
  }
): Observable<StrictHttpResponse<TopicResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, SubForumsService.ApiSubForumsIdTopicsPostPath, 'post');
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
        return r as StrictHttpResponse<TopicResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubForumsIdTopicsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubForumsIdTopicsPost$Json(params: {
    id: string;
    context?: HttpContext
    body?: CreateTopicDto
  }
): Observable<TopicResponseDto> {

    return this.apiSubForumsIdTopicsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TopicResponseDto>) => r.body as TopicResponseDto)
    );
  }

}
