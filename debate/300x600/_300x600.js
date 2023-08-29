(function (lib, img, cjs, ss, dog, cat) {

totalVotes =  dog+cat;
dogPercent = Math.round((dog/totalVotes)*100);
catPercent = Math.round((cat/totalVotes)*100);

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
		{src:"_600_border.png", id:"_600_border"},
		{src:"_600_bottombar.jpg", id:"_600_bottombar"},
		{src:"_600_fade.png", id:"_600_fade"},
		{src:"_600_footer.png", id:"_600_footer"},
		{src:"_600_header.png", id:"_600_header"},
		{src:"_600_home.png", id:"_600_home"},
		{src:"_600_icon.png", id:"_600_icon"},
		{src:"_600_or.png", id:"_600_or"},
		{src:"_600_topbar.jpg", id:"_600_topbar"},
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



(lib._600_border = function() {
	this.initialize(img._600_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib._600_bottombar = function() {
	this.initialize(img._600_bottombar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,51);


(lib._600_fade = function() {
	this.initialize(img._600_fade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib._600_footer = function() {
	this.initialize(img._600_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,142);


(lib._600_header = function() {
	this.initialize(img._600_header);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,36);


(lib._600_home = function() {
	this.initialize(img._600_home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,133);


(lib._600_icon = function() {
	this.initialize(img._600_icon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,132);


(lib._600_or = function() {
	this.initialize(img._600_or);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,63);


(lib._600_topbar = function() {
	this.initialize(img._600_topbar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,85);


(lib.cat = function() {
	this.initialize(img.cat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,229);


(lib.dog = function() {
	this.initialize(img.dog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,240);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C32030").s().p("AgdCEIAAg9IA7AAIAAA9gAgPAqIgRimIAAgHIBBAAIAAAHIgSCmg");
	this.shape.setTransform(279.4,62.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C32030").s().p("AhkCEIAAkHIDHAAIAAAzIiNAAIAAA2IB8AAIAAAyIh8AAIAAA4ICPAAIAAA0g");
	this.shape_1.setTransform(261.1,62.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C32030").s().p("AgbCEIAAjRIhRAAIAAg2IDZAAIAAA2IhQAAIAADRg");
	this.shape_2.setTransform(235.5,62.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C32030").s().p("ABQCFIgZg7IhvAAIgXA7Ig9AAIBzkKIA0AAIBxEKgAgiAWIBEAAIgihUg");
	this.shape_3.setTransform(208.2,62.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C32030").s().p("AhvCEIAAkHIB5AAQAuAAAXAXQATASAAAbIAAABQAAALgDAJQgDAJgEAHQgFAHgHAFQgGAFgHAFQAXAGANAPQAOAPAAAbIAAAAQAAATgHAOQgIANgMAJQgOAKgSAEQgTAFgWgBgAg3BSIBEAAQAUAAAKgIQALgHAAgPIAAgBQAAgNgKgHQgKgJgXAAIhCAAgAg3gYIA3AAQARAAALgGQAMgIAAgOIAAgBQAAgNgKgIQgKgGgTgBIg4AAg");
	this.shape_4.setTransform(180.2,62.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C32030").s().p("AhkCEIAAkHIDHAAIAAAzIiNAAIAAA2IB8AAIAAAyIh8AAIAAA4ICPAAIAAA0g");
	this.shape_5.setTransform(153.6,62.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C32030").s().p("Ah5CEIAAkHIBoAAQAdAAAaAKQAaAKASASQAUARAKAZQAKAXAAAcIAAAAQAAAcgKAYQgKAZgUARQgSASgaAKQgaALgdgBgAg+BPIAtAAQARABAOgGQAOgFAKgLQALgLAGgPQAGgOAAgSIAAAAQAAgQgGgPQgGgPgLgKQgKgLgOgGQgOgGgRABIgtAAg");
	this.shape_6.setTransform(126,62.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C32030").s().p("AAuCEIg3hUIgBAAIgtAAIAABUIg7AAIAAkHIB4AAQAyAAAbAbQAYAWAAAmIAAABQgBAggQASQgPAVgZAKIBBBegAg3gDIA5AAQAWABALgKQAMgLAAgRIAAgBQAAgTgMgJQgMgKgWABIg4AAg");
	this.shape_7.setTransform(86.4,62.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C32030").s().p("Ag3B/QgagMgTgSQgTgTgKgZQgLgYAAgcIAAgBQAAgbALgZQALgZATgSQASgUAagLQAagKAdAAQAfAAAaAKQAZAMATASQATATALAYQAKAZAAAcIAAAAQAAAcgLAZQgLAZgTASQgSAUgaALQgaAKgeAAQgeAAgZgKgAgfhLQgPAGgKAMQgLALgGAPQgFAPgBAQIAAAAQABAQAFAQQAGAPALAMQALALAPAGQAOAHAQAAQARAAAPgHQAPgGALgLQAKgMAFgPQAHgOgBgRIAAgBQABgQgHgPQgFgPgLgLQgLgMgOgGQgPgHgRAAQgRAAgOAHg");
	this.shape_8.setTransform(55.6,62.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C32030").s().p("AhkCEIAAkHIDJAAIAAA1IiOAAIAAA5IB9AAIAAAzIh9AAIAABmg");
	this.shape_9.setTransform(27.8,62.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C32030").s().p("ABLA/IAAhHQAAgSgIgJQgJgKgPAAQgHAAgGACQgGADgFAFQgFAFgDAHQgCAHAAAJIAABGIgRAAIAAhHQAAgSgIgJQgJgKgPAAQgHAAgGADQgGADgFAFQgFAFgCAHQgDAHAAAJIAABFIgTAAIAAh6IATAAIAAAVIAHgJQADgFAFgDQAFgDAGgCQAGgCAIAAQAPAAAKAHQAJAHAEALIAHgKIAKgIQAFgDAHgCQAGgCAJAAQAVAAAMANQANAOAAAXIAABLg");
	this.shape_10.setTransform(261.2,26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C32030").s().p("AgZA7QgLgFgJgJQgJgJgEgLQgFgMAAgNIAAAAQAAgMAFgMQAEgLAJgJQAJgJALgFQAMgFANAAQANAAAMAFQAMAFAJAJQAIAIAFAMQAFAMAAAMIAAAAQAAANgFALQgFAMgIAJQgJAJgMAFQgMAFgNAAQgNAAgMgFgAgRgrQgJAEgGAGQgGAGgDAJQgDAJAAAJIAAAAQAAAJADAJQAEAJAGAGQAGAHAIAEQAJAEAIAAQAKAAAIgEQAIgEAGgHQAGgGAEgJQADgIAAgKIAAAAQAAgJgDgIQgEgJgGgHQgGgGgJgEQgIgEgJAAQgJAAgIAEg");
	this.shape_11.setTransform(242,26.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C32030").s().p("AgZA7QgLgFgJgJQgJgJgEgLQgFgMAAgNIAAAAQAAgMAFgMQAEgLAJgJQAJgJALgFQAMgFANAAQANAAAMAFQAMAFAJAJQAIAIAFAMQAFAMAAAMIAAAAQAAANgFALQgFAMgIAJQgJAJgMAFQgMAFgNAAQgNAAgMgFgAgRgrQgJAEgGAGQgGAGgDAJQgDAJAAAJIAAAAQAAAJADAJQAEAJAGAGQAGAHAIAEQAJAEAIAAQAKAAAIgEQAIgEAGgHQAGgGAEgJQADgIAAgKIAAAAQAAgJgDgIQgEgJgGgHQgGgGgJgEQgIgEgJAAQgJAAgIAEg");
	this.shape_12.setTransform(226.5,26.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C32030").s().p("AghA/IAAh6IASAAIAAAgQAEgIAFgGQAFgHAEgEQAHgFAHgCQAIgDAJABIAAATIgBAAQgKAAgJAEQgKAEgEAHQgHAHgEALQgEAJAAANIAAAyg");
	this.shape_13.setTransform(214.5,26.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C32030").s().p("AgWA7QgOgFgKgJIAJgNQAKAIALAEQALAEAJAAQAMAAAGgFQAIgGgBgJIAAAAQAAgFgCgDIgHgGIgKgEIgKgEIgOgFQgHgBgGgDQgGgEgDgGQgEgFAAgJIAAAAQAAgIADgHQADgHAGgEQAFgFAIgCQAIgDAHAAQAMAAAMAEQALADAKAHIgJAOQgJgGgIgDQgKgDgJAAQgJAAgHAFQgGAFgBAIIAAAAQAAAEAEAEQACADAEACIAKAFIALADIAOAFQAHADAGACQAFAEAEAGQAEAGgBAIIAAAAQABAJgEAHQgEAHgFAFQgHAFgIACQgIADgJAAQgLAAgOgFg");
	this.shape_14.setTransform(195.7,26.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C32030").s().p("AgrBQQgHgCgFgDIAFgOIAJADIALABQAJAAAFgFQAGgFAFgOIg4h5IAUAAIArBlIAphlIATAAIg0B+QgIAUgIAHQgJAIgOAAQgIAAgGgBg");
	this.shape_15.setTransform(182.7,28.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C32030").s().p("AgYA+QgIgDgHgFQgHgFgDgHQgEgHAAgKIAAAAQAAgKAEgIQAEgHAGgDQAIgFAKgDQAJgDAMAAQAKAAAJACIARAEIAAgEQAAgRgKgIQgKgJgQAAQgKAAgJACQgJADgJAEIgFgPQAKgFALgDQAKgDAMAAQAbAAANAOQANANAAAXIAABKIgSAAIAAgSQgHAIgKAHQgMAGgOAAQgJAAgIgCgAgZAGQgKAHABALIAAAAQAAAGACAFQADAEAEAEQAEADAGABQAGACAFAAQAHAAAIgCQAHgDAGgEQAFgFADgGQAEgGAAgHIAAgMIgQgDQgJgBgLAAQgQAAgJAGg");
	this.shape_16.setTransform(168.4,26.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C32030").s().p("AAhA+IghhgIggBgIgQAAIgsh7IAUAAIAhBiIAhhiIANAAIAiBiIAhhiIATAAIgsB7g");
	this.shape_17.setTransform(151.4,26.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C32030").s().p("AgIBXIAAitIARAAIAACtg");
	this.shape_18.setTransform(138,24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C32030").s().p("AgYA+QgIgDgHgFQgGgFgEgHQgEgHAAgKIAAAAQAAgKAEgIQADgHAIgDQAGgFALgDQAJgDAMAAQAKAAAIACIARAEIAAgEQAAgRgJgIQgKgJgQAAQgKAAgJACQgJADgIAEIgGgPQAKgFALgDQAKgDAMAAQAaAAAOAOQANANAAAXIAABKIgTAAIAAgSQgGAIgLAHQgKAGgPAAQgIAAgJgCgAgZAGQgKAHAAALIAAAAQABAGACAFQACAEAFAEQAEADAGABQAFACAHAAQAGAAAHgCQAIgDAGgEQAGgFADgGQADgGAAgHIAAgMIgQgDQgJgBgLAAQgQAAgJAGg");
	this.shape_19.setTransform(127.6,26.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C32030").s().p("AgWA7QgOgFgLgJIAKgNQAKAIALAEQALAEAJAAQALAAAHgFQAIgGAAgJIAAAAQAAgFgCgDIgHgGIgKgEIgLgEIgNgFQgIgBgGgDQgGgEgEgGQgDgFAAgJIAAAAQAAgIADgHQADgHAFgEQAHgFAHgCQAIgDAHAAQALAAAMAEQAMADAKAHIgIAOQgKgGgIgDQgKgDgJAAQgJAAgHAFQgGAFAAAIIAAAAQAAAEACAEQADADAEACIAKAFIAKADIAPAFQAHADAFACQAHAEADAGQADAGABAIIAAAAQgBAJgDAHQgDAHgHAFQgGAFgHACQgJADgJAAQgMAAgNgFg");
	this.shape_20.setTransform(107.6,26.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C32030").s().p("AgNASQAJgDADgFQADgFgBgGIgHAAIAAgZIAUAAIAAAWQAAAMgGAIQgGAIgNADg");
	this.shape_21.setTransform(98.6,18.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C32030").s().p("AgTA7QgMgEgIgJQgIgIgFgMQgFgMAAgOQAAgMAEgMQAFgMAIgJQAHgIALgFQALgFALAAQAOAAALAFQALAFAHAJQAHAJAEAMQAEAMAAALIAAADIAAAEIhhAAQABAKAEAHQAEAIAGAFQAGAGAIACQAHADAGAAQANAAAJgFQAKgEAHgIIAMAKQgKALgMAGQgMAGgRAAQgLAAgLgFgAgNgtQgHADgFAGQgGAGgDAHQgEAIgBAJIBOAAQAAgJgDgHQgDgIgFgFQgFgGgHgDQgHgEgJAAQgGAAgHADg");
	this.shape_22.setTransform(88.9,26.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C32030").s().p("AghA/IAAh6IASAAIAAAgQAEgIAFgGQAFgHAEgEQAHgFAHgCQAIgDAJABIAAATIgBAAQgKAAgJAEQgKAEgEAHQgHAHgEALQgEAJAAANIAAAyg");
	this.shape_23.setTransform(77.5,26.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C32030").s().p("AgTA7QgMgEgIgJQgIgIgFgMQgFgMAAgOQAAgMAEgMQAFgMAIgJQAHgIALgFQALgFALAAQAOAAALAFQALAFAHAJQAHAJAEAMQAEAMAAALIAAADIAAAEIhhAAQABAKAEAHQAEAIAGAFQAGAGAIACQAHADAGAAQANAAAJgFQAKgEAHgIIAMAKQgKALgMAGQgMAGgRAAQgLAAgLgFgAgNgtQgHADgFAGQgGAGgDAHQgEAIgBAJIBOAAQAAgJgDgHQgDgIgFgFQgFgGgHgDQgHgEgJAAQgGAAgHADg");
	this.shape_24.setTransform(65,26.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C32030").s().p("AAjBXIAAhJQAAgPgJgKQgIgKgRAAQgGAAgHADQgHACgFAFQgFAGgCAFQgDAHAAAJIAABHIgTAAIAAitIATAAIAABIQAGgKAKgHQAKgGAOgBQAMAAAIAEQAJAEAGAGQAGAHAEAJQADAIAAAKIAABNg");
	this.shape_25.setTransform(50.5,24.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C32030").s().p("AgIBTIAAiUIg5AAIAAgSICCAAIAAASIg4AAIAACUg");
	this.shape_26.setTransform(35.3,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,84.4);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._600_icon();
	this.instance.setTransform(-67.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-66,135,132);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._600_home();
	this.instance.setTransform(0,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-24,300,133);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,229);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(catPercent+"%", "700 64px 'Montserrat'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 59;
	this.text.lineWidth = 156;
	this.text.setTransform(148,357.1);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);

	this.text_1 = new cjs.Text(cat+" votes", "400 17px 'Gotham Book'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 156;
	this.text_1.setTransform(148,423.1);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);

	this.text_2 = new cjs.Text(dogPercent+"%", "700 64px 'Montserrat'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 59;
	this.text_2.lineWidth = 156;
	this.text_2.setTransform(148,91.1);
	this.text_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);

	this.text_3 = new cjs.Text(dog+" votes", "400 17px 'Montserrat'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 156;
	this.text_3.setTransform(148,157.1);
	this.text_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);

	this.instance = new lib._600_fade();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-54,424,724);


(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._600_footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,142);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBJIAAgWIARAAIAAAWgAgDAgIgFhcIAAgMIARAAIAAAMIgFBcg");
	this.shape.setTransform(235.3,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BJIAAiRIBoAAIAAAPIhXAAIAAAyIBOAAIAAAOIhOAAIAAAzIBYAAIAAAPg");
	this.shape_1.setTransform(225.8,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBJIAAiBIgxAAIAAgQIBxAAIAAAQIgxAAIAACBg");
	this.shape_2.setTransform(211.6,29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdBGQgPgHgJgKQgKgKgGgOQgEgOAAgPIAAAAQAAgNAEgOQAGgOAKgLQAKgKAOgHQAOgFAPAAQAQAAAOAFQAOAHAJAKQALAKAFAPQAGANgBAOIAAAAQABAOgGAOQgFAOgLALQgKAKgNAHQgOAFgQABQgQgBgNgFgAgWg2QgLAFgIAHQgHAJgEAKQgFAMABALIAAAAQgBAMAFALQAEALAIAJQAIAHAKAFQALAFALAAQAMAAALgFQAKgFAIgHQAIgIADgLQAFgLAAgNIAAAAQAAgLgFgLQgEgLgHgJQgIgHgKgFQgMgFgLAAQgLAAgLAFg");
	this.shape_3.setTransform(195.9,29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBKIg/iTIASAAIAzB9IA0h9IASAAIg/CTg");
	this.shape_4.setTransform(179,29.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBGQgOgHgJgKQgKgKgGgOQgEgOgBgPIAAAAQABgNAEgOQAGgOAKgLQAKgKAOgHQAOgFAPAAQAQAAAOAFQAOAHAKAKQAKAKAFAPQAFANAAAOIAAAAQAAAOgFAOQgFAOgKALQgKAKgOAHQgOAFgQABQgQgBgOgFgAgWg2QgKAFgJAHQgHAJgEAKQgFAMAAALIAAAAQAAAMAFALQAEALAIAJQAHAHALAFQALAFALAAQAMAAAKgFQALgFAIgHQAHgIAFgLQAEgLAAgNIAAAAQAAgLgEgLQgFgLgIgJQgHgHgLgFQgKgFgMAAQgMAAgKAFg");
	this.shape_5.setTransform(156,29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHBJIAAiBIgxAAIAAgQIBxAAIAAAQIgxAAIAACBg");
	this.shape_6.setTransform(140.2,29.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AApBJIg2hHIggAgIAAAnIgQAAIAAiRIAQAAIAABWIBThWIAVAAIg8BAIA/BRg");
	this.shape_7.setTransform(120.4,29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVBGQgNgGgJgLQgKgKgGgOQgGgOAAgPIAAAAQAAgOAGgOQAGgOAKgKQAJgKAOgHQANgFAPAAQAJAAAJABIAPAFQAGADAHAEIALAKIgLAMQgKgJgLgGQgKgFgPAAQgLAAgKAFQgLAEgHAIQgIAJgEAKQgEAMgBALIAAAAQABAMAEAMQAEALAIAIQAHAHALAFQAKAFALAAQAPAAAKgGQAMgFAKgKIALALIgMALIgOAIQgGADgJABQgIACgKABQgOgBgOgFg");
	this.shape_8.setTransform(104.6,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_9.setTransform(93.5,29.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwBJIAAiRIARAAIAACCIBQAAIAAAPg");
	this.shape_10.setTransform(84.5,29.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUBGQgOgGgKgLQgKgKgFgOQgFgOAAgPIAAAAQAAgOAFgOQAFgOAKgKQAKgKAOgHQANgFAOAAQALAAAHABIAQAFQAHADAFAEIAMAKIgMAMQgJgJgLgGQgLgFgPAAQgKAAgKAFQgKAEgIAIQgIAJgEAKQgFAMABALIAAAAQgBAMAFAMQAEALAIAIQAIAHAKAFQAKAFAKAAQAPAAALgGQAMgFAKgKIALALIgMALIgNAIQgIADgIABQgIACgKABQgOgBgNgFg");
	this.shape_11.setTransform(70,29.8);

	this.instance = new lib._600_bottombar();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,51);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._600_or();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,63);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._600_header();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,36);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZBfIAAgrIApAAIAAArgAgRAfIgGgqIACgBQAXgBALgGQALgHAAgLIAAAAQAAgJgHgFQgGgFgLAAQgKAAgKAEQgKAFgKAJIgYgbQAMgNAQgIQAQgIAUAAQAOAAAMAEQAMADAJAHQAJAHAEALQAFAKAAAOIAAAAQAAANgEAJQgEAKgHAGQgIAFgJAEQgKADgLADIgDAQg");
	this.shape.setTransform(250.9,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBeIgng9IAAAAIghAAIAAA9IgpAAIAAi7IBUAAQAkAAATATQARAQAAAbIAAABQAAAXgMAMQgLAPgSAHIAuBDgAgngCIApAAQAPAAAIgGQAJgIAAgMIAAgBQAAgNgJgHQgJgHgPAAIgoAAg");
	this.shape_1.setTransform(234.7,44.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGBeIAAi7ICMAAIAAAlIhjAAIAAAnIBXAAIAAAjIhXAAIAAAnIBlAAIAAAlg");
	this.shape_2.setTransform(215.6,44.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTBeIAAiVIg6AAIAAgmICbAAIAAAmIg6AAIAACVg");
	this.shape_3.setTransform(197.4,44.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BLQgWgWAAgpIAAhqIAqAAIAABpQAAAXAKALQALAMASAAQASAAALgLQALgLAAgXIAAhqIAqAAIAABoQAAAVgGARQgGAQgLALQgLAKgPAFQgPAGgSAAQglgBgWgUg");
	this.shape_4.setTransform(178.5,44.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBaQgSgIgNgNQgNgNgHgSQgIgSAAgUIAAAAQAAgTAIgSQAHgRANgOQANgNASgIQASgHAUAAQANAAALACQALACAJAEQAJADAIAGIAOAMIgbAeQgLgKgLgFQgMgGgOAAQgLAAgJAFQgKAEgIAIQgHAIgEALQgEALAAALIAAAAQAAALAEALQAEALAHAIQAHAIALAFQAJAFALAAQAQAAALgGQALgGAMgKIAaAaQgHAIgIAGQgIAHgJAEQgKAEgLADQgLACgNAAQgTAAgSgHg");
	this.shape_5.setTransform(158.5,44.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBaQgUgJgRgPIAYgdQANAKAOAHQANAGAPAAQANAAAHgFQAHgEAAgJIAAgBQAAgDgCgDQgBgEgEgCIgMgGIgRgFQgPgEgLgEQgMgFgIgFQgIgFgEgJQgFgKAAgOIAAgBQAAgNAFgKQAFgKAIgIQAJgHAMgFQANgDAOAAQATgBARAHQASAGAOAMIgVAeQgNgIgMgFQgMgFgKAAQgNAAgGAFQgGAEAAAIIAAAAQAAAFACADQACADAEADQAFADAIACIASAGQAOADAMAGQALAEAIAFQAHAGAEAJQAEAJAAANIAAAAQAAAOgFALQgFALgJAIQgJAHgNADQgNAEgPAAQgUAAgVgGg");
	this.shape_6.setTransform(131.5,44.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAaQAagDgBgXIgQAAIAAgqIAqAAIAAAkQAAAZgNAMQgNALgWABg");
	this.shape_7.setTransform(118.8,39.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBZQgSgHgOgNQgNgNgHgSQgIgSAAgUIAAAAQAAgTAIgSQAHgRAOgOQANgNATgIQASgHAUAAQAWAAASAHQASAIAOANQANANAIASQAHASAAATIAAAAQAAAUgIARQgHASgOANQgNAOgSAHQgTAIgVAAQgVAAgSgIgAgWg1QgKAEgIAIQgHAIgEALQgEALAAALIAAAAQAAALAEALQAEALAIAIQAHAIALAFQAKAFALAAQAMAAALgFQAKgFAIgIQAHgIAEgKQAEgLAAgMIAAAAQAAgLgEgLQgEgKgIgJQgHgIgLgEQgKgFgMAAQgLAAgLAFg");
	this.shape_8.setTransform(103.8,44.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmBeIAAhMIhLAAIAABMIgqAAIAAi7IAqAAIAABLIBLAAIAAhLIApAAIAAC7g");
	this.shape_9.setTransform(82.1,44.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqBfIgqh6IgpB6IglAAIhAi8IAsAAIAoB+IAqh/IAiAAIArB/IAmh+IAsAAIhAC8g");
	this.shape_10.setTransform(56.7,44.8);

	this.instance = new lib._600_topbar();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,85);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dog();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,240);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		canvas.onclick = function(event) {
		    this.gotoAndPlay(75);
			getCursorPosition(canvas, event);
		}.bind(this);
	}
	function getCursorPosition(canvas, event) {
		var rect = canvas.getBoundingClientRect();
		var x = event.clientX - rect.left;
		var y = event.clientY - rect.top;
		
		if(y<=326){
			dog++;
		}else{
			cat++;
		}
		
		console.log("x: " + x + " y: " + y+ " dog: " + dog+ " cat: " + cat);
		document.getElementById("bg-exit").style.display = 'block';
		document.getElementById("block1").style.display = 'none';
		document.getElementById("block2").style.display = 'none';
		document.getElementById("block3").style.display = 'none';
		
		var getTotalAnswer = 'var dog = '+dog+';var cat = '+cat+';';
		$.post("http://www.diainc.com/clients/long/26769/debate/debate.php", { total: getTotalAnswer });	
	}
	this.frame_65 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_234 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1).call(this.frame_65).wait(169).call(this.frame_234).wait(1));

	// Layer 8
	this.instance = new lib._600_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235));

	// Layer 2
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(150,447.3,1,1,0,0,0,150,63.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).to({y:387.5,alpha:1},13).wait(43));

	// Layer 3
	this.instance_2 = new lib.Symbol10();
	this.instance_2.setTransform(80,258.5,1,1,0,0,0,80,74.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(162).to({_off:false},0).to({y:128.5,alpha:1},13).wait(60));

	// Layer 15
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(203,353,1,1,0,0,0,53,53);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(171).to({_off:false},0).to({y:273,alpha:1},13).wait(51));

	// Layer 14
	this.instance_4 = new lib.Symbol5copy();
	this.instance_4.setTransform(150,674.5,1,1,0,0,0,150,25.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(207).to({_off:false},0).to({y:482.5},13).wait(15));

	// Layer 13
	this.instance_5 = new lib.Symbol2copy();
	this.instance_5.setTransform(150,-57.5,1,1,0,0,0,150,42.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(152).to({_off:false},0).to({y:42.5},13).wait(70));

	// Layer 12
	this.instance_6 = new lib.Symbol3();
	this.instance_6.setTransform(150,322.5,1,1,0,0,0,150,31.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({alpha:1},13).wait(106).to({alpha:0},11).wait(84));

	// Layer 11
	this.instance_7 = new lib.Symbol6();
	this.instance_7.setTransform(150,299,1,1,0,0,0,150,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(75).to({_off:false},0).to({alpha:1},13).wait(52).to({alpha:0},11).wait(84));

	// Layer 10
	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(150,438.5,1,1,0,0,0,150,110.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).to({alpha:1},13).wait(12).to({alpha:0.199},0).wait(5).to({alpha:1},0).wait(78).to({alpha:0},11).wait(84));

	// Layer 1
	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(150,205,1,1,0,0,0,150,121);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23).to({_off:false},0).to({alpha:1},13).wait(13).to({alpha:0.199},0).wait(5).to({alpha:1},0).wait(86).to({alpha:0},11).wait(84));

	// Layer 7
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(150,654.5,1,1,0,0,0,150,25.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).to({y:574.5},13).wait(111).to({y:654.5},11).wait(84));

	// Layer 6
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(150,-57.5,1,1,0,0,0,150,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:42.5},13).wait(127).to({y:-57.5},11).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,200,300,700);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, dog, cat);
var lib, images, createjs, ss;