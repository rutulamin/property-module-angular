import { Injectable } from '@angular/core';
import { APIEndPoints } from 'src/app/constants/constants';
import { HttpRequestService } from '../../services/http-request.service';

@Injectable({
    providedIn: 'root'
})

export class AddPropertyService {

  constructor(
    private httpService: HttpRequestService,
  ) { }


  getLocalityList(): any {
    return new Promise((resolve, reject) => {
      this.httpService.get(APIEndPoints.LOCALITY_LIST).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err.error);
      });
    });
  }

  getBathroomCountList(): any {
    return new Promise((resolve, reject) => {
      this.httpService.get(APIEndPoints.BATHROOM_COUNT_LIST).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err.error);
      });
    });
  }

  getBedCountList(): any {
    return new Promise((resolve, reject) => {
      this.httpService.get(APIEndPoints.BEDROOM_COUNT_LIST).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err.error);
      });
    });
  }

  getCarpetAreaTypeList(): any {
    return new Promise((resolve, reject) => {
      this.httpService.get(APIEndPoints.CARPET_AREA_LIST).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err.error);
      });
    });
  }

  addPropertyData(data: any): any {
    return new Promise((resolve, reject) => {
      this.httpService.post(APIEndPoints.PROPERTY, data).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err.error);
      });
    });
  }

}
