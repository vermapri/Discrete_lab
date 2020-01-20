import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AlertService {
  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string, duration = 3500) {
    message = message.substring(0, 100);

    this.snackBar.open(message, '', {
      duration          : 3500,
      horizontalPosition: 'center',
      verticalPosition  : 'top',
      panelClass        : ['alert', 'alert-success']
    });
  }

  error(message: string, duration = 3500) {
    message = message.substring(0, 100);
    this.snackBar.open(message, '', {
      duration          : 3500,
      horizontalPosition: 'center',
      verticalPosition  : 'top',
      panelClass        : ['alert', 'alert-error']
    });
  }
}
