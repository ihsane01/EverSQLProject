import { QueryService } from './../query.service';



import { Component, OnInit, ViewChild,ElementRef, Input,HostListener,NgZone ,Renderer2, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-dialog-query',
  templateUrl: './dialog-query.component.html',
  styles: ['.demo {color: #8965e0};.demo1 {width:90%;    display: inline-block;}'],
  styleUrls: ['./dialog-query.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogQueryComponent implements OnInit {
  private someHtmlCode = '';
  constructor(private queryService:QueryService) {

  }

  @ViewChild('sqlQuery', { static: false }) sqlQuery!: ElementRef;
  sqlKeywords = ['SELECT','INSERT', 'FROM', 'WHERE','LEFT JOIN',' AS ',' ON ','GROUP BY','AND','LIKE','count'];
  @Input() textareaValue: string | undefined;
foo:any
  highlightSQLKeywords() {
    const textarea = this.sqlQuery.nativeElement;
    let text ='<div class="demo1">" '+ textarea.value+' "</div>';
    
    this.sqlKeywords.forEach(keyword => {
      text = text.replace(new RegExp(keyword,'gi'), `<strong class="demo">${keyword}</strong>`);
      
    });
    // textarea.innerHTML=text
    this.htmlStr=text
    console.log(text)

  }
  htmlStr: string = '<strong>" QUERY "</strong>';
  ngOnInit(): void {
    
  }
  getInnerHTML(val:any){
    return val.replace(/(<([^>]+)>)/ig,'');
  }

  addQuery(){
    this.queryService.addQuery(this.sqlQuery.nativeElement.value)
    console.log(this.sqlQuery.nativeElement.value)
  }

}

