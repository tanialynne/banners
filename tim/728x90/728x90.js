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
		{src:"_728_logo.png", id:"_728_logo"},
		{src:"_728_tcc.png", id:"_728_tcc"},
		{src:"_728_tim.jpg", id:"_728_tim"}
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


(lib._728_logo = function() {
	this.initialize(img._728_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,90);


(lib._728_tcc = function() {
	this.initialize(img._728_tcc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,39);


(lib._728_tim = function() {
	this.initialize(img._728_tim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,90);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AghAiIAAhDIBDAAIAABDg");
	this.shape.setTransform(487.2,54.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("Ag7DHQgXgRgNgaQgMgagDgfIBFgKQADAfALARQAMAPAPAAQATAAALgKQALgJABgTQAAgZgPgTQgPgTgTgSQgWgRgVgSQgXgUgOgaQgPgZgBglQABgxAdgbQAdgbAzAAQAeAAAUAMQAWANAMAXQANAXADAeIhEAIQgDgbgMgKQgLgLgNABQgQAAgIALQgKAKABAUQAAAVAOATQAPARATATQAWARAWATQAVAUAPAaQAPAZAAAjQAAAigOAYQgPAXgZANQgZAMghAAQghAAgYgPg");
	this.shape_1.setTransform(467.7,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("Ag6DHQgYgRgNgaQgNgagCgfIBFgKQADAfALARQAMAPAPAAQATAAALgKQAMgJAAgTQAAgZgPgTQgPgTgTgSQgWgRgVgSQgXgUgOgaQgPgZgBglQABgxAdgbQAdgbAzAAQAdAAAVAMQAWANAMAXQANAXADAeIhEAIQgDgbgMgKQgLgLgNABQgQAAgIALQgJAKAAAUQAAAVAOATQAPARATATQAWARAWATQAVAUAPAaQAPAZABAjQgBAigOAYQgOAXgaANQgZAMghAAQghAAgXgPg");
	this.shape_2.setTransform(442,37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhjDRIAAmhIC/AAIAAA+Ih3AAIAABtIBbAAIAAA8IhbAAIAAB8IB/AAIAAA+g");
	this.shape_3.setTransform(417,37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AhbDRIAAmhIBIAAIAAFjIBvAAIAAA+g");
	this.shape_4.setTransform(393.4,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AArDRIgxitIgRABIgUABIAACrIhIAAIAAmhIBlAAQA6AAAfAdQAfAdgBBCQAAAigHAVQgIAVgLAKQgMAMgMAGIA9C9gAgrgUIAZAAQAbABAMgOQANgOgBglQABglgNgOQgMgOgbABIgZAAg");
	this.shape_5.setTransform(354.2,36.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("Ag9DIQgYgOgMgYQgLgYAAgeIAAjWQAAgeALgYQAMgYAYgPQAZgOAkAAQAlAAAYAOQAZAPAMAYQALAYAAAeIAADWQAAAegLAYQgMAYgZAOQgYAOglAAQgkAAgZgOgAgciLQgJALABAYIAADRQgBAYAJALQAIAMAUAAQAVAAAIgMQAJgLgBgYIAAjRQABgYgJgLQgIgMgVAAQgUAAgIAMg");
	this.shape_6.setTransform(324.6,37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("Ag6DHQgYgRgNgaQgMgagDgfIBFgKQADAfALARQAMAPAPAAQATAAALgKQALgJABgTQAAgZgPgTQgPgTgTgSQgWgRgVgSQgXgUgOgaQgPgZgBglQABgxAdgbQAdgbAzAAQAeAAAUAMQAWANAMAXQANAXADAeIhFAIQgCgbgMgKQgLgLgNABQgQAAgIALQgKAKABAUQAAAVAOATQAPARATATQAWARAWATQAVAUAPAaQAPAZAAAjQAAAigOAYQgPAXgZANQgZAMghAAQghAAgXgPg");
	this.shape_7.setTransform(284.1,37);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AArDRIgxitIgRABIgUABIAACrIhIAAIAAmhIBlAAQA6AAAfAdQAeAdAABCQAAAigHAVQgHAVgMAKQgMAMgMAGIA9C9gAgrgUIAaAAQAaABAMgOQANgOgBglQABglgNgOQgMgOgaABIgaAAg");
	this.shape_8.setTransform(257.6,36.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AA0DRIgNhdIhNAAIgNBdIhFAAIBNmhIBXAAIBNGhgAAcA2IgciyIAAAAIgbCyIA3AAg");
	this.shape_9.setTransform(229.5,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AhjDRIAAmhIC/AAIAAA+Ih3AAIAABtIBbAAIAAA8IhbAAIAAB8IB/AAIAAA+g");
	this.shape_10.setTransform(204.4,37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgjDRIAAiuIhWjzIBJAAIAwCgIABAAIAwigIBJAAIhXDzIAACug");
	this.shape_11.setTransform(178.1,37);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("Ag8DIQgZgOgMgYQgMgYAAgeIAAjWQAAgeAMgYQAMgYAZgPQAYgOAkAAQAlAAAYAOQAZAPAMAYQAMAYAAAeIAADWQAAAegMAYQgMAYgZAOQgYAOglAAQgkAAgYgOgAgdiLQgIALAAAYIAADRQAAAYAIALQAJAMAUAAQAVAAAJgMQAIgLAAgYIAAjRQAAgYgIgLQgJgMgVAAQgUAAgJAMg");
	this.shape_12.setTransform(137.8,37);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AA1DRIg0kTIgBAAIgvETIg8AAIhQmhIBEAAIAsEJIABAAIAvkJIA5AAIAxEJIABAAIAokJIBDAAIhJGhg");
	this.shape_13.setTransform(103.4,37);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgiDRIAAljIhGAAIAAg+IDRAAIAAA+IhFAAIAAFjg");
	this.shape_14.setTransform(73.3,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AAvDRIhZkDIgCAAIAAEDIhBAAIAAmhIBDAAIBVDuIACAAIAAjuIBBAAIAAGhg");
	this.shape_15.setTransform(34.6,37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgiDRIAAmhIBGAAIAAGhg");
	this.shape_16.setTransform(12.1,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,493.9,73.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgeBmQgMgIgGgNQgHgOgBgQIAkgFQABAQAGAIQAGAIAHAAQAKAAAFgFQAGgFAAgJQAAgNgIgKQgHgKgJgJIgXgRQgLgLgHgNQgIgNAAgTQAAgaAPgOQAPgOAZAAQAQAAALAHQALAHAGAMQAGALACAQIgjAEQgCgOgGgFQgGgGgGABQgHAAgFAFQgFAGAAAKQABALAHAJQAIAKAJAJQALAJALAJQALAKAIANQAIAOAAARQAAASgIAMQgHANgNAGQgOAHgPAAQgRAAgNgJg");
	this.shape.setTransform(131.8,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("Ag5BsIAAjXIA3AAQAcAAAOAPQAOAPAAAbQAAAKgDAJQgDAJgFAHQgGAHgJAEQAPAEAHAMQAIAMAAAVQAAASgFAOQgHAOgMAIQgNAJgVAAgAgUBNIAQAAQANAAAGgIQAGgJAAgQQAAgRgHgIQgHgJgPAAIgMAAgAgUgSIANAAQAKAAAGgHQAIgHAAgOQAAgPgHgIQgFgHgLAAIgOAAg");
	this.shape_1.setTransform(117.9,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgfBnQgMgHgGgNQgGgMgBgQIAAhtQABgQAGgMQAGgNAMgHQANgIASAAQATAAAMAIQANAHAGANQAHAMgBAQIAABtQABAQgHAMQgGANgNAHQgMAIgTAAQgSAAgNgIgAgOhIQgFAGAAANIAABrQAAAMAFAGQAFAGAJAAQAKAAAFgGQAEgGABgMIAAhrQgBgNgEgGQgFgFgKAAQgJAAgFAFg");
	this.shape_2.setTransform(102.8,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgfBtIAAggIAIAAQALAAAEgFQAFgEgBgJIAAinIAkAAIAACrQAAAOgFAKQgEALgMAFQgLAGgTAAg");
	this.shape_3.setTransform(90.2,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_4.setTransform(74.4,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAaBsIgGgwIgnAAIgHAwIgkAAIApjXIAsAAIAnDXgAAPAbIgPhbIAAAAIgNBbIAcAAg");
	this.shape_5.setTransform(62,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgyBsIAAjXIBhAAIAAAgIg8AAIAAA4IAuAAIAAAfIguAAIAAA/IBAAAIAAAhg");
	this.shape_6.setTransform(49,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_7.setTransform(34.8,20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgoBgQgOgPgBgaIAAhtQABgQAFgMQAGgNAMgHQANgIASAAQARAAAMAIQAMAIAHAOQAGANAAAQIAAAOIgjAAQAAgQgDgJQgCgJgEgDQgGgEgFABQgHgBgEAGQgFAFgBANIAABtQABALAEAGQADAGAKAAQAJAAAFgHQAFgHAAgQIAAgVIgWAAIAAgbIA7AAIAABsIgSAAIgHgRQgIAKgJAFQgIAFgKAAQgXgBgNgOg");
	this.shape_8.setTransform(19.4,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,0,130.8,40);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape.setTransform(218,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgVCCIAAhsIg2iWIAtAAIAeBjIAAAAIAehjIAuAAIg2CWIAABsg");
	this.shape_1.setTransform(206,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_2.setTransform(191,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_3.setTransform(179,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAjgBATASQATASAAApQAAAVgEAOQgFANgHAFQgHAIgIADIAmB2gAgagMIAPAAQARABAHgJQAIgJgBgXQABgWgIgJQgHgJgRABIgPAAg");
	this.shape_4.setTransform(165.4,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgwByQgTgSAAgiIAAjAIAtAAIAADCQAAAOAFAHQAGAHALAAQAMAAAFgHQAGgHAAgOIAAjCIAtAAIAADAQgBAigRASQgSARggAAQgfAAgRgRg");
	this.shape_5.setTransform(147,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgkB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAVAAQAXAAAOAKQAPAKAIAPQAHARAAATIAAAUIgtAAIAAgVQAAgQgHgIQgFgHgKAAQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQANAAAEgHQAGgGgBgNIAAggIAtAAIAAAfQAAASgHAPQgIAPgPAJQgOAJgXAAQgVAAgPgJg");
	this.shape_6.setTransform(128.9,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_7.setTransform(112.4,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_8.setTransform(95.9,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAaCCIgdhsIgLABIgMAAIAABrIgtAAIAAkCIA+AAQAlgBASASQAUASAAApQgBAVgFAOQgEANgHAFQgHAIgIADIAmB2gAgagMIAQAAQAQABAHgJQAIgJAAgXQAAgWgIgJQgHgJgQABIgQAAg");
	this.shape_9.setTransform(79.4,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_10.setTransform(62.4,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AhFCCIAAkCIBDAAQAhAAARASQARARAAAiQAAAKgDALQgEALgHAIQgGAJgLAFQARAFAJAOQAKAQAAAYQAAAWgHARQgHAQgPALQgQAJgZABgAgYBdIATAAQAPAAAIgKQAHgKAAgVQAAgTgIgKQgJgKgSAAIgOAAgAgYgWIAQAAQALAAAIgIQAJgJAAgQQAAgSgHgJQgHgKgNAAIgRAAg");
	this.shape_11.setTransform(45.2,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgVCCIAAhsIg2iWIAuAAIAdBjIAAAAIAfhjIAtAAIg2CWIAABsg");
	this.shape_12.setTransform(28,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgkB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAVAAQAXAAAOAKQAPAKAIAPQAHARAAATIAAAUIgtAAIAAgVQAAgQgGgIQgHgHgJAAQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQANAAAEgHQAFgGAAgNIAAggIAtAAIAAAfQAAASgHAPQgIAPgPAJQgOAJgXAAQgVAAgPgJg");
	this.shape_13.setTransform(10.9,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.2,47.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAdCCIg3ihIgBAAIAAChIgoAAIAAkCIApAAIA1CSIAAAAIAAiSIApAAIAAECg");
	this.shape.setTransform(155,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_1.setTransform(141,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAjgBAUASQASASAAApQAAAVgFAOQgEANgHAFQgHAIgIADIAmB2gAgagMIAPAAQARABAHgJQAIgJgBgXQABgWgIgJQgHgJgRABIgPAAg");
	this.shape_2.setTransform(119.4,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_3.setTransform(102.4,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_4.setTransform(86.4,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAaCCIgdhsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAkgBASASQAUASgBApQAAAVgEAOQgFANgHAFQgHAIgIADIAmB2gAgagMIAQAAQAQABAHgJQAIgJgBgXQABgWgIgJQgHgJgQABIgQAAg");
	this.shape_5.setTransform(69.4,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAwkCIA2AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_6.setTransform(52,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgkB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAWAAAPAKQAOAKAHAPQAIARAAATIAAAUIgtAAIAAgVQAAgQgGgIQgGgHgJAAQgMAAgFAHQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQALAAAGgHQAEgGAAgNIAAggIAtAAIAAAfQAAASgIAPQgHAPgOAJQgPAJgWAAQgWAAgPgJg");
	this.shape_7.setTransform(34.9,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA2AAIAwECgAARAhIgRhtIAAAAIgRBtIAiAAg");
	this.shape_8.setTransform(10,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166.2,47.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AhaEoQglgUgRglQgSgjAAgtIAAk9QAAgtASgjQARgkAlgWQAjgVA3AAQA3AAAlAVQAkAWARAkQASAjAAAtIAAE9QAAAtgSAjQgRAlgkAUQglAWg3ABQg3gBgjgWgAgrjQQgNASABAiIAAE5QgBAiANASQAMAQAfAAQAfAAANgQQANgSgBgiIAAk5QABgigNgSQgNgRgfAAQgfAAgMARg");
	this.shape.setTransform(57,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag0E2IAAoPIhnAAIAAhcIE3AAIAABcIhnAAIAAIPg");
	this.shape_1.setTransform(18.7,53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.7,107.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AhFCCIAAkCIBDAAQAhAAARASQARARAAAiQAAAKgDALQgEALgHAIQgGAJgLAFQARAFAJAOQAKAQAAAYQAAAWgHARQgHAQgPALQgQAJgZABgAgYBdIATAAQAPAAAIgKQAHgKAAgVQAAgTgIgKQgJgKgSAAIgOAAgAgYgWIAQAAQALAAAIgIQAJgJAAgQQAAgSgHgJQgHgKgNAAIgRAAg");
	this.shape.setTransform(239.2,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AglB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAHAPQAIAPAAATIAACEQAAASgIAPQgHAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQANAAAFgHQAGgHgBgOIAAiCQABgPgGgHQgFgHgNAAQgMAAgFAHg");
	this.shape_1.setTransform(221,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AglCDIAAgnIAJAAQANAAAFgFQAGgFAAgLIAAjJIAqAAIAADOQAAARgFAMQgGAMgNAHQgOAHgWAAg");
	this.shape_2.setTransform(206,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgxBzQgRgRAAgfIAAiEQAAgTAIgPQAGgPAPgJQAPgJAVAAQAVAAAPAKQAPAKAHAPQAIARAAATIAAAQIgrAAQAAgSgCgLQgEgLgFgEQgFgFgIABQgIAAgFAGQgGAGAAARIAACDQgBANAFAHQAFAHALAAQAMAAAFgIQAGgIAAgUIAAgZIgaAAIAAgiIBHAAIAACDIgWAAIgIgUQgKAMgKAGQgKAFgNAAQgbgBgQgRg");
	this.shape_3.setTransform(184.9,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAdCCIg3ihIgBAAIAAChIgoAAIAAkCIAqAAIA0CSIABAAIAAiSIAoAAIAAECg");
	this.shape_4.setTransform(167,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_5.setTransform(153,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AhDCCIAAkCIBCAAQAhgBASAUQASATAAAoIAABlQAAAogSATQgSAUghAAgAgWBdIAPAAQAQAAAHgIQAHgIAAgUIAAhxQAAgTgHgJQgHgIgQAAIgPAAg");
	this.shape_6.setTransform(139,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAkgBASASQAUASgBApQAAAVgEAOQgFANgHAFQgIAIgHADIAmB2gAgagMIAQAAQAPABAIgJQAIgJgBgXQABgWgIgJQgIgJgPABIgQAAg");
	this.shape_7.setTransform(121.4,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA3AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_8.setTransform(104,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAhCCIggiqIgBAAIgcCqIgmAAIgxkCIAqAAIAbCjIABAAIAdijIAiAAIAfCjIAAAAIAZijIAqAAIguECg");
	this.shape_9.setTransform(83.7,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_10.setTransform(64.4,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAjgBAUASQASASABApQgBAVgFAOQgEANgHAFQgHAIgIADIAmB2gAgagMIAPAAQARABAHgJQAIgJAAgXQAAgWgIgJQgHgJgRABIgPAAg");
	this.shape_11.setTransform(47.4,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAdCCIg3ihIgBAAIAAChIgoAAIAAkCIApAAIA1CSIAAAAIAAiSIApAAIAAECg");
	this.shape_12.setTransform(29,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgwByQgTgSAAgiIAAjAIAtAAIAADCQAAAOAFAHQAHAHAKAAQAMAAAFgHQAGgHAAgOIAAjCIAtAAIAADAQgBAigRASQgTARgfAAQgeAAgSgRg");
	this.shape_13.setTransform(11,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250.2,47.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIAqAAIA0CSIAAAAIAAiSIApAAIAAECg");
	this.shape.setTransform(189,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA2AAIAwECgAARAhIgRhtIAAAAIgRBtIAiAAg");
	this.shape_1.setTransform(172,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAzCCIAAjKIAAAAIgpDKIgTAAIgpjKIAAAAIAADKIgnAAIAAkCIA7AAIAeCWIAAAAIAgiWIA6AAIAAECg");
	this.shape_2.setTransform(145,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQANAAAFgHQAGgHgBgOIAAiCQABgPgGgHQgFgHgNAAQgMAAgFAHg");
	this.shape_3.setTransform(125,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AAaCCIgdhsIgLABIgMAAIAABrIgtAAIAAkCIA+AAQAkgBAUASQATASAAApQgBAVgFAOQgEANgHAFQgIAIgHADIAmB2gAgagMIAPAAQAQABAIgJQAIgJAAgXQAAgWgIgJQgIgJgQABIgPAAg");
	this.shape_4.setTransform(107.4,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("Ag9CCIAAkCIB7AAIAAAmIhOAAIAABEIA5AAIAAAkIg5AAIAAB0g");
	this.shape_5.setTransform(90.4,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_6.setTransform(67,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIAqAAIA0CSIABAAIAAiSIAoAAIAAECg");
	this.shape_7.setTransform(51,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_8.setTransform(34.4,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAhCCIggiqIgBAAIgcCqIgmAAIgxkCIAqAAIAbCjIABAAIAdijIAiAAIAfCjIAAAAIAZijIAqAAIguECg");
	this.shape_9.setTransform(13.7,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.2,47.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AB8E2IAAnjIgCAAIhhHjIgxAAIhgnjIgDAAIAAHjIhcAAIAAprICMAAIBLFoIAAAAIBMloICMAAIAAJrg");
	this.shape.setTransform(85.6,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag0E2IAAprIBpAAIAAJrg");
	this.shape_1.setTransform(47.4,53.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag0E2IAAoPIhnAAIAAhcIE3AAIAABcIhnAAIAAIPg");
	this.shape_2.setTransform(18.7,53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.1,107.2);


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
	this.instance = new lib._728_tim();

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(358));

	// Layer 17
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(620.5,132,1,1,0,0,0,55,19.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(343).to({_off:false},0).to({y:62},12).wait(3));

	// Layer 16
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(374,45,1,1,0,0,0,151.5,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(336).to({_off:false},0).to({alpha:1},12).wait(10));

	// Layer 5
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(875.3,60.4,1,1,0,0,0,255.3,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(243).to({_off:false},0).to({x:463.3,y:60.9,alpha:1},11).wait(73).to({alpha:0},8).wait(23));

	// Layer 6
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(771.8,20.5,1,1,0,0,0,172.8,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(236).to({_off:false},0).to({x:359.8,y:21,alpha:1},11).wait(80).to({alpha:0},8).wait(23));

	// Layer 4
	this.instance_5 = new lib.Symbol10();
	this.instance_5.setTransform(858.1,63,1,1,0,0,0,108.1,23.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(142).to({_off:false},0).to({x:498.1},12).wait(73).to({alpha:0},9).wait(122));

	// Layer 3
	this.instance_6 = new lib.Symbol9();
	this.instance_6.setTransform(833.1,26.6,1,1,0,0,0,83.1,23.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(135).to({_off:false},0).to({x:473.1},12).wait(80).to({alpha:0},9).wait(122));

	// Layer 12
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(339.3,134.8,1,1,0,0,0,40.3,53.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(127).to({_off:false},0).to({y:44.8},12).wait(88).to({alpha:0},9).wait(122));

	// Layer 2
	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(870.1,63,1,1,0,0,0,125.1,23.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({x:510.1},12).wait(66).to({alpha:0},9).wait(232));

	// Layer 1
	this.instance_9 = new lib.Symbol6();
	this.instance_9.setTransform(845.1,26.6,1,1,0,0,0,100.1,23.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(31).to({_off:false},0).to({x:485.1},12).wait(74).to({alpha:0},9).wait(232));

	// Layer 13
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(321.1,134.8,1,1,0,0,0,57.1,53.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({y:44.8},12).wait(81).to({alpha:0},9).wait(232));

	// Layer 11
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(-100.5,45,1,1,0,0,0,89.5,45);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(12).to({_off:false},0).to({x:89.5},12).wait(334));

	// Layer 10
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},12).wait(346));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;