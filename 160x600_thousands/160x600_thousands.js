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
		{src:"TCC26673160x600_Thousands1_dollar.jpg", id:"TCC26673160x600_Thousands1_dollar"},
		{src:"TCC26673160x600_Thousands1_p1.jpg", id:"TCC26673160x600_Thousands1_p1"},
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


(lib.TCC26673160x600_Thousands1_dollar = function() {
	this.initialize(img.TCC26673160x600_Thousands1_dollar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,160);


(lib.TCC26673160x600_Thousands1_p1 = function() {
	this.initialize(img.TCC26673160x600_Thousands1_p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,290);


(lib.TCC26584OpenHouse_160x600_border = function() {
	this.initialize(img.TCC26584OpenHouse_160x600_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673160x600_Thousands1_p1();
	this.instance.setTransform(-80,-145);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-145,160,290);


(lib.Symbol4copy2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673160x600_Headlines_enroll();
	this.instance.setTransform(-71.5,68.4);

	this.text = new cjs.Text("JAN. 11", "45px 'Oswald'", "#B4E1ED");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,8.3);

	this.text_1 = new cjs.Text("START", "35px 'Oswald'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 296;
	this.text_1.setTransform(-2,-23.7);

	this.text_2 = new cjs.Text("CLASSES", "35px 'Oswald'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 37;
	this.text_2.lineWidth = 296;
	this.text_2.setTransform(-2,-57.7);

	this.addChild(this.text_2,this.text_1,this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-57.7,300,146.1);


(lib.Symbol4copy = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CAREER.", "25px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,49.3);

	this.text_1 = new cjs.Text("HIGH-PAYING", "25px 'Oswald'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 296;
	this.text_1.setTransform(-2,14.3);

	this.text_2 = new cjs.Text("FOR A", "25px 'Oswald'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 296;
	this.text_2.setTransform(-2,-20.7);

	this.text_3 = new cjs.Text("AND TRAIN", "25px 'Oswald'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 27;
	this.text_3.lineWidth = 296;
	this.text_3.setTransform(-2,-54.7);

	this.addChild(this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-54.7,300,143.5);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("IN TUITION", "25px 'Oswald'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 296;
	this.text.setTransform(-2,14.3);

	this.text_1 = new cjs.Text("THOUSANDS", "25px 'Oswald'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 296;
	this.text_1.setTransform(-2,-20.7);

	this.text_2 = new cjs.Text("SAVE", "25px 'Oswald'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 296;
	this.text_2.setTransform(-2,-54.7);

	this.addChild(this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-54.7,300,108.5);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673160x600_Thousands1_dollar();
	this.instance.setTransform(-38,44);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38,44,76,160);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TCC26673160x600_Headlines_bg();
	this.instance.setTransform(-80,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


// stage content:
(lib._160x600_thousands = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_206 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(206).call(this.frame_206).wait(1));

	// Layer 7
	this.instance = new lib.TCC26584OpenHouse_160x600_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(207));

	// Layer 9
	this.instance_1 = new lib.Symbol4copy2();
	this.instance_1.setTransform(80,358);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({alpha:1},12).wait(15));

	// Layer 8
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(80,145);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(97).to({_off:false},0).to({alpha:1},12).wait(98));

	// Layer 1
	this.instance_3 = new lib.Symbol4copy();
	this.instance_3.setTransform(80,358);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({_off:false},0).to({alpha:1},12).wait(57).to({alpha:0},12).to({_off:true},1).wait(21));

	// Layer 3
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(80,66);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},12).wait(71).to({alpha:0},12).to({_off:true},1).wait(103));

	// Layer 13
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(114.1,191,1,1,17,0,0,0.1,124);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({alpha:1},12).wait(40).to({alpha:0},12).to({_off:true},1).wait(103));

	// Layer 12
	this.instance_6 = new lib.Symbol3();
	this.instance_6.setTransform(44.1,191,1,1,-17,0,0,0.1,124.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({alpha:1},12).wait(35).to({alpha:0},12).to({_off:true},1).wait(103));

	// Layer 11
	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(-6,192.4,1,1,-39,0,0,0,124);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({alpha:1},12).wait(29).to({alpha:0},12).to({_off:true},1).wait(103));

	// Layer 10
	this.instance_8 = new lib.Symbol3();
	this.instance_8.setTransform(163,192.5,1,1,39,0,0,0,124);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56).to({_off:false},0).to({alpha:1},12).wait(23).to({alpha:0},12).to({_off:true},1).wait(103));

	// Layer 5
	this.instance_9 = new lib.Symbol4();
	this.instance_9.setTransform(80,408);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({y:358,alpha:1},12).wait(60).to({alpha:0},12).to({_off:true},1).wait(103));

	// Layer 2
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(80,300);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},12).wait(195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;