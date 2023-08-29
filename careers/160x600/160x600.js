(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_160_bg.jpg", id:"_160_bg"},
		{src:"_160_logo.png", id:"_160_logo"},
		{src:"_160_p4.jpg", id:"_160_p4"},
		{src:"_160_p5.jpg", id:"_160_p5"},
		{src:"_160x600_border.png", id:"_160x600_border"},
		{src:"learn_more.png", id:"learn_more"}
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



(lib._160_bg = function() {
	this.initialize(img._160_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib._160_logo = function() {
	this.initialize(img._160_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,113);


(lib._160_p4 = function() {
	this.initialize(img._160_p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib._160_p5 = function() {
	this.initialize(img._160_p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,190);


(lib._160x600_border = function() {
	this.initialize(img._160x600_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.learn_more = function() {
	this.initialize(img.learn_more);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,28);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("MORE.", "400 58px 'Oswald'", "#A9B734");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 156;
	this.text.setTransform(-72,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-70.6,160,196.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("EARN", "400 36px 'Oswald'", "#A9B734");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 156;
	this.text.setTransform(-72,-26.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-26.4,160,52.9);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("LESS.", "400 70px 'Oswald'", "#034262");
	this.text.textAlign = "center";
	this.text.lineHeight = 97;
	this.text.lineWidth = 156;
	this.text.setTransform(-72,-73.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-73.6,160,107.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("PAY ", "400 36px 'Oswald'", "#034262");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 156;
	this.text.setTransform(-72,-26.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-26.4,160,52.9);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_bg();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_logo();
	this.instance.setTransform(-80,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-56.5,160,113);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_p5();
	this.instance.setTransform(-80,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-95,160,190);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_p4();
	this.instance.setTransform(-80,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-95,160,190);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.learn_more();
	this.instance.setTransform(-54.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-14,109,28);


(lib.Symbol5_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("or Less", "400 26px 'Oswald'", "#034262");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 156;
	this.text.setTransform(-72,29.7);

	this.text_1 = new cjs.Text("in 2 Years", "400 26px 'Oswald'", "#034262");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 156;
	this.text_1.setTransform(-72,-11.3);

	this.text_2 = new cjs.Text("Great Jobs", "400 26px 'Oswald'", "#034262");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 37;
	this.text_2.lineWidth = 156;
	this.text_2.setTransform(-72,-52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-52.3,160,145);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_192 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(192).call(this.frame_192).wait(1));

	// Layer 11
	this.instance = new lib._160x600_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(193));

	// Layer 10
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(80,95);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(176).to({_off:false},0).to({alpha:1},10).wait(7));

	// Layer 5
	this.instance_2 = new lib.Symbol5_1();
	this.instance_2.setTransform(150,342.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(176).to({_off:false},0).to({y:292.8,alpha:1},10).wait(7));

	// Layer 13
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(150,388.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({_off:false},0).to({y:338.1,alpha:1},10).wait(51).to({alpha:0},9).wait(19));

	// Layer 14
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(150,307.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(97).to({_off:false},0).to({y:257.9,alpha:1},10).wait(58).to({alpha:0},9).wait(19));

	// Layer 15
	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(150,388.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({y:338.1,alpha:1},10).wait(49).to({alpha:0},9).wait(96));

	// Layer 16
	this.instance_6 = new lib.Symbol8();
	this.instance_6.setTransform(150,307.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({_off:false},0).to({y:257.9,alpha:1},10).wait(56).to({alpha:0},9).wait(96));

	// Layer 4
	this.instance_7 = new lib.Symbol4();
	this.instance_7.setTransform(80,488);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({alpha:1},10).wait(169));

	// Layer 3
	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(80,623);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},0).to({y:573},10).wait(145));

	// Layer 2
	this.instance_9 = new lib.Symbol2();
	this.instance_9.setTransform(80,95);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({alpha:1},10).wait(175));

	// Layer 1
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(80,300);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},10).wait(183));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;