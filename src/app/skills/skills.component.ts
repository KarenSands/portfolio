import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Html, SCSS",percent:90,remark:'a90'}, {name:"PHP",percent:70,remark:'a70'},{name:"NodeJS",percent:75,remark:'a75'},{name:"Android",percent:65,remark:'a65'},{name:"Python, C++",percent:70,remark:'a70'}, {name:"JavaScript, BootStrap, Angular", percent:75,remark:'a75'}],
    tools:[{name:"Unreal Engine",percent:90,remark:'a90'},{name:"Adobe Photoshop",percent:95,remark:'a95'},{name:"Git",percent:90,remark:'a90'},{name:"Office",percent:90,remark:'a90'},{name:"Windows",percent:70,remark:'a70'},{name:"MySql",percent:60,remark:'a60'},{name:"Blender",percent:65,remark:'a65'},{name:"Wordpress",percent:95,remark:'a85'},{name:"3dsMax",percent:45,remark:'a45'},{name:"SketchUp",percent:70,remark:'a70'}],
    methodologies:[{name:"Scrum",percent:85,remark:'a85'},{name:"Uml",percent:70,remark:'a70'},{name:"Disign Thinking",percent:70,remark: 'a70'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
  
  
