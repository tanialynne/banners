(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 40,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_300_video_logo.png", id:"_300_video_logo"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._300_video_logo = function() {
	this.initialize(img._300_video_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,38);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("GO ANYWHERE.", "400 16px 'Oswald'", "#034262");
	this.text.lineHeight = 24;
	this.text.lineWidth = 111;
	this.text.setTransform(-81,-6.1);

	this.text_1 = new cjs.Text("PAY LESS.", "400 16px 'Oswald'", "#A9B734");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 111;
	this.text_1.setTransform(-146.5,-6.1);

	this.instance = new lib._300_video_logo();
	this.instance.setTransform(17,-20);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bDHIAAmNMAu3AAAIAAGNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-20,300,45);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(150,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20},11).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-25,300,45);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;