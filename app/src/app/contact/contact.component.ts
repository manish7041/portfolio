import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

 constructor( private router: Router,
  private route: ActivatedRoute){

 }

value ={
  name:"",
  email:"",
  message:""
  
}

  send(value: any) {
    const subject = `New message from ${value.name}`;
    const body = `Name: ${value.name}\nEmail: ${value.email}\n\n${value.message}`;
    const link = `mailto:manish83rai@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = link;
  }
}
