import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { PropertyDetailService } from './property-detail.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  public propertyDetail: any = null;
  public propertyId: any = null;
  public solidStar = solidStar;
  public regularStar = regularStar;

  constructor(
    private helper: HelperService,
    private route: ActivatedRoute,
    private propertyDetaliService: PropertyDetailService
  ) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.params.id;
    this.getPropertyDetail();
  }


  async getPropertyDetail(): Promise<void> {
    try {
      this.helper.showLoading();
      const resData = await this.propertyDetaliService.getPropertyDetail(this.propertyId);
      this.propertyDetail = resData.data;
      this.addPropertyView();
      this.helper.hideLoading();
    } catch (err) {
      this.helper.hideLoading();
      this.helper.showErrorToast(err.error);
    }
  }

  async addPropertyView(): Promise<void> {
    try {
      const data = {
        propertyId: this.propertyId
      };
      await this.propertyDetaliService.addPropertyView(data);
    } catch (err) {
      this.helper.showErrorToast(err.error);
    }
  }

}
