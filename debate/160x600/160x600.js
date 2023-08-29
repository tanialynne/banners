(function (lib, img, cjs, ss, dog, cat) {

totalVotes =  dog+cat;
dogPercent = Math.round((dog/totalVotes)*100);
catPercent = Math.round((cat/totalVotes)*100);

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_160_border.png", id:"_160_border"},
		{src:"_160_bottombar.jpg", id:"_160_bottombar"},
		{src:"_160_circle.png", id:"_160_circle"},
		{src:"_160_fade.png", id:"_160_fade"},
		{src:"_160_footer.jpg", id:"_160_footer"},
		{src:"_160_or.png", id:"_160_or"},
		{src:"_160_topbar.jpg", id:"_160_topbar"},
		{src:"_160_debate.png", id:"_160_debate"},
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



(lib._160_border = function() {
	this.initialize(img._160_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib._160_bottombar = function() {
	this.initialize(img._160_bottombar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,138);


(lib._160_circle = function() {
	this.initialize(img._160_circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,92);


(lib._160_fade = function() {
	this.initialize(img._160_fade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib._160_footer = function() {
	this.initialize(img._160_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,92);


(lib._160_or = function() {
	this.initialize(img._160_or);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,63);


(lib._160_topbar = function() {
	this.initialize(img._160_topbar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,33);


(lib._160_debate = function() {
	this.initialize(img._160_debate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,55);


(lib.cat = function() {
	this.initialize(img.cat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,226);


(lib.dog = function() {
	this.initialize(img.dog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,238);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C32030").s().p("AgXBoIAAgwIAvAAIAAAwgAgLAhIgOiCIAAgHIAzAAIAAAHIgOCCg");
	this.shape.setTransform(144.2,193.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C32030").s().p("AhOBoIAAjQICcAAIAAAqIhuAAIAAAqIBhAAIAAAoIhhAAIAAAsIBwAAIAAAog");
	this.shape_1.setTransform(129.8,193.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C32030").s().p("AgWBoIAAilIg/AAIAAgrICrAAIAAArIg/AAIAAClg");
	this.shape_2.setTransform(109.5,193.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C32030").s().p("AA+BpIgTgvIhXAAIgTAvIgvAAIBbjRIAoAAIBaDRgAgbARIA2AAIgbhCg");
	this.shape_3.setTransform(88,193.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C32030").s().p("AhYBoIAAjQIBgAAQAkAAATATQAOAPAAAVIAAAAQAAAJgCAIIgGAMQgEAFgFAEIgKAHQASAGAKALQALAMAAAWIAAAAQAAAPgGAKQgFALgLAHQgKAIgOADQgPAEgSgBgAgrBAIA1AAQAQAAAIgGQAJgFAAgMIAAgBQAAgKgIgGQgIgGgSAAIg0AAgAgrgTIArAAQANABAJgGQAJgFAAgMIAAAAQAAgLgHgGQgIgFgPAAIgsAAg");
	this.shape_4.setTransform(65.9,193.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C32030").s().p("AhPBoIAAjQICdAAIAAAqIhuAAIAAAqIBhAAIAAAoIhhAAIAAAsIBvAAIAAAog");
	this.shape_5.setTransform(44.9,193.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C32030").s().p("AhfBoIAAjQIBSAAQAWAAAVAJQAVAHAOAOQAPAPAIATQAIASAAAWIAAAAQAAAVgIAUQgIATgPAOQgOAOgVAIQgVAIgWAAgAgxA/IAkAAQANAAALgFQALgEAJgIQAIgJAEgLQAFgMAAgOIAAAAQAAgMgFgMQgEgMgIgIQgJgJgLgEQgLgFgNAAIgkAAg");
	this.shape_6.setTransform(23.1,193.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C32030").s().p("AAlBpIgshEIAAAAIgkAAIAABEIguAAIAAjQIBeAAQAogBAVAWQASARAAAeIAAABQAAAagMAOQgNAQgUAIIAzBLgAgrgBIAtAAQARAAAJgJQAJgIAAgNIAAgBQAAgPgJgIQgKgHgRAAIgsAAg");
	this.shape_7.setTransform(103.3,150.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C32030").s().p("AgrBjQgVgIgOgOQgQgPgIgUQgIgUAAgWIAAAAQAAgVAIgTQAJgUAPgPQAPgPAUgJQAVgIAWAAQAYAAAVAIQAUAJAPAPQAOAOAJAUQAIATAAAWIAAAAQAAAWgJAUQgIATgOAPQgPAPgVAIQgUAJgYAAQgXAAgUgJgAgYg8QgMAGgIAIQgIAKgFALQgFANABAMIAAAAQgBANAFAMQAFAMAIAJQAJAJALAFQALAFANABQANgBAMgFQAMgEAIgKQAIgIAFgNQAEgMABgNIAAAAQgBgMgEgMQgFgMgIgJQgJgJgLgFQgMgFgNAAQgNAAgLAEg");
	this.shape_8.setTransform(79,150.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C32030").s().p("AhPBpIAAjQICfAAIAAApIhwAAIAAAtIBiAAIAAAoIhiAAIAABSg");
	this.shape_9.setTransform(57.1,150.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C32030").s().p("ABeBPIAAhZQAAgWgLgMQgKgNgTAAQgJAAgIAEQgHADgHAGQgFAGgEAJQgDAJAAALIAABYIgVAAIAAhaQAAgVgLgMQgKgNgTAAQgJAAgIAEQgIAEgFAGQgHAHgCAJQgEAIAAALIAABXIgXAAIAAiZIAXAAIAAAaIAIgLQAFgGAGgEQAGgEAIgCQAHgDAKAAQATAAAMAJQAMAJAFANIAJgMIAMgKQAHgEAIgCQAIgDAKAAQAcAAAPARQAPARAAAdIAABeg");
	this.shape_10.setTransform(105.6,109.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C32030").s().p("AgfBKQgPgGgLgLQgKgLgGgPQgGgOAAgRIAAAAQAAgPAGgPQAGgOAKgMQALgLAPgGQAPgHAQAAQARAAAPAHQAPAGAKALQALALAGAPQAGAPAAAPIAAAAQAAAQgGAPQgGAPgLALQgLALgPAGQgPAHgQgBQgRABgOgHgAgWg2QgLAEgHAJQgHAIgFALQgEALAAALIAAAAQAAAMAFALQAEALAIAIQAHAJALAEQAKAFALAAQAMAAALgFQAKgEAIgJQAHgIAEgLQAEgLAAgMIAAAAQAAgLgEgLQgEgLgIgIQgIgIgKgFQgLgFgLAAQgMAAgKAFg");
	this.shape_11.setTransform(81.5,109.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C32030").s().p("AgfBKQgPgGgLgLQgKgLgGgPQgGgOAAgRIAAAAQAAgPAGgPQAGgOAKgMQALgLAPgGQAPgHAQAAQARAAAPAHQAPAGAKALQALALAGAPQAGAPAAAPIAAAAQAAAQgGAPQgGAPgLALQgLALgPAGQgPAHgQgBQgRABgOgHgAgWg2QgLAEgHAJQgHAIgFALQgEALAAALIAAAAQAAAMAFALQAEALAIAIQAHAJALAEQAKAFALAAQAMAAALgFQAKgEAIgJQAHgIAEgLQAEgLAAgMIAAAAQAAgLgEgLQgEgLgIgIQgIgIgKgFQgLgFgLAAQgMAAgKAFg");
	this.shape_12.setTransform(62.1,109.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C32030").s().p("AgqBPIAAiaIAYAAIAAApQAEgJAGgJQAHgIAFgGQAIgFAKgEQAKgDALAAIAAAaIgCAAQgNgBgLAFQgLAEgGAKQgJAIgFAOQgEAMAAARIAAA+g");
	this.shape_13.setTransform(47.2,109.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C32030").s().p("AgcBKQgRgHgOgKIANgQQAMAJAOAFQAOAGALAAQAPgBAIgGQAKgGgBgMIAAgBQABgFgEgEQgDgFgFgDIgNgFIgNgFIgRgGQgKgCgHgEQgHgFgFgHQgEgHgBgLIAAgBQAAgJAFgJQADgHAIgGQAHgHAJgCQAKgEAJAAQAPAAAOAFQAPAFAMAHIgLASQgLgHgLgEQgMgFgLAAQgMAAgIAHQgIAGAAALIAAAAQgBAFAEAEQADAFAGADIAMAEIANAGIASAGQAJADAIADQAGAFAFAHQAFAIAAAKIAAABQAAALgFAIQgFAIgHAHQgHAFgKAEQgKADgMAAQgPAAgRgGg");
	this.shape_14.setTransform(122.9,63.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C32030").s().p("Ag2BjQgJgCgHgDIAHgSQAGACAGABQAGACAHAAQAKAAAIgGQAHgGAGgRIhGiZIAZAAIA3B/IAyh/IAZAAIhBCfQgKAYgLAKQgMAJgRABQgKAAgHgDg");
	this.shape_15.setTransform(106.8,66);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C32030").s().p("AgeBNQgLgDgIgHQgIgGgFgIQgFgKAAgMIAAAAQAAgMAFgKQAFgJAJgFQAJgGAMgDQAMgDAPAAQANAAALABIAVAFIAAgFQAAgUgMgMQgMgKgVAAQgNAAgLADQgLADgLAFIgHgTQANgGANgEQANgDAPAAQAhAAASARQAQARAAAdIAABcIgXAAIAAgWQgIAKgOAIQgNAIgTAAQgLAAgKgDgAgfAHQgMAIAAAPIAAAAQAAAIADAGQADAGAFADQAGAEAHACQAHADAIAAQAJgBAJgDQAJgCAHgHQAHgFAEgHQAEgIAAgJIAAgPIgTgEQgMgBgOAAQgUAAgLAHg");
	this.shape_16.setTransform(88.8,63.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C32030").s().p("AAqBOIgqh4IgoB4IgVAAIg2iaIAZAAIAoB6IAqh7IARAAIArB7IAoh6IAYAAIg3Cag");
	this.shape_17.setTransform(67.6,63.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C32030").s().p("AgKBtIAAjZIAVAAIAADZg");
	this.shape_18.setTransform(50.8,60.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C32030").s().p("AgeBNQgLgDgIgHQgIgGgFgIQgFgKAAgMIAAAAQAAgMAFgKQAFgJAJgFQAJgGAMgDQAMgDAPAAQANAAALABIAVAFIAAgFQAAgUgMgMQgMgKgVAAQgNAAgLADQgLADgLAFIgHgTQANgGANgEQANgDAPAAQAhAAASARQAQARAAAdIAABcIgXAAIAAgWQgIAKgOAIQgNAIgTAAQgLAAgKgDgAgfAHQgMAIAAAPIAAAAQAAAIADAGQADAGAFADQAGAEAHACQAHADAIAAQAJgBAJgDQAJgCAHgHQAHgFAEgHQAEgIAAgJIAAgPIgTgEQgMgBgOAAQgUAAgLAHg");
	this.shape_19.setTransform(37.7,63.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C32030").s().p("AgcBKQgRgGgNgLIAMgQQAMAJAOAGQANAEAMAAQAPAAAIgGQAJgHAAgLIAAgBQAAgFgDgFQgDgEgGgDIgMgFIgNgFIgSgGQgJgCgHgEQgHgFgFgHQgFgHAAgLIAAgBQABgJAEgJQADgHAHgGQAIgHAJgCQAKgEAJAAQAOAAAQAFQAOAFAMAHIgLARQgKgGgMgEQgMgFgLABQgMgBgIAHQgJAGABAKIAAABQAAAFADAEQADAFAGADIANAFIAMAEIASAHQAJADAHADQAIAFAEAHQAEAHABALIAAAAQgBALgEAJQgEAIgIAHQgHAFgLAEQgJADgMAAQgPAAgRgGg");
	this.shape_20.setTransform(126.2,21.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C32030").s().p("AgRAXQALgEAFgGQADgHgBgHIgJAAIAAggIAaAAIAAAbQAAAQgIAKQgIAJgPAFg");
	this.shape_21.setTransform(115,11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C32030").s().p("AgZBLQgOgGgKgKQgLgMgGgOQgGgPAAgSQAAgPAFgPQAGgPAKgLQAKgLAOgGQANgHAOAAQARAAAOAHQAOAGAJAMQAJALAFAPQAFAPAAAPIAAADIgBAFIh5AAQACAMAEAKQAFAKAIAGQAHAHAJADQAKADAIAAQAQABAMgHQALgFAKgKIAOAMQgLAOgPAIQgPAIgXgBQgOABgOgGgAgRg4QgJAEgGAHQgHAHgEAJQgEAKgCALIBiAAQgBgKgDgKQgEgJgGgIQgGgGgJgEQgJgFgLAAQgIAAgJAEg");
	this.shape_22.setTransform(102.9,21.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C32030").s().p("AgqBOIAAiZIAYAAIAAApQAEgJAGgJQAHgIAGgGQAHgGAKgDQAKgCALAAIAAAZIgCAAQgNgBgLAFQgLAEgGAKQgJAIgFAOQgEAMAAARIAAA9g");
	this.shape_23.setTransform(88.7,21.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C32030").s().p("AgZBLQgOgGgKgKQgLgMgGgOQgGgPAAgSQAAgPAFgPQAGgPAKgLQAKgLAOgGQANgHAOAAQARAAAOAHQAOAGAJAMQAJALAFAPQAFAPAAAPIAAADIgBAFIh5AAQACAMAEAKQAFAKAIAGQAHAHAJADQAKADAIAAQAQABAMgHQALgFAKgKIAOAMQgLAOgPAIQgPAIgXgBQgOABgOgGgAgRg4QgJAEgGAHQgHAHgEAJQgEAKgCALIBiAAQgBgKgDgKQgEgJgGgIQgGgGgJgEQgJgFgLAAQgIAAgJAEg");
	this.shape_24.setTransform(73,21.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C32030").s().p("AAsBtIAAhaQAAgUgLgNQgLgMgVAAQgIgBgIAEQgJADgGAHQgGAGgEAIQgDAJAAAKIAABZIgXAAIAAjZIAXAAIAABbQAHgNANgJQANgIASgBQAOAAALAFQALAFAHAIQAIAIAEALQAEALAAANIAABgg");
	this.shape_25.setTransform(54.9,18.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C32030").s().p("AgKBoIAAi5IhHAAIAAgXICjAAIAAAXIhGAAIAAC5g");
	this.shape_26.setTransform(35.8,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,210.9);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_or();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,63);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_circle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,92);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	// Layer 1
	this.text = new cjs.Text(catPercent+"%", "700 64px 'Montserrat'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 59;
	this.text.lineWidth = 166;
	this.text.setTransform(78,267.1);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);
	
	this.text_1 = new cjs.Text(cat+" votes", "400 17px 'Montserrat'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 156;
	this.text_1.setTransform(78,333.1);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);
	
	this.text_2 = new cjs.Text(dogPercent+"%", "700 64px 'Montserrat'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 59;
	this.text_2.lineWidth = 156;
	this.text_2.setTransform(78,-4.1);
	this.text_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);
	
	this.text_3 = new cjs.Text(dog+" votes", "400 17px 'Montserrat'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 156;
	this.text_3.setTransform(78,62.1);
	this.text_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,8);

	this.instance = new lib._160_fade();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-54,284,724);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_footer();
	this.instance.setTransform(0,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,45,160,92);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dog();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,238);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cat();
	this.instance.setTransform(0,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,160,226);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_topbar();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,33);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGA0IAAgQIAMAAIAAAQgAgCAWIgEhBIAAgIIAMAAIAAAIIgDBBg");
	this.shape.setTransform(133.4,112.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA0IAAhnIBKAAIAAAKIg+AAIAAAkIA3AAIAAAJIg3AAIAAAlIA/AAIAAALg");
	this.shape_1.setTransform(126.6,112.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiA0IhBhUIAABUIgMAAIAAhnIALAAIBABSIAAhSIAMAAIAABng");
	this.shape_2.setTransform(115.4,112.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAxQgJgEgHgIQgHgHgEgKQgEgKAAgKIAAAAQAAgJAEgKQAEgKAHgHQAHgIAKgFQAKgEAKAAQAMAAAKAEQAJAFAHAIQAHAHAEAKQAEAKAAAJIAAAAQAAALgEAJQgEAKgHAHQgHAIgKAEQgKAFgLAAQgLAAgKgFgAgPgnQgIAEgFAGQgGAFgDAJQgDAIAAAHIAAAAQAAAJADAIQADAHAGAGQAGAGAHADQAIAEAHAAQAJAAAHgEQAIgDAFgGQAGgGADgHQADgIAAgJIAAAAQAAgHgDgIQgDgIgGgGQgGgGgHgEQgIgDgIAAQgIAAgHADg");
	this.shape_3.setTransform(103.1,112.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglA0IAAhnIBKAAIAAAKIg+AAIAAAkIA3AAIAAAJIg3AAIAAAlIA/AAIAAALg");
	this.shape_4.setTransform(87.5,112.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAxQgKgDgKgKIAIgIQAIAIAIADQAJAEAJAAQAKAAAHgFQAGgFAAgIIAAAAIgBgHQgBgDgDgCQgDgCgGgCIgNgEQgHgCgHgDQgHgBgEgDQgEgDgCgGQgDgEAAgHIAAAAQAAgGADgFQADgFAEgEQAFgEAGgDQAGgBAHAAQAKAAAJACQAJAEAIAGIgHAJQgHgFgIgDQgHgDgHAAQgKAAgGAFQgGAFAAAHIAAABIABAGIAFAFQADADAGACIAMAEQARAEAJAEQAIAIAAAMIAAAAQAAAHgDAFQgCAGgFADQgFAFgGACQgHACgIAAQgLAAgKgFg");
	this.shape_5.setTransform(77.3,112.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAxQgJgEgHgIQgHgHgEgKQgEgKAAgKIAAAAQAAgJAEgKQAEgKAHgHQAHgIAKgFQAKgEAKAAQAMAAAKAEQAJAFAHAIQAHAHAEAKQAEAKAAAJIAAAAQAAALgEAJQgEAKgHAHQgHAIgKAEQgKAFgLAAQgLAAgKgFgAgPgnQgIAEgFAGQgGAFgDAJQgDAIAAAHIAAAAQAAAJADAIQADAHAGAGQAGAGAHADQAIAEAHAAQAJAAAHgEQAIgDAFgGQAGgGADgHQADgIAAgJIAAAAQAAgHgDgIQgDgIgGgGQgGgGgHgEQgIgDgIAAQgIAAgHADg");
	this.shape_6.setTransform(66.2,112.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAxQgJgEgHgIQgHgHgEgKQgEgKAAgKIAAAAQAAgJAEgKQAEgKAHgHQAHgIAKgFQAKgEAKAAQAMAAAKAEQAJAFAHAIQAHAHAEAKQAEAKAAAJIAAAAQAAALgEAJQgEAKgHAHQgHAIgKAEQgKAFgLAAQgLAAgKgFgAgPgnQgIAEgFAGQgGAFgDAJQgDAIAAAHIAAAAQAAAJADAIQADAHAGAGQAGAGAHADQAIAEAHAAQAJAAAHgEQAIgDAFgGQAGgGADgHQADgIAAgJIAAAAQAAgHgDgIQgDgIgGgGQgGgGgHgEQgIgDgIAAQgIAAgHADg");
	this.shape_7.setTransform(53.4,112.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeA0IAAgvIg7AAIAAAvIgLAAIAAhnIALAAIAAAuIA7AAIAAguIALAAIAABng");
	this.shape_8.setTransform(41.4,112.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAxQgKgEgHgHQgHgHgEgKQgEgKAAgLIAAAAQAAgKAEgJQAEgKAHgIQAHgHAKgFQAKgEAKAAQAGAAAGABQAGACAFACIAJAFIAIAHIgIAJQgHgHgHgEQgIgEgLAAQgGAAgIADQgHAEgGAFQgFAGgDAJQgEAIAAAHIAAAAQAAAJAEAIQADAHAFAGQAGAGAHADQAIAEAGAAQALAAAIgEQAHgEAIgHIAIAIIgIAHQgFADgFACIgLAFQgGABgHAAQgKAAgJgFg");
	this.shape_9.setTransform(30.4,112.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBqIAAgwIAwAAIAAAwgAgTAiIgHguIADgCQAZgBAMgHQAMgHAAgMIAAgBQAAgKgGgFQgIgGgMAAQgLAAgLAFQgLAFgLALIgcgfQANgOATgJQARgJAXAAQAQAAAOAEQANAEAJAIQAKAIAFAMQAFALABAPIAAABQAAAOgFAKQgFALgHAHQgJAFgKAEQgLAFgNACIgDASg");
	this.shape_10.setTransform(131.8,69.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlBoIgshCIAAAAIgkAAIAABCIguAAIAAjPIBeAAQAogBAVAVQASASAAAeIAAABQAAAagMAOQgNAQgUAIIAzBKgAgrgBIAtAAQARAAAJgJQAJgHAAgOIAAgBQAAgPgJgIQgKgHgRAAIgsAAg");
	this.shape_11.setTransform(113.8,70.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhPBoIAAjPICdAAIAAAoIhvAAIAAArIBhAAIAAAoIhhAAIAAArIBxAAIAAApg");
	this.shape_12.setTransform(92.6,70.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWBoIAAilIg/AAIAAgqICrAAIAAAqIg/AAIAAClg");
	this.shape_13.setTransform(72.4,70.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhBBTQgZgYAAguIAAh2IAuAAIAAB0QAAAaAMANQAMANAUAAQAVAAAMgMQAMgNgBgZIAAh2IAvAAIAAB0QAAAYgHASQgGASgMAMQgMALgRAGQgSAGgTAAQgqAAgXgXg");
	this.shape_14.setTransform(51.3,70.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfBkQgTgIgPgPQgOgOgIgVQgIgTAAgXIAAAAQAAgVAIgTQAIgUAOgPQAPgPAUgJQAUgIAWAAQAPAAAMADQAMACAKAEQAKAEAIAGQAJAGAHAIIgeAiQgMgMgNgGQgMgGgQAAQgMgBgLAGQgLAFgIAIQgIAKgFALQgEAMAAANIAAAAQAAANAEAMQAFAMAIAJQAIAJALAFQALAFAMABQASAAAMgHQANgGAMgMIAdAdQgIAKgIAGQgJAHgKAFQgLAFgMACQgMADgQAAQgVAAgUgIg");
	this.shape_15.setTransform(29.1,70.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnBjQgXgIgUgSIAbggQAPAMAPAHQAQAGAPAAQAPAAAIgEQAIgGAAgJIAAgBQAAgEgCgEQgCgDgEgDIgNgGIgTgHIgdgIQgNgFgKgGQgJgGgEgLQgGgKAAgQIAAAAQABgPAFgLQAGgLAJgJQAKgJAOgEQANgEAQAAQAVgBAUAIQATAGAQANIgYAjQgOgJgOgGQgNgGgMABQgNAAgGAEQgIAGAAAIIAAABQAAAFACADQACAEAFADQAFADAKADIAUAGQAQAEAMAGQANAEAJAGQAIAHAEAKQAFAKAAAOIAAABQAAAPgGAMQgGAMgKAIQgKAJgOAEQgPAEgQABQgXgBgWgIg");
	this.shape_16.setTransform(124.1,36.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAdQAegDgCgaIgRAAIAAgvIAuAAIAAApQAAAcgOANQgOANgZAAg");
	this.shape_17.setTransform(109.9,31.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgrBjQgVgIgOgOQgQgPgIgUQgIgUAAgWIAAAAQAAgVAIgUQAJgTAPgPQAPgPAUgIQAUgJAXAAQAYAAAVAJQAUAIAPAOQAPAPAIAUQAIAUAAAVIAAAAQAAAWgJAUQgIATgOAPQgQAPgUAIQgUAJgYAAQgXAAgUgJgAgYg8QgMAGgIAJQgJAIgEAMQgFAMABANIAAAAQgBANAFAMQAEAMAJAJQAIAJAMAGQALAEANAAQANAAAMgEQAMgGAIgJQAIgIAFgMQAFgMAAgOIAAAAQAAgMgFgMQgFgMgIgJQgIgJgNgFQgLgGgNABQgNAAgLAEg");
	this.shape_18.setTransform(93.3,36.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAqBpIAAhVIhTAAIAABVIguAAIAAjRIAuAAIAABUIBTAAIAAhUIAuAAIAADRg");
	this.shape_19.setTransform(69.1,36.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAvBpIgviHIguCHIgoAAIhIjRIAyAAIArCMIAviMIAmAAIAvCMIAsiMIAwAAIhIDRg");
	this.shape_20.setTransform(40.9,37);

	this.instance = new lib._160_bottombar();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,161,138);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._160_debate();
	this.instance.setTransform(10,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,41,140,55);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(0,25.7,1,1,0,0,0,80,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-48.8,160,210.9);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		
	}
	this.frame_65 = function() {
		canvas.onclick = function(event) {
		    this.gotoAndPlay(91);
			getCursorPosition(canvas, event);
		}.bind(this);
		
		canvas.mouseover = function(event){
		}.bind(this);
	}
	function getCursorPosition(canvas, event) {
		var rect = canvas.getBoundingClientRect();
		var x = event.clientX - rect.left;
		var y = event.clientY - rect.top;
		
		if(y<=241){
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(62).call(this.frame_65).wait(1).call(this.frame_66).wait(184));

	// Layer 7
	this.movieClip_1 = new lib.Symbol11();
	this.movieClip_1.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(250));

	// Layer 12
	this.instance = new lib.Symbol6();
	this.instance.setTransform(80,681.5,1,1,0,0,0,80,68.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(196).to({_off:false},0).to({y:531.5},14).wait(40));

	// Layer 4
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(80,386,1,1,0,0,0,45.5,46);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(220).to({_off:false},0).to({y:346,alpha:1},14).wait(16));

	// Layer 2
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(80,477,1,1,0,0,0,80,34);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229).to({_off:false},0).to({y:417,alpha:1},14).wait(7));

	// Layer 1
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(80,189.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(212).to({_off:false},0).to({y:119.2,alpha:1},14).wait(24));

	// Layer 13
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(80,-33.5,1,1,0,0,0,80,16.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(196).to({_off:false},0).to({y:16.5},14).wait(40));

	// Layer 10
	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(80,243,1,1,0,0,0,80,31.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({alpha:1},14).wait(154).to({alpha:0},13).wait(55));

	// Layer 11
	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(91).to({_off:false},0).to({alpha:1},14).wait(77).to({alpha:0},13).wait(55));

	// Layer 9
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(80,120.5,1,1,0,0,0,80,120.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({alpha:1},14).wait(12).to({alpha:0.199},0).wait(4).to({alpha:1},0).wait(128).to({alpha:0},13).wait(55));

	// Layer 6
	this.instance_8 = new lib.Symbol4();
	this.instance_8.setTransform(80,351.5,1,1,0,0,0,80,110.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33).to({_off:false},0).to({alpha:1},14).wait(9).to({alpha:0.199},0).wait(4).to({alpha:1},0).wait(122).to({alpha:0},13).wait(55));

	// Layer 5
	this.instance_9 = new lib.Symbol2();
	this.instance_9.setTransform(81,681,1,1,0,0,0,80,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:531},14).wait(168).to({y:691},13).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,161,750);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, dog, cat);
var lib, images, createjs, ss;