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
		{src:"TCC26673728x90_Thousands_bg.jpg", id:"TCC26673728x90_Thousands_bg"},
		{src:"TCC26673728x90_Thousands_dollar.jpg", id:"TCC26673728x90_Thousands_dollar"},
		{src:"TCC26673728x90_Thousands_enroll.png", id:"TCC26673728x90_Thousands_enroll"},
		{src:"TCC26673728x90_Thousands_lastpic.jpg", id:"TCC26673728x90_Thousands_lastpic"}
	]
};



// symbols:



(lib.TCC26584OpenHouse_728x90_border = function() {
	this.initialize(img.TCC26584OpenHouse_728x90_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.TCC26673728x90_Thousands_bg = function() {
	this.initialize(img.TCC26673728x90_Thousands_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.TCC26673728x90_Thousands_dollar = function() {
	this.initialize(img.TCC26673728x90_Thousands_dollar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,83);


(lib.TCC26673728x90_Thousands_enroll = function() {
	this.initialize(img.TCC26673728x90_Thousands_enroll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,90);


(lib.TCC26673728x90_Thousands_lastpic = function() {
	this.initialize(img.TCC26673728x90_Thousands_lastpic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,90);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673728x90_Thousands_enroll();
	this.instance.setTransform(-236.5,-45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-236.5,-45,476,90);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673728x90_Thousands_lastpic();
	this.instance.setTransform(-124.5,-45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.5,-45,249,90);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673728x90_Thousands_dollar();
	this.instance.setTransform(-20,-41.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-41.5,40,83);


(lib.Symbol2copy2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("AND TRAIN FOR A", "25px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 228;
	this.text.setTransform(-470.9,-37.4);

	this.text_1 = new cjs.Text("HIGH-PAYING CAREER.", "25px 'Oswald'", "#FFFFFF");
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 228;
	this.text_1.setTransform(-470.9,-3.4);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-470.9,-37.4,232,72);


(lib.Symbol2copy = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IN TUITION", "25px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 228;
	this.text.setTransform(-470.9,-3.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-470.9,-3.4,232,38);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("SAVE THOUSANDS", "25px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 228;
	this.text.setTransform(-470.9,-38.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-470.9,-38.4,232,38);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673728x90_Thousands_bg();
	this.instance.setTransform(-364,-45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-364,-45,728,90);


// stage content:
(lib._728x90_thousands = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_207 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(207).call(this.frame_207).wait(1));

	// Layer 13
	this.instance = new lib.TCC26584OpenHouse_728x90_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208));

	// Layer 16
	this.instance_1 = new lib.Symbol10();
	this.instance_1.setTransform(236.5,45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({_off:false},0).to({alpha:1},12).wait(8));

	// Layer 12
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(393,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(126).to({_off:false},0).to({alpha:1},13).wait(43).to({alpha:0},12).to({_off:true},1).wait(13));

	// Layer 11
	this.instance_3 = new lib.Symbol2copy2();
	this.instance_3.setTransform(489,48.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).to({alpha:1},11).wait(52).to({alpha:0},12).to({_off:true},1).wait(13));

	// Layer 15
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(490,45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({alpha:1},9).wait(38).to({alpha:0},12).to({_off:true},1).wait(82));

	// Layer 14
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(447,45);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61).to({_off:false},0).to({alpha:1},9).wait(43).to({alpha:0},12).to({_off:true},1).wait(82));

	// Layer 9
	this.instance_6 = new lib.Symbol3();
	this.instance_6.setTransform(275,45);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({_off:false},0).to({alpha:1},9).wait(62).to({alpha:0},12).to({_off:true},1).wait(82));

	// Layer 8
	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(318,45);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({_off:false},0).to({alpha:1},9).wait(57).to({alpha:0},12).to({_off:true},1).wait(82));

	// Layer 7
	this.instance_8 = new lib.Symbol3();
	this.instance_8.setTransform(361,45);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(52).to({_off:false},0).to({alpha:1},9).wait(52).to({alpha:0},12).to({_off:true},1).wait(82));

	// Layer 6
	this.instance_9 = new lib.Symbol3();
	this.instance_9.setTransform(404,45);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(57).to({_off:false},0).to({alpha:1},9).wait(47).to({alpha:0},12).to({_off:true},1).wait(82));

	// Layer 5
	this.instance_10 = new lib.Symbol2copy();
	this.instance_10.setTransform(489,98.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(56).to({_off:false},0).to({y:48.2,alpha:1},13).wait(44).to({alpha:0},12).to({_off:true},1).wait(82));

	// Layer 3
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(549,48.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).to({x:489,alpha:1},12).wait(95).to({alpha:0},12).to({_off:true},1).wait(82));

	// Layer 2
	this.instance_12 = new lib.Symbol3();
	this.instance_12.setTransform(232,45);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({alpha:1},12).wait(99).to({alpha:0},0).to({_off:true},1).wait(82));

	// Layer 10
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(364,45);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},12).wait(196));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;