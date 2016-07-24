import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Parties }   from '../collections/parties';
import { Mongo }     from 'meteor/mongo';

import template from './app.html';

@Component({
  selector: 'app',
  template
})
class Socially {
  parties: Mongo.Cursor<Object>;

  constructor() {
    this.parties = Parties.find();
  }
}

bootstrap(Socially);
