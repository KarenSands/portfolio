import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import { projectsEn} from '../api/projectsEn';
import { projectsFr} from '../api/projectsFr';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any[]=projectsEn;
  venobox: any;
  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, french);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.projects=projectsEn;
      }
      else{
        this.projects=projectsFr;
      }
    });
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    console.log("after view init");
    this.onMouse("plenum-link", "plenum-img");
    this.onMouse("viralmind-link", "viralmind-img");
    this.onMouse("integral-link", "integral-img");
    this.onMouse("akana-link", "akana-img");
    this.onMouse("ats-link", "ats-img");
    this.onMouse("cafe-link", "cafe-img");
    this.onMouse("OrientalHouse-link", "OrientalHouse-img");
    this.onMouse("MiniHouse-link", "MiniHouse-img");
    this.onMouse("Labauma-link", "Labauma-img");
    this.onMouse("pasarela-link", "pasarela-img");
    this.onMouse("clothes-link", "clothes-img");
    this.onMouse("bar-link", "bar-img");
    this.onMouse("artnobel3-link", "artnobel3-img");
    this.onMouse("artnobel1-link", "artnobel1-img");
    this.venobox = $('.venobox');
    this.venobox.venobox();
  }

  detailOnClick(project: any) {
    this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
  }

  onMouse(idLink: String, idImage: String) {
    $('#' + idLink).on("mouseenter", function () {
      console.log('on mouseenter');
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );

    $('#' + idImage).on("mouseenter", function () {
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );
  }
}
