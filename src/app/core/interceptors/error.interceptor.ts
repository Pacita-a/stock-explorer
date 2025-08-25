import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private messageService: MessageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Client Error
          errorMessage = `Client Error: ${error.error.message}`;
        } else {
          // Server error
          switch (error.status) {
            case 401:
              errorMessage = 'You are not authorized.';
              // this.router.navigate(['/login']);
              break;
            case 403:
              errorMessage =
                'Access denied. You do not have permission for this action';
              break;

            default:
              errorMessage = `Something went wrong, please try again`;
              break;
          }
        }

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage,
          life: 5000,
        });

        return throwError(() => error);
      })
    );
  }
}
