import {loadParties} from './load-parties';
import {Meteor} from 'meteor/meteor';

Meteor.startup(loadParties);
