var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
// var tmpl = require('./templates');
// var MemeCollection = require('./collection');
// var MemeCollectionView = require('./collectionView');
// var HeaderView = require('./headerView');
// var FooterView = require('./footerView');
// var FormView = require('./formView');
// var MemeModel = require('./model');
// var MemeView = require('./modelView');
var layoutView = require('./layoutView');
var Router = require('./router');


$(function () {

   new layoutView();
   new Router();
   Backbone.history.start();

   

});
