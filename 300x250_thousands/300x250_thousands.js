(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"TCC26584OpenHouse_300x250_border.png", id:"TCC26584OpenHouse_300x250_border"},
		{src:"TCC26673300x250_Headlines2_bg.jpg", id:"TCC26673300x250_Headlines2_bg"},
		{src:"TCC26673300x250_Headlines2_enroll.png", id:"TCC26673300x250_Headlines2_enroll"},
		{src:"TCC26673300x250_Headlines2_logo.png", id:"TCC26673300x250_Headlines2_logo"},
		{src:"TCC26673300x250_Headlines2_start.png", id:"TCC26673300x250_Headlines2_start"},
		{src:"TCC26673300x250_Thousands_dollar.jpg", id:"TCC26673300x250_Thousands_dollar"},
		{src:"TCC26673300x250_Thousands_p1.jpg", id:"TCC26673300x250_Thousands_p1"},
		{src:"TCC26673300x250_Thousands_p2.jpg", id:"TCC26673300x250_Thousands_p2"}
	]
};



// symbols:



(lib.TCC26584OpenHouse_300x250_border = function() {
	this.initialize(img.TCC26584OpenHouse_300x250_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.TCC26673300x250_Headlines2_bg = function() {
	this.initialize(img.TCC26673300x250_Headlines2_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.TCC26673300x250_Headlines2_enroll = function() {
	this.initialize(img.TCC26673300x250_Headlines2_enroll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,25);


(lib.TCC26673300x250_Headlines2_logo = function() {
	this.initialize(img.TCC26673300x250_Headlines2_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,156);


(lib.TCC26673300x250_Headlines2_start = function() {
	this.initialize(img.TCC26673300x250_Headlines2_start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,84);


(lib.TCC26673300x250_Thousands_dollar = function() {
	this.initialize(img.TCC26673300x250_Thousands_dollar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,162);


(lib.TCC26673300x250_Thousands_p1 = function() {
	this.initialize(img.TCC26673300x250_Thousands_p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,173);


(lib.TCC26673300x250_Thousands_p2 = function() {
	this.initialize(img.TCC26673300x250_Thousands_p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,173);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673300x250_Headlines2_logo();
	this.instance.setTransform(-118.5,-78);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.5,-78,237,156);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673300x250_Headlines2_enroll();
	this.instance.setTransform(-91,-12.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91,-12.5,182,25);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673300x250_Headlines2_start();
	this.instance.setTransform(-150,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-42,300,84);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4E1ED").s().p("A3bRLMAAAgiVMAu3AAAMAAAAiVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-110,300,220);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673300x250_Thousands_p2();
	this.instance.setTransform(-150,-86.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-86.5,300,173);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673300x250_Thousands_p1();
	this.instance.setTransform(-150,-86.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-86.5,300,173);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673300x250_Thousands_dollar();
	this.instance.setTransform(-37.5,-46);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-46,75,162);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673300x250_Headlines2_bg();
	this.instance.setTransform(-150,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Symbol1copy2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("A HIGH-PAYING CAREER.", "22px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 294;
	this.text.setTransform(-3,11.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,11.2,298,33.9);


(lib.Symbol1copy = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("AND TRAIN FOR", "22px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 294;
	this.text.setTransform(-3,11.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,11.2,298,33.9);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("SAVE THOUSANDS IN TUITION", "22px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 294;
	this.text.setTransform(-3,11.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,11.2,298,33.9);


// stage content:
(lib._300x250_thousands = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_327 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(327).call(this.frame_327).wait(1));

	// Layer 12
	this.instance = new lib.TCC26584OpenHouse_300x250_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(328));

	// Layer 16
	this.instance_1 = new lib.Symbol15();
	this.instance_1.setTransform(150,90);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(307).to({_off:false},0).to({alpha:1},13).wait(8));

	// Layer 15
	this.instance_2 = new lib.Symbol14();
	this.instance_2.setTransform(150,212);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(237).to({_off:false},0).to({y:192,alpha:1},13).wait(78));

	// Layer 7
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(150,95);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(231).to({_off:false},0).to({y:125,alpha:1},13).wait(51).to({alpha:0},12).to({_off:true},1).wait(20));

	// Layer 10
	this.instance_4 = new lib.Symbol12();
	this.instance_4.setTransform(150,110);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(224).to({_off:false},0).to({alpha:1},13).wait(91));

	// Layer 9
	this.instance_5 = new lib.Symbol11();
	this.instance_5.setTransform(150,86.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(147).to({_off:false},0).to({alpha:1},12).wait(59).to({alpha:0},12).to({_off:true},1).wait(97));

	// Layer 8
	this.instance_6 = new lib.Symbol1copy2();
	this.instance_6.setTransform(150,170.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(154).to({_off:false},0).to({alpha:1},12).wait(52).to({alpha:0},12).to({_off:true},1).wait(97));

	// Layer 6
	this.instance_7 = new lib.Symbol10();
	this.instance_7.setTransform(150,86.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(91).to({_off:false},0).to({alpha:1},13).wait(43).to({alpha:0},12).to({_off:true},1).wait(168));

	// Layer 5
	this.instance_8 = new lib.Symbol1copy();
	this.instance_8.setTransform(150,170.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(84).to({_off:false},0).to({alpha:1},13).wait(50).to({alpha:0},12).to({_off:true},1).wait(168));

	// Layer 3
	this.instance_9 = new lib.Symbol3();
	this.instance_9.setTransform(150,51.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({alpha:1},13).wait(59).to({alpha:0},12).to({_off:true},1).wait(237));

	// Layer 11
	this.instance_10 = new lib.Symbol3();
	this.instance_10.setTransform(112.1,96.8,0.95,0.95,-15,0,0,0.1,44.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(28).to({_off:false},0).to({alpha:1},13).wait(37).to({alpha:0},12).to({_off:true},1).wait(237));

	// Layer 1
	this.instance_11 = new lib.Symbol3();
	this.instance_11.setTransform(185.1,97.6,0.95,0.95,17,0,0,0.1,45);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(34).to({_off:false},0).to({alpha:1},13).wait(31).to({alpha:0},12).to({_off:true},1).wait(237));

	// Layer 13
	this.instance_12 = new lib.Symbol3();
	this.instance_12.setTransform(220,108.4,0.9,0.9,35.5,0,0,0.1,45);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(41).to({_off:false},0).to({alpha:1},13).wait(24).to({alpha:0},12).to({_off:true},1).wait(237));

	// Layer 14
	this.instance_13 = new lib.Symbol3();
	this.instance_13.setTransform(76.1,107.8,0.9,0.9,-30.9,0,0,0.1,44.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).to({alpha:1},13).wait(18).to({alpha:0},12).to({_off:true},1).wait(237));

	// Layer 4
	this.instance_14 = new lib.Symbol1();
	this.instance_14.setTransform(150,195.7);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},0).to({y:170.7,alpha:1},13).wait(52).to({alpha:0},12).to({_off:true},1).wait(237));

	// Layer 2
	this.instance_15 = new lib.Symbol2();
	this.instance_15.setTransform(150,125);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},13).wait(315));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;