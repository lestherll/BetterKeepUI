import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

const routes: Routes = [
  {path: "", component: BaseLayoutComponent},
  {path: "hello", component: HelloWorldComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
