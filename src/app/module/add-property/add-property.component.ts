import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/constants/constants';
import { HelperService } from 'src/app/services/helper.service';
import { AddPropertyService } from './add-property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  public propertyForm!: FormGroup; // "definite assignment assertion"
  public localityList: any = [];
  public bedroomCountList: any = [];
  public bathroomCountList: any = [];
  public carpetAreaTypeList: any = [];
  public isSubmitted = false;
  public imageList: any = [];
  public ROUTE_PATH = RoutePath;
  @ViewChild('imageInput') imageInput!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private addPropertyService: AddPropertyService,
    private helperService: HelperService,
    private router: Router
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.getLocalityList();
    this.getBathroomCountList();
    this.getBedCountList();
    this.getCarpetAreaTypeList();
  }

  initializeForm(): void {
    this.propertyForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      address: [null, Validators.required],
      localityId: [null, Validators.required],
      price: [null, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/), Validators.maxLength(8)]],
      bedroomCountId: [null, Validators.required],
      bathroomCountId: [null, Validators.required],
      carpetArea: [null, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/), Validators.maxLength(5)]],
      carpetAreaTypeId: [null, Validators.required],
    });
  }

  async getLocalityList(): Promise<void> {
    try {
      this.helperService.showLoading();
      const resData: any = await this.addPropertyService.getLocalityList();
      this.localityList = resData.data;
      this.helperService.hideLoading();
    } catch (err) {
      this.helperService.hideLoading();
      this.helperService.showErrorToast(err.error);
    }
  }
  async getBathroomCountList(): Promise<void> {
    try {
      this.helperService.showLoading();
      const resData: any = await this.addPropertyService.getBathroomCountList();
      this.bathroomCountList = resData.data;
      this.helperService.hideLoading();
    } catch (err) {
      this.helperService.hideLoading();
      this.helperService.showErrorToast(err.error);
    }
  }

  async getBedCountList(): Promise<void> {
    try {
      this.helperService.showLoading();
      const resData: any = await this.addPropertyService.getBedCountList();
      this.bedroomCountList = resData.data;
      this.helperService.hideLoading();
    } catch (err) {
      this.helperService.hideLoading();
      this.helperService.showErrorToast(err.error);
    }
  }

  async getCarpetAreaTypeList(): Promise<void> {
    try {
      this.helperService.showLoading();
      const resData: any = await this.addPropertyService.getCarpetAreaTypeList();
      this.carpetAreaTypeList = resData.data;
      this.helperService.hideLoading();
    } catch (err) {
      this.helperService.hideLoading();
      this.helperService.showErrorToast(err.error);
    }
  }

  // tslint:disable-next-line: typedef
  get formControls() {
    return this.propertyForm.controls;
  }

  async onFileSelect(event: any): Promise<void> {
    try {
      this.imageList = [];
      const files = event.target.files;
      if (files.length <= 5) {
        for (const file of files) {
          await this.readFile(file);
        }
      } else {
        this.helperService.showErrorToast('Please select maximum 5 images');
        this.imageInput.nativeElement.value = '';
      }
    } catch (err) {
      this.helperService.showErrorToast('Something went wrong in reading file');
    }
  }

  readFile(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageList.push({ src: reader.result, file });
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }

  async onAddProperty(): Promise<void> {
    try {
      this.isSubmitted = true;
      if (this.propertyForm.valid && this.imageList.length > 0) {
        const reqData = this.propertyForm.value;
        const formData = new FormData();
        for (const key of Object.keys(reqData)) {
          formData.append(key, reqData[key]);
        }
        this.imageList.forEach((image: any, index: number) => {
          formData.append(`images[${index}]`, image.file);
        });
        this.helperService.showLoading();
        const resData = await this.addPropertyService.addPropertyData(formData);
        this.helperService.showSuccessToast(resData.message);
        this.helperService.hideLoading();
        this.router.navigate(['']);
      }
    } catch (err) {
      this.helperService.hideLoading();
      this.helperService.showErrorToast(err.error);
    }

  }

}
