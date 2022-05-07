import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from 'src/app/services/common-service.service'
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  itemdata:any=[];
  itemUpdate:boolean=false;
 // itemName='';

  constructor(private commonService:CommonServiceService) { }

  ngOnInit(): void {
    console.log('update user '+this.commonService.itemId);
    this.getItemByid(this.commonService.itemId);
    
  }

  updateForm=new FormGroup({
    itemName: new FormControl('', [Validators.required]),
    itemDescription: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quntity: new FormControl('', [Validators.required])
  });


  
 

  get itemName() {
    return this.updateForm.get('itemName');
  }

  get itemDescription() {
    return this.updateForm.get('itemDescription');
  }

  get price() {
    return this.updateForm.get('price');
  }

  get quntity() {
    return this.updateForm.get('quntity');
  }

  getItemByid(itemId:any)
  {
    let url = 'https://6274082a345e1821b2267283.mockapi.io/Items/'+itemId;
    this.commonService.getAllItems(url).subscribe((result)=>{
      
      this.itemdata=result;
      this.updateForm.patchValue({
        itemName:this.itemdata.name,
        itemDescription:this.itemdata.description,
        price:this.itemdata.price,
        quntity:this.itemdata.quntity

      });
    
      console.log('item data is ' +this.itemdata.name);
      
    })
  }

  updateData()
  {
    console.log(this.updateForm.value);
    const data = {
      name: this.updateForm.value.itemName,
      description: this.updateForm.value.itemDescription,
      quntity: this.updateForm.value.quntity,
      price: this.updateForm.value.quntity
    }
    let itemId=this.commonService.itemId;
    const url='https://6274082a345e1821b2267283.mockapi.io/Items/'+itemId;
    this.commonService.updateItem(url,data).subscribe((result)=>{
      console.log('data updated');
      this.itemUpdate=true;
    },Error=>{
      console.log('data updation failed');
    })

  }

}
