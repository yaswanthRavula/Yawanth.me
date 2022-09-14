import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  frontEndTechnologies=[
    {name:"HTML",description:"HTML is the basic building block of any website. It defines the skeleton structure of our website. HTML is the base pillar in the construction of a website.",imageURL:"../../../assets/html-5.png"},
    {name:"CSS",description:"CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. Coloring, font styles, animations come under this CSS.", imageURL:"../../../assets/css-3.png"},
    {name:"Angular", description:"Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.", imageURL:"../../../assets/angular.png"},
    {name:"Typescript", description:"Typescript is a language which is used in Angular framework. This typescript is helpful in handling the actions perfomed by all HTML elements such as buttons, forms and also http services.", imageURL:"../../../assets/typescript.png"},
    {name:"Bootstrap", description:"Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.",imageURL:"../../../assets/bootstrap.png"}
  ]

  backEndTechnologies=[
    {name:"Node.JS", description:"Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.",imageURL:"../../../assets/nodejs.png" },
    {name:"Javascript", description:"JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.",imageURL:"../../../assets/js.png"},
    {name:"Express.js", description:"Express provides the server connectivity feature with which we can create backend servers to work on API Url Endpoints. Express also gives us http functionalities such as post, get, fetch, update etc.",imageURL:"../../../assets/expressjs.jpeg"},
    {name:"MySQL", description:"MySQL is an open-source relational database management system. As with other relational databases, MySQL stores data in tables made up of rows and columns. Web developers can define, manipulate, control, and query user-data using Structured Query Language, more commonly known as SQL",imageURL:"../../../assets/mysql.png"},
    {name:"MongoDB", description:"MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs.",imageURL:"../../../assets/mongodb.png"}
  ]

}
