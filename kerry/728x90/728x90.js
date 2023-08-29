(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_728_bg.jpg", id:"_728_bg"},
		{src:"_728_border.png", id:"_728_border"},
		{src:"_728_kerry.jpg", id:"_728_kerry"},
		{src:"_728_logo.png", id:"_728_logo"},
		{src:"_728_tcc.png", id:"_728_tcc"}
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



(lib._728_bg = function() {
	this.initialize(img._728_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib._728_border = function() {
	this.initialize(img._728_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib._728_kerry = function() {
	this.initialize(img._728_kerry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,90);


(lib._728_logo = function() {
	this.initialize(img._728_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,90);


(lib._728_tcc = function() {
	this.initialize(img._728_tcc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,39);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgoBPIAAidIAoAAQATAAAMAMQAKAMABAYIAAA9QgBAZgKALQgMAMgTAAgAgNA5IAKAAQAIAAAEgGQAFgEAAgNIAAhDQAAgNgFgEQgEgGgIAAIgKAAg");
	this.shape.setTransform(84.5,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AARBPIghhiIAABiIgZAAIAAidIAaAAIAgBZIAAhZIAZAAIAACdg");
	this.shape_1.setTransform(73.5,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_2.setTransform(63.1,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AAfBPIAAh6IAAAAIgZB6IgLAAIgZh6IAAAAIAAB6IgYAAIAAidIAkAAIASBbIAAAAIAThbIAkAAIAACdg");
	this.shape_3.setTransform(51.5,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAVIghAAIAAAwIAvAAIAAAXg");
	this.shape_4.setTransform(40.1,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgpBPIAAidIApAAQAUAAAKAMQALAMAAAYIAAA9QAAAZgLALQgKAMgUAAgAgNA5IAJAAQAJAAAFgGQAEgEAAgNIAAhDQAAgNgEgEQgFgGgJAAIgJAAg");
	this.shape_5.setTransform(29.5,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AARBPIghhiIAABiIgZAAIAAidIAaAAIAgBZIAAhZIAZAAIAACdg");
	this.shape_6.setTransform(13.6,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgMBPIAAidIAZAAIAACdg");
	this.shape_7.setTransform(5.1,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.2,30.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape.setTransform(322.5,55.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgZBZQgLgIgGgLQgFgLgBgPIAfgEQABAOAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgJgHgHIgUgPQgKgJgGgLQgHgMAAgQQAAgWANgNQANgMAWAAQANAAAKAGQAJAGAGAKQAFAKACAOIgfADQgBgMgFgFQgFgEgGABQgGAAgEAEQgEAFAAAJQAAAJAHAJQAGAHAIAJIATAPQAKAIAHANQAGALAAAPQAAAPgGALQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_1.setTransform(313.8,47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgZBZQgLgIgGgLQgFgLgBgPIAfgEQABAOAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgJgHgHIgUgPQgKgJgGgLQgHgMAAgQQAAgWANgNQANgMAWAAQANAAAKAGQAJAGAGAKQAFAKACAOIgfADQgBgMgFgFQgFgEgGABQgGAAgEAEQgEAFAAAJQAAAJAHAJQAGAHAIAJIATAPQAKAIAHANQAGALAAAPQAAAPgGALQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_2.setTransform(302.2,47.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgrBeIAAi6IBUAAIAAAcIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA4AAIAAAcg");
	this.shape_3.setTransform(291.1,47.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgoBeIAAi6IAgAAIAACeIAxAAIAAAcg");
	this.shape_4.setTransform(280.5,47.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi6IAuAAQAZgBANANQAOANAAAeQAAAPgDAKQgEAKgFADQgFAFgFACIAbBWgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgRgGgFQgFgHgLABIgLAAg");
	this.shape_5.setTransform(262.9,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgaBZQgLgGgFgLQgGgLAAgNIAAhfQAAgNAGgLQAFgLALgGQALgGAPgBQAQABALAGQALAGAGALQAFALAAANIAABfQAAANgFALQgGALgLAGQgLAHgQAAQgPAAgLgHgAgMg+QgEAGAAAKIAABdQAAALAEAFQAEAFAIAAQAJAAAEgFQAEgFAAgLIAAhdQAAgKgEgGQgEgEgJAAQgIAAgEAEg");
	this.shape_6.setTransform(249.7,47.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgZBZQgLgIgGgLQgFgLgBgPIAfgEQABAOAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgJgHgHIgUgPQgKgJgGgLQgHgMAAgQQAAgWANgNQANgMAWAAQANAAAKAGQAJAGAGAKQAFAKACAOIgfADQgBgMgFgFQgFgEgGABQgGAAgEAEQgEAFAAAJQAAAJAHAJQAGAHAIAJIATAPQAKAIAHANQAGALAAAPQAAAPgGALQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_7.setTransform(231.5,47.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AATBeIgVhOIgIAAIgIAAIAABOIghAAIAAi6IAuAAQAZgBANANQAOANAAAeQAAAPgDAKQgEAKgFADQgFAFgFACIAbBWgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgRgGgFQgFgHgLABIgLAAg");
	this.shape_8.setTransform(219.6,47.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AAXBeIgGgqIghAAIgGAqIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_9.setTransform(207.1,47.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgrBeIAAi6IBUAAIAAAcIg0AAIAAAxIAoAAIAAAaIgoAAIAAA3IA4AAIAAAcg");
	this.shape_10.setTransform(195.8,47.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgPBeIAAhPIgnhrIAhAAIAVBHIAAAAIAWhHIAhAAIgnBrIAABPg");
	this.shape_11.setTransform(184,47.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgaBZQgLgGgFgLQgGgLAAgNIAAhfQAAgNAGgLQAFgLALgGQALgGAPgBQAQABAMAGQAKAGAGALQAFALAAANIAABfQAAANgFALQgGALgKAGQgMAHgQAAQgPAAgLgHgAgMg+QgEAGABAKIAABdQgBALAEAFQAEAFAIAAQAJAAAEgFQAEgFAAgLIAAhdQAAgKgEgGQgEgEgJAAQgIAAgEAEg");
	this.shape_12.setTransform(166,47.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AAYBeIgYh7IAAAAIgUB7IgbAAIgki6IAeAAIAUB1IABAAIAVh1IAYAAIAWB1IABAAIASh1IAeAAIghC6g");
	this.shape_13.setTransform(150.5,47.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgPBeIAAieIgfAAIAAgcIBdAAIAAAcIgfAAIAACeg");
	this.shape_14.setTransform(137.1,47.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AAVBeIgoh0IAAAAIAAB0IgdAAIAAi6IAeAAIAmBpIAAAAIAAhpIAdAAIAAC6g");
	this.shape_15.setTransform(119.8,47.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgPBeIAAi6IAfAAIAAC6g");
	this.shape_16.setTransform(109.6,47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104,30,223.6,35.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgHgIABQgJAAgFAGQgGAHAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape.setTransform(485.9,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA+AAQAkgBAUASQASASABApQgBAVgFAOQgEANgHAFQgIAIgHADIAmB2gAgagMIAPAAQARABAHgJQAIgJAAgXQAAgWgIgJQgHgJgRABIgPAAg");
	this.shape_1.setTransform(469.4,40.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA3AAIAAAlIg3AAIAABLIBOAAIAAAog");
	this.shape_2.setTransform(452.4,40.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAlIg3AAIAABLIBOAAIAAAog");
	this.shape_3.setTransform(436.4,40.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAkgBASASQAUASgBApQAAAVgEAOQgFANgHAFQgIAIgHADIAmB2gAgagMIAQAAQAPABAIgJQAIgJgBgXQABgWgIgJQgIgJgPABIgQAAg");
	this.shape_4.setTransform(419.4,40.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAwkCIA2AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_5.setTransform(402,40.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgkB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAWAAAPAKQAOAKAHAPQAIARAAATIAAATIgtAAIAAgUQAAgQgHgIQgGgIgIABQgMAAgFAHQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQALAAAGgHQAFgHgBgMIAAggIAtAAIAAAfQAAASgIAPQgHAPgOAJQgPAJgWAAQgWAAgPgJg");
	this.shape_6.setTransform(384.9,40.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgHgIABQgJAAgFAGQgGAHAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_7.setTransform(359.9,40.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgkB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAVAAQAXAAAOAKQAPAKAIAPQAHARAAATIAAATIgtAAIAAgUQAAgQgGgIQgHgIgJABQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQANAAAEgHQAFgHAAgMIAAggIAtAAIAAAfQAAASgHAPQgIAPgPAJQgOAJgXAAQgVAAgPgJg");
	this.shape_8.setTransform(342.9,40.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_9.setTransform(329,40.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIApAAIA1CSIAAAAIAAiSIApAAIAAECg");
	this.shape_10.setTransform(315,40.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQANAAAFgHQAFgHAAgOIAAiCQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_11.setTransform(297,40.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AAaCCIgdhsIgLABIgMAAIAABrIgtAAIAAkCIA+AAQAkgBAUASQASASABApQgBAVgFAOQgEANgHAFQgIAIgHADIAmB2gAgagMIAPAAQAQABAIgJQAIgJAAgXQAAgWgIgJQgIgJgQABIgPAAg");
	this.shape_12.setTransform(279.4,40.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_13.setTransform(263,40.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA3AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_14.setTransform(248,40.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AAXCCIAAhzIgtAAIAABzIgtAAIAAkCIAtAAIAABqIAtAAIAAhqIAtAAIAAECg");
	this.shape_15.setTransform(231,40.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgkB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAWAAQAWAAAPAKQAOAKAHAPQAIARAAATIAAATIgtAAIAAgUQAAgQgHgIQgGgIgIABQgMAAgFAHQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQAMAAAFgHQAFgHgBgMIAAggIAtAAIAAAfQAAASgIAPQgHAPgOAJQgPAJgWAAQgWAAgPgJg");
	this.shape_16.setTransform(212.9,40.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA4AAIAAAlIg4AAIAABLIBOAAIAAAog");
	this.shape_17.setTransform(196.4,40.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AAzCCIAAjKIAAAAIgpDKIgTAAIgpjKIAAAAIAADKIgnAAIAAkCIA7AAIAeCWIAAAAIAgiWIA6AAIAAECg");
	this.shape_18.setTransform(177,40.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AhDCCIAAkCIBCAAQAhAAASATQASATAAAoIAABlQAAAogSATQgSATghABgAgWBdIAPAAQAQAAAHgIQAHgIAAgUIAAhwQAAgVgHgIQgHgIgQABIgPAAg");
	this.shape_19.setTransform(149,40.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA4AAIAAAlIg4AAIAABLIBOAAIAAAog");
	this.shape_20.setTransform(132.4,40.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgkB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAWAAQAWAAAPAKQAOAKAHAPQAIARAAATIAAATIgtAAIAAgUQAAgQgHgIQgGgIgIABQgMAAgFAHQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQALAAAGgHQAFgHgBgMIAAggIAtAAIAAAfQAAASgIAPQgHAPgOAJQgPAJgWAAQgWAAgPgJg");
	this.shape_21.setTransform(114.9,40.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIAqAAIA0CSIABAAIAAiSIAoAAIAAECg");
	this.shape_22.setTransform(97,40.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAwkCIA1AAIAwECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_23.setTransform(80,40.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgVCCIg2kCIAsAAIAfCyIAAAAIAgiyIAsAAIg2ECg");
	this.shape_24.setTransform(64,40.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AhDCCIAAkCIBCAAQAhAAASATQASATAAAoIAABlQAAAogSATQgSATghABgAgWBdIAPAAQAQAAAHgIQAHgIAAgUIAAhwQAAgVgHgIQgHgIgQABIgPAAg");
	this.shape_25.setTransform(47,40.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA2AAIAwECgAARAhIgRhtIAAAAIgRBtIAiAAg");
	this.shape_26.setTransform(30,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,17,476.2,47.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape.setTransform(230,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgkB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAVAAQAXAAAOAKQAPAKAIAPQAHARAAATIAAAUIgtAAIAAgVQAAgQgGgIQgHgHgJAAQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQANAAAEgHQAFgGAAgNIAAggIAtAAIAAAfQAAASgHAPQgIAPgPAJQgOAJgXAAQgVAAgPgJg");
	this.shape_1.setTransform(216.9,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgkB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAVAAQAXAAAOAKQAPAKAIAPQAHARAAATIAAAUIgtAAIAAgVQAAgQgGgIQgHgHgJAAQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQANAAAEgHQAFgGAAgNIAAggIAtAAIAAAfQAAASgHAPQgIAPgPAJQgOAJgXAAQgVAAgPgJg");
	this.shape_2.setTransform(198.9,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_3.setTransform(183,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_4.setTransform(161,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA2AAIAwECgAARAhIgRhtIAAAAIgRBtIAiAAg");
	this.shape_5.setTransform(146,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAzCCIAAjKIAAAAIgpDKIgTAAIgpjKIAAAAIAADKIgnAAIAAkCIA7AAIAeCWIAAAAIAgiWIA6AAIAAECg");
	this.shape_6.setTransform(119,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA2AAIAwECgAARAhIgRhtIAAAAIgRBtIAiAAg");
	this.shape_7.setTransform(100,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAjgBAUASQASASAAApQAAAVgFAOQgEANgHAFQgHAIgIADIAmB2gAgagMIAPAAQARABAHgJQAIgJgBgXQABgWgIgJQgHgJgRABIgPAAg");
	this.shape_8.setTransform(83.4,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgxBzQgQgRgBgfIAAiEQAAgTAHgPQAIgPAOgJQAOgJAXAAQAUAAAPAKQAOAKAIAPQAIARgBATIAAAQIgqAAQAAgSgDgLQgDgLgFgEQgGgFgGABQgJAAgGAGQgFAGAAARIAACDQAAANAEAHQAFAHAMAAQALAAAFgIQAGgIAAgUIAAgZIgbAAIAAgiIBIAAIAACDIgWAAIgIgUQgKAMgKAGQgKAFgNAAQgbgBgQgRg");
	this.shape_9.setTransform(64.9,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAHAPQAIAPAAATIAACEQAAASgIAPQgHAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgGAHABAPIAACCQgBAOAGAHQAFAHAMAAQANAAAFgHQAFgHAAgOIAAiCQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_10.setTransform(47,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAjgBAUASQASASABApQgBAVgFAOQgEANgHAFQgHAIgIADIAmB2gAgagMIAPAAQARABAHgJQAIgJAAgXQAAgWgIgJQgHgJgRABIgPAAg");
	this.shape_11.setTransform(29.4,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AhHCCIAAkCIBAAAQAogBATASQAUASAAApQAAAqgUAQQgTASgogBIgTAAIAABrgAgagMIARAAQAUABAIgJQAIgJAAgXQAAgWgIgJQgIgJgUABIgRAAg");
	this.shape_12.setTransform(11.4,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.2,47.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape.setTransform(251.9,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgkB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAVAAQAXAAAOAKQAPAKAIAPQAHARAAATIAAAUIgtAAIAAgVQAAgQgGgIQgHgHgJAAQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQANAAAEgHQAFgGAAgNIAAggIAtAAIAAAfQAAASgHAPQgIAPgPAJQgOAJgXAAQgVAAgPgJg");
	this.shape_1.setTransform(234.9,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_2.setTransform(221,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIAqAAIA0CSIAAAAIAAiSIApAAIAAECg");
	this.shape_3.setTransform(207,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQANAAAFgHQAFgHAAgOIAAiCQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_4.setTransform(189,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAaCCIgdhsIgLABIgMAAIAABrIgtAAIAAkCIA+AAQAkgBAUASQASASABApQgBAVgFAOQgEANgHAFQgIAIgHADIAmB2gAgagMIAPAAQAQABAIgJQAIgJAAgXQAAgWgIgJQgIgJgQABIgPAAg");
	this.shape_5.setTransform(171.4,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_6.setTransform(155,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA3AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_7.setTransform(140,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAXCCIAAh0IgtAAIAAB0IgtAAIAAkCIAtAAIAABqIAtAAIAAhqIAtAAIAAECg");
	this.shape_8.setTransform(123,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgkB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAWAAQAWAAAPAKQAOAKAHAPQAIARAAATIAAAUIgtAAIAAgVQAAgQgHgIQgGgHgIAAQgMAAgFAHQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQAMAAAFgHQAFgGgBgNIAAggIAtAAIAAAfQAAASgIAPQgHAPgOAJQgPAJgWAAQgWAAgPgJg");
	this.shape_9.setTransform(104.9,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_10.setTransform(88.4,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAzCCIAAjKIAAAAIgpDKIgTAAIgpjKIAAAAIAADKIgnAAIAAkCIA7AAIAeCWIAAAAIAgiWIA6AAIAAECg");
	this.shape_11.setTransform(69,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_12.setTransform(42.4,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAXCCIAAh0IgtAAIAAB0IgtAAIAAkCIAtAAIAABqIAtAAIAAhqIAtAAIAAECg");
	this.shape_13.setTransform(25,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_14.setTransform(9,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262.2,47.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ABNE2IgTiJIhzAAIgSCJIhoAAIByprICDAAIByJrgAAqBPIgpkIIgBAAIgpEIIBTAAg");
	this.shape.setTransform(83.2,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag0E2IAAprIBpAAIAAJrg");
	this.shape_1.setTransform(52.2,53.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag0E2IiCprIBqAAIBMGtIABAAIBMmtIBqAAIiCJrg");
	this.shape_2.setTransform(21.1,53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.5,107.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIAqAAIA0CSIABAAIAAiSIAoAAIAAECg");
	this.shape.setTransform(223,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQANAAAFgHQAGgHgBgOIAAiCQABgPgGgHQgFgHgNAAQgMAAgFAHg");
	this.shape_1.setTransform(205,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIAqAAIA0CSIABAAIAAiSIAoAAIAAECg");
	this.shape_2.setTransform(187,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAwkCIA2AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_3.setTransform(170,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgkB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAVAAQAXAAAOAKQAPAKAIAPQAHARAAATIAAAUIgtAAIAAgVQAAgQgGgIQgHgHgJAAQgLAAgFAHQgFAHAAAPIAACCQAAAOAFAHQAFAHALAAQANAAAFgHQAEgGAAgNIAAggIAtAAIAAAfQAAASgHAPQgIAPgPAJQgOAJgXAAQgVAAgPgJg");
	this.shape_4.setTransform(152.9,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgGAHABAPIAACCQgBAOAGAHQAFAHAMAAQANAAAFgHQAFgHAAgOIAAiCQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_5.setTransform(127,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_6.setTransform(111,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_7.setTransform(87.9,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_8.setTransform(72.4,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("Ag4CCIAAkCIAtAAIAADaIBEAAIAAAog");
	this.shape_9.setTransform(57.7,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AhFCCIAAkCIBDAAQAhAAARASQARARAAAiQAAAKgDALQgEALgHAIQgGAJgLAFQARAFAJAOQAKAQAAAYQAAAWgHARQgHAQgPALQgQAJgZABgAgYBdIATAAQAPAAAIgKQAHgKAAgVQAAgTgIgKQgJgKgSAAIgOAAgAgYgWIAQAAQALAAAIgIQAJgJAAgQQAAgSgHgJQgHgKgNAAIgRAAg");
	this.shape_10.setTransform(41.2,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAwkCIA2AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_11.setTransform(24,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_12.setTransform(9,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234.2,47.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgxBzQgRgRAAgfIAAiEQAAgTAIgPQAGgPAPgJQAOgJAWAAQAVAAAPAKQAPAKAHAPQAIARAAATIAAAQIgrAAQAAgSgCgLQgEgLgFgEQgFgFgHABQgJAAgGAGQgFAGAAARIAACDQgBANAFAHQAGAHAKAAQAMAAAFgIQAHgIgBgUIAAgZIgaAAIAAgiIBHAAIAACDIgWAAIgIgUQgKAMgKAGQgKAFgNAAQgbgBgQgRg");
	this.shape.setTransform(264.9,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAdCCIg3ihIgBAAIAAChIgoAAIAAkCIApAAIA1CSIABAAIAAiSIAoAAIAAECg");
	this.shape_1.setTransform(247,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_2.setTransform(233,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_3.setTransform(221,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_4.setTransform(209,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAwkCIA2AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_5.setTransform(196,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAhCCIggiqIgBAAIgcCqIgmAAIgxkCIAqAAIAbCjIABAAIAdijIAiAAIAfCjIAAAAIAZijIAqAAIguECg");
	this.shape_6.setTransform(175.7,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAzCCIAAjKIAAAAIgpDKIgTAAIgpjKIAAAAIAADKIgnAAIAAkCIA7AAIAeCWIAAAAIAgiWIA6AAIAAECg");
	this.shape_7.setTransform(145,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQANAAAFgHQAGgHgBgOIAAiCQABgPgGgHQgFgHgNAAQgMAAgFAHg");
	this.shape_8.setTransform(125,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAaCCIgdhsIgLABIgMAAIAABrIgtAAIAAkCIA+AAQAkgBAUASQATASAAApQgBAVgFAOQgEANgHAFQgIAIgHADIAmB2gAgagMIAPAAQAQABAIgJQAIgJAAgXQAAgWgIgJQgIgJgQABIgPAAg");
	this.shape_9.setTransform(107.4,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("Ag9CCIAAkCIB7AAIAAAmIhOAAIAABEIA5AAIAAAkIg5AAIAAB0g");
	this.shape_10.setTransform(90.4,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_11.setTransform(67,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIAqAAIA0CSIABAAIAAiSIAoAAIAAECg");
	this.shape_12.setTransform(51,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_13.setTransform(34.4,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAhCCIggiqIgBAAIgcCqIgmAAIgxkCIAqAAIAbCjIABAAIAdijIAiAAIAfCjIAAAAIAZijIAqAAIguECg");
	this.shape_14.setTransform(13.7,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.2,47.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("Ag0E2IAAkDIiBloIBsAAIBJDsIACAAIBHjsIBtAAIiBFoIAAEDg");
	this.shape.setTransform(183.5,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("ABAE2IhJkBQgLACgPAAIgdABIAAD+IhrAAIAAprICVAAQBYgBAuArQAtArAABiQAAAygLAgQgLAggSAPQgQASgTAIIBaEZgAhAgeIAlAAQApABASgVQATgVgBg3QABg2gTgVQgSgVgpABIglAAg");
	this.shape_1.setTransform(143.8,53.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("ABAE2IhJkBQgLACgPAAIgdABIAAD+IhrAAIAAprICVAAQBYgBAuArQAtArAABiQAAAygLAgQgLAggSAPQgQASgTAIIBaEZgAhAgeIAlAAQApABASgVQATgVgBg3QABg2gTgVQgSgVgpABIglAAg");
	this.shape_2.setTransform(100.8,53.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AiTE2IAAprIEbAAIAABcIiwAAIAAChICHAAIAABbIiHAAIAAC2IC9AAIAABdg");
	this.shape_3.setTransform(60.3,53.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AA+E2IhVkhIgCAAIglBFIAADcIhrAAIAAprIBrAAIAADlIABAAIBujlIBrAAIhzDoICBGDg");
	this.shape_4.setTransform(23.7,53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204.8,107.2);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728_tcc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,39);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,90);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728_kerry();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,90);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib._728_border();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(366));

	// Layer 17
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(620.5,122,1,1,0,0,0,55,19.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(343).to({_off:false},0).to({y:62},13).wait(10));

	// Layer 16
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(374,45,1,1,0,0,0,151.5,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(337).to({_off:false},0).to({alpha:1},13).wait(16));

	// Layer 5
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(875.3,60.4,1,1,0,0,0,255.3,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(252).to({_off:false},0).to({x:463.3,y:60.9,alpha:1},11).wait(65).to({alpha:0},8).wait(30));

	// Layer 6
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(771.8,20.5,1,1,0,0,0,172.8,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(244).to({_off:false},0).to({x:359.8,y:21,alpha:1},11).wait(73).to({alpha:0},8).wait(30));

	// Layer 7
	this.instance_5 = new lib.Symbol13();
	this.instance_5.setTransform(564.1,17.6,1,1,0,0,0,54.1,17.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(237).to({_off:false},0).to({x:284.1,alpha:1},11).wait(80).to({alpha:0},8).wait(30));

	// Layer 4
	this.instance_6 = new lib.Symbol10();
	this.instance_6.setTransform(854.1,63,1,1,0,0,0,114.1,23.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(137).to({_off:false},0).wait(8).to({x:494.1},12).wait(71).to({alpha:0},9).wait(129));

	// Layer 3
	this.instance_7 = new lib.Symbol9();
	this.instance_7.setTransform(871.1,26.6,1,1,0,0,0,131.1,23.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(137).to({_off:false},0).to({x:511.1},13).wait(78).to({alpha:0},9).wait(129));

	// Layer 12
	this.instance_8 = new lib.Symbol8();
	this.instance_8.setTransform(321.3,134.8,1,1,0,0,0,52.3,53.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(129).to({_off:false},0).to({y:44.8},13).wait(86).to({alpha:0},9).wait(129));

	// Layer 2
	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(858.1,63,1,1,0,0,0,117.1,23.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).to({x:538.1},13).wait(68).to({alpha:0},9).wait(237));

	// Layer 1
	this.instance_10 = new lib.Symbol6();
	this.instance_10.setTransform(879.1,26.6,1,1,0,0,0,138.1,23.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({_off:false},0).to({x:559.1},13).wait(75).to({alpha:0},9).wait(237));

	// Layer 13
	this.instance_11 = new lib.Symbol5();
	this.instance_11.setTransform(309.4,134.8,1,1,0,0,0,102.4,53.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(26).to({_off:false},0).to({y:44.8},13).wait(81).to({alpha:0},9).wait(237));

	// Layer 11
	this.instance_12 = new lib.Symbol2();
	this.instance_12.setTransform(-100.5,45,1,1,0,0,0,89.5,45);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({x:89.5},13).wait(340));

	// Layer 10
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},13).wait(353));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;