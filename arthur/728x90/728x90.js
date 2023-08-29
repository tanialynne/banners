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
		{src:"_728_arthur.jpg", id:"_728_arthur"},
		{src:"_728_bg.jpg", id:"_728_bg"},
		{src:"_728_border.png", id:"_728_border"},
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



(lib._728_arthur = function() {
	this.initialize(img._728_arthur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,90);


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


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgiAjIAAhFIBFAAIAABFg");
	this.shape.setTransform(501.7,56.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("Ag8DNQgZgQgNgbQgNgbgCghIBHgKQACAgAMARQAMAQAQAAQAUAAALgKQAMgKAAgTQAAgagPgTQgPgUgVgTQgWgSgWgTQgXgUgPgaQgPgcgBgkQABg0AdgcQAegcA1AAQAfAAAWANQAWAOAMAXQANAYAEAeIhHAIQgDgbgMgLQgLgKgOABQgQgBgJALQgKAMAAAUQABAWAPATQAPASAUATQAXASAWAUQAXAUAPAcQAPAaAAAjQAAAkgPAZQgPAYgaANQgaANghAAQgjAAgYgRg");
	this.shape_1.setTransform(481.5,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("Ag8DNQgZgQgNgbQgNgbgCghIBHgKQACAgAMARQAMAQAQAAQAUAAALgKQAMgKAAgTQAAgagPgTQgPgUgVgTQgWgSgWgTQgXgUgPgaQgPgcgBgkQABg0AdgcQAegcA1AAQAfAAAWANQAWAOAMAXQANAYAEAeIhHAIQgDgbgMgLQgLgKgOABQgQgBgJALQgKAMAAAUQABAWAPATQAPASAUATQAXASAWAUQAXAUAPAcQAPAaAAAjQAAAkgPAZQgPAYgaANQgaANghAAQgjAAgYgRg");
	this.shape_2.setTransform(454.9,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhnDYIAAmvIDGAAIAABBIh7AAIAABwIBeAAIAAA+IheAAIAACAICDAAIAABAg");
	this.shape_3.setTransform(429.1,38.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AheDYIAAmvIBKAAIAAFvIBzAAIAABAg");
	this.shape_4.setTransform(404.6,38.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAsDYIgyizIgSABIgVABIAACxIhKAAIAAmvIBoAAQA9gBAgAeQAfAeAABFQAAAjgIAWQgHAWgMAKQgMANgNAFIA/DEgAgtgVIAbAAQAcABANgPQAMgOAAgmQAAgmgMgPQgNgOgcAAIgbAAg");
	this.shape_5.setTransform(364.2,38.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("Ag/DOQgZgOgMgZQgMgZAAgfIAAjdQAAgfAMgZQAMgaAZgOQAagPAlAAQAmAAAaAPQAZAOAMAaQAMAZAAAfIAADdQAAAfgMAZQgMAZgZAOQgaAQgmAAQglAAgagQgAgeiRQgJAMABAYIAADaQgBAZAJAMQAJALAVAAQAWAAAJgLQAIgMAAgZIAAjaQAAgYgIgMQgJgMgWABQgVgBgJAMg");
	this.shape_6.setTransform(333.5,38.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("Ag8DNQgZgQgNgbQgNgbgCghIBHgKQACAgAMARQAMAQAQAAQAUAAALgKQAMgKAAgTQAAgagPgTQgPgUgVgTQgWgSgWgTQgXgUgPgaQgPgcgBgkQABg0AdgcQAegcA1AAQAfAAAWANQAWAOAMAXQANAYAEAeIhHAIQgDgbgMgLQgLgKgOABQgQgBgJALQgKAMAAAUQABAWAPATQAPASAUATQAXASAWAUQAXAUAPAcQAPAaAAAjQAAAkgPAZQgPAYgaANQgaANghAAQgjAAgYgRg");
	this.shape_7.setTransform(291.7,38.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AAtDYIgzizIgSABIgVABIAACxIhKAAIAAmvIBpAAQA8gBAfAeQAhAeAABFQgBAjgHAWQgIAWgMAKQgMANgNAFIA/DEgAgtgVIAbAAQAbABANgPQANgOAAgmQAAgmgNgPQgNgOgbAAIgbAAg");
	this.shape_8.setTransform(264.2,38.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AA1DYIgNhgIhQAAIgMBgIhIAAIBPmvIBaAAIBRGvgAAdA3Igdi4IAAAAIgcC4IA5AAg");
	this.shape_9.setTransform(235.3,38.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AhnDYIAAmvIDGAAIAABBIh7AAIAABwIBeAAIAAA+IheAAIAACAICEAAIAABAg");
	this.shape_10.setTransform(209.3,38.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgkDYIAAi0Ihaj7IBMAAIAyClIABAAIAyilIBMAAIhaD7IAAC0g");
	this.shape_11.setTransform(181.9,38.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("Ag+DOQgagOgMgZQgNgZAAgfIAAjdQAAgfANgZQAMgaAagOQAZgPAlAAQAnAAAYAPQAaAOAMAaQANAZAAAfIAADdQAAAfgNAZQgMAZgaAOQgYAQgnAAQglAAgZgQgAgeiRQgIAMAAAYIAADaQAAAZAIAMQAJALAVAAQAWAAAIgLQAKgMgBgZIAAjaQABgYgKgMQgIgMgWABQgVgBgJAMg");
	this.shape_12.setTransform(140.3,38.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AA3DYIg2kcIgBAAIgxEcIg+AAIhSmvIBFAAIAuESIABAAIAxkSIA7AAIAyESIABAAIAqkSIBGAAIhNGvg");
	this.shape_13.setTransform(104.8,38.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgkDYIAAluIhIAAIAAhBIDZAAIAABBIhIAAIAAFug");
	this.shape_14.setTransform(73.6,38.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AAxDYIhdkMIgCAAIAAEMIhCAAIAAmvIBEAAIBZD2IACAAIAAj2IBCAAIAAGvg");
	this.shape_15.setTransform(33.7,38.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgjDYIAAmvIBHAAIAAGvg");
	this.shape_16.setTransform(10.4,38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,510.6,76);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgpBgQgNgPgBgaIAAhtQABgQAFgMQAHgNALgHQANgIASAAQARAAAMAIQANAIAFAOQAHANAAAQIAAAOIgjAAQAAgQgCgJQgDgJgEgDQgGgEgFABQgHgBgFAGQgEAFAAANIAABtQAAALAEAGQADAGAKAAQAJAAAFgHQAEgHABgQIAAgVIgWAAIAAgbIA7AAIAABsIgSAAIgHgRQgIAKgJAFQgIAFgLAAQgWgBgOgOg");
	this.shape.setTransform(335.9,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AAYBsIgtiGIgBAAIAACGIghAAIAAjXIAiAAIAsB6IAAAAIAAh6IAhAAIAADXg");
	this.shape_1.setTransform(321,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_2.setTransform(309.3,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AAYBsIguiGIAAAAIAACGIgiAAIAAjXIAjAAIArB6IABAAIAAh6IAhAAIAADXg");
	this.shape_3.setTransform(297.6,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_4.setTransform(285.9,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAbBsIgHgwIgnAAIgGAwIgkAAIAnjXIAtAAIAoDXgAAOAbIgOhbIAAAAIgNBbIAbAAg");
	this.shape_5.setTransform(275.1,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_6.setTransform(261.3,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_7.setTransform(247.6,20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AguBsIAAjXIAlAAIAAC2IA4AAIAAAhg");
	this.shape_8.setTransform(229.9,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AAaBsIgGgwIgnAAIgHAwIgkAAIApjXIAsAAIAnDXgAAOAbIgOhbIAAAAIgNBbIAbAAg");
	this.shape_9.setTransform(216.9,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AgdBnQgNgHgGgNQgHgMABgQIAAhtQgBgQAHgMQAGgNANgHQAMgIARAAQATAAANAIQAMAIAGAOQAFANAAAQIAAAQIglAAIAAgQQABgOgGgGQgFgHgIABQgJAAgEAFQgEAGgBANIAABrQABAMAEAGQAEAGAJAAQAKAAAFgFQADgGAAgLIAAgaIAlAAIAAAZQAAAQgFAMQgGANgMAHQgNAIgTAAQgRAAgMgIg");
	this.shape_10.setTransform(202.6,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_11.setTransform(191,20.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AAYBsIguiGIAAAAIAACGIgiAAIAAjXIAjAAIArB6IABAAIAAh6IAhAAIAADXg");
	this.shape_12.setTransform(179.4,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AATBsIAAhgIglAAIAABgIglAAIAAjXIAlAAIAABYIAlAAIAAhYIAlAAIAADXg");
	this.shape_13.setTransform(164.4,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgdBnQgNgHgGgNQgHgMAAgQIAAhtQAAgQAHgMQAGgNANgHQAMgIARAAQATAAANAIQALAIAHAOQAFANABAQIAAAQIgmAAIAAgQQABgOgGgGQgFgHgIABQgIAAgFAFQgEAGgBANIAABrQABAMAEAGQAFAGAIAAQALAAAEgFQADgGAAgLIAAgaIAmAAIAAAZQgBAQgFAMQgHANgLAHQgNAIgTAAQgRAAgMgIg");
	this.shape_14.setTransform(149.3,20.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_15.setTransform(135.6,20.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_16.setTransform(122.7,20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AAtBqQgLgEgIgIQgJAJgKAEQgIAEgOAAQgYgBgOgNQgNgOgBgXQABgLAEgLQADgLAHgKQAGgKAIgHIgMgdQgFgPAAgPQAAgPAFgLQAFgMALgGQAKgHAQAAQATAAALAMQAMANAAAUQAAAOgGALQgGALgIALIgPASIAKAWQAHALAIAKIAHgUIAGgUIAfAIQgEAPgFAOIgMAbIAKAHIALAEIAAAhQgMgBgLgEgAgeApQgCAGAAAIQAAAKAGAGQAGAHAKAAQAFAAAEgBQABgBAFgEIgPgVQgHgLgGgLQgFAGgCAGgAgVhTQgEAGAAAKQAAAKAEALIAHAVQAGgJAGgKQADgKABgLQAAgMgCgGQgDgFgHAAQgHAAgEAFg");
	this.shape_17.setTransform(101.9,20.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_18.setTransform(79.7,20.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_19.setTransform(65.6,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_20.setTransform(52.3,20.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_21.setTransform(38.1,20.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AAbBsIgHgwIgmAAIgHAwIgkAAIAnjXIAtAAIAoDXgAAOAbIgOhbIAAAAIgOBbIAcAAg");
	this.shape_22.setTransform(23.7,20.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgeBnQgMgHgGgNQgHgMAAgQIAAhtQAAgQAHgMQAGgNAMgHQANgIASAAQASAAAMAIQANAIAFAOQAGANABAQIAAAQIglAAIAAgQQAAgOgGgGQgFgHgHABQgJAAgFAFQgFAGAAANIAABrQAAAMAFAGQAFAGAJAAQAJAAAEgFQAEgGABgLIAAgaIAlAAIAAAZQgBAQgGAMQgFANgNAHQgMAIgSAAQgSAAgNgIg");
	this.shape_23.setTransform(9.4,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,345.7,40);


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
	this.shape.graphics.f("#004262").s().p("AgVCCIAAhsIg2iWIAtAAIAeBjIABAAIAdhjIAuAAIg2CWIAABsg");
	this.shape.setTransform(386,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgxBzQgQgRgBgfIAAiEQAAgTAHgPQAIgPAOgJQAOgJAXAAQAUAAAPAKQAOAKAIAPQAHARAAATIAAAQIgqAAQAAgSgDgLQgDgLgFgEQgGgFgGABQgJAAgGAGQgFAGAAARIAACDQAAANAFAHQAEAHAMAAQALAAAGgIQAFgIAAgUIAAgZIgbAAIAAgiIBIAAIAACDIgWAAIgIgUQgKAMgKAGQgKAFgNAAQgbgBgQgRg");
	this.shape_1.setTransform(368.9,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQANAAAFgHQAFgHAAgOIAAiCQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_2.setTransform(351,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag4CCIAAkCIAtAAIAADaIBEAAIAAAog");
	this.shape_3.setTransform(335.7,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AglB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAHAPQAIAPAAATIAACEQAAASgIAPQgHAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgGAHABAPIAACCQgBAOAGAHQAFAHAMAAQANAAAFgHQAFgHAAgOIAAiCQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_4.setTransform(319,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAdCCIg3ihIgBAAIAAChIgoAAIAAkCIApAAIA1CSIABAAIAAiSIAoAAIAAECg");
	this.shape_5.setTransform(301,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAXCCIAAh0IgtAAIAAB0IgtAAIAAkCIAtAAIAABqIAtAAIAAhqIAtAAIAAECg");
	this.shape_6.setTransform(283,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgkB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAVAAQAXAAAPAKQAOAKAHAPQAIARAAATIAAAUIgtAAIAAgVQAAgQgHgIQgFgHgKAAQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQAMAAAFgHQAGgGgBgNIAAggIAtAAIAAAfQAAASgIAPQgHAPgOAJQgPAJgXAAQgVAAgPgJg");
	this.shape_7.setTransform(264.9,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_8.setTransform(248.4,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_9.setTransform(233,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgkB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAVAAQAXAAAOAKQAPAKAIAPQAHARAAATIAAAUIgtAAIAAgVQAAgQgGgIQgHgHgJAAQgLAAgFAHQgGAHABAPIAACCQgBAOAGAHQAFAHALAAQANAAAEgHQAFgGAAgNIAAggIAtAAIAAAfQAAASgHAPQgIAPgPAJQgOAJgXAAQgVAAgPgJg");
	this.shape_10.setTransform(208.9,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgVCCIAAkCIArAAIAAECg");
	this.shape_11.setTransform(195,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAdCCIg3ihIgBAAIAAChIgoAAIAAkCIApAAIA1CSIAAAAIAAiSIApAAIAAECg");
	this.shape_12.setTransform(181,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgGAHABAPIAACCQgBAOAGAHQAFAHAMAAQANAAAFgHQAFgHAAgOIAAiCQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_13.setTransform(163,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAbCCIgehsIgLABIgMAAIAABrIgtAAIAAkCIA+AAQAkgBAUASQASASABApQgBAVgFAOQgEANgHAFQgIAIgHADIAmB2gAgagMIAPAAQARABAHgJQAIgJAAgXQAAgWgIgJQgHgJgRABIgPAAg");
	this.shape_14.setTransform(145.4,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_15.setTransform(129,23.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgkB8QgPgJgHgPQgIgPAAgSIAAiEQAAgTAIgPQAHgPAPgJQAPgJAWAAQAWAAAPAKQAOAKAHAPQAIARAAATIAAAUIgtAAIAAgVQAAgQgHgIQgGgHgIAAQgMAAgFAHQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQALAAAFgHQAGgGgBgNIAAggIAtAAIAAAfQAAASgIAPQgHAPgOAJQgPAJgWAAQgWAAgPgJg");
	this.shape_16.setTransform(112.9,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_17.setTransform(96.4,23.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("Ag4CCIAAkCIAsAAIAADaIBFAAIAAAog");
	this.shape_18.setTransform(81.7,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA3AAIAAAkIg3AAIAABMIBOAAIAAAog");
	this.shape_19.setTransform(66.4,23.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_20.setTransform(42.4,23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AAXCCIAAh0IgtAAIAAB0IgtAAIAAkCIAtAAIAABqIAtAAIAAhqIAtAAIAAECg");
	this.shape_21.setTransform(25,23.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_22.setTransform(9,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,396.2,47.2);


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
	this.shape.graphics.f("#004262").s().p("Ag9CCIAAkCIB1AAIAAAmIhIAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape.setTransform(204.4,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAXCCIAAh0IgtAAIAAB0IgtAAIAAkCIAtAAIAABqIAtAAIAAhqIAtAAIAAECg");
	this.shape_1.setTransform(187,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_2.setTransform(171,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAzCCIAAjKIAAAAIgpDKIgTAAIgpjKIAAAAIAADKIgnAAIAAkCIA7AAIAeCWIAAAAIAgiWIA6AAIAAECg");
	this.shape_3.setTransform(145,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQANAAAFgHQAGgHgBgOIAAiCQABgPgGgHQgFgHgNAAQgMAAgFAHg");
	this.shape_4.setTransform(125,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAaCCIgdhsIgLABIgMAAIAABrIgtAAIAAkCIA+AAQAkgBAUASQATASAAApQgBAVgFAOQgEANgHAFQgIAIgHADIAmB2gAgagMIAPAAQAQABAIgJQAIgJAAgXQAAgWgIgJQgIgJgQABIgPAAg");
	this.shape_5.setTransform(107.4,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("Ag9CCIAAkCIB7AAIAAAmIhOAAIAABEIA5AAIAAAkIg5AAIAAB0g");
	this.shape_6.setTransform(90.4,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_7.setTransform(67,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIAqAAIA0CSIABAAIAAiSIAoAAIAAECg");
	this.shape_8.setTransform(51,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("Ag9CCIAAkCIB2AAIAAAmIhJAAIAABEIA4AAIAAAkIg4AAIAABMIBOAAIAAAog");
	this.shape_9.setTransform(34.4,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAhCCIggiqIgBAAIgcCqIgmAAIgxkCIAqAAIAbCjIABAAIAdijIAiAAIAfCjIAAAAIAZijIAqAAIguECg");
	this.shape_10.setTransform(13.7,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214.2,47.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA2AAIAwECgAARAhIgRhtIAAAAIgRBtIAiAAg");
	this.shape.setTransform(174,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgkB7QgOgKgIgQQgIgQgBgUIAqgGQACATAHALQAHAJAJAAQAMAAAHgGQAHgGAAgMQAAgPgKgMQgJgMgLgKIgbgWQgNgMgJgQQgJgQgBgWQAAggASgQQASgRAfAAQATAAANAIQANAIAHAPQAIAOACASIgqAFQgCgRgHgGQgHgGgIAAQgJAAgFAHQgGAGAAANQAAANAJALQAJALAMALQANALANALQAOAMAJARQAJAPAAAWQAAAVgJAPQgJAPgPAHQgQAIgTAAQgVAAgPgKg");
	this.shape_1.setTransform(157.9,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAwkCIA2AAIAvECgAASAhIgShtIAAAAIgQBtIAiAAg");
	this.shape_2.setTransform(142,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAdCCIg3ihIAAAAIAAChIgpAAIAAkCIAqAAIA0CSIABAAIAAiSIAoAAIAAECg");
	this.shape_3.setTransform(125,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AglB8QgPgJgIgPQgHgPAAgSIAAiEQAAgTAHgPQAIgPAPgJQAPgJAWAAQAXAAAPAJQAPAJAIAPQAHAPAAATIAACEQAAASgHAPQgIAPgPAJQgPAJgXAAQgWAAgPgJgAgRhWQgFAHAAAPIAACCQAAAOAFAHQAFAHAMAAQANAAAFgHQAFgHAAgOIAAiCQAAgPgFgHQgFgHgNAAQgMAAgFAHg");
	this.shape_4.setTransform(99,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgVCCIAAjcIgrAAIAAgmICBAAIAAAmIgrAAIAADcg");
	this.shape_5.setTransform(83,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgVCCIAAhsIg2iWIAtAAIAeBjIABAAIAdhjIAuAAIg2CWIAABsg");
	this.shape_6.setTransform(60,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgVCCIg2kCIAsAAIAfCyIAAAAIAgiyIAsAAIg2ECg");
	this.shape_7.setTransform(44,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAgCCIgIg6IgvAAIgIA6IgrAAIAvkCIA2AAIAwECgAARAhIgRhtIAAAAIgRBtIAiAAg");
	this.shape_8.setTransform(28,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAdCCIg3ihIgBAAIAAChIgoAAIAAkCIApAAIA1CSIAAAAIAAiSIApAAIAAECg");
	this.shape_9.setTransform(11,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.2,47.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("ABAE2IhJkBQgLACgPAAIgdABIAAD+IhrAAIAAprICVAAQBYgBAuArQAtArAABiQAAAygLAgQgLAggSAPQgQASgTAIIBaEZgAhAgeIAlAAQApABASgVQATgVgBg3QABg2gTgVQgSgVgpABIglAAg");
	this.shape.setTransform(225.1,53.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ah2EQQgrgrgBhQIAAnOIBrAAIAAHSQAAAjANARQAPAQAbAAQAdAAAOgQQANgRAAgjIAAnSIBrAAIAAHOQgBBQgrArQgrAqhMAAQhMAAgqgqg");
	this.shape_1.setTransform(181.2,54.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AA4E2IAAkTIhvAAIAAETIhrAAIAAprIBrAAIAAD9IBvAAIAAj9IBrAAIAAJrg");
	this.shape_2.setTransform(138.2,53.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("Ag0E2IAAoPIhnAAIAAhcIE3AAIAABcIhnAAIAAIPg");
	this.shape_3.setTransform(99.9,53.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("ABAE2IhJkBQgLACgPAAIgdABIAAD+IhrAAIAAprICVAAQBYgBAuArQAtArAABiQAAAygLAgQgLAggSAPQgQASgTAIIBaEZgAhAgeIAlAAQApABASgVQATgVgBg3QABg2gTgVQgSgVgpABIglAAg");
	this.shape_4.setTransform(62.6,53.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("ABNE2IgTiJIhzAAIgSCJIhoAAIByprICDAAIByJrgAAqBPIgpkIIgBAAIgpEIIBTAAg");
	this.shape_5.setTransform(21.1,53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.9,107.2);


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
	this.instance = new lib._728_arthur();

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(350).to({_off:false},0).to({y:62},13).wait(3));

	// Layer 16
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(374,45,1,1,0,0,0,151.5,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(344).to({_off:false},0).to({alpha:1},13).wait(9));

	// Layer 8
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(875.3,60.4,1,1,0,0,0,255.3,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(251).to({_off:false},0).to({x:463.3,y:60.9,alpha:1},11).wait(73).to({alpha:0},8).to({_off:true},1).wait(22));

	// Layer 7
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(771.8,20.5,1,1,0,0,0,172.8,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(244).to({_off:false},0).to({x:359.8,y:21,alpha:1},11).wait(80).to({alpha:0},8).to({_off:true},1).wait(22));

	// Layer 4
	this.instance_5 = new lib.Symbol10();
	this.instance_5.setTransform(854.6,63,1,1,0,0,0,114.1,23.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(151).to({_off:false},0).to({x:424.6},13).wait(70).to({alpha:0},9).wait(123));

	// Layer 3
	this.instance_6 = new lib.Symbol9();
	this.instance_6.setTransform(938.6,26.6,1,1,0,0,0,198.1,23.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(143).to({_off:false},0).to({x:508.6},13).wait(78).to({alpha:0},9).wait(123));

	// Layer 12
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(251.3,144.8,1,1,0,0,0,52.3,53.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(135).to({_off:false},0).to({y:44.8},13).wait(86).to({alpha:0},9).wait(123));

	// Layer 2
	this.instance_8 = new lib.Symbol6();
	this.instance_8.setTransform(832.1,63,1,1,0,0,0,92.1,23.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({_off:false},0).to({x:552.1},13).wait(70).to({alpha:0},10).wait(232));

	// Layer 1
	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(847.1,26.6,1,1,0,0,0,107.1,23.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(34).to({_off:false},0).to({x:567.1},13).wait(77).to({alpha:0},10).wait(232));

	// Layer 13
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(322.9,144.8,1,1,0,0,0,123.9,53.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(26).to({_off:false},0).to({y:44.8},13).wait(85).to({alpha:0},10).wait(232));

	// Layer 11
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(-100.5,45,1,1,0,0,0,89.5,45);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({x:89.5},13).wait(340));

	// Layer 10
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},13).wait(353));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;