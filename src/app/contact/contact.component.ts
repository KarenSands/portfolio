import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _translationLoaderService: TranslationLoaderService, private http: HttpClient, private formBuilder: FormBuilder) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit() {
  }

  send(){
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa");
  }

  public name ="";
  public email ="";
  public object ="";
  public message ="";
  public confirmar = false;

  reloadPage(){
    window.location.reload()
  }

  confirm(){
      !this.confirmar
  }

  sendEmail(name: any, email: any, object: any, message: any) {
   // sendEmail() {
    /*let name ="karen";
    let email = "akjhak@asdasd.com";
    let object ="ei";
    let message ="aaaaaaaaaaaaaaaaaaaaaaaaaa";*/
    if (email!="") {

      console.log("data" + name + " , "+ email + " , "+ object + " , "+ message);
      const headers = new HttpHeaders({
          'Content-Type' : 'application/json'
      });

    return this.http.post("https://formspree.io/f/xgegkjzv", 
          {
              name: name,
              email: email,
              object: object,
              message: message
          },
          {
              'headers' : headers
          }
      ).subscribe(res => console.log(res));
    }else{
        this.reloadPage();
      return !this.confirmar;
    }
  }
}
