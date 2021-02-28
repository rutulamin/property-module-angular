import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants, RoutePath } from 'src/app/constants/constants';
import { HelperService } from 'src/app/services/helper.service';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss']
})
export class ListPropertyComponent implements OnInit {

  public PAGE = Constants.PAGE;
  public LIMIT = Constants.LIMIT;
  public propertyList: any = [];
  public total = 0;
  public ROUTE_PATH = RoutePath;
  public solidStar = solidStar;
  public regularStar = regularStar;

  constructor(
    private helper: HelperService,
    private router: Router,
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
    this.getPropertyList();
  }

  async getPropertyList(): Promise<void> {
    try {
      this.helper.showLoading();
      const params = {
        page: this.PAGE,
        limit: this.LIMIT
      };
      const resData = await this.propertyService.getPropertyList(params);
      this.propertyList = [
        ...this.propertyList,
        ...resData.data
      ];
      this.total = resData.total;
      this.helper.hideLoading();
    } catch (err) {
      this.helper.hideLoading();
      this.helper.showErrorToast(err.error);
    }
  }

  onScrollDown(): void {
    if (this.total > this.propertyList.length) {
      this.PAGE += 1;
      this.getPropertyList();
    }
  }

  onPropertyClick(id: number): void {
    this.router.navigate([`${RoutePath.PROPERTY_DETAIL}`, id], {});
  }

  async onFavouriteUpdate(event: any, item: any): Promise<void> {
    try {
      event.preventDefault();
      const reqData = {
        isFavourite: !item.isFavourite
      };
      await this.propertyService.updatePropertyFavourite(reqData, item.id);
      item.isFavourite = !item.isFavourite;
    } catch (err) {
      this.helper.showErrorToast(err.error);
    }
  }

}
