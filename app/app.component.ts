import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  Directive,
  OnInit,
} from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[focus-field]',
})
export class FocusDirective {
  @HostListener('focusin', ['$event']) onFocus(event) {
    console.log('a field was focused!' );
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = [
    { label: 'person1', value: 'Mary' },
    { label: 'person2', value: 'Bob' },
    { label: 'person3', value: 'Mike' },
  ];
  constructor(private _fb: FormBuilder) {}

  myForm = this._fb.group({
    userfirstname: [''],
    userlastname: [''],
    people: [''],
  });

  ngOnInit() {
    this.myForm.valueChanges.subscribe((res) => {
      console.log('You entered a value');
    });
  }
}
