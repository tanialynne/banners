(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_600_bg.jpg", id:"_600_bg"},
		{src:"_600_border.png", id:"_600_border"},
		{src:"_600_logo.png", id:"_600_logo"},
		{src:"_600_p2.jpg", id:"_600_p2"},
		{src:"_600_p3.jpg", id:"_600_p3"},
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



(lib._600_bg = function() {
	this.initialize(img._600_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib._600_border = function() {
	this.initialize(img._600_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib._600_logo = function() {
	this.initialize(img._600_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,143);


(lib._600_p2 = function() {
	this.initialize(img._600_p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,190);


(lib._600_p3 = function() {
	this.initialize(img._600_p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,190);


(lib.learn_more = function() {
	this.initialize(img.learn_more);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,28);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._600_p2();
	this.instance.setTransform(-150,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-95,300,190);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("LESS.", "400 76px 'Oswald'", "#A9B734");
	this.text.textAlign = "center";
	this.text.lineHeight = 105;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,-75.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-75.6,300,107.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("PAY ", "400 36px 'Oswald'", "#A9B734");
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
	this.text = new cjs.Text("ANYWHERE.", "400 56px 'Oswald'", "#034262");
	this.text.textAlign = "center";
	this.text.lineHeight = 78;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,-69.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-69.6,300,107.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("GO ", "400 36px 'Oswald'", "#034262");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,-26.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-26.4,300,52.9);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("4-year schools.", "300 27px 'Oswald'", "#034262");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,43.7);

	this.text_1 = new cjs.Text("to Virginia’s best", "300 27px 'Oswald'", "#034262");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 296;
	this.text_1.setTransform(-2,-7.3);

	this.text_2 = new cjs.Text("Guaranteed transfer ", "300 27px 'Oswald'", "#034262");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 39;
	this.text_2.lineWidth = 296;
	this.text_2.setTransform(-2,-58.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-58.3,300,142.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._600_p3();
	this.instance.setTransform(-150,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-95,300,190);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.learn_more();
	this.instance.setTransform(-54.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-14,109,28);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._600_bg();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._600_logo();
	this.instance.setTransform(-95.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-71.5,191,143);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_201 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(201).call(this.frame_201).wait(1));

	// Layer 7
	this.instance = new lib._600_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(202));

	// Layer 5
	this.instance_1 = new lib.Symbol10();
	this.instance_1.setTransform(150,95);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(182).to({_off:false},0).to({alpha:1},10).wait(10));

	// Layer 4
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(150,95);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:1},10).wait(185));

	// Layer 6
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(150,342.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182).to({_off:false},0).to({y:292.8,alpha:1},10).wait(10));

	// Layer 12
	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(150,388.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110).to({_off:false},0).to({y:338.1,alpha:1},10).wait(51).to({alpha:0},10).wait(21));

	// Layer 11
	this.instance_5 = new lib.Symbol6();
	this.instance_5.setTransform(150,307.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(103).to({_off:false},0).to({y:257.9,alpha:1},10).wait(58).to({alpha:0},10).wait(21));

	// Layer 9
	this.instance_6 = new lib.Symbol9();
	this.instance_6.setTransform(150,388.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({y:338.1,alpha:1},10).wait(54).to({alpha:0},9).wait(100));

	// Layer 10
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(150,307.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({y:257.9,alpha:1},10).wait(62).to({alpha:0},9).wait(100));

	// Layer 3
	this.instance_8 = new lib.Symbol3();
	this.instance_8.setTransform(150,625);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},0).to({y:565},10).wait(154));

	// Layer 2
	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(150,475);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).to({alpha:1},10).wait(179));

	// Layer 1
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(150,300);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},10).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;