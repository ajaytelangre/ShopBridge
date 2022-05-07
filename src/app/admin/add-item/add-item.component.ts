import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormControlName } from '@angular/forms'
import {CommonServiceService } from "src/app/services/common-service.service";
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  itemRegister = false;
  constructor(private commonService:CommonServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  registerItem = new FormGroup({
    itemName: new FormControl('', [Validators.required]),
    itemDescription: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quntity: new FormControl('', [Validators.required])
  });

  get itemName() {
    return this.registerItem.get('itemName');
  }

  get itemDescription() {
    return this.registerItem.get('itemDescription');
  }

  get price() {
    return this.registerItem.get('price');
  }

  get quntity() {
    return this.registerItem.get('quntity');
  }

  register() {
    console.log(this.registerItem.value);
    const data = {
      name: this.registerItem.value.itemName,
      description: this.registerItem.value.itemDescription,
      quntity: this.registerItem.value.quntity,
      price: this.registerItem.value.price
    }

    let url = 'https://6274082a345e1821b2267283.mockapi.io/Items';
    this.commonService.setItemData(url, data).subscribe((result) => {
      console.log(result);
      
      this.itemRegister = true;
      this.commonService.itemAdded=true;
      this.router.navigate(['/']);
    }, Error => {
      console.log('data not uploaded');
    })
    
  }


}
