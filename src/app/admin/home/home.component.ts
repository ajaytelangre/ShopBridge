import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms'

import { CommonServiceService } from 'src/app/services/common-service.service'
import { Router } from '@angular/router'; 
import { faPlus,faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemList: any = [];
  cols: any = [];
  itemRegister = false;
  itemDeleted=false;
  faPlusIcon=faPlus;
  faEditIcon=faEdit;
  faDeleteLeftIcon=faTrash;

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

    setTimeout(() =>{
       this.commonService.updateDataMessage=false;
       this.commonService.itemAdded=false;
    },5000);
  

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

      this.itemDeleted=true;

      setTimeout(()=>{
        this.itemDeleted=false;
      },5000)

    },Error=>{
      console.log('exception occurs');
    });
  }

  
  goToUpdate(itemId:any)
  {
    this.commonService.itemId=itemId;
    this.router.navigate(['/update']);
  }

  goToAddItem()
  {
    this.router.navigate(['/add'])
  }


}
