/*
 * Example code to call Rosette API to get part-of-speech tags for words a piece of text.
 */

"use strict";

var Api = require("rosette-api").Api;
var ArgumentParser = require("argparse").ArgumentParser;
var DocumentParameters = require("rosette-api").DocumentParameters;
var rosetteConstants = require("rosette-api").rosetteConstants;

var parser = new ArgumentParser({
  addHelp: true,
  description: "Get part-of-speech tags for words in text"
});
parser.addArgument(["--key"], {help: "Rosette API key", required: true});
var args = parser.parseArgs();

var docParams = new DocumentParameters();
var content = "The fact is that the geese just went back to get a rest and I'm not banking on their return soon";
docParams.setItem("content", content);

var api = new Api(args.key);
api.morphology(docParams, rosetteConstants.morpholoyOutput.PARTS_OF_SPEECH, function(err, res) {
  if (err) {
    throw err;
  }
  else {
    console.log(res);
  }
});
