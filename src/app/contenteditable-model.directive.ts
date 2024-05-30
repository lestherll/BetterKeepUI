import { Directive, ElementRef, HostListener, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Note } from './shared/types';

@Directive({
  selector: '[contenteditableModel]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ContenteditableModelDirective),
    multi: true
  }]
})
export class ContenteditableModelDirective implements ControlValueAccessor {
  @Input('contenteditableModel') model!: any;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private el: ElementRef) {console.log(el.nativeElement)}

  @HostListener('input', ['$event.target.innerText'])
  onInput(value: any) {
    console.log("inner text",this.el)
    if(value !== null || value.length > 0){
      this.onChange(value);
      console.log("onInput is changing sth ", value, "; type of value is ", typeof(value));
    } else {
      console.log("value is null or empty")
    }
    
  }

  @HostListener('blur')
  onBlur() {
    this.onTouched();
    console.log("blur activated");
  }

  writeValue(value: any): void {
    this.el.nativeElement.innerText = value || '';
    console.log("writeValue is writing: ", value, "; type of value is ", typeof(value));
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}