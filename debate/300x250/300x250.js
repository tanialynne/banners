(function (lib, img, cjs, ss, dog, cat) {

totalVotes =  dog+cat;
dogPercent = Math.round((dog/totalVotes)*100);
catPercent = Math.round((cat/totalVotes)*100);


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
		{src:"_250_bottombar.jpg", id:"_250_bottombar"},
		{src:"_250_stars.jpg", id:"_250_stars"},
		{src:"_300_border.png", id:"_300_border"},
		{src:"_300_fade.png", id:"_300_fade"},
		{src:"_300_logo.png", id:"_300_logo"},
		{src:"_250_or.png", id:"_250_or"},
		{src:"_300_home.png", id:"_300_home"},
		{src:"cat.jpg", id:"cat"},
		{src:"dog.jpg", id:"dog"}
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



(lib._250_bottombar = function() {
	this.initialize(img._250_bottombar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,38);


(lib._250_stars = function() {
	this.initialize(img._250_stars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,38);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._300_fade = function() {
	this.initialize(img._300_fade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._300_logo = function() {
	this.initialize(img._300_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,65);


(lib._250_or = function() {
	this.initialize(img._250_or);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,250);


(lib._300_home = function() {
	this.initialize(img._300_home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,88);


(lib.cat = function() {
	this.initialize(img.cat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,212);


(lib.dog = function() {
	this.initialize(img.dog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,212);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C32030").s().p("AgdCBIAAg8IA7AAIAAA8gAgOApIgSihIAAgIIBAAAIAAAIIgRChg");
	this.shape.setTransform(276,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C32030").s().p("AhhCBIAAkBIDBAAIAAAzIiIAAIAAA0IB4AAIAAAxIh4AAIAAA2ICKAAIAAAzg");
	this.shape_1.setTransform(258.2,62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C32030").s().p("AgbCBIAAjMIhPAAIAAg1IDVAAIAAA1IhPAAIAADMg");
	this.shape_2.setTransform(233.2,62);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C32030").s().p("ABNCCIgYg6IhrAAIgYA6Ig6AAIBvkDIAzAAIBvEDgAgiAWIBDAAIghhTg");
	this.shape_3.setTransform(206.6,61.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C32030").s().p("AhtCBIAAkBIB3AAQAsAAAXAXQASARAAAbIAAAAQAAALgCAKQgDAIgFAGQgFAHgFAGQgHAFgHAEQAXAGANAOQANAPAAAbIAAAAQAAASgHANQgHANgNAKQgMAIgTAEQgRAFgWAAgAg1BPIBCAAQATAAAKgHQALgGAAgPIAAgBQAAgNgKgHQgKgIgWAAIhAAAgAg1gXIA0AAQASAAAKgHQAMgGAAgOIAAgCQAAgNgKgHQgKgGgRAAIg3AAg");
	this.shape_4.setTransform(179.4,62);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C32030").s().p("AhhCBIAAkBIDCAAIAAAzIiKAAIAAA0IB5AAIAAAxIh5AAIAAA2ICLAAIAAAzg");
	this.shape_5.setTransform(153.5,62);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C32030").s().p("Ah2CBIAAkBIBlAAQAdAAAZAKQAZAJATASQASARAKAYQAKAYAAAaIAAAAQAAAbgKAXQgKAYgSASQgTARgZAKQgZAKgdAAgAg9BNIAsAAQARAAANgFQAPgGAKgKQAKgLAGgNQAFgPAAgRIAAAAQAAgQgFgOQgGgOgKgLQgKgKgPgGQgNgGgRABIgsAAg");
	this.shape_6.setTransform(126.6,62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C32030").s().p("AAtCBIg1hTIgBAAIgsAAIAABTIg6AAIAAkBIB1AAQAxAAAbAaQAWAXgBAkIAAABQAAAggOARQgQAVgZAIIA/BdgAg1gCIA3AAQAWAAALgKQALgKAAgRIAAAAQAAgTgMgJQgMgJgVAAIg2AAg");
	this.shape_7.setTransform(88,62);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C32030").s().p("Ag2B7QgZgLgSgRQgTgTgKgYQgKgYAAgcIAAAAQAAgaAKgYQALgYASgTQASgSAagLQAZgLAcAAQAeAAAZALQAZAKASATQATARAKAZQAKAYAAAbIAAAAQAAAbgKAYQgLAZgSASQgSATgaAKQgZAKgdAAQgdAAgZgKgAgehJQgPAGgKALQgKALgGAPQgFAOAAAQIAAAAQAAARAFAOQAGAOALAMQAKALAOAHQAOAGAQAAQARAAAOgGQAPgHAKgKQAKgMAGgOQAFgPAAgRIAAAAQAAgPgFgPQgGgPgLgLQgKgLgOgGQgPgHgQAAQgQAAgOAHg");
	this.shape_8.setTransform(58,62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C32030").s().p("AhhCBIAAkBIDDAAIAAA0IiKAAIAAA3IB5AAIAAAyIh5AAIAABkg");
	this.shape_9.setTransform(31,62);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C32030").s().p("ABOBBIAAhJQAAgSgIgLQgKgKgPAAQgIAAgGADQgHACgFAFQgEAGgDAHQgDAIAAAJIAABIIgRAAIAAhJQAAgTgJgKQgIgKgQAAQgIAAgGADQgHADgFAGQgEAFgDAIQgDAHAAAJIAABHIgUAAIAAh/IAUAAIAAAWIAHgJIAJgIQAFgEAGgBQAGgDAJAAQAPAAALAIQAJAHAEALIAIgKQAEgEAFgEQAGgEAHgBQAHgDAJAAQAWAAANAPQANANAAAYIAABOg");
	this.shape_10.setTransform(266,26.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C32030").s().p("AgaA9QgMgEgJgKQgJgJgFgMQgFgMAAgOIAAAAQAAgMAFgNQAFgLAJgKQAJgJANgGQAMgFANAAQAOAAANAFQAMAGAJAJQAJAJAFAMQAFANAAAMIAAAAQAAANgFAMQgFANgJAJQgJAKgNAEQgMAGgOAAQgNAAgNgGgAgSgtQgJAEgGAHQgGAGgDAJQgEAKAAAJIAAAAQAAAKAEAJQADAJAHAHQAGAHAJAEQAJAEAIAAQAKAAAJgEQAJgEAGgHQAGgHAEgIQADgJAAgLIAAAAQAAgJgDgJQgEgKgHgGQgGgHgJgEQgJgEgJAAQgJAAgJAEg");
	this.shape_11.setTransform(245.9,26.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C32030").s().p("AgaA9QgMgEgJgKQgJgJgFgMQgFgMAAgOIAAAAQAAgMAFgNQAFgLAJgKQAJgJANgGQAMgFANAAQAOAAANAFQAMAGAJAJQAJAJAFAMQAFANAAAMIAAAAQAAANgFAMQgFANgJAJQgJAKgNAEQgMAGgOAAQgNAAgNgGgAgSgtQgJAEgGAHQgGAGgDAJQgEAKAAAJIAAAAQAAAKAEAJQADAJAHAHQAGAHAJAEQAJAEAIAAQAKAAAJgEQAJgEAGgHQAGgHAEgIQADgJAAgLIAAAAQAAgJgDgJQgEgKgHgGQgGgHgJgEQgJgEgJAAQgJAAgJAEg");
	this.shape_12.setTransform(229.8,26.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C32030").s().p("AgjBBIAAh/IAUAAIAAAiQADgIAGgHQAFgHAFgFQAGgEAJgDQAHgCAJAAIAAAVIgBAAQgLAAgJADQgKAEgEAIQgHAHgEALQgEAKAAAOIAAAzg");
	this.shape_13.setTransform(217.3,26.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C32030").s().p("AgXA9QgOgFgLgIIAKgPQAKAJALAEQAMAEAJAAQAMAAAIgGQAHgFAAgJIAAgBQAAgFgCgDQgDgDgFgDQgEgDgGgBIgLgFIgOgEQgIgCgGgDQgGgEgEgGQgEgGAAgJIAAgBQAAgIAEgHQADgHAGgFQAGgEAIgDQAIgDAHABQAMAAANADQAMAEAKAHIgJAOQgJgGgKgDQgKgDgJAAQgKAAgHAFQgGAFAAAJIAAAAQAAAFADADQACADAFACQAFAEAGABIAKAEIAPAGQAHACAGACQAGAEAEAHQADAGAAAIQAAAKgDAHQgEAHgGAFQgGAFgIADQgJACgKABQgMAAgOgGg");
	this.shape_14.setTransform(197.6,26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C32030").s().p("AgtBTIgNgFIAGgPIAKADQAEACAHAAQAIAAAGgGQAGgFAGgOIg7h/IAWAAIAtBqIAphqIAVAAIg3CEQgIAUgIAIQgKAJgPAAQgIAAgGgCg");
	this.shape_15.setTransform(184.2,28.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C32030").s().p("AgZBAQgJgDgGgFQgHgFgEgHQgEgIgBgKIAAAAQAAgLAFgIQAEgHAHgEQAIgFAKgDQAKgCAMgBQALABAJABIASAEIAAgEQgBgSgJgJQgLgIgRgBQgKAAgKADQgJADgJAEIgGgPQALgGALgCQALgDAMgBQAcAAAOAOQAOAOAAAYIAABNIgTAAIAAgSQgIAIgKAHQgMAGgPAAQgJAAgJgCgAgaAGQgKAHAAAMIAAAAQAAAGADAFQADAFAEADQAEAEAHABQAFACAHAAQAHAAAIgDQAHgCAGgFQAGgEADgHQAEgGAAgIIAAgMIgRgEQgJAAgMAAQgQAAgKAGg");
	this.shape_16.setTransform(169.2,26.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C32030").s().p("AAiBBIgihkIghBkIgRAAIgtiBIAUAAIAiBnIAihnIAOAAIAkBnIAihnIATAAIgtCBg");
	this.shape_17.setTransform(151.5,26.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C32030").s().p("AgIBbIAAi1IARAAIAAC1g");
	this.shape_18.setTransform(137.4,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C32030").s().p("AgZBAQgJgDgGgFQgHgFgEgHQgEgIgBgKIAAAAQAAgLAFgIQAEgHAHgEQAHgFALgDQAKgCAMgBQAKABAKABIASAEIAAgEQgBgSgJgJQgLgIgRgBQgKAAgKADQgJADgJAEIgGgPQALgGALgCQALgDAMgBQAbAAAPAOQAOAOAAAYIAABNIgTAAIAAgSQgIAIgKAHQgMAGgPAAQgJAAgJgCgAgaAGQgKAHAAAMIAAAAQAAAGADAFQADAFAEADQAEAEAHABQAGACAFAAQAIAAAIgDQAHgCAGgFQAGgEADgHQAEgGAAgIIAAgMIgRgEQgJAAgMAAQgQAAgKAGg");
	this.shape_19.setTransform(126.5,26.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C32030").s().p("AgXA9QgOgFgLgIIAKgPQAKAJALAEQAMAEAJAAQAMAAAIgGQAHgFAAgJIAAgBQAAgFgCgDQgDgDgFgDQgEgDgGgBIgLgFIgOgEQgIgCgGgDQgGgEgEgGQgEgGAAgJIAAgBQAAgIAEgHQADgHAGgFQAGgEAIgDQAIgDAHABQAMAAANADQAMAEAKAHIgJAOQgJgGgKgDQgKgDgJAAQgKAAgHAFQgGAFAAAJIAAAAQAAAFADADQACADAFACQAFAEAGABIAKAEIAPAGQAHACAGACQAGAEAEAHQADAGAAAIQAAAKgDAHQgEAHgGAFQgGAFgIADQgJACgKABQgMAAgOgGg");
	this.shape_20.setTransform(105.7,26.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C32030").s().p("AgOATQAJgDAEgFQADgFgBgHIgHAAIAAgaIAVAAIAAAXQAAANgHAIQgHAIgMADg");
	this.shape_21.setTransform(96.4,18.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C32030").s().p("AgUA+QgLgFgKgIQgIgKgFgMQgGgNAAgOQABgNAEgMQAFgMAIgJQAIgKALgFQAMgFAMAAQANAAAMAFQAMAGAHAJQAIAJADANQAEAMABAMIAAAEIAAADIhlAAQABAKAEAIQAEAJAGAFQAHAFAHAEQAIADAGAAQAOAAAKgGQAJgEAJgJIALALQgKALgMAGQgNAHgSAAQgLAAgMgFgAgOguQgHADgFAGQgFAFgEAJQgEAIgBAIIBRAAQgBgIgCgIQgEgHgFgHQgFgGgHgDQgHgEgKABQgGAAgIADg");
	this.shape_22.setTransform(86.2,26.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C32030").s().p("AgjBBIAAh/IAUAAIAAAiQAEgIAEgHQAGgHAFgFQAGgEAIgDQAIgCAJAAIAAAVIgBAAQgKAAgKADQgJAEgFAIQgHAHgEALQgEAKAAAOIAAAzg");
	this.shape_23.setTransform(74.4,26.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C32030").s().p("AgUA+QgLgFgJgIQgJgKgGgMQgEgNAAgOQgBgNAFgMQAFgMAIgJQAJgKALgFQALgFAMAAQAOAAALAFQAMAGAHAJQAIAJAEANQADAMAAAMIAAAEIAAADIhkAAQABAKAEAIQAEAJAGAFQAHAFAHAEQAIADAGAAQAOAAAKgGQAJgEAJgJIALALQgJALgNAGQgMAHgTAAQgLAAgMgFgAgNguQgIADgFAGQgFAFgFAJQgDAIgBAIIBRAAQAAgIgDgIQgDgHgFgHQgGgGgHgDQgIgEgJABQgGAAgHADg");
	this.shape_24.setTransform(61.3,26.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C32030").s().p("AAkBbIAAhMQAAgQgJgKQgIgLgSAAQgGAAgHADQgIADgFAFQgFAGgDAFQgCAIgBAJIAABKIgTAAIAAi1IATAAIAABMQAHgKAKgIQAKgHAPAAQANAAAIAEQAJADAHAHQAGAHADAKQAEAIAAALIAABQg");
	this.shape_25.setTransform(46.2,23.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C32030").s().p("AgJBXIAAibIg6AAIAAgSICHAAIAAASIg7AAIAACbg");
	this.shape_26.setTransform(30.3,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,83.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(catPercent+"%", "700 55px 'Montserrat'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 146;
	this.text.setTransform(223,0);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);

	this.text_1 = new cjs.Text(cat+" votes", "400 17px 'Montserrat'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 146;
	this.text_1.setTransform(223,57.1);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);

	this.text_2 = new cjs.Text(dogPercent+"%", "700 55px 'Montserrat'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 51;
	this.text_2.lineWidth = 146;
	this.text_2.setTransform(73,0);
	this.text_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);

	this.text_3 = new cjs.Text(dog+" votes", "400 17px 'Montserrat'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 146;
	this.text_3.setTransform(73,57.1);
	this.text_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);

	this.instance = new lib._300_fade();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-54,424,374);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_logo();
	this.instance.setTransform(-16,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-9,300,65);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_stars();
	this.instance.setTransform(0,38,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,38);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_stars();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,38);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_or();
	this.instance.setTransform(-6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,0,70,250);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cat();
	this.instance.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,148,212);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dog();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,212);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300_home();
	this.instance.setTransform(-22,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-62,225,88);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAwIAAgOIALAAIAAAOgAgBAUIgDg8IAAgHIAKAAIAAAHIgDA8g");
	this.shape.setTransform(276.1,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAwIAAhfIBFAAIAAAKIg6AAIAAAhIAzAAIAAAIIgzAAIAAAiIA6AAIAAAKg");
	this.shape_1.setTransform(269.7,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgAwIg9hOIAABOIgLAAIAAhfIAKAAIA8BMIAAhMIALAAIAABfg");
	this.shape_2.setTransform(259.2,21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAuQgJgEgHgHQgHgHgDgJQgDgJgBgKIAAAAQABgJADgJQAEgJAHgHQAGgHAJgEQAKgEAJAAQALAAAJAEQAJAEAHAHQAHAHADAJQAEAJgBAJIAAAAQABAKgEAJQgEAJgGAHQgHAHgJAEQgJAEgLAAQgKAAgJgEgAgOgkQgHAEgFAFQgFAGgDAGQgDAIAAAHIAAAAQAAAIADAIQADAGAFAGQAFAFAHADQAHAEAHAAQAIAAAHgDQAHgEAFgFQAGgGACgGQADgIAAgIIAAAAQAAgHgDgHQgCgHgGgGQgFgFgHgDQgIgEgHAAQgHAAgHADg");
	this.shape_3.setTransform(247.8,21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAwIAAhfIBFAAIAAAKIg6AAIAAAhIAzAAIAAAIIgzAAIAAAiIA6AAIAAAKg");
	this.shape_4.setTransform(233.2,21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAuQgJgEgJgIIAHgIQAHAHAIADQAIAEAIAAQAKAAAGgFQAGgFAAgGIAAgBIgBgGQgBgDgDgCQgDgCgFgCIgMgDIgNgFQgGAAgEgEQgFgDgBgEQgCgFAAgGQAAgGACgFQACgFAFgDQAEgEAGgCQAGgCAGAAQAKAAAIADQAIADAHAGIgGAJQgHgGgHgCQgHgDgGAAQgJAAgGAEQgFAFAAAHIABAGQABADADADIAIADIALAEQARAEAHAEQAIAGAAAMQAAAGgCAGQgDAEgEAFQgFADgGACQgGACgHAAQgKAAgKgEg");
	this.shape_5.setTransform(223.7,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAuQgJgEgHgHQgGgHgEgJQgEgJAAgKIAAAAQAAgJAEgJQAEgJAGgHQAHgHAJgEQAJgEAKAAQALAAAJAEQAJAEAHAHQAGAHAEAJQAEAJAAAJIAAAAQAAAKgEAJQgEAJgHAHQgGAHgJAEQgJAEgLAAQgKAAgJgEgAgOgkQgHAEgFAFQgFAGgDAGQgDAIAAAHIAAAAQAAAIADAIQADAGAFAGQAFAFAHADQAHAEAHAAQAIAAAHgDQAHgEAFgFQAFgGADgGQADgIAAgIIAAAAQAAgHgDgHQgDgHgFgGQgFgFgHgDQgHgEgIAAQgHAAgHADg");
	this.shape_6.setTransform(213.3,21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAuQgJgEgHgHQgHgHgDgJQgDgJgBgKIAAAAQABgJADgJQAEgJAHgHQAGgHAJgEQAKgEAJAAQALAAAJAEQAJAEAHAHQAHAHADAJQAEAJgBAJIAAAAQABAKgEAJQgEAJgGAHQgHAHgJAEQgJAEgLAAQgKAAgJgEgAgOgkQgHAEgFAFQgFAGgDAGQgDAIAAAHIAAAAQAAAIADAIQADAGAFAGQAFAFAHADQAHAEAHAAQAIAAAHgDQAHgEAFgFQAGgGACgGQADgIAAgIIAAAAQAAgHgDgHQgCgHgGgGQgFgFgHgDQgIgEgHAAQgHAAgHADg");
	this.shape_7.setTransform(201.4,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcAwIAAgrIg3AAIAAArIgLAAIAAhfIALAAIAAArIA3AAIAAgrIALAAIAABfg");
	this.shape_8.setTransform(190.1,21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAuQgJgDgHgIQgGgGgEgKQgEgIAAgLIAAAAQAAgJAEgJQAEgJAGgIQAHgGAJgEQAJgEAJAAIAMABIAKADIAJAFIAHAGIgHAIQgHgFgHgEQgHgEgKAAQgGAAgHADQgHADgFAGQgGAFgCAHQgDAIAAAHIAAAAQAAAIADAIQACAGAGAGQAFAFAHAEQAHADAGAAQAKAAAHgEQAHgDAHgHIAIAHIgIAHIgJAFIgKAEIgNABQgIAAgJgEg");
	this.shape_9.setTransform(179.8,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNA1IAAgYIAVAAIAAAYgAgIARIgDgWIAAgBQAMgBAFgDQAGgEAAgGQAAgFgDgDQgEgDgFAAQgFAAgFADQgFADgFAFIgNgPQAGgIAJgEQAIgFAKAAQAHAAAGACQAHACAEAEQAFAEACAGQADAGAAAHIAAABQAAAHgDAFQgCAFgEADQgDACgFADIgLADIgCAJg");
	this.shape_10.setTransform(126,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARA0IgTghIgBAAIgQAAIAAAhIgWAAIAAhnIArAAQASAAALALQAIAIAAAQIAAAAQAAAMgGAHQgGAIgJADIAYAmgAgTAAIATAAQAIAAAFgEQAEgEAAgHQAAgHgEgFQgFgDgIAAIgTAAg");
	this.shape_11.setTransform(117.6,22.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA0IAAhnIBIAAIAAAUIgyAAIAAAWIAsAAIAAATIgsAAIAAAVIAzAAIAAAVg");
	this.shape_12.setTransform(107.6,22.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKA0IAAhSIgdAAIAAgVIBPAAIAAAVIgeAAIAABSg");
	this.shape_13.setTransform(98.2,22.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeApQgLgMAAgXIAAg6IAVAAIAAA6QAAANAGAGQAFAHAJAAQAJAAAGgHQAGgGAAgNIAAg6IAVAAIAAA5QAAAMgDAJQgDAJgFAGQgGAGgIADQgIADgJAAQgTAAgLgMg");
	this.shape_14.setTransform(88.3,22.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAxQgKgDgHgIQgGgHgEgKQgEgKAAgLIAAAAQAAgJAEgLQAEgKAGgHQAHgHAKgEQAJgFAJAAQAHAAAGACIAKADIAJAFIAHAGIgOARQgFgFgGgEQgHgCgHAAQgFgBgEADQgFADgEAEQgEAFgDAFQgCAHAAAFIAAAAQAAAHACAFIAHALQADAEAGADQAEADAFgBQAIABAHgEQAFgDAGgGIAOAPIgIAIIgJAGQgFACgFABQgGACgIAAQgIAAgJgFg");
	this.shape_15.setTransform(77.9,22.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAxQgLgEgJgIIANgQQAHAFAHAEQAIADAGAAQAHAAAEgDQADgCAAgFIgBgEIgCgEIgHgDIgIgCIgNgFQgGgCgFgDQgEgDgCgEQgDgGAAgIIAAAAQAAgHADgGQACgGAFgEQAEgEAHgCQAHgCAGAAQAKAAAJADQAJAEAHAGIgLARIgMgIQgHgCgFAAQgFAAgEACQgDADAAAEIAAABIABAEIADADIAHADIAIADIAOAFQAFADAFABQADAEACAFQADAFAAAHIAAAAQAAAIgDAGQgDAGgEAEQgGAEgGACQgHACgHABQgKgBgLgEg");
	this.shape_16.setTransform(63.8,22.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMAOQAMgCAAgMIgHAAIAAgXIAUAAIAAAVQAAAMgGAHQgHAGgLABg");
	this.shape_17.setTransform(57.2,19.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAxQgJgDgHgIQgHgHgEgKQgEgKAAgLIAAAAQAAgJAEgLQAEgKAHgHQAHgHAKgEQAJgFAKAAQALAAAKAFQAJAEAHAHQAHAHAEAKQAEAKAAAKIAAAAQAAALgEAKQgEAKgHAHQgHAIgKADQgJAFgLAAQgKAAgKgFgAgLgdQgFADgEAEQgEAFgCAFQgCAHAAAFIAAAAQAAAHACAFQACAGAEAFQAEAEAGADQAFADAFgBQAGABAGgDQAFgDAEgEQAEgFACgGQACgFAAgHIAAAAQAAgFgCgHQgCgFgEgFQgEgEgGgDQgFgDgGABQgFgBgGADg");
	this.shape_18.setTransform(49.4,22.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATA0IAAgqIglAAIAAAqIgWAAIAAhnIAWAAIAAApIAlAAIAAgpIAWAAIAABng");
	this.shape_19.setTransform(38.1,22.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWA0IgWhCIgVBCIgSAAIgihnIAXAAIAVBFIAWhFIAQAAIAWBFIAVhFIAWAAIghBng");
	this.shape_20.setTransform(24.8,22.1);

	this.instance = new lib._250_bottombar();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,38);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_65 = function() {
		canvas.onclick = function(event) {
		    this.gotoAndPlay(73);
			getCursorPosition(canvas, event);
		}.bind(this);
		
		canvas.mouseover = function(event){
			
		}.bind(this);
	}
	function getCursorPosition(canvas, event) {
		var rect = canvas.getBoundingClientRect();
		var x = event.clientX - rect.left;
		var y = event.clientY - rect.top;
		
		if(x<=150){
			dog++;
		}else{
			cat++;
		}
		
		console.log("x: " + x + " y: " + y+ " dog: " + dog+ " cat: " + cat);
		document.getElementById("bg-exit").style.display = 'block';
		document.getElementById("block1").style.display = 'none';
		document.getElementById("block2").style.display = 'none';
		var getTotalAnswer = 'var dog = '+dog+';var cat = '+cat+';';
		$.post("https://www.diainc.com/clients/long/26769/update/debate/debate.php", { total: getTotalAnswer });	
	}
	this.frame_66 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_283 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(1).call(this.frame_66).wait(217).call(this.frame_283).wait(1));

	// Layer 6
	this.instance = new lib._300_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(284));

	// Layer 14
	this.instance_1 = new lib.Symbol6copy();
	this.instance_1.setTransform(150,281,1,1,0,0,0,150,19);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(177).to({_off:false},0).to({y:231},13).wait(94));

	// Layer 3
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(149.5,297.5,1,1,0,0,0,92.5,30);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(263).to({_off:false},0).to({y:207},13).wait(8));

	// Layer 2
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(149.5,150,1,1,0,0,0,134.5,57);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(252).to({_off:false},0).to({y:110,alpha:1},13).wait(19));

	// Layer 13
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(150,-31,1,1,0,0,0,150,19);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(177).to({_off:false},0).to({y:19},13).wait(94));

	// Layer 12
	this.instance_5 = new lib.Symbol10();
	this.instance_5.setTransform(80,208,1,1,0,0,0,80,74.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(188).to({_off:false},0).to({y:153,alpha:1},13).wait(39).to({alpha:0},11).wait(33));

	// Layer 8
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(150,281,1,1,0,0,0,150,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:231},13).wait(150).to({alpha:0},13).wait(108));

	// Layer 15
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(152,125,1,1,0,0,0,31,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({alpha:1},13).wait(137).to({alpha:0},13).wait(108));

	// Layer 4
	this.instance_8 = new lib.Symbol8();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(73).to({_off:false},0).to({alpha:1},13).wait(77).to({alpha:0},13).wait(108));

	// Layer 10
	this.instance_9 = new lib.Symbol4();
	this.instance_9.setTransform(225,106,1,1,0,0,0,75,106);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(33).to({_off:false},0).to({alpha:1},13).wait(12).to({alpha:0.199},0).wait(4).to({alpha:1},0).wait(101).to({alpha:0},13).wait(108));

	// Layer 9
	this.instance_10 = new lib.Symbol3();
	this.instance_10.setTransform(75,106,1,1,0,0,0,75,106);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(26).to({_off:false},0).to({alpha:1},13).wait(13).to({alpha:0.199},0).wait(4).to({alpha:1},0).wait(107).to({alpha:0},13).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,300);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, dog, cat);
var lib, images, createjs, ss;