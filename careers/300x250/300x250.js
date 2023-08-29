(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_250_bg.jpg", id:"_250_bg"},
		{src:"_250_logo.png", id:"_250_logo"},
		{src:"_300x250_border.png", id:"_300x250_border"},
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



(lib._250_bg = function() {
	this.initialize(img._250_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._250_logo = function() {
	this.initialize(img._250_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,108);


(lib._300x250_border = function() {
	this.initialize(img._300x250_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.learn_more = function() {
	this.initialize(img.learn_more);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,28);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("MORE.", "400 76px 'Oswald'", "#A9B734");
	this.text.textAlign = "center";
	this.text.lineHeight = 105;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,-53.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-53.6,300,107.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("EARN", "400 36px 'Oswald'", "#A9B734");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,-26.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-26.4,300,52.9);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("LESS.", "400 76px 'Oswald'", "#034262");
	this.text.textAlign = "center";
	this.text.lineHeight = 105;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,-59.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-59.6,300,107.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("PAY ", "400 36px 'Oswald'", "#034262");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,-26.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-26.4,300,52.9);


(lib.Symbol5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("2 Years or Less", "400 30px 'Oswald'", "#034262");
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,2.7);

	this.text_1 = new cjs.Text("Great Jobs in", "400 30px 'Oswald'", "#034262");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 43;
	this.text_1.lineWidth = 296;
	this.text_1.setTransform(-2,-38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-38.3,300,85.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_bg();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_logo();
	this.instance.setTransform(-75,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-54,150,108);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.learn_more();
	this.instance.setTransform(-54.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-14,109,28);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_181 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(181).call(this.frame_181).wait(1));

	// Layer 10
	this.instance = new lib._300x250_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182));

	// Layer 7
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(150,90.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(168).to({_off:false},0).to({y:60.8,alpha:1},10).wait(4));

	// Layer 12
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(150,126.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({y:96.1,alpha:1},10).wait(48).to({alpha:0},9).wait(16));

	// Layer 13
	this.instance_3 = new lib.Symbol6();
	this.instance_3.setTransform(150,62.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({_off:false},0).to({y:32.9,alpha:1},10).wait(55).to({alpha:0},9).wait(16));

	// Layer 14
	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(150,120.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({y:90.1,alpha:1},10).wait(49).to({alpha:0},9).wait(91));

	// Layer 15
	this.instance_5 = new lib.Symbol8();
	this.instance_5.setTransform(150,62.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({y:32.9,alpha:1},10).wait(57).to({alpha:0},9).wait(91));

	// Layer 3
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(235.5,276);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({_off:false},0).to({y:216},10).wait(141));

	// Layer 2
	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(85,186);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({alpha:1},10).wait(165));

	// Layer 1
	this.instance_8 = new lib.Symbol3();
	this.instance_8.setTransform(150,125);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},10).wait(172));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;