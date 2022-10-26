import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum quas cupiditate ad eveniet porro minima, impedit recusandae dignissimos neque dolores velit non pariatur fuga dolorem eius maxime! Velit, dolor. Atque reiciendis beatae nostrum! Repudiandae porro itaque voluptatum vitae non fugiat sunt ipsa placeat dolores, architecto ea vero odit pariatur iure molestias rerum beatae est sint.'
  
  isEdited: boolean = false

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
