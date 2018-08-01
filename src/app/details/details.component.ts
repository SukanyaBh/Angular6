import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detail: Object;
  id:Object;
  
  constructor(private route: ActivatedRoute, private data: DetailsService) { 
     this.route.params.subscribe( params => this.id = params.id );
  }

  ngOnInit() {
    this.data.getUser(this.detail).subscribe(
      data => this.detail = data 
    );
  }
}