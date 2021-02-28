import { Injectable } from '@angular/core';
import { APIEndPoints } from 'src/app/constants/constants';
import { HttpRequestService } from '../../services/http-request.service';

@Injectable({
    providedIn: 'root'
})

export class PropertyService {

  constructor(
    private httpService: HttpRequestService,
  ) { }


  getPropertyList(params = {}): any {
    return new Promise((resolve, reject) => {
      this.httpService.get(APIEndPoints.PROPERTY, params).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err.error);
      });
    });
  }

  updatePropertyFavourite(data: any, id: number): any {
    return new Promise((resolve, reject) => {
      this.httpService.post(`${APIEndPoints.PROPERTY}/${id}/favourite-update`, data).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err.error);
      });
    });
  }

}
