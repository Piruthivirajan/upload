import { Component ,OnInit} from '@angular/core';
import { Address } from '../model/address';
import { Router,RouterModule } from '@angular/router';
import { AddressService } from '../service/address.service'; 
@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers:[AddressService]
})
export class ReportComponent {
address:Address;
addressList:Address;
router: Router;
constructor(private _router: Router,private addressService:AddressService){
  this.router=_router;
}
ngOnInit() {
  this.getDetails();
}
getDetails(){
  this.addressService.getDetails().subscribe(res =>{
    debugger;
    this.addressList=res;
  });
}
editAddress(value:any){
alert("Record Edited");
}
deleteAddress(id){
  this.addressService.removeAddress(id).subscribe(() =>{  
    debugger;    
    this.getDetails();
    this.addressList=new Address();
     alert("Record Deleted Successfully");
  });
}
}
