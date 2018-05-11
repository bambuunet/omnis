/*
center ver0.1.1
*/
var Center = function(hash){
  this.hash = hash;
  this.mediaWidthMax = 9999;
  this.mediaWidthMin = 0;
  this.mediaHeightMax = 9999;
  this.mediaHeightMin = 0;
  this.escapeNode = [];
  this.wrapNode = 'section';
  this.innerNode = 'div';
  this.innerHeight = '300px';
  this.innerWidth = '300px';
  
  this.init = function() {
    var timeStarted = new Date();



    console.info('Center has finished. Styles were generated in ' + String(new Date() - timeStarted) + ' ms');
  }
}

