import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ReclamServiceService } from '../_services/reclam-service.service';

@Component({
  selector: 'app-reponse-reclam',
  templateUrl: './reponse-reclam.component.html',
  styleUrls: ['./reponse-reclam.component.css']
})
export class ReponseReclamComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor(private route: ActivatedRoute,private router: Router,
    private reclamService:ReclamServiceService) { }
  ngOnInit(): void {
    
  }

}
