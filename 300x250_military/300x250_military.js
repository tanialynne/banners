(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"TCC26673300x250_Headlines2_bg.jpg", id:"TCC26673300x250_Headlines2_bg"},
		{src:"TCC26673300x250_Headlines2_enroll.png", id:"TCC26673300x250_Headlines2_enroll"},
		{src:"TCC26673300x250_Headlines2_logo.png", id:"TCC26673300x250_Headlines2_logo"},
		{src:"TCC26673300x250_Headlines2_start.png", id:"TCC26673300x250_Headlines2_start"},
		{src:"TCC26673300x250_Military_bdollar.png", id:"TCC26673300x250_Military_bdollar"},
		{src:"TCC26673300x250_Military_gdollar.png", id:"TCC26673300x250_Military_gdollar"},
		{src:"TCC26673300x250_Military_man.png", id:"TCC26673300x250_Military_man"},
		{src:"TCC26673300x250_Military_salute.png", id:"TCC26673300x250_Military_salute"},
		{src:"TCC26584OpenHouse_300x250_border.png", id:"TCC26584OpenHouse_300x250_border"}
	]
};



// symbols:



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


(lib.TCC26673300x250_Military_bdollar = function() {
	this.initialize(img.TCC26673300x250_Military_bdollar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,188);


(lib.TCC26673300x250_Military_gdollar = function() {
	this.initialize(img.TCC26673300x250_Military_gdollar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,188);


(lib.TCC26673300x250_Military_man = function() {
	this.initialize(img.TCC26673300x250_Military_man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,188);


(lib.TCC26673300x250_Military_salute = function() {
	this.initialize(img.TCC26673300x250_Military_salute);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,188);


(lib.TCC26584OpenHouse_300x250_border = function() {
	this.initialize(img.TCC26584OpenHouse_300x250_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.instance = new lib.TCC26673300x250_Military_gdollar();
	this.instance.setTransform(42,-86);

	this.instance_1 = new lib.TCC26673300x250_Military_bdollar();
	this.instance_1.setTransform(-43,-86);

	this.instance_2 = new lib.TCC26673300x250_Military_gdollar();
	this.instance_2.setTransform(-128,-86);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-86,256,188);


(lib.Symbol10copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673300x250_Military_man();
	this.instance.setTransform(40,-86);

	this.instance_1 = new lib.TCC26673300x250_Military_man();
	this.instance_1.setTransform(-43,-86);

	this.instance_2 = new lib.TCC26673300x250_Military_man();
	this.instance_2.setTransform(-131,-86);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-131,-86,257,188);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673300x250_Military_salute();
	this.instance.setTransform(40,-86);

	this.instance_1 = new lib.TCC26673300x250_Military_salute();
	this.instance_1.setTransform(-43,-86);

	this.instance_2 = new lib.TCC26673300x250_Military_salute();
	this.instance_2.setTransform(-131,-86);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-131,-86,257,188);


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
	this.text = new cjs.Text("INTO A HIGH-PAYING CAREER.", "22px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 294;
	this.text.setTransform(-3,16.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,16.2,298,33.9);


(lib.Symbol1copy = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("TURN YOUR MILITARY SKILLS", "22px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 294;
	this.text.setTransform(-3,16.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,16.2,298,33.9);


// stage content:
(lib._300x250_military = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_303 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(303).call(this.frame_303).wait(1));

	// Layer 12
	this.instance = new lib.TCC26584OpenHouse_300x250_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(304));

	// Layer 16
	this.instance_1 = new lib.Symbol15();
	this.instance_1.setTransform(150,90);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(283).to({_off:false},0).to({alpha:1},13).wait(8));

	// Layer 15
	this.instance_2 = new lib.Symbol14();
	this.instance_2.setTransform(150,212);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(213).to({_off:false},0).to({y:192,alpha:1},13).wait(78));

	// Layer 7
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(150,95);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(207).to({_off:false},0).to({y:125,alpha:1},13).wait(51).to({alpha:0},12).to({_off:true},1).wait(20));

	// Layer 9
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(150,86.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(123).to({_off:false},0).to({alpha:1},12).wait(59).to({alpha:0},12).to({_off:true},1).wait(97));

	// Layer 8
	this.instance_5 = new lib.Symbol1copy2();
	this.instance_5.setTransform(150,170.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130).to({_off:false},0).to({alpha:1},12).wait(52).to({alpha:0},12).to({_off:true},1).wait(97));

	// Layer 10
	this.instance_6 = new lib.Symbol12();
	this.instance_6.setTransform(150,110);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(207).to({_off:false},0).to({alpha:1},13).wait(84));

	// Layer 6
	this.instance_7 = new lib.Symbol10();
	this.instance_7.setTransform(150,86.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({alpha:1},13).wait(61).to({alpha:0},12).to({_off:true},1).wait(168));

	// Layer 5
	this.instance_8 = new lib.Symbol1copy();
	this.instance_8.setTransform(150,170.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55).to({_off:false},0).to({alpha:1},13).wait(55).to({alpha:0},12).to({_off:true},1).wait(168));

	// Layer 3
	this.instance_9 = new lib.Symbol10copy();
	this.instance_9.setTransform(150,86.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({alpha:1},13).wait(30).to({alpha:0},13).to({_off:true},1).wait(241));

	// Layer 2
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(150,125);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},13).wait(291));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;