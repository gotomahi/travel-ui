import {HostListener} from '@angular/core';

export abstract class ComponentCanDeactivate {
  abstract canDeactivate(): boolean;

  @HostListener('window:beofreunload', ['$event'])
  unloadNotification($event: any) { console.log('11111111');
    if (!this.canDeactivate()) {
      $event.returnValue = true;
    }
  }
}
