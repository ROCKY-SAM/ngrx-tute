import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../app.state';
import * as TutorialActions from '../actions/tutorial.action';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store:Store<AppState>) { }


addTutorial(name: any,url: any){
  this.store.dispatch(new TutorialActions.AddTutorial({name:name,url:url}))
}

  ngOnInit(): void {
  }

}
