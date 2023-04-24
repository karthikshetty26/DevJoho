import { DOCUMENT } from '@angular/common';
import { Subscriber, Subscription, filter, fromEvent } from 'rxjs';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {

  @Output() clickOutside = new EventEmitter<void>();

  documentSubscribe: Subscription | undefined;
  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit(): void {
    this.documentSubscribe = fromEvent(this.document, 'click').pipe(filter((event) => {
      return !this.isInside(event.target as HTMLElement);
    })).subscribe(() => {
      this.clickOutside.emit();
    })
  }

  ngOnDestroy(): void {
      this.documentSubscribe?.unsubscribe();
  }

  isInside(elementToCheck: HTMLElement): boolean {
    return elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck)
  }
}
