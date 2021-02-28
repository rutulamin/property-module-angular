import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class HttpRequestService {
    APP_URL = environment.API_URL;

    constructor(
        public http: HttpClient,
    ) {
    }

    post(URL: string, data: any): any {
        const response = this.http.post(this.APP_URL + URL, data);
        return response;
    }


    get(URL: string, params = {}): any {
        const response = this.http.get(this.APP_URL + URL, { params });
        return response;
    }

}
