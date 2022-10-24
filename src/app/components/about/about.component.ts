import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo aliquid ducimus adipisci! Impedit quos minus dolore praesentium perferendis fuga, consectetur ut odit voluptates ducimus facilis omnis explicabo mollitia repudiandae!'
  isEdited: boolean = false

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
