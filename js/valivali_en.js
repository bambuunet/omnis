var validation_en = function(form){
  'use strict'

  validation.call(this);
  this.form = form;
  this.methods.required.msg = 'Value is required.';
  this.methods.required.msgOne = 'Please select one.';
  this.methods.required.msgEither = 'Please select either.';
  this.methods.required.msgOneOrMore = 'Please select at least one.';
  this.methods.required.msgFile = 'No file chosen. Please try again.';
  this.methods.number.msg = 'Invalid character.';
  this.methods.ascii.msg = 'Invalid character.';
  this.methods.emailChar.msg = 'Invalid character.';
  this.methods.email.msg = 'Invalid email format.';
  this.methods.numberHyphen.msg = 'Invalid character.';
  this.methods.numberAlphabetHyphen.msg = 'Invalid character.';
  this.methods.max.msg = 'Over (n) characters. Please try again.';
  this.methods.min.msg = 'Must be at least (n) characters. Please try again.';
  this.methods.equal.msg = 'The Email you entered do not match.';
  this.methods.fileMaxMB.msg = 'Maximum limit of (n)MB. Please try again.';
  this.methods.fileExtension.msg = 'Only PDF, JPG, GIF and PNG types are accepted. Please try again.';
};

