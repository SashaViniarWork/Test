import {Component, OnInit} from '@angular/core';

import {environment} from '@env/environment';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ApiService} from '@app/core/api.service';

@Component({
  selector: 'app-ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss']
})
export class FfTestPageComponent implements OnInit {

  sendForm: FormGroup;
  jokes: any;

  constructor(private fb: FormBuilder, public api: ApiService) {
    this.sendForm = new FormGroup({
      request_text: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    });
  }

  Send() {
    this.api.get('/jokes/search?query=' + this.sendForm.controls['request_text'].value).subscribe(res => {
      console.log(res);
      this.jokes = res;
    });
  }

  ngOnInit() {
    this.jokes = {
      'category': '',
      'value': ''
    };
  }

}
