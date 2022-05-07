import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms'

import { CommonServiceService } from 'src/app/services/common-service.service'
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemList: any = [];
  cols: any = [];
  itemRegister = false;
  

  constructor(public commonService: CommonServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getAllItemsList();
    this.cols = [
      { field: 'item_id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Item description' },
      { field: 'quntity', header: 'Item Quntity' },
      { field: 'price', header: 'Price' },
      { field: 'action', header: 'Action' },
    ];
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
      this.getAllItemsList();
      this.itemRegister = true;
    }, Error => {
      console.log('data not uploaded');
    })
    //const data
  }


  getAllItemsList() {
     let url = 'https://6274082a345e1821b2267283.mockapi.io/Items';
   
    this.commonService.getAllItems(url).subscribe((result) => {
      console.log(result);
      this.itemList = result;
    }, Error => {
      console.log('exception occurs');
    });
  }

  deleteItem(itemId: any) {
    console.log(itemId);
    let url = 'https://6274082a345e1821b2267283.mockapi.io/Items/'+itemId;
    this.commonService.deleteItem(url).subscribe((result)=>{
      console.log('item deleted');
      this.getAllItemsList();
      alert('Item deleted');

    },Error=>{
      console.log('exception occurs');
    });
  }

  
  goToUpdate(itemId:any)
  {
    this.commonService.itemId=itemId;
    this.router.navigate(['/update']);
  }


}
