import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

 projects:Array<object> = [
      {id:1, type:'frontend project' , title:'Task List', descr:'It is simple task list which allow you to add, delete and update tasks that an individual needs to complete or accomplish.', llink:'https://www.linkedin.com/posts/manishkumar-rai-b13278265_it-is-simple-task-list-which-allow-you-to-activity-7050791654236053504-brMf?utm_source=share&utm_medium=member_desktop',glink:'https://github.com/manish7041/todolist',nlink:'https://ubiquitous-cendol-be0dcf.netlify.app', pimg:'/assets/images/task.png'},

      {id:2, type:'client&server' , title:'CRUD Operation', descr:'A simple create, delete,update and read operation performed in this particular project.', llink:'https://www.linkedin.com/feed/update/urn:li:activity:7051789551702335488/',glink:'https://github.com/manish7041/operation-crud',nlink:'https://relaxed-alfajores-3ac8cc.netlify.app', pimg:'/assets/images/crud.png'},

      {id:3, type:'auth' , title:'login / register/ redirect', descr:'A project focused on login an register page and also fully responsive in nature.', llink:'https://www.linkedin.com/feed/update/urn:li:activity:7051832132771446784/',glink:'https://github.com/manish7041/login-register',nlink:'https://stalwart-bonbon-3d74d5.netlify.app', pimg:'/assets/images/log.png'},

      {id:4, type:'calculation' , title:'Calculator', descr:'A project build using Html5,Css3 and Javascript which allow us to perform simple calculation.', llink:'https://www.linkedin.com/feed/update/urn:li:activity:7050796898055532544/',glink:'https://github.com/manish7041/simple',nlink:'https://gleeful-daifuku-ec49d9.netlify.app', pimg:'/assets/images/cal.png'},

      {id:5, type:'ecom' , title:'Book Shelf', descr:'my first project when I started learning web-development and it build using Html5 and Css3.', llink:'https://www.linkedin.com/feed/update/urn:li:activity:7055158444877619200/',glink:'https://github.com/manish7041/project-1',nlink:'https://hilarious-cocada-2603c7.netlify.app', pimg:'/assets/images/book.png'},
      
  ]
}
