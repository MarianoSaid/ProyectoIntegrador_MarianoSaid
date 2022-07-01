import { Component, OnInit } from '@angular/core';
import { hys } from 'src/app/model/HyS.model';
import { HySService } from 'src/app/service/hy-s.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  hysList!:hys[];

  constructor(public hysService: HySService) { }
  ngOnInit(): void {
    this.getdatosHyS();
  }

  private getdatosHyS(){
    this.hysService.getHyS().subscribe((data)=>{this.hysList=data;
    console.log(data)
    }
    );
  }
}
