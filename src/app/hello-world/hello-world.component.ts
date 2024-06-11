import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent implements OnInit{
  message: string = '';
  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit(): void {
    this.helloWorldService.getHelloWorldMessage().subscribe((data) => {
      this.message = data;
    });
    console.log(this.message);
  }
}
