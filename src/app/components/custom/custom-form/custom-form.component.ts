import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomDataService } from 'src/app/services/custom-data.service';


@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  ifActive: boolean = false;


  // date?:number;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    img: ['', [Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]],
    type: ['', [Validators.required]],
    weight: ['', [Validators.required, Validators.maxLength(3), Validators.pattern(/^[0-9]+$/)]],
    iq: ['', [Validators.required]],
    temper: ['', [Validators.required]],
  });

  constructor(private customService: CustomDataService ,private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  private clearForm(): void {
    this.form.controls['name'].setValue('')
    this.form.controls['img'].setValue('')
    this.form.controls['type'].setValue('')
    this.form.controls['weight'].setValue('')
    this.form.controls['iq'].setValue('')
    this.form.controls['temper'].setValue('')
  }



  onSubmit() {
    let date = new Date;
    if(<any>date -  <any>new Date(<any>this.customService.pokemons[this.customService.pokemons.length - 1].date) < 300000) return alert('One pokemon every 5 minutes')
 
    this.customService.createData({...this.form.value, date})
    this.clearForm()
    this.ifActive = false;
  }

}
