import { Component ,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shree Boutique';
  
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
}

