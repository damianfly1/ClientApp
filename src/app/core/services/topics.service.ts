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

import { CreatePostDto } from '../models/create-post-dto';
import { PostResponseDto } from '../models/post-response-dto';
import { TopicParentNestedResponseDto } from '../models/topic-parent-nested-response-dto';
import { TopicResponseDto } from '../models/topic-response-dto';
import { UpdateTopicDto } from '../models/update-topic-dto';

@Injectable({
  providedIn: 'root',
})
export class TopicsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTopicsIdGet
   */
  static readonly ApiTopicsIdGetPath = 'https://localhost:7153/api/Topics/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTopicsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTopicsIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TopicParentNestedResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, TopicsService.ApiTopicsIdGetPath, 'get');
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
        return r as StrictHttpResponse<TopicParentNestedResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTopicsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTopicsIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<TopicParentNestedResponseDto> {

    return this.apiTopicsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TopicParentNestedResponseDto>) => r.body as TopicParentNestedResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTopicsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTopicsIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TopicParentNestedResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, TopicsService.ApiTopicsIdGetPath, 'get');
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
        return r as StrictHttpResponse<TopicParentNestedResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTopicsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTopicsIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<TopicParentNestedResponseDto> {

    return this.apiTopicsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TopicParentNestedResponseDto>) => r.body as TopicParentNestedResponseDto)
    );
  }

  /**
   * Path part for operation apiTopicsIdPut
   */
  static readonly ApiTopicsIdPutPath = 'https://localhost:7153/api/Topics/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTopicsIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTopicsIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateTopicDto
  }
): Observable<StrictHttpResponse<TopicResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, TopicsService.ApiTopicsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiTopicsIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTopicsIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: UpdateTopicDto
  }
): Observable<TopicResponseDto> {

    return this.apiTopicsIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TopicResponseDto>) => r.body as TopicResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTopicsIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTopicsIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateTopicDto
  }
): Observable<StrictHttpResponse<TopicResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, TopicsService.ApiTopicsIdPutPath, 'put');
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
        return r as StrictHttpResponse<TopicResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTopicsIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTopicsIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: UpdateTopicDto
  }
): Observable<TopicResponseDto> {

    return this.apiTopicsIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TopicResponseDto>) => r.body as TopicResponseDto)
    );
  }

  /**
   * Path part for operation apiTopicsIdDelete
   */
  static readonly ApiTopicsIdDeletePath = 'https://localhost:7153/api/Topics/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTopicsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTopicsIdDelete$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TopicResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, TopicsService.ApiTopicsIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<TopicResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTopicsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTopicsIdDelete$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<TopicResponseDto> {

    return this.apiTopicsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TopicResponseDto>) => r.body as TopicResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTopicsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTopicsIdDelete$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TopicResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, TopicsService.ApiTopicsIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<TopicResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTopicsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTopicsIdDelete$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<TopicResponseDto> {

    return this.apiTopicsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TopicResponseDto>) => r.body as TopicResponseDto)
    );
  }

  /**
   * Path part for operation apiTopicsIdPostsPost
   */
  static readonly ApiTopicsIdPostsPostPath = 'https://localhost:7153/api/Topics/{id}/Posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTopicsIdPostsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTopicsIdPostsPost$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreatePostDto
  }
): Observable<StrictHttpResponse<PostResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, TopicsService.ApiTopicsIdPostsPostPath, 'post');
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
        return r as StrictHttpResponse<PostResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTopicsIdPostsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTopicsIdPostsPost$Plain(params: {
    id: string;
    context?: HttpContext
    body?: CreatePostDto
  }
): Observable<PostResponseDto> {

    return this.apiTopicsIdPostsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PostResponseDto>) => r.body as PostResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTopicsIdPostsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTopicsIdPostsPost$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreatePostDto
  }
): Observable<StrictHttpResponse<PostResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, TopicsService.ApiTopicsIdPostsPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
      rb.header('Authorization', 'Bearer ' + localStorage.getItem("token"));
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context,
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTopicsIdPostsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTopicsIdPostsPost$Json(params: {
    id: string;
    context?: HttpContext
    body?: CreatePostDto
  }
): Observable<PostResponseDto> {

    return this.apiTopicsIdPostsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PostResponseDto>) => r.body as PostResponseDto)
    );
  }

}
