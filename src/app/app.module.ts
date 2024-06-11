import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { EditorComponent } from './editor/editor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditorComponent } from './editor/editor.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { ContenteditableModelDirective } from './contenteditable-model.directive';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoContainerComponent,
    BaseLayoutComponent,
    SidebarComponent,
    ToolbarComponent,
    EditorComponent,
    ContenteditableModelDirective,
    HelloWorldComponent,
    LoginComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
