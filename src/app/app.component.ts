import { Component ,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shree Boutique';
  
  arrow_variable= false;
  @HostListener("document:scroll")
  scrollfuntion(){
	if(document.body.scrollTop>0 || document.documentElement.scrollTop>0)
   {
	this.arrow_variable=true;
	}
	else
	{
	this.arrow_variable=false;
	}
}
}

