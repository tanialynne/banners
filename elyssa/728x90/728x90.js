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
		{src:"_728_elyssa1.jpg", id:"_728_elyssa1"},
		{src:"_728_elyssa2.jpg", id:"_728_elyssa2"},
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


(lib._728_elyssa1 = function() {
	this.initialize(img._728_elyssa1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,90);


(lib._728_elyssa2 = function() {
	this.initialize(img._728_elyssa2);
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


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape.setTransform(438,52.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AhVC0IAAlnICkAAIAAA2IhmAAIAABdIBOAAIAAA0IhOAAIAABqIBtAAIAAA2g");
	this.shape_1.setTransform(421.9,37.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AhOC0IAAlnIA+AAIAAExIBfAAIAAA2g");
	this.shape_2.setTransform(401.5,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhgC0IAAlnIBcAAQAvAAAYAYQAXAZAAAuQAAAQgFAPQgEAPgKAMQgJAMgPAGQAYAIANAUQANAVAAAiQAAAegKAYQgJAXgWAOQgVAOgjAAgAgiCBIAaAAQAWAAALgOQAKgOAAgcQAAgbgMgOQgMgOgZAAIgUAAgAgigfIAWAAQAQAAAMgMQALgMABgWQAAgZgKgNQgKgNgTAAIgXAAg");
	this.shape_3.setTransform(378.6,37.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AAsC0IgKhQIhDAAIgLBQIg8AAIBDlnIBLAAIBDFngAAZAuIgZiZIAAAAIgYCZIAxAAg");
	this.shape_4.setTransform(354.7,37.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AhECdQgZgYgBgvIAAkMIA+AAIAAEPQABAUAHAKQAJAKAPAAQAQAAAJgKQAHgKABgUIAAkPIA9AAIAAEMQAAAvgZAYQgZAZgsABQgrgBgZgZg");
	this.shape_5.setTransform(331.1,37.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AhOC0IAAlnIA+AAIAAExIBfAAIAAA2g");
	this.shape_6.setTransform(309.8,37.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AAtC0IgMhQIhBAAIgLBQIg8AAIBClnIBLAAIBCFngAAYAuIgYiZIAAAAIgXCZIAvAAg");
	this.shape_7.setTransform(288.1,37.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgeC0IhLlnIA9AAIAsD5IAAAAIAtj5IA9AAIhMFng");
	this.shape_8.setTransform(265.9,37.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgeC0IAAiWIhLjRIA/AAIAqCJIABAAIAqiJIA/AAIhMDRIAACWg");
	this.shape_9.setTransform(232.6,37.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AhOC0IAAlnIA+AAIAAExIBfAAIAAA2g");
	this.shape_10.setTransform(212.7,37.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AhgC0IAAlnIBcAAQAvAAAYAYQAXAZAAAuQAAAQgFAPQgEAPgKAMQgJAMgPAGQAYAIANAUQANAVAAAiQAAAegKAYQgJAXgWAOQgVAOgjAAgAgiCBIAaAAQAWAAALgOQAKgOAAgcQAAgbgMgOQgMgOgZAAIgUAAgAgigfIAWAAQAQAAAMgMQALgMABgWQAAgZgKgNQgKgNgTAAIgXAAg");
	this.shape_11.setTransform(189.8,37.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgeC0IAAlnIA9AAIAAFng");
	this.shape_12.setTransform(170.1,37.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AhdC0IAAlnIBcAAQAuAAAYAbQAZAaABA4IAACNQgBA3gZAbQgYAbguAAgAgfCBIAVAAQAWABALgMQAKgLgBgcIAAidQABgbgKgMQgLgMgWABIgVAAg");
	this.shape_13.setTransform(150.6,37.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AhVC0IAAlnICkAAIAAA2IhmAAIAABdIBOAAIAAA0IhOAAIAABqIBtAAIAAA2g");
	this.shape_14.setTransform(127.6,37.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AAlC0IgqiVIgPABIgRAAIAACUIg+AAIAAlnIBXAAQAyAAAaAZQAbAYAAA6QAAAdgHASQgGATgKAIQgKAKgLAFIA1CjgAglgRIAWAAQAXABAKgMQALgNAAgfQAAgggLgMQgKgMgXAAIgWAAg");
	this.shape_15.setTransform(104,37.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgyCsQgWgMgKgVQgKgVAAgaIAAi4QAAgZAKgVQAKgVAWgMQAUgMAfgBQAfABAUANQAVANAKAXQAKAVAAAcIAAAaIg+AAIAAgbQAAgXgJgLQgIgKgNAAQgQAAgIAKQgHAKAAAUIAAC1QAAAUAHAKQAIAKAQAAQARAAAGgKQAHgJAAgSIAAgrIA+AAIAAApQAAAagKAVQgKAVgVAMQgUAMgfABQgfgBgUgMg");
	this.shape_16.setTransform(78.3,37.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AApC0IhOjfIAAAAIAADfIg4AAIAAlnIA5AAIBKDNIABAAIAAjNIA4AAIAAFng");
	this.shape_17.setTransform(53.4,37.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgdC0IAAlnIA8AAIAAFng");
	this.shape_18.setTransform(34,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,5,420.8,64);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgQARIAAghIAhAAIAAAhg");
	this.shape.setTransform(283.3,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgyBsIAAjXIBhAAIAAAgIg8AAIAAA4IAuAAIAAAfIguAAIAAA/IBAAAIAAAhg");
	this.shape_1.setTransform(273.7,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AguBsIAAjXIAlAAIAAC2IA4AAIAAAhg");
	this.shape_2.setTransform(261.4,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("Ag5BsIAAjXIA3AAQAcAAAOAPQAOAPAAAbQAAAKgDAJQgCAJgHAHQgFAHgJAEQAOAEAIAMQAIAMAAAVQAAASgFAOQgHAOgNAIQgMAJgVAAgAgUBNIAQAAQAMAAAHgIQAGgJAAgQQAAgRgHgIQgHgJgPAAIgMAAgAgUgSIAOAAQAJAAAHgHQAGgHABgOQgBgPgFgIQgHgHgJAAIgPAAg");
	this.shape_3.setTransform(247.7,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AAbBsIgHgwIgmAAIgHAwIgkAAIAnjXIAtAAIAoDXgAAOAbIgOhbIAAAAIgOBbIAcAAg");
	this.shape_4.setTransform(233.4,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("Ag4BsIAAjXIA3AAQAbAAAPAQQAPAQABAiIAABTQgBAigPAQQgPAQgbAAgAgTBNIAOAAQANAAAFgGQAHgHAAgRIAAhdQAAgRgHgHQgFgHgNABIgOAAg");
	this.shape_5.setTransform(219.2,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_6.setTransform(204.5,22.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgeBnQgNgHgGgNQgHgMABgQIAAhtQgBgQAHgMQAGgNANgHQAMgIASAAQATAAANAIQAMAHAHANQAFAMABAQIAABtQgBAQgFAMQgHANgMAHQgNAIgTAAQgSAAgMgIgAgOhIQgEAGgBANIAABrQABAMAEAGQAEAGAKAAQALAAAEgGQAFgGgBgMIAAhrQABgNgFgGQgEgFgLAAQgKAAgEAFg");
	this.shape_7.setTransform(189.2,22.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgzBsIAAjXIBnAAIAAAgIhCAAIAAA4IAxAAIAAAfIgxAAIAABgg");
	this.shape_8.setTransform(175.4,22.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgzBsIAAjXIBnAAIAAAgIhCAAIAAA4IAwAAIAAAfIgwAAIAABgg");
	this.shape_9.setTransform(162.1,22.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AAaBsIgGgwIgnAAIgHAwIgkAAIApjXIAsAAIAnDXgAAOAbIgOhbIAAAAIgNBbIAbAAg");
	this.shape_10.setTransform(148.5,22.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgRBsIAAhaIgth9IAmAAIAYBTIABAAIAZhTIAlAAIgsB9IAABag");
	this.shape_11.setTransform(128.5,22.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AguBsIAAjXIAlAAIAAC2IA4AAIAAAhg");
	this.shape_12.setTransform(116.6,22.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgyBsIAAjXIBhAAIAAAgIg8AAIAAA4IAuAAIAAAfIguAAIAAA/IBAAAIAAAhg");
	this.shape_13.setTransform(103.9,22.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AArBsIAAinIgBAAIgiCnIgQAAIghinIAAAAIAACnIghAAIAAjXIAxAAIAZB9IAAAAIAah9IAxAAIAADXg");
	this.shape_14.setTransform(87.7,22.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_15.setTransform(72.3,22.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_16.setTransform(58.1,22.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_17.setTransform(44.4,22.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AAaBsIgahPIAAAAIgYBPIglAAIArhwIgohnIAlAAIAVBFIAAAAIAVhFIAkAAIglBnIAqBwg");
	this.shape_18.setTransform(32,22.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_19.setTransform(19,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,2,278.8,40);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape.setTransform(354,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_1.setTransform(341.9,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_2.setTransform(326.4,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgxBzQgRgRAAgfIAAiEQAAgTAIgPQAGgPAPgJQAPgJAVAAQAVAAAPAKQAPAKAHAPQAIARgBATIAAAQIgqAAQAAgSgDgLQgDgLgFgEQgFgFgHABQgJAAgGAGQgFAGAAARIAACDQAAANAEAHQAGAHAKAAQAMAAAFgIQAHgIgBgUIAAgZIgaAAIAAgiIBHAAIAACDIgWAAIgIgUQgKAMgKAGQgKAFgNAAQgbgBgQgRg");
	this.shape_3.setTransform(308.9,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_4.setTransform(292.4,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("Ag4CCIAAkCIAsAAIAADaIBFAAIAAAog");
	this.shape_5.setTransform(277.7,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("Ag4CCIAAkCIAtAAIAADaIBEAAIAAAog");
	this.shape_6.setTransform(263.7,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AglB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAHAPQAIAPAAATIAACEQAAASgIAPQgHAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgGAHABAPIAACCQgBAOAGAHQAFAHAMAAQANAAAFgHQAFgHAAgOIAAiCQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_7.setTransform(247,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgkB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAVAAQAXAAAPAKQAOAKAHAPQAIARAAATIAAAUIgtAAIAAgVQAAgQgHgIQgFgHgKAAQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQAMAAAFgHQAGgGgBgNIAAggIAtAAIAAAfQAAASgIAPQgHAPgOAJQgPAJgXAAQgVAAgPgJg");
	this.shape_8.setTransform(228.9,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_9.setTransform(203.9,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgxByQgRgSgBgiIAAjAIAtAAIAADCQAAAOAGAHQAFAHALAAQALAAAHgHQAFgHAAgOIAAjCIAtAAIAADAQAAAigTASQgSARgfAAQgeAAgTgRg");
	this.shape_10.setTransform(187,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQANAAAFgHQAGgHgBgOIAAiCQABgPgGgHQgFgHgNAAQgMAAgFAHg");
	this.shape_11.setTransform(169,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_12.setTransform(155,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgxBzQgQgRgBgfIAAiEQAAgTAIgPQAGgPAPgJQAPgJAVAAQAVAAAPAKQAPAKAHAPQAIARAAATIAAAQIgrAAQAAgSgCgLQgDgLgGgEQgFgFgIABQgIAAgFAGQgGAGAAARIAACDQgBANAGAHQAFAHAKAAQAMAAAFgIQAHgIgBgUIAAgZIgaAAIAAgiIBHAAIAACDIgWAAIgIgUQgKAMgKAGQgKAFgNAAQgbgBgQgRg");
	this.shape_13.setTransform(140.9,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_14.setTransform(127,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_15.setTransform(115,23.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_16.setTransform(99.9,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_17.setTransform(84.4,23.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA/AAQAkgBASASQAUASgBApQAAAVgEAOQgFANgHAFQgIAIgHADIAmB2gAgagMIAQAAQAPABAIgJQAIgJgBgXQABgWgIgJQgIgJgPABIgQAAg");
	this.shape_18.setTransform(67.4,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AhHCCIAAkCIBAAAQAogBATASQAUASAAApQAAAqgUAQQgTASgogBIgTAAIAABrgAgagMIARAAQAUABAIgJQAIgJAAgXQAAgWgIgJQgIgJgUABIgRAAg");
	this.shape_19.setTransform(49.4,23.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_20.setTransform(25,23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA2AAIAwECgAARAhIgRhtIAAAAIgRBtIAiAAg");
	this.shape_21.setTransform(10,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360.2,47.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AhDCCIAAkCIBCAAQAhgBASAUQASATAAAoIAABlQAAAogSATQgSAUghAAgAgWBdIAPAAQAQAAAHgIQAHgIAAgUIAAhxQAAgTgHgJQgHgIgQAAIgPAAg");
	this.shape.setTransform(293,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_1.setTransform(276.4,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_2.setTransform(261,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AhHCCIAAkCIBAAAQAogBATASQAUASAAApQAAAqgUAQQgTASgogBIgTAAIAABrgAgagMIARAAQAUABAIgJQAIgJAAgXQAAgWgIgJQgIgJgUABIgRAAg");
	this.shape_3.setTransform(245.4,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_4.setTransform(228.4,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgkB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAVAAQAXAAAPAKQAOAKAHAPQAIARAAATIAAAUIgtAAIAAgVQAAgQgHgIQgFgHgKAAQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQAMAAAFgHQAGgGgBgNIAAggIAtAAIAAAfQAAASgIAPQgHAPgOAJQgPAJgXAAQgVAAgPgJg");
	this.shape_5.setTransform(210.9,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgkB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAVAAQAXAAAPAKQAOAKAHAPQAIARAAATIAAAUIgtAAIAAgVQAAgQgHgIQgFgHgKAAQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQAMAAAFgHQAGgGgBgNIAAggIAtAAIAAAfQAAASgIAPQgHAPgOAJQgPAJgXAAQgVAAgPgJg");
	this.shape_6.setTransform(192.9,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA3AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_7.setTransform(176,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_8.setTransform(151.9,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA2AAIAwECgAARAhIgRhtIAAAAIgRBtIAiAAg");
	this.shape_9.setTransform(136,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAhCCIggiqIgBAAIgcCqIgmAAIgxkCIAqAAIAbCjIABAAIAdijIAiAAIAfCjIAAAAIAZijIAqAAIguECg");
	this.shape_10.setTransform(115.7,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAwkCIA2AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_11.setTransform(88,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_12.setTransform(71.9,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_13.setTransform(55.9,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgVCCIAAhsIg2iWIAtAAIAeBjIABAAIAehjIAtAAIg2CWIAABsg");
	this.shape_14.setTransform(40,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("Ag4CCIAAkCIAsAAIAADaIBFAAIAAAog");
	this.shape_15.setTransform(25.7,23.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_16.setTransform(10.4,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.2,47.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgXAAIAaiPIAdAAIAbCPgAAJASIgJg8IAAAAIgJA8IASAAg");
	this.shape.setTransform(114.5,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgnBIIAAiPIAkAAQAVAAALAKQALAKAAAXQAAAXgLAIQgLAKgVAAIgLAAIAAA7gAgOgGIAKAAQAKAAAEgFQAFgEAAgNQAAgNgFgFQgEgEgKAAIgKAAg");
	this.shape_1.setTransform(105.3,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgbBAQgJgKAAgRIAAhJQAAgKAEgIQAEgJAIgFQAIgFAMAAQALAAAIAGQAJAFADAJQAEAJABALIAAAJIgYAAQAAgLgBgGQgCgFgDgDQgDgCgDAAQgFAAgDADQgDAEAAAJIAABIQAAAHACAEQADAEAGAAQAGAAADgEQADgFAAgLIAAgOIgOAAIAAgSIAnAAIAABIIgMAAIgFgLQgFAGgFAEQgHADgGAAQgPAAgJgKg");
	this.shape_2.setTransform(95,36.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgeBIIAAiPIAYAAIAAB5IAlAAIAAAWg");
	this.shape_3.setTransform(82.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgUBFQgJgFgEgJQgDgIAAgKIAAhJQAAgKADgIQAEgJAJgFQAJgFALAAQAMAAAJAFQAIAFAFAJQADAIAAAKIAABJQAAAKgDAIQgFAJgIAFQgJAFgMAAQgLAAgJgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_4.setTransform(72.8,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgUBFQgJgFgEgJQgDgIAAgKIAAhJQAAgKADgIQAEgJAJgFQAJgFALAAQANAAAIAFQAIAFAFAJQADAIAAAKIAABJQAAAKgDAIQgFAJgIAFQgIAFgNAAQgLAAgJgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_5.setTransform(62.8,36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAMBIIAAhAIgYAAIAABAIgZAAIAAiPIAZAAIAAA7IAYAAIAAg7IAaAAIAACPg");
	this.shape_6.setTransform(52.8,36.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQAMAAAIAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgEgEQgDgEgFAAQgGAAgCAEQgDAEAAAIIAABHQAAAIADAEQACAEAGAAQAGAAADgEQADgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgIAFgMAAQgLAAgIgFg");
	this.shape_7.setTransform(42.8,36.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape_8.setTransform(33.3,36.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAMBIIAAhAIgYAAIAABAIgYAAIAAiPIAYAAIAAA7IAYAAIAAg7IAZAAIAACPg");
	this.shape_9.setTransform(113.8,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgbBAQgJgKAAgRIAAhJQAAgKAEgIQAEgJAIgFQAIgFAMAAQALAAAIAGQAIAFAFAJQADAJAAALIAAAJIgXAAQAAgLgCgGQgBgFgDgDQgEgCgCAAQgFAAgDADQgDAEAAAJIAABIQgBAHADAEQADAEAGAAQAGAAADgEQADgFAAgLIAAgOIgOAAIAAgSIAnAAIAABIIgMAAIgFgLQgFAGgGAEQgFADgHAAQgOAAgKgKg");
	this.shape_10.setTransform(103.7,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_11.setTransform(96,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAMBIIAAhAIgXAAIAABAIgZAAIAAiPIAZAAIAAA7IAXAAIAAg7IAZAAIAACPg");
	this.shape_12.setTransform(88.2,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgQBFQgIgDgEgHQgFgHAAgMIAAgLIAWAAIAAALQAAAGADAEQADADAFAAQAEAAADgEQADgEAAgKIAAggQAAgFgDgDQgDgDgEAAQgEAAgDADQgDADgCADIgTAAIABgUIABgXIAAgeIA6AAIAAAVIglAAIgCAfIABAAQAEgFAFgCQACgBAGAAQAOAAAGAKQAGAKAAAQIAAAUQAAAXgIALQgIALgSAAQgIAAgIgEg");
	this.shape_13.setTransform(74.3,14.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_14.setTransform(67.6,20.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AADBIIAAgjIgpAAIAAgSIAohaIAYAAIAABaIANAAIAAASIgNAAIAAAjgAgTATIAXAAIAAg3IgBAAg");
	this.shape_15.setTransform(60.8,14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AASBIIgFggIgZAAIgEAgIgZAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgIA8IARAAg");
	this.shape_16.setTransform(47.6,14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AANBIIAAhAIgZAAIAABAIgZAAIAAiPIAZAAIAAA7IAZAAIAAg7IAZAAIAACPg");
	this.shape_17.setTransform(33.7,14.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_18.setTransform(24.8,14.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgLBIIAAiPIAXAAIAACPg");
	this.shape_19.setTransform(18.1,14.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AASBIIgSheIAAAAIgPBeIgVAAIgbiPIAXAAIAPBaIABAAIAQhaIASAAIARBaIAAAAIAOhaIAXAAIgZCPg");
	this.shape_20.setTransform(8.5,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,50);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgbAcIAAg3IA3AAIAAA3g");
	this.shape.setTransform(492.3,45.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AhRCtIAAlZICcAAIAAA0IhhAAIAABZIBLAAIAAAyIhLAAIAABmIBoAAIAAA0g");
	this.shape_1.setTransform(476.9,30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AhSCtIAAlZICeAAIAAA0IhiAAIAABZIBKAAIAAAyIhKAAIAABmIBoAAIAAA0g");
	this.shape_2.setTransform(455.6,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAkCtIgpiQIgOABIgQABIAACOIg8AAIAAlZIBUAAQAwAAAZAYQAZAXAAA3QAAAcgGASQgGASgKAHQgJALgKAEIAyCdgAgjgQIAVAAQAWAAAKgMQAKgLAAgfQAAgegKgMQgKgLgWAAIgVAAg");
	this.shape_3.setTransform(432.9,30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AhRCtIAAlZICjAAIAAA0IhoAAIAABZIBNAAIAAAyIhNAAIAACag");
	this.shape_4.setTransform(410.3,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("Ag6AVIAAgqIB0AAIAAAqg");
	this.shape_5.setTransform(391.1,35.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgcCtIAAklIg6AAIAAg0ICtAAIAAA0Ig6AAIAAElg");
	this.shape_6.setTransform(373.8,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AhcCtIAAlZIBYAAQAuAAAWAYQAWAXAAAtQAAAPgEAOQgFAPgJALQgJALgOAGQAXAIAMATQANAUAAAhQAAAdgJAXQgJAWgVANQgVAOghAAgAghB8IAZAAQAWAAAKgOQAKgNgBgbQABgagMgOQgLgNgZAAIgTAAgAghgeIAWAAQAPAAALgLQALgLABgWQAAgYgKgMQgKgNgRAAIgXAAg");
	this.shape_7.setTransform(352.7,30.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AhSCtIAAlZICdAAIAAA0IhhAAIAABZIBKAAIAAAyIhKAAIAABmIBpAAIAAA0g");
	this.shape_8.setTransform(330.4,30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AhZCtIAAlZIBXAAQAtAAAYAaQAYAaAAA1IAACHQAAA1gYAaQgYAagtAAgAgeB8IAVAAQAVAAAKgLQAJgLAAgbIAAiVQAAgbgJgLQgKgLgVAAIgVAAg");
	this.shape_9.setTransform(307.2,30.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AhZCtIAAlZIBXAAQAtAAAYAaQAYAaAAA1IAACHQAAA1gYAaQgYAagtAAgAgeB8IAVAAQAVAAAKgLQAJgLAAgbIAAiVQAAgbgJgLQgKgLgVAAIgVAAg");
	this.shape_10.setTransform(272.5,30.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AhSCtIAAlZICeAAIAAA0IhiAAIAABZIBKAAIAAAyIhKAAIAABmIBoAAIAAA0g");
	this.shape_11.setTransform(250.4,30.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgcCtIAAklIg6AAIAAg0ICtAAIAAA0Ig6AAIAAElg");
	this.shape_12.setTransform(229.9,30.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AArCtIgLhNIg/AAIgLBNIg5AAIA/lZIBIAAIBAFZgAAXAsIgXiTIAAAAIgXCTIAuAAg");
	this.shape_13.setTransform(209.9,30.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AhCCXQgXgXgBgtIAAkBIA8AAIAAEEQAAATAIAJQAHAKAPAAQAQAAAHgKQAIgJAAgTIAAkEIA8AAIAAEBQgBAtgYAXQgYAYgqAAQgqAAgYgYg");
	this.shape_14.setTransform(187.3,31.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AhZCtIAAlZIBYAAQAsAAAYAaQAYAagBA1IAACHQABA1gYAaQgYAagsAAgAgeB8IAVAAQAVAAAKgLQAKgLgBgbIAAiVQABgbgKgLQgKgLgVAAIgVAAg");
	this.shape_15.setTransform(163.3,30.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AArCtIgLhNIg/AAIgLBNIg5AAIA/lZIBIAAIBAFZgAAXAsIgXiTIAAAAIgXCTIAuAAg");
	this.shape_16.setTransform(140.6,30.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AAkCtIgpiQIgOABIgQABIAACOIg8AAIAAlZIBUAAQAwAAAZAYQAZAXAAA3QAAAcgGASQgGASgKAHQgJALgKAEIAyCdgAgjgQIAVAAQAWAAAKgMQAKgLAAgfQAAgegKgMQgKgLgWAAIgVAAg");
	this.shape_17.setTransform(118.5,30.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AhCCaQgWgXAAgqIAAixQAAgYAJgVQAKgTATgMQAUgMAdAAQAcAAATANQAUAMAKAWQAKAWAAAZIAAAXIg4AAQAAgagEgOQgEgOgHgGQgIgGgJAAQgMAAgHAIQgIAJAAAWIAACvQAAARAGAKQAHAJAPABQAQAAAHgLQAIgMAAgZIAAgiIgkAAIAAgtIBfAAIAACuIgdAAIgLgaQgNAPgNAIQgNAHgTAAQgkAAgVgXg");
	this.shape_18.setTransform(93.8,30.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AhZCtIAAlZIBYAAQAsAAAYAaQAYAaAAA1IAACHQAAA1gYAaQgYAagsAAgAgeB8IAVAAQAVAAAKgLQAKgLgBgbIAAiVQABgbgKgLQgKgLgVAAIgVAAg");
	this.shape_19.setTransform(59.3,30.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AAnCtIhKjXIgBAAIAADXIg2AAIAAlZIA3AAIBHDEIABAAIAAjEIA1AAIAAFZg");
	this.shape_20.setTransform(35.3,30.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AArCtIgLhNIg/AAIgLBNIg5AAIA/lZIBIAAIBAFZgAAXAsIgXiTIAAAAIgXCTIAuAAg");
	this.shape_21.setTransform(12.7,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499.9,61.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgkBVQgNgNgBgZIAAiQIAhAAIAACRQABALAEAFQAFAFAHAAQAJAAAEgFQAFgFgBgLIAAiRIAiAAIAACQQgBAZgNANQgNANgYAAQgXAAgNgNg");
	this.shape.setTransform(373.3,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgyBhIAAjBIAyAAQAYAAANAOQANAPABAeIAABLQgBAegNAPQgNAOgYAAgAgRBFIANAAQALABAFgHQAGgFgBgQIAAhTQABgPgGgHQgFgFgLAAIgNAAg");
	this.shape_1.setTransform(359.8,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgbBdQgMgHgFgLQgGgMAAgNIAAhiQAAgOAGgMQAFgLAMgHQALgGAQgBQARABALAGQALAHAGALQAGAMAAAOIAABiQAAANgGAMQgGALgLAHQgLAHgRgBQgQABgLgHgAgMhAQgFAFAAALIAABhQAAALAFAFQADAGAJgBQAJABAFgGQADgFAAgLIAAhhQAAgLgDgFQgFgGgJAAQgJAAgDAGg");
	this.shape_2.setTransform(346.3,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgcBdQgKgHgGgLQgGgMAAgNIAAhiQAAgOAGgMQAGgLAKgHQAMgGAQgBQARABAMAGQALAHAFALQAGAMAAAOIAABiQAAANgGAMQgFALgLAHQgMAHgRgBQgQABgMgHgAgMhAQgEAFAAALIAABhQAAALAEAFQADAGAJgBQAJABAEgGQAEgFABgLIAAhhQgBgLgEgFQgEgGgJAAQgJAAgDAGg");
	this.shape_3.setTransform(326.8,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPBhIAAikIghAAIAAgdIBhAAIAAAdIghAAIAACkg");
	this.shape_4.setTransform(314.7,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgyBhIAAjBIAyAAQAYAAANAOQANAPABAeIAABLQgBAegNAPQgNAOgYAAgAgRBFIANAAQALABAFgHQAGgFgBgQIAAhTQABgPgGgHQgFgFgLAAIgNAAg");
	this.shape_5.setTransform(296.8,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgtBhIAAjBIBYAAIAAAdIg3AAIAAAyIAqAAIAAAcIgqAAIAAA5IA6AAIAAAdg");
	this.shape_6.setTransform(284.3,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAUBhIgWhRIgIABIgJAAIAABQIgiAAIAAjBIAvAAQAbAAAOANQAOAOAAAfQAAAPgDAKQgEAKgFADQgGAHgFABIAcBZgAgTgJIAMAAQALABAGgHQAGgGAAgRQAAgSgGgGQgGgHgLABIgMAAg");
	this.shape_7.setTransform(271.5,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAUBhIgWhRIgIABIgJAAIAABQIgiAAIAAjBIAvAAQAbAAAOANQAOAOAAAfQAAAPgDAKQgEAKgFADQgGAHgFABIAcBZgAgTgJIAMAAQALABAGgHQAGgGAAgRQAAgSgGgGQgGgHgLABIgMAAg");
	this.shape_8.setTransform(258,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgtBhIAAjBIBYAAIAAAdIg3AAIAAAyIAqAAIAAAcIgqAAIAAA5IA6AAIAAAdg");
	this.shape_9.setTransform(245.3,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgtBhIAAjBIBbAAIAAAdIg6AAIAAAyIArAAIAAAcIgrAAIAABWg");
	this.shape_10.setTransform(233.3,18.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgbBcQgKgHgHgNQgFgLgBgQIAggEQABAPAFAHQAFAIAHgBQAJABAFgFQAFgEABgKQgBgLgHgIQgGgKgJgIIgTgPQgLgJgGgMQgIgNAAgQQAAgYAOgMQAOgNAWAAQAOAAAJAHQALAFAFALQAGAKABAOIgfAEQgBgMgGgFQgFgFgGAAQgGABgFAEQgEAFAAAKQABAJAGAJQAHAJAIAHIAUAQQAKAKAHAMQAHAMAAAQQAAAQgHALQgGALgMAGQgMAGgOgBQgPABgMgIg");
	this.shape_11.setTransform(220.9,18.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAVBhIgoh4IAAAAIAAB4IgfAAIAAjBIAfAAIAnBuIAAAAIAAhuIAfAAIAADBg");
	this.shape_12.setTransform(208.3,18.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAYBhIgGgrIgjAAIgGArIggAAIAkjBIAoAAIAjDBgAANAYIgNhRIAAAAIgMBRIAZAAg");
	this.shape_13.setTransform(195.5,18.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAUBhIgWhRIgIABIgJAAIAABQIgiAAIAAjBIAvAAQAbAAAOANQAOAOAAAfQAAAPgDAKQgEAKgFADQgGAHgFABIAcBZgAgTgJIAMAAQALABAGgHQAGgGAAgRQAAgSgGgGQgGgHgLABIgMAAg");
	this.shape_14.setTransform(183,18.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgPBhIAAikIghAAIAAgdIBhAAIAAAdIghAAIAACkg");
	this.shape_15.setTransform(170.7,18.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgPAgIANggIgMAAIAAgfIAeAAIAAAfIgRAgg");
	this.shape_16.setTransform(156.5,28.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgbBdQgKgHgGgLQgGgMAAgNIAAhiQAAgOAGgMQAGgLAKgHQAMgGAQgBQAQAAAMAIQAKAHAGAMQAFAMAAAPIAAAOIgiAAIAAgPQABgMgFgGQgFgGgGAAQgJAAgEAGQgDAFAAALIAABhQAAALADAFQAEAGAJgBQAIAAAEgEQAEgGgBgJIAAgYIAiAAIAAAXQAAANgFAMQgGALgKAHQgMAHgQgBQgQABgMgHg");
	this.shape_17.setTransform(146.7,18.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgbBdQgKgHgGgLQgGgMAAgNIAAhiQAAgOAGgMQAGgLAKgHQAMgGAQgBQAQAAAMAIQAKAHAGAMQAFAMAAAPIAAAOIgiAAIAAgPQABgMgFgGQgFgGgGAAQgJAAgEAGQgDAFAAALIAABhQAAALADAFQAEAGAJgBQAIAAAEgEQAEgGgBgJIAAgYIAiAAIAAAXQAAANgFAMQgGALgKAHQgMAHgQgBQgQABgMgHg");
	this.shape_18.setTransform(133.2,18.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgPBhIAAikIghAAIAAgdIBhAAIAAAdIghAAIAACkg");
	this.shape_19.setTransform(121.2,18.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AgtBhIAAjBIBYAAIAAAdIg3AAIAAAyIAqAAIAAAcIgqAAIAAA5IA6AAIAAAdg");
	this.shape_20.setTransform(104.3,18.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AgbBcQgKgHgHgNQgFgLgBgQIAggEQABAPAGAHQAEAIAHgBQAJABAFgFQAFgEAAgKQAAgLgHgIQgHgKgHgIIgVgPQgKgJgGgMQgIgNABgQQAAgYANgMQANgNAXAAQAOAAAJAHQAKAFAHALQAFAKACAOIggAEQgCgMgFgFQgFgFgGAAQgGABgEAEQgFAFAAAKQABAJAGAJQAHAJAIAHIAUAQQAKAKAHAMQAHAMAAAQQAAAQgHALQgGALgMAGQgMAGgOgBQgPABgMgIg");
	this.shape_21.setTransform(91.9,18.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AgcBdQgKgHgGgLQgGgMAAgNIAAhiQAAgOAGgMQAGgLAKgHQAMgGAQgBQARABAMAGQALAHAFALQAGAMAAAOIAABiQAAANgGAMQgFALgLAHQgMAHgRgBQgQABgMgHgAgNhAQgDAFAAALIAABhQAAALADAFQAEAGAJgBQAJABAEgGQAEgFABgLIAAhhQgBgLgEgFQgEgGgJAAQgJAAgEAGg");
	this.shape_22.setTransform(79.3,18.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#004262").s().p("AASBhIAAhWIgiAAIAABWIgiAAIAAjBIAiAAIAABPIAiAAIAAhPIAhAAIAADBg");
	this.shape_23.setTransform(65.8,18.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#004262").s().p("AgbBdQgKgHgGgLQgGgMAAgNIAAhiQAAgOAGgMQAGgLAKgHQAMgGAQgBQAQAAAMAIQAKAHAGAMQAFAMAAAPIAAAOIgiAAIAAgPQABgMgFgGQgFgGgGAAQgJAAgEAGQgDAFAAALIAABhQAAALADAFQAEAGAJgBQAIAAAEgEQAEgGgBgJIAAgYIAiAAIAAAXQAAANgFAMQgGALgKAHQgMAHgQgBQgQABgMgHg");
	this.shape_24.setTransform(52.2,18.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#004262").s().p("AgtBhIAAjBIBYAAIAAAdIg3AAIAAAyIAqAAIAAAcIgqAAIAAA5IA6AAIAAAdg");
	this.shape_25.setTransform(33.8,18.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#004262").s().p("AASBhIAAhWIgiAAIAABWIgiAAIAAjBIAiAAIAABPIAiAAIAAhPIAhAAIAADBg");
	this.shape_26.setTransform(20.8,18.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#004262").s().p("AgaBcQgLgHgGgNQgGgLgBgQIAggEQABAPAFAHQAGAIAGgBQAJABAFgFQAFgEAAgKQAAgLgHgIQgHgKgIgIIgUgPQgKgJgHgMQgGgNgBgQQAAgYAOgMQANgNAXAAQAOAAAKAHQAKAFAGALQAFAKABAOIgfAEQgCgMgFgFQgFgFgGAAQgGABgFAEQgEAFAAAKQAAAJAIAJQAGAJAIAHIAUAQQALAKAGAMQAHAMAAAQQAAAQgGALQgHALgMAGQgMAGgOgBQgQABgKgIg");
	this.shape_27.setTransform(7.9,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,382.2,36.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728_elyssa2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,90);


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
	this.instance = new lib._728_elyssa1();

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(362));

	// Layer 17
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(620.5,122,1,1,0,0,0,55,19.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(339).to({_off:false},0).to({y:62},13).wait(10));

	// Layer 16
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(374,45,1,1,0,0,0,151.5,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(331).to({_off:false},0).to({alpha:1},13).wait(18));

	// Layer 6
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(875.3,60.4,1,1,0,0,0,255.3,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(238).to({_off:false},0).to({x:463.3,y:60.9,alpha:1},11).wait(73).to({alpha:0},8).wait(32));

	// Layer 5
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(771.8,20.5,1,1,0,0,0,172.8,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(231).to({_off:false},0).to({x:359.8,y:21,alpha:1},11).wait(80).to({alpha:0},8).wait(32));

	// Layer 3
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(1000.4,60.2,1,1,0,0,0,249.9,30.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(138).to({_off:false},0).to({x:440.4},13).wait(69).to({alpha:0},11).wait(131));

	// Layer 12
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(941.6,23.2,1,1,0,0,0,191.1,18.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(129).to({_off:false},0).to({x:381.6},13).wait(78).to({alpha:0},11).wait(131));

	// Layer 4
	this.instance_7 = new lib.Symbol10();
	this.instance_7.setTransform(920.1,61,1,1,0,0,0,180.1,23.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).to({x:520.1},13).wait(66).to({alpha:0},9).wait(234));

	// Layer 2
	this.instance_8 = new lib.Symbol9();
	this.instance_8.setTransform(892.1,28.6,1,1,0,0,0,152.1,23.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33).to({_off:false},0).to({x:492.1},13).wait(73).to({alpha:0},9).wait(234));

	// Layer 13
	this.instance_9 = new lib.Symbol8();
	this.instance_9.setTransform(264.5,135.2,1,1,0,0,0,60.5,25);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(26).to({_off:false},0).to({y:45.2},13).wait(80).to({alpha:0},9).wait(234));

	// Layer 1
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(89.5,45,1,1,0,0,0,89.5,45);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(331).to({_off:false},0).to({alpha:1},13).wait(18));

	// Layer 11
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(-110.5,45,1,1,0,0,0,89.5,45);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({x:89.5},13).wait(336));

	// Layer 10
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(362));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;