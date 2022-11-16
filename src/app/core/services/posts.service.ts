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

import { PostResponseDto } from '../models/post-response-dto';
import { UpdatePostDto } from '../models/update-post-dto';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPostsIdPut
   */
  static readonly ApiPostsIdPutPath = 'https://localhost:7153/api/Posts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPostsIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPostsIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdatePostDto
  }
): Observable<StrictHttpResponse<PostResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.ApiPostsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiPostsIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPostsIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: UpdatePostDto
  }
): Observable<PostResponseDto> {

    return this.apiPostsIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PostResponseDto>) => r.body as PostResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPostsIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPostsIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdatePostDto
  }
): Observable<StrictHttpResponse<PostResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.ApiPostsIdPutPath, 'put');
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
        return r as StrictHttpResponse<PostResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPostsIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPostsIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: UpdatePostDto
  }
): Observable<PostResponseDto> {

    return this.apiPostsIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PostResponseDto>) => r.body as PostResponseDto)
    );
  }

  /**
   * Path part for operation apiPostsIdDelete
   */
  static readonly ApiPostsIdDeletePath = 'https://localhost:7153/api/Posts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPostsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPostsIdDelete$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PostResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.ApiPostsIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<PostResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPostsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPostsIdDelete$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<PostResponseDto> {

    return this.apiPostsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PostResponseDto>) => r.body as PostResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPostsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPostsIdDelete$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PostResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.ApiPostsIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<PostResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPostsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPostsIdDelete$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<PostResponseDto> {

    return this.apiPostsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PostResponseDto>) => r.body as PostResponseDto)
    );
  }

}
