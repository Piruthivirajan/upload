import { Component ,OnInit} from '@angular/core';
import { Address } from '../model/address';
import { Router,RouterModule } from '@angular/router';
import { AddressService } from '../service/address.service'; 

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[AddressService,NgbTypeaheadConfig]
})
export class SearchComponent {


  public model: any;
  testvalue=[];
  private FilterList:Array<any> = [];
  formatter = (result: string) => result.toUpperCase();
  addressList:Array<Address>;
  Selected=[];
  search = (text$: Observable<string>) =>
  text$
    .debounceTime(20)
    .distinctUntilChanged()
    .map(term => term.length < 1 ? []
      : this.FilterList.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

  address:Address;

router: Router;
constructor(private _router: Router,private addressService:AddressService,config: NgbTypeaheadConfig){
  config.showHint = true;
  this.router=_router;
}
ngOnInit() {
  this.getDetails();
}
my(v:any){
debugger;
  var v;
  if(v.item==undefined) v=this.model;
  else v=v.item;
  this.Selected=[];
  if(this.model=='') this.getDetails();

   for(let i in this.addressList)
     if(this.addressList[i].name==v){
     this.Selected.push(this.addressList[i]);
     }
    


}
getDetails(){
  this.addressService.getDetails().subscribe(res =>{
 
    this.addressList=res;
    this.Selected=res;
    for(var i in res){
    this.FilterList.push(res[i].name);
    
  }

  });
}
editAddress(value:any){
alert("Record Edited");
}

}
