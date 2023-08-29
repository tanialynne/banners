(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"TCC26673160x600_Headlines_bg.jpg", id:"TCC26673160x600_Headlines_bg"},
		{src:"TCC26673160x600_Headlines_enroll.png", id:"TCC26673160x600_Headlines_enroll"},
		{src:"TCC26673160x600_Headlines_p1.jpg", id:"TCC26673160x600_Headlines_p1"},
		{src:"TCC26673160x600_Headlines_p2.jpg", id:"TCC26673160x600_Headlines_p2"},
		{src:"TCC26673160x600_Headlines_p3.jpg", id:"TCC26673160x600_Headlines_p3"},
		{src:"TCC26584OpenHouse_160x600_border.png", id:"TCC26584OpenHouse_160x600_border"}
	]
};



// symbols:



(lib.TCC26673160x600_Headlines_bg = function() {
	this.initialize(img.TCC26673160x600_Headlines_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.TCC26673160x600_Headlines_enroll = function() {
	this.initialize(img.TCC26673160x600_Headlines_enroll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,20);


(lib.TCC26673160x600_Headlines_p1 = function() {
	this.initialize(img.TCC26673160x600_Headlines_p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,346);


(lib.TCC26673160x600_Headlines_p2 = function() {
	this.initialize(img.TCC26673160x600_Headlines_p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,346);


(lib.TCC26673160x600_Headlines_p3 = function() {
	this.initialize(img.TCC26673160x600_Headlines_p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,346);


(lib.TCC26584OpenHouse_160x600_border = function() {
	this.initialize(img.TCC26584OpenHouse_160x600_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673160x600_Headlines_p2();
	this.instance.setTransform(-80,-173);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-173,160,346);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("JAN. 11", "45px 'Oswald'", "#9E2F22");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,9.5);

	this.text_1 = new cjs.Text("START", "35px 'Oswald'", "#034362");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 296;
	this.text_1.setTransform(-2,-22.5);

	this.text_2 = new cjs.Text("CLASSES", "35px 'Oswald'", "#034362");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 37;
	this.text_2.lineWidth = 296;
	this.text_2.setTransform(-2,-56.5);

	this.addChild(this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-56.5,300,131.1);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673160x600_Headlines_p3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,346);


(lib.Symbol4copy3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CAREER", "25px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,28.3);

	this.text_1 = new cjs.Text("HIGH-PAYING", "25px 'Oswald'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 296;
	this.text_1.setTransform(-2,-6.7);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-6.7,300,74.5);


(lib.Symbol4copy2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673160x600_Headlines_enroll();
	this.instance.setTransform(-71.5,68.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,68.4,143,20);


(lib.Symbol4copy = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("OR LESS.", "25px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,28.3);

	this.text_1 = new cjs.Text("IN TWO YEARS", "25px 'Oswald'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 296;
	this.text_1.setTransform(-2,-6.7);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-6.7,300,74.5);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("TRAIN FOR A", "25px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,-6.7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-6.7,300,39.5);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673160x600_Headlines_p1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,346);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673160x600_Headlines_bg();
	this.instance.setTransform(-80,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


// stage content:
(lib._160x600_headlines = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_229 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(229).call(this.frame_229).wait(1));

	// Actions
	this.text = new cjs.Text("TRAIN FOR A", "25px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 296;
	this.text.setTransform(84,623.2);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},229).wait(1));

	// Layer 11
	this.instance = new lib.TCC26584OpenHouse_160x600_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(230));

	// Layer 4
	this.instance_1 = new lib.Symbol10();
	this.instance_1.setTransform(80,68);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(203).to({_off:false},0).to({alpha:1},12).wait(15));

	// Layer 9
	this.instance_2 = new lib.Symbol4copy2();
	this.instance_2.setTransform(80,358);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).to({alpha:1},12).wait(15));

	// Layer 8
	this.instance_3 = new lib.Symbol6();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(153).to({_off:false},0).to({alpha:1},12).wait(65));

	// Layer 1
	this.instance_4 = new lib.Symbol4copy();
	this.instance_4.setTransform(80,358);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160).to({_off:false},0).to({alpha:1},12).wait(58));

	// Layer 6
	this.instance_5 = new lib.Symbol11();
	this.instance_5.setTransform(80,173);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({_off:false},0).to({alpha:1},12).wait(146));

	// Layer 10
	this.instance_6 = new lib.Symbol4copy3();
	this.instance_6.setTransform(80,358);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(78).to({_off:false},0).to({alpha:1},13).wait(62).to({alpha:0},12).to({_off:true},1).wait(64));

	// Layer 5
	this.instance_7 = new lib.Symbol4();
	this.instance_7.setTransform(80,408);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({y:358,alpha:1},12).wait(41).to({alpha:0},12).to({_off:true},1).wait(145));

	// Layer 3
	this.instance_8 = new lib.Symbol3();
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({alpha:1},12).wait(52).to({alpha:0},12).to({_off:true},1).wait(145));

	// Layer 2
	this.instance_9 = new lib.Symbol2();
	this.instance_9.setTransform(80,300);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},12).wait(218));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,300,300,662.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;