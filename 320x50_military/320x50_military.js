(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"_320x50_border.png", id:"_320x50_border"},
		{src:"TCC26673320x50_Military_bdollar.png", id:"TCC26673320x50_Military_bdollar"},
		{src:"TCC26673320x50_Military_gdollar.png", id:"TCC26673320x50_Military_gdollar"},
		{src:"TCC26673320x50_Military_salute.png", id:"TCC26673320x50_Military_salute"},
		{src:"TCC26673320x50_Thousands_bg.png", id:"TCC26673320x50_Thousands_bg"}
	]
};



// symbols:



(lib._320x50_border = function() {
	this.initialize(img._320x50_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.TCC26673320x50_Military_bdollar = function() {
	this.initialize(img.TCC26673320x50_Military_bdollar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,50);


(lib.TCC26673320x50_Military_gdollar = function() {
	this.initialize(img.TCC26673320x50_Military_gdollar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,50);


(lib.TCC26673320x50_Military_salute = function() {
	this.initialize(img.TCC26673320x50_Military_salute);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,50);


(lib.TCC26673320x50_Thousands_bg = function() {
	this.initialize(img.TCC26673320x50_Thousands_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("REGISTER TODAY!", "17px 'Oswald'", "#89D3E7");
	this.text.lineHeight = 19;
	this.text.lineWidth = 295;
	this.text.setTransform(-239.2,-7.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-239.2,-7.9,299.5,28.9);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CLASSES START JAN.11", "22px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.lineWidth = 295;
	this.text.setTransform(-184.2,-21.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184.2,-21.8,299.5,36.6);


(lib.Symbol7copy2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("PAYING CAREER.", "17px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 19;
	this.text.lineWidth = 295;
	this.text.setTransform(-350.2,-147.8);

	this.text_1 = new cjs.Text("INTO A HIGH-", "17px 'Oswald'", "#FFFFFF");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 295;
	this.text_1.setTransform(-350.2,-166.8);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-350.2,-166.8,299.5,52.6);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("MILITARY SKILLS", "17px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 19;
	this.text.lineWidth = 295;
	this.text.setTransform(-350.2,-147.8);

	this.text_1 = new cjs.Text("TURN YOUR", "17px 'Oswald'", "#FFFFFF");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 295;
	this.text_1.setTransform(-350.2,-166.8);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-350.2,-166.8,299.5,52.6);


(lib.Symbol2copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673320x50_Military_gdollar();
	this.instance.setTransform(160,0);

	this.instance_1 = new lib.TCC26673320x50_Military_bdollar();
	this.instance_1.setTransform(137.8,0);

	this.instance_2 = new lib.TCC26673320x50_Military_gdollar();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185,50);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673320x50_Military_salute();
	this.instance.setTransform(161.5,0);

	this.instance_1 = new lib.TCC26673320x50_Military_salute();
	this.instance_1.setTransform(137,0);

	this.instance_2 = new lib.TCC26673320x50_Military_salute();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,186.5,50);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673320x50_Thousands_bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


// stage content:
(lib._320x50_military = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_172 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(172).call(this.frame_172).wait(1));

	// Layer 11
	this.instance = new lib._320x50_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(173));

	// Layer 6
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(283.3,41.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(156).to({_off:false},0).to({y:31.7,alpha:1},12).wait(5));

	// Layer 5
	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(187.6,31);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149).to({_off:false},0).to({y:21,alpha:1},12).wait(12));

	// Layer 12
	this.instance_3 = new lib.Symbol7copy2();
	this.instance_3.setTransform(375.7,169.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).to({alpha:1},12).wait(47).to({alpha:0},11).to({_off:true},1).wait(20));

	// Layer 7
	this.instance_4 = new lib.Symbol2copy();
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({alpha:1},12).wait(55).to({alpha:0},11).to({_off:true},1).wait(20));

	// Layer 4
	this.instance_5 = new lib.Symbol2();
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({alpha:1},11).wait(55).to({alpha:0},12).to({_off:true},1).wait(86));

	// Layer 1
	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(375.7,179.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({y:169.7,alpha:1},12).wait(47).to({alpha:0},12).to({_off:true},1).wait(86));

	// Layer 3
	this.instance_7 = new lib.Symbol1();
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},12).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,25,320,50);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;