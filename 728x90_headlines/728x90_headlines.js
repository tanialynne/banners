(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"TCC26584OpenHouse_728x90_border.png", id:"TCC26584OpenHouse_728x90_border"},
		{src:"TCC26673728x90_Headlines_p1.jpg", id:"TCC26673728x90_Headlines_p1"},
		{src:"TCC26673728x90_Thousands_bg.jpg", id:"TCC26673728x90_Thousands_bg"},
		{src:"TCC26673728x90_Thousands_enroll.png", id:"TCC26673728x90_Thousands_enroll"}
	]
};



// symbols:



(lib.TCC26584OpenHouse_728x90_border = function() {
	this.initialize(img.TCC26584OpenHouse_728x90_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.TCC26673728x90_Headlines_p1 = function() {
	this.initialize(img.TCC26673728x90_Headlines_p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,90);


(lib.TCC26673728x90_Thousands_bg = function() {
	this.initialize(img.TCC26673728x90_Thousands_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.TCC26673728x90_Thousands_enroll = function() {
	this.initialize(img.TCC26673728x90_Thousands_enroll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,90);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673728x90_Thousands_enroll();
	this.instance.setTransform(-236.5,-45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-236.5,-45,476,90);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673728x90_Headlines_p1();
	this.instance.setTransform(7.5,-45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.5,-45,249,90);


(lib.Symbol2copy2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("TWO YEARS", "25px 'Oswald'", "#89D3E7");
	this.text.lineHeight = 27;
	this.text.lineWidth = 228;
	this.text.setTransform(-443.9,-37.4);

	this.text_1 = new cjs.Text("IN", "25px 'Oswald'", "#FFFFFF");
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 228;
	this.text_1.setTransform(-470.9,-37.4);

	this.text_2 = new cjs.Text("OR LESS.", "25px 'Oswald'", "#FFFFFF");
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 228;
	this.text_2.setTransform(-470.9,-3.4);

	this.addChild(this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-470.9,-37.4,259,72);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("HIGH PAYING CAREER", "25px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 228;
	this.text.setTransform(-470.9,-4.4);

	this.text_1 = new cjs.Text("TRAIN FOR A ", "25px 'Oswald'", "#FFFFFF");
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 228;
	this.text_1.setTransform(-470.9,-38.4);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-470.9,-38.4,232,72);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673728x90_Thousands_bg();
	this.instance.setTransform(-364,-45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-364,-45,728,90);


// stage content:
(lib._728x90_headlines = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_169 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(169).call(this.frame_169).wait(1));

	// Layer 13
	this.instance = new lib.TCC26584OpenHouse_728x90_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170));

	// Layer 16
	this.instance_1 = new lib.Symbol10();
	this.instance_1.setTransform(236.5,45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({_off:false},0).to({alpha:1},12).wait(8));

	// Layer 11
	this.instance_2 = new lib.Symbol2copy2();
	this.instance_2.setTransform(489,48.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81).to({_off:false},0).to({alpha:1},11).wait(52).to({alpha:0},12).to({_off:true},1).wait(13));

	// Layer 3
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(549,48.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:489,alpha:1},12).wait(57).to({alpha:0},12).to({_off:true},1).wait(82));

	// Layer 2
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(260,45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:1},12).wait(118).to({alpha:0},12).to({_off:true},1).wait(13));

	// Layer 10
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(364,45);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},12).wait(158));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;