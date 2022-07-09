import { Component, OnInit , HostListener, Input} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	@Input()
    deviceXs: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  header_variable= false;
  @HostListener("document:scroll")
  scrollfuntion(){
	if(document.body.scrollTop>0 || document.documentElement.scrollTop>0)
   {
	this.header_variable=true;
	}
	else
	{
	this.header_variable=false;
	}
}

menuVriable:boolean= false;
menu_icon_variable:boolean=false;
openMenu(){
	this.menuVriable =! this.menuVriable;
	this.menu_icon_variable =!this.menu_icon_variable
}

  
  

}

