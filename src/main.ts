import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {AppComponent} from "./app/app.component";
import {todosReducer} from "./app/home/store";
import {appConfig} from "./app/app.config";

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
