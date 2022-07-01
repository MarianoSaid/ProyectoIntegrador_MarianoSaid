import { Component, OnInit } from '@angular/core';
import { footer } from 'src/app/model/footer.model';
import { FooterService } from 'src/app/service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer: footer = new footer("","","","");

  constructor(public footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.getFooter().subscribe(data => (this.footer = data));
  }

}
