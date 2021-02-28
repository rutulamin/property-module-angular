import { Injectable } from '@angular/core';
import { APIEndPoints } from 'src/app/constants/constants';
import { HttpRequestService } from '../../services/http-request.service';

@Injectable({
    providedIn: 'root'
})

export class PropertyDetailService {

  constructor(
    private httpService: HttpRequestService,
  ) { }


  getPropertyDetail(id: any): any {
    return new Promise((resolve, reject) => {
      this.httpService.get(`${APIEndPoints.PROPERTY}/${id}`).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err.error);
      });
    });
  }

  addPropertyView( data: any): any {
    return new Promise((resolve, reject) => {
      this.httpService.post(APIEndPoints.PROPERTY_VIEW, data).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err.error);
      });
    });
  }

}
