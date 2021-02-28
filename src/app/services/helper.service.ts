import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
    providedIn: 'root'
})

export class HelperService {
    constructor(
        private toastr: ToastrService,
        private spinner: NgxSpinnerService
    ) {
    }

    showSuccessToast(msg: string): void {
        this.toastr.success(msg);
    }

    showErrorToast(msg: string): void {
        this.toastr.error(msg || 'Something went wrong');
    }

    showLoading(): void {
        this.spinner.show();
    }

    hideLoading(): void {
        this.spinner.hide();
    }

}
