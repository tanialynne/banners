(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_728_learn.png", id:"_728_learn"},
		{src:"_728_logo.png", id:"_728_logo"},
		{src:"_728x90_bg.jpg", id:"_728x90_bg"},
		{src:"_728x90_border.png", id:"_728x90_border"}
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



(lib._728_learn = function() {
	this.initialize(img._728_learn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,24);


(lib._728_logo = function() {
	this.initialize(img._728_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,90);


(lib._728x90_bg = function() {
	this.initialize(img._728x90_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib._728x90_border = function() {
	this.initialize(img._728x90_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("PAY LESS", "400 36px 'Oswald'", "#A9B734");
	this.text.lineHeight = 51;
	this.text.lineWidth = 296;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,66.5);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("GO ANYWHERE.", "400 50px 'Oswald'", "#034262");
	this.text.lineHeight = 70;
	this.text.lineWidth = 377;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,381,71.9);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("fraction of the cost.", "300 25px 'Oswald'", "#034262");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 396;
	this.text.setTransform(-2,-19.3);

	this.text_1 = new cjs.Text("Earn half of your bachelor’s at a", "300 25px 'Oswald'", "#034262");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 396;
	this.text_1.setTransform(-2,-44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-44.3,400,65.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728_learn();
	this.instance.setTransform(-57.5,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-12,115,24);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728x90_border();
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-45,728,90);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728_logo();
	this.instance.setTransform(-139.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.5,-45,279,90);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728x90_bg();
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-45,728,90);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_128 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(128).call(this.frame_128).wait(1));

	// Layer 8
	this.instance = new lib.Symbol3();
	this.instance.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129));

	// Layer 7
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(231,123);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(112).to({_off:false},0).to({y:73},10).wait(7));

	// Layer 5
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(231,93.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({y:43.7,alpha:1},10).wait(15));

	// Layer 10
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(50,76.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({y:26.1,alpha:1},10).wait(50).to({alpha:0},9).wait(26));

	// Layer 13
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(50,46.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({y:-3.4,alpha:1},10).wait(69).to({alpha:0},9).wait(26));

	// Layer 2
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(588.5,45);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({alpha:1},10).wait(112));

	// Layer 1
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(364,45);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},10).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;