(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_250_bg.jpg", id:"_250_bg"},
		{src:"_250_eil.jpg", id:"_250_eil"},
		{src:"_250_footer.png", id:"_250_footer"},
		{src:"_250_logo.png", id:"_250_logo"},
		{src:"_300_border.png", id:"_300_border"}
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



(lib._250_bg = function() {
	this.initialize(img._250_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib._250_eil = function() {
	this.initialize(img._250_eil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,191);


(lib._250_footer = function() {
	this.initialize(img._250_footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,19);


(lib._250_logo = function() {
	this.initialize(img._250_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,62);


(lib._300_border = function() {
	this.initialize(img._300_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(209.7,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AgiB3QgOgJgJgQQgHgQgCgTIAqgGQABATAHAKQAIAJAIAAQAMAAAGgFQAHgGAAgMQAAgPgJgLQgIgMgMgKIgagVQgNgMgJgPQgJgQAAgWQAAgeASgQQARgQAeAAQASAAANAHQAMAIAIAOQAHAOACASIgpAEQgCgQgGgGQgHgGgIAAQgIAAgGAHQgGAGABAMQAAANAJALQAIALALALQAOAKANALQANAMAIAQQAJAPAAAUQABAVgJAPQgJAOgPAIQgPAHgTAAQgUAAgOgKg");
	this.shape_1.setTransform(197.9,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("Ag2B+IAAj7IArAAIAADVIBCAAIAAAmg");
	this.shape_2.setTransform(184.1,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgkB4QgOgIgIgPQgHgOAAgTIAAiAQAAgSAHgOQAIgPAOgJQAPgIAVAAQAWAAAPAIQAOAJAIAPQAHAOAAASIAACAQAAATgHAOQgIAPgOAIQgPAJgWAAQgVAAgPgJgAgQhUQgGAHAAAOIAAB+QAAAPAGAHQAFAGALAAQAMAAAGgGQAEgHAAgPIAAh+QAAgOgEgHQgGgHgMAAQgLAAgFAHg");
	this.shape_3.setTransform(167.9,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AgkB4QgOgIgIgPQgHgOAAgTIAAiAQAAgSAHgOQAIgPAOgJQAPgIAVAAQAWAAAPAIQAPAJAHAPQAHAOAAASIAACAQAAATgHAOQgHAPgPAIQgPAJgWAAQgVAAgPgJgAgRhUQgEAHAAAOIAAB+QAAAPAEAHQAFAGAMAAQANAAAEgGQAFgHABgPIAAh+QgBgOgFgHQgEgHgNAAQgMAAgFAHg");
	this.shape_4.setTransform(150.4,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AAWB+IAAhwIgsAAIAABwIgrAAIAAj7IArAAIAABoIAsAAIAAhoIAsAAIAAD7g");
	this.shape_5.setTransform(132.9,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AgjB4QgPgIgHgPQgHgOAAgTIAAiAQAAgSAHgOQAHgPAPgJQAPgIAUAAQAWAAAOAJQAPAKAHAPQAHAQAAATIAAASIgrAAIAAgTQAAgQgHgHQgGgIgJAAQgKAAgGAHQgEAHAAAOIAAB+QAAAPAEAHQAGAGAKAAQAMAAAFgGQAFgHAAgMIAAgfIArAAIAAAdQAAATgHAOQgHAPgPAIQgOAJgWAAQgUAAgPgJg");
	this.shape_6.setTransform(115.3,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgjB3QgOgJgHgQQgIgQgBgTIApgGQACATAGAKQAIAJAIAAQALAAAHgFQAHgGAAgMQAAgPgJgLQgIgMgLgKIgbgVQgNgMgJgPQgJgQAAgWQAAgeARgQQASgQAeAAQASAAANAHQAMAIAIAOQAHAOACASIgpAEQgCgQgGgGQgHgGgIAAQgJAAgFAHQgFAGAAAMQgBANAKALQAJALAKALQANAKANALQANAMAKAQQAIAPABAUQAAAVgJAPQgJAOgPAIQgQAHgSAAQgVAAgOgKg");
	this.shape_7.setTransform(98.8,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AAaB+IgdhoIgKAAIgMAAIAABoIgsAAIAAj7IA9AAQAjAAASARQATASAAAoQgBAUgEANQgEANgHAFQgHAIgIADIAlBygAgZgMIAPAAQAPABAIgJQAHgIAAgWQAAgWgHgJQgIgJgPABIgPAAg");
	this.shape_8.setTransform(75,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AAfB+IgIg4IgtAAIgIA4IgqAAIAvj7IA0AAIAuD7gAARAgIgRhrIAAAAIgQBrIAhAAg");
	this.shape_9.setTransform(58.1,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("Ag7B+IAAj7IByAAIAAAmIhGAAIAABCIA1AAIAAAjIg1AAIAABKIBLAAIAAAmg");
	this.shape_10.setTransform(42.9,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgUB+IAAhpIg1iSIAsAAIAdBgIABAAIAdhgIAsAAIg1CSIAABpg");
	this.shape_11.setTransform(27,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgpAPIAAgdIBTAAIAAAdg");
	this.shape_12.setTransform(13.4,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AAGB+IAAg9IhKAAIAAggIBIieIAqAAIAACeIAXAAIAAAgIgXAAIAAA9gAgiAhIApAAIAAhhIgBAAg");
	this.shape_13.setTransform(-0.5,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,225.8,46);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgRASIAAgkIAjAAIAAAkg");
	this.shape.setTransform(226.5,33);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AAcBzIgHgzIgpAAIgHAzIgnAAIArjlIAvAAIArDlgAAPAdIgPhhIAAAAIgPBhIAeAAg");
	this.shape_1.setTransform(215.8,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgSBzIgxjlIAoAAIAbCeIAAAAIAcieIAoAAIgxDlg");
	this.shape_2.setTransform(201.6,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgrBlQgQgQgBgeIAAiqIApAAIAACsQAAAMAEAHQAFAGAKAAQALAAAEgGQAFgHABgMIAAisIAnAAIAACqQAAAegQAQQgQAPgcABQgbgBgQgPg");
	this.shape_3.setTransform(186.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AggBuQgOgIgGgNQgIgOABgQIAAh1QgBgQAIgOQAGgNAOgIQANgIATAAQAUAAANAIQAOAIAHANQAGAOAAAQIAAB1QAAAQgGAOQgHANgOAIQgNAIgUAAQgTAAgNgIgAgPhNQgEAHgBANIAABzQABANAEAHQAFAFAKAAQALAAAFgFQAFgHAAgNIAAhzQAAgNgFgHQgFgFgLAAQgKAAgFAFg");
	this.shape_4.setTransform(163.4,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgTBzIAAjCIgmAAIAAgjIBzAAIAAAjIgnAAIAADCg");
	this.shape_5.setTransform(149.2,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAaBzIgxiOIAAAAIAACOIgkAAIAAjlIAlAAIAuCCIAAAAIAAiCIAkAAIAADlg");
	this.shape_6.setTransform(127.9,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AghBuQgNgIgGgNQgIgOABgQIAAh1QgBgQAIgOQAGgNANgIQANgIAUAAQAUAAAOAIQANAIAHANQAGAOABAQIAAB1QgBAQgGAOQgHANgNAIQgOAIgUAAQgUAAgNgIgAgPhNQgFAHAAANIAABzQAAANAFAHQAFAFAKAAQAMAAAEgFQAFgHgBgNIAAhzQABgNgFgHQgEgFgMAAQgKAAgFAFg");
	this.shape_7.setTransform(111.9,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAaBzIgxiOIgBAAIAACOIgkAAIAAjlIAlAAIAvCCIABAAIAAiCIAkAAIAADlg");
	this.shape_8.setTransform(88.8,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("Ag2BzIAAjlIBpAAIAAAjIhBAAIAAA7IAxAAIAAAgIgxAAIAABFIBFAAIAAAig");
	this.shape_9.setTransform(74,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAVBzIAAhnIgpAAIAABnIgnAAIAAjlIAnAAIAABeIApAAIAAheIAnAAIAADlg");
	this.shape_10.setTransform(58.6,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgTBzIAAjCIgmAAIAAgjIBzAAIAAAjIgnAAIAADCg");
	this.shape_11.setTransform(44.3,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AieALIAAgVIE9AAIAAAVg");
	this.shape_12.setTransform(15,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,2,235.2,42.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgTIA/AAIAAATIgVAAIAABtg");
	this.shape.setTransform(222.5,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AANBBIgOg3IgFABIgGAAIAAA2IgWAAIAAiAIAeAAQARAAAKAJQAJAIAAAVQABALgDAGQgDAHgDACQgDADgFABIAUA8gAgMgFIAIAAQAHAAADgEQAEgFAAgLQAAgMgEgEQgDgFgHABIgIAAg");
	this.shape_1.setTransform(214.7,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AAQBBIgFgdIgVAAIgFAdIgVAAIAXiAIAaAAIAYCAgAAJAQIgJg2IgHA2IAQAAg");
	this.shape_2.setTransform(206,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgTIA/AAIAAATIgVAAIAABtg");
	this.shape_3.setTransform(198.5,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgRA9QgHgFgFgIQgEgIAAgKIAVgDQABAKAEAFQADAFAEAAQAFAAAEgDQADgDAAgGQAAgIgEgGQgEgGgGgFIgNgKQgHgGgEgIQgEgIgBgLQAAgQAJgIQAJgIAPAAQAJAAAHAEQAGAEAEAHQAEAHABAJIgWACQgBgIgDgDQgDgDgEAAQgEAAgCADQgDAEgBAGQAAAGAFAGQAFAGAEAFIAOAKQAHAGAEAIQAFAIAAALQgBAKgEAIQgEAHgIAEQgIAEgJAAQgKAAgHgFg");
	this.shape_4.setTransform(191,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AAQBBIgQhVIAAAAIgNBVIgTAAIgZiAIAVAAIAOBRIAAAAIAPhRIAQAAIAPBRIABAAIAMhRIAVAAIgXCAg");
	this.shape_5.setTransform(176.8,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgeBBIAAiAIA6AAIAAATIgjAAIAAAhIAaAAIAAASIgaAAIAAAmIAlAAIAAAUg");
	this.shape_6.setTransform(167.2,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAPBBIgbhQIAAAAIAABQIgVAAIAAiAIAVAAIAZBIIABAAIAAhIIAUAAIAACAg");
	this.shape_7.setTransform(158.5,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAPBBIgDgdIgWAAIgFAdIgWAAIAZiAIAaAAIAXCAgAAIAQIgIg2IgIA2IAQAAg");
	this.shape_8.setTransform(146,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AANBBIgOg3IgFABIgGAAIAAA2IgWAAIAAiAIAeAAQARAAAKAJQAJAIAAAVQABALgDAGQgDAHgDACQgDADgFABIAUA8gAgMgFIAIAAQAHAAADgEQAEgFAAgLQAAgMgEgEQgDgFgHABIgIAAg");
	this.shape_9.setTransform(133.7,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgSA9QgHgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAHgEQAIgEAKAAQALAAAHAEQAJAEADAIQADAHAAAKIAABBQAAAJgDAHQgDAIgJAEQgHAFgLAAQgKAAgIgFgAgIgrQgCAEgBAHIAABAQABAHACAEQADAEAFAAQAGAAADgEQADgEAAgHIAAhAQAAgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_10.setTransform(124.5,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgdBBIAAiAIA8AAIAAATIgnAAIAAAhIAcAAIAAASIgcAAIAAA6g");
	this.shape_11.setTransform(116.2,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAHgEAKAAQALAAAIAEQAHAFAEAIQADAIAAAKIAAAKIgWAAIAAgKQAAgJgEgDQgDgEgEAAQgEAAgEADQgCAEAAAHIAABAQAAAHACAEQAEAEAEAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgDAHQgEAIgHAEQgIAFgLAAQgKAAgHgFg");
	this.shape_12.setTransform(103.5,12.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgRA9QgIgEgEgIQgDgHAAgJIAAhBQAAgKADgHQAEgIAIgEQAHgEAKAAQALAAAIAEQAHAFAEAIQADAIAAAKIAAAKIgWAAIAAgKQAAgJgEgDQgDgEgEAAQgEAAgEADQgCAEAAAHIAABAQAAAHACAEQAEAEAEAAQAGAAACgEQADgDAAgHIAAgPIAWAAIAAAPQAAAJgDAHQgEAIgHAEQgIAFgLAAQgKAAgHgFg");
	this.shape_13.setTransform(94.5,12.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgTIA/AAIAAATIgVAAIAABtg");
	this.shape_14.setTransform(86.5,12.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgRA9QgJgEgDgIQgDgHgBgJIAAhBQABgKADgHQADgIAJgEQAHgEAKAAQALAAAIAEQAHAEAEAIQAEAHAAAKIAABBQAAAJgEAHQgEAIgHAEQgIAFgLAAQgKAAgHgFgAgIgrQgDAEAAAHIAABAQAAAHADAEQADAEAFAAQAGAAADgEQADgEgBgHIAAhAQABgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_15.setTransform(74.5,12.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgTIA/AAIAAATIgVAAIAABtg");
	this.shape_16.setTransform(66.5,12.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgKBBIAAhtIgVAAIAAgTIA/AAIAAATIgVAAIAABtg");
	this.shape_17.setTransform(55.5,12.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AAOBBIgahQIgBAAIAABQIgUAAIAAiAIAVAAIAZBIIAAAAIAAhIIAVAAIAACAg");
	this.shape_18.setTransform(47.5,12.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgeBBIAAiAIA6AAIAAATIgjAAIAAAhIAbAAIAAASIgbAAIAAAmIAlAAIAAAUg");
	this.shape_19.setTransform(39.2,12.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AAQBBIgQhVIAAAAIgNBVIgTAAIgZiAIAVAAIAOBRIAAAAIAPhRIAQAAIAPBRIABAAIAMhRIAVAAIgXCAg");
	this.shape_20.setTransform(28.8,12.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AgeBBIAAiAIA6AAIAAATIgjAAIAAAhIAaAAIAAASIgaAAIAAAmIAlAAIAAAUg");
	this.shape_21.setTransform(15.2,12.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AAMBBIAAg6IgWAAIAAA6IgXAAIAAiAIAXAAIAAA0IAWAAIAAg0IAVAAIAACAg");
	this.shape_22.setTransform(6.5,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228.2,25.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(112.5,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgPA2QgGgEgEgHQgDgHgBgJIATgDQAAAJAEAEQADAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIANAAQAHAAAGAEQAHADADAHQADAGABAIIgSACQgBgHgEgDQgCgDgEAAQgDAAgCADQgDADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgIAAgHgFg");
	this.shape_1.setTransform(107.2,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgJA5IAAhgIgSAAIAAgRIA3AAIAAARIgTAAIAABgg");
	this.shape_2.setTransform(100.6,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgEgHAAgIIAAg5QAAgJAEgGQADgHAHgEQAHgEAIAAQAKAAAHAFQAGAEAEAHQACAHAAAJIAAAIIgTAAIAAgJQAAgHgDgDQgDgEgEAAQgEAAgCAEQgCADAAAGIAAA5QAAAGACADQACAEAEAAQAGAAACgDQACgDAAgGIAAgOIATAAIAAANQAAAIgCAHQgEAHgGAEQgHAEgKAAQgIAAgHgEg");
	this.shape_3.setTransform(93.4,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_4.setTransform(86.1,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgfA5IAAhxIAdAAQAQAAAJAIQAJAHAAATQAAASgJAGQgJAIgQAAIgJAAIAAAvgAgLgEIAIAAQAHAAAEgEQAEgEAAgKQAAgKgEgEQgEgEgHAAIgIAAg");
	this.shape_5.setTransform(78.5,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgPA2QgHgEgDgHQgEgHAAgJIATgDQAAAJADAEQAEAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIAMAAQAIAAAHAEQAFADAEAHQAEAGAAAIIgTACQgBgHgCgDQgEgDgDAAQgDAAgDADQgCADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgJAAgGgFg");
	this.shape_6.setTransform(70.8,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAHAEQAHAEADAHQADAGAAAJIAAA5QAAAIgDAHQgDAHgHAEQgHAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_7.setTransform(63.3,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_8.setTransform(55.4,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgfA5IAAhxIAdAAQAQAAAJAIQAJAHAAATQAAASgJAGQgJAIgQAAIgJAAIAAAvgAgLgEIAIAAQAHAAAEgEQAEgEAAgKQAAgKgEgEQgEgEgHAAIgIAAg");
	this.shape_9.setTransform(47.4,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_10.setTransform(34.2,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_11.setTransform(25.7,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgaA5IAAhxIA1AAIAAARIghAAIAAAeIAYAAIAAAPIgYAAIAAAzg");
	this.shape_12.setTransform(18.6,6.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_13.setTransform(7.3,6.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgJA5IAAhgIgTAAIAAgRIA4AAIAAARIgTAAIAABgg");
	this.shape_14.setTransform(0.2,6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_15.setTransform(-5.1,6.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_16.setTransform(-12.8,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-5,136.5,23.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgeA5IAAhxIAeAAQAOAAAHAIQAIAHAAAPIgCAKQgBAFgDAEQgDADgFACQAHACAFAGQAEAHAAALQAAAJgDAIQgDAHgHAFQgHAEgLAAgAgKApIAJAAQAFAAAEgFQADgEAAgJQAAgJgEgEQgEgFgGAAIgHAAgAgKgJIAHAAQAEAAAEgEQAEgDAAgIQAAgIgEgEQgDgEgEAAIgIAAg");
	this.shape.setTransform(84.7,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgQA3QgGgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAGgEQAHgEAJAAQAKAAAGAEQAIAEACAHQAEAGAAAJIAAA5QAAAIgEAHQgCAHgIAEQgGAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_1.setTransform(76.6,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQA6IAAgRIAEAAQAGAAACgCQADgDAAgFIAAhYIASAAIAABaQAAAIgDAGQgCAFgGADQgGADgJAAg");
	this.shape_2.setTransform(69.9,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgHAvIAOAAg");
	this.shape_3.setTransform(61.1,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAGAAADgEQADgDAAgJIAAgxQAAgJgDgDQgDgEgGAAIgHAAg");
	this.shape_4.setTransform(50,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AANA5IgXhGIgBAAIAABGIgSAAIAAhxIATAAIAVBAIABAAIAAhAIASAAIAABxg");
	this.shape_5.setTransform(42,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAOA5IgEgZIgUAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgHAvIAOAAg");
	this.shape_6.setTransform(34.4,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_7.setTransform(23.9,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_8.setTransform(16.8,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAMA5IgNgwIgEABIgGAAIAAAvIgUAAIAAhxIAcAAQAPAAAIAIQAJAHAAATQAAAJgCAGQgCAGgEABQgDAEgDABIARA0gAgLgEIAHAAQAGAAAEgEQADgEAAgKQAAgKgDgEQgEgEgGAAIgHAAg");
	this.shape_9.setTransform(9.3,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgVAzQgHgIgBgOIAAg5QAAgJAEgGQADgHAHgEQAGgEAJAAQAIAAAHAFQAHAEADAHQADAHABAJIAAAHIgTAAIgBgNQgCgFgDgCQgCgCgCAAQgDAAgDADQgCADAAAHIAAA5QAAAGACADQACADAEABQAFAAACgEQACgEABgIIAAgMIgLAAIAAgOIAeAAIAAA5IgJAAIgEgIQgEAFgEACQgFADgFAAQgMAAgHgIg");
	this.shape_10.setTransform(1.1,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgaA5IAAhxIAzAAIAAARIgfAAIAAAeIAXAAIAAAPIgXAAIAAAiIAhAAIAAARg");
	this.shape_11.setTransform(-6.3,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAGAAADgEQADgDAAgJIAAgxQAAgJgDgDQgDgEgGAAIgHAAg");
	this.shape_12.setTransform(-14,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-5,110.8,23.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgYA5IAAhxIAUAAIAABgIAdAAIAAARg");
	this.shape.setTransform(93.8,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgQA3QgGgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAGgEQAHgEAJAAQAKAAAHAEQAGAEADAHQAEAGAAAJIAAA5QAAAIgEAHQgDAHgGAEQgHAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_1.setTransform(86.4,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgQA3QgGgEgEgHQgDgHAAgIIAAg5QAAgJADgGQAEgHAGgEQAHgEAJAAQAKAAAGAEQAIAEACAHQAEAGAAAJIAAA5QAAAIgEAHQgCAHgIAEQgGAEgKAAQgJAAgHgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_2.setTransform(78.4,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_3.setTransform(70.4,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgEgHAAgIIAAg5QAAgJAEgGQADgHAHgEQAHgEAIAAQAKAAAHAFQAGAEAEAHQACAHAAAJIAAAIIgTAAIAAgJQAAgHgDgDQgDgEgEAAQgEAAgCAEQgCADAAAGIAAA5QAAAGACADQACAEAEAAQAGAAACgDQACgDAAgGIAAgOIATAAIAAANQAAAIgCAHQgEAHgGAEQgHAEgKAAQgIAAgHgEg");
	this.shape_4.setTransform(62.4,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgPA2QgGgEgEgHQgEgHAAgJIATgDQABAJADAEQADAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIAMAAQAIAAAHAEQAFADAEAHQADAGABAIIgTACQgBgHgCgDQgEgDgDAAQgDAAgDADQgCADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgJAAgGgFg");
	this.shape_5.setTransform(54.8,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_6.setTransform(43.8,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgVAzQgHgIgBgOIAAg5QAAgJAEgGQADgHAHgEQAGgEAJAAQAIAAAHAFQAHAEADAHQADAHABAJIAAAHIgTAAIgBgNQgCgFgDgCQgCgCgCAAQgDAAgDADQgCADAAAHIAAA5QAAAGACADQACADAEABQAFAAACgEQACgEABgIIAAgMIgLAAIAAgOIAfAAIAAA5IgKAAIgEgIQgEAFgEACQgFADgFAAQgMAAgHgIg");
	this.shape_7.setTransform(35.7,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_8.setTransform(29.5,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_9.setTransform(23.3,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgGAvIANAAg");
	this.shape_10.setTransform(12.2,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgdA5IAAhxIAdAAQAOAAAIAIQAIAJAAASIAAArQAAASgIAJQgIAIgOAAgAgJApIAHAAQAFAAAEgEQADgDAAgJIAAgxQAAgJgDgDQgEgEgFAAIgHAAg");
	this.shape_11.setTransform(1.1,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgHAvIAOAAg");
	this.shape_12.setTransform(-6.4,6.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_13.setTransform(-14,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-5,118.8,23.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AghDKIAAmTIBDAAIAAGTg");
	this.shape.setTransform(36.4,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AhYDKIAAmTIBGAAIAAFWIBrAAIAAA9g");
	this.shape_1.setTransform(18.8,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AhgDKIAAmTIC5AAIAAA9IhzAAIAABoIBYAAIAAA7IhYAAIAAB2IB7AAIAAA9g");
	this.shape_2.setTransform(-4.9,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-5,66.4,71.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_eil();
	this.instance.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,250,191);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgRBsIAAi3IgkAAIAAggIBrAAIAAAgIgkAAIAAC3g");
	this.shape_13.setTransform(162.7,17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgeBmQgMgIgGgNQgHgOgBgQIAkgFQABAQAGAIQAGAIAHAAQAKAAAFgFQAGgFAAgJQAAgNgIgKQgHgKgJgJIgXgRQgLgLgHgNQgIgNAAgTQAAgaAPgOQAPgOAZAAQAQAAALAHQALAHAGAMQAGALACAQIgjAEQgCgOgGgFQgGgGgGABQgHAAgFAFQgFAGAAAKQABALAHAJQAIAKAJAJQALAJALAJQALAKAIANQAIAOAAARQAAASgIAMQgHANgNAGQgOAHgPAAQgRAAgNgJg");
	this.shape_14.setTransform(150.1,17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgzBsIAAjXIBiAAIAAAgIg9AAIAAA4IAvAAIAAAfIgvAAIAAA/IBCAAIAAAhg");
	this.shape_15.setTransform(137.3,17.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("Ag5BsIAAjXIA3AAQAcAAAOAPQAOAPAAAbQAAAKgDAJQgCAJgHAHQgFAHgJAEQAOAEAIAMQAIAMAAAVQAAASgGAOQgGAOgNAIQgMAJgVAAgAgUBNIAQAAQANAAAGgIQAGgJAAgQQAAgRgHgIQgHgJgPAAIgMAAgAgUgSIAOAAQAIAAAIgHQAGgHAAgOQAAgPgFgIQgHgHgJAAIgPAAg");
	this.shape_16.setTransform(122.9,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgeBmQgMgIgGgNQgHgOgBgQIAkgFQABAQAGAIQAGAIAHAAQAKAAAFgFQAGgFAAgJQAAgNgIgKQgHgKgJgJIgXgRQgLgLgHgNQgIgNAAgTQAAgaAPgOQAPgOAZAAQAQAAALAHQALAHAGAMQAGALACAQIgjAEQgCgOgGgFQgGgGgGABQgHAAgFAFQgFAGAAAKQABALAHAJQAIAKAJAJQALAJALAJQALAKAIANQAIAOAAARQAAASgIAMQgHANgNAGQgOAHgPAAQgRAAgNgJg");
	this.shape_17.setTransform(101.9,17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgNApIAAhRIAbAAIAABRg");
	this.shape_18.setTransform(92,10.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AAaBsIgGgwIgmAAIgIAwIgkAAIApjXIAsAAIAnDXgAAPAbIgPhbIAAAAIgOBbIAdAAg");
	this.shape_19.setTransform(82,17.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_20.setTransform(71.2,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AAYBsIgtiGIgBAAIAACGIghAAIAAjXIAiAAIAsB6IAAAAIAAh6IAhAAIAADXg");
	this.shape_21.setTransform(59.5,17.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_22.setTransform(47.8,17.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgoBgQgOgPgBgaIAAhtQABgQAFgMQAGgNAMgHQANgIASAAQARAAAMAIQAMAIAHAOQAGANAAAQIAAAOIgjAAQAAgQgDgJQgCgJgEgDQgGgEgFABQgHgBgFAGQgEAFgBANIAABtQABALAEAGQADAGAKAAQAJAAAFgHQAFgHAAgQIAAgVIgWAAIAAgbIA7AAIAABsIgSAAIgHgRQgIAKgJAFQgIAFgKAAQgXgBgNgOg");
	this.shape_23.setTransform(36.1,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AAWBsIgYhaIgJABIgLAAIAABZIglAAIAAjXIA0AAQAeAAAQAPQAPAPAAAiQAAARgEALQgDAMgGAEQgGAGgHADIAgBigAgWgKIAOAAQANABAGgIQAGgHAAgTQAAgTgGgHQgGgIgNABIgOAAg");
	this.shape_24.setTransform(21.5,17.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgRBsIAAjXIAjAAIAADXg");
	this.shape_25.setTransform(9.5,17.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgRBsIgtjXIAkAAIAaCUIAAAAIAbiUIAkAAIgtDXg");
	this.shape_26.setTransform(-1.3,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-3,180.7,40);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AgeAmQgLgPAAgXQAAgWALgQQALgPATABQAUgBALAPQALAQAAAWQAAAXgLAPQgLAQgUAAQgTAAgLgQgAgTgdQgHAKAAATQAAATAHALQAIALALAAQAMAAAIgLQAHgLAAgTQAAgTgHgKQgIgLgMAAQgLAAgIALg");
	this.shape_13.setTransform(186.9,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AgFBBQgEgDgBgJIAAhLIgQAAIAAgMIAQAAIAAgjIANAAIAAAjIAYAAIAAAMIgYAAIAABIQAAAHAMAAIANgBIAAAMQgGABgLABQgLAAgFgFg");
	this.shape_14.setTransform(178.4,14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AgXA0IAAhmIAPAAIAAAVQAGgMAGgFQAIgFAMAAIAAAOQgNAAgIAJQgGAIgFARIAAA3g");
	this.shape_15.setTransform(166.3,15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgcAoQgNgNAAgbQAAgYAMgOQALgOASAAQARgBALAMQALAMAAAYIAAAHIhBAAQgBARAKALQAIALALAAQATAAAKgSIALAGQgHALgIAHQgJAGgQABQgRAAgNgOgAgSggQgIAJAAAPIAzAAQgBgPgGgJQgHgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(157.5,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgJBJIAAhaIgRAAIAAgMIARAAIAAgMQAAgSAGgGQAEgHAOAAIAMABIAAANIgEgBIgGAAQgHAAgDADQgDADAAAJIAAAPIAWAAIAAAMIgWAAIAABag");
	this.shape_17.setTransform(149.1,13.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgTAwQgLgFgHgJIALgJQALAQARAAQALAAAFgFQAGgFAAgHQAAgIgGgEQgGgEgJgDIgQgFQgJgBgHgGQgFgHAAgKIAAAAQAAgOAKgHQAJgIAOABIABAAQAIgBAKAGQAKAFAGAIIgKAJQgGgIgHgDQgGgEgGAAQgJAAgFAEQgFAEAAAIQAAAFAGAEQAHAEAHADIARAFQAJADAGAFQAGAHAAALQAAAOgKAJQgLAHgPABQgKAAgLgGg");
	this.shape_18.setTransform(141.3,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AAXA1IAAhKQAAgSgRAAQgGAAgIAFQgIAEgGAHIAABMIgOAAIAAhmIAOAAIAAAOIAAAAQAOgRAPABQANAAAJAHQAIAIAAAPIAABKg");
	this.shape_19.setTransform(131.4,15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#034262").s().p("AgeAuQgJgHAAgOQAAgRAPgIQAOgJAhgGIAAgGQAAgTgVAAQgJAAgHAFQgGAFgDAGIgNgHQAMgVAaAAQAOgBALAJQALAHAAAQIAAAyQAAAOACAJIgPAAIgCgPQgPARgRAAQgNAAgIgIgAgYAZQAAAHAFAFQAGAEAGAAQAHAAAHgFQAJgFAHgHIAAgbQgvAHAAAVg");
	this.shape_20.setTransform(120.7,16);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#034262").s().p("AgXA0IAAhmIAPAAIAAAVQAGgMAGgFQAIgFAMAAIAAAOQgNAAgIAJQgGAIgFARIAAA3g");
	this.shape_21.setTransform(113,15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#034262").s().p("AgHBIIAAiBIgrAAIAAgOIBlAAIAAAOIgsAAIAACBg");
	this.shape_22.setTransform(103.6,14);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#034262").s().p("AgNBGQgHgDgHgGQgGgFgEgLQgEgLAAgPQAAgPAEgJQAEgLAGgGQAHgFAHgDQAHgDAGAAQAMAAAOALIABABIAAgzIAOAAIAAB4QAAASABAFIgOAAIgBgLQgEAGgHADQgIAEgIAAQgGAAgHgDgAgbATQAAAUAIALQAIAKAMAAQAHAAAFgDQAGgDAIgIIAAg0QgNgPgNAAQgcAAAAAog");
	this.shape_23.setTransform(86,14.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#034262").s().p("AgcAoQgNgNAAgbQAAgYAMgOQALgOASAAQARgBALAMQALAMAAAYIAAAHIhCAAQABARAIALQAJALALAAQAUAAAJgSIALAGQgGALgJAHQgJAGgQABQgRAAgNgOgAgSggQgIAJAAAPIAyAAQAAgPgGgJQgHgIgLAAQgLAAgHAIg");
	this.shape_24.setTransform(75.9,16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#034262").s().p("AgcAoQgNgNAAgbQAAgYAMgOQALgOASAAQARgBALAMQALAMAAAYIAAAHIhCAAQAAARAJALQAJALALAAQAUAAAJgSIALAGQgHALgIAHQgJAGgQABQgRAAgNgOgAgSggQgHAJgBAPIAzAAQgBgPgGgJQgHgIgLAAQgLAAgHAIg");
	this.shape_25.setTransform(65.9,16);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#034262").s().p("AgEBBQgGgDABgJIAAhLIgSAAIAAgMIASAAIAAgjIAMAAIAAAjIAYAAIAAAMIgYAAIAABIQAAAHAMAAIAMgBIAAAMQgEABgMABQgLAAgEgFg");
	this.shape_26.setTransform(57.4,14.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#034262").s().p("AAXA1IAAhKQAAgSgRAAQgGAAgIAFQgIAEgGAHIAABMIgOAAIAAhmIAOAAIAAAOIAAAAQAOgRAPABQANAAAJAHQAIAIAAAPIAABKg");
	this.shape_27.setTransform(48.7,15.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#034262").s().p("AgeAuQgJgHAAgOQAAgRAPgIQAOgJAhgGIAAgGQAAgTgVAAQgJAAgHAFQgGAFgDAGIgMgHQALgVAaAAQAOgBALAJQALAHAAAQIAAAyQAAAOABAJIgOAAIgCgPQgPARgRAAQgNAAgIgIgAgYAZQAAAHAFAFQAFAEAHAAQAHAAAIgFQAIgFAHgHIAAgbQgvAHAAAVg");
	this.shape_28.setTransform(38,16);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#034262").s().p("AgXA0IAAhmIAPAAIAAAVQAGgMAGgFQAIgFAMAAIAAAOQgNAAgIAJQgGAIgFARIAAA3g");
	this.shape_29.setTransform(30.3,15.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#034262").s().p("AgeAuQgJgHAAgOQAAgRAPgIQAOgJAhgGIAAgGQAAgTgVAAQgJAAgHAFQgGAFgDAGIgMgHQALgVAaAAQAOgBALAJQALAHAAAQIAAAyQAAAOABAJIgOAAIgCgPQgPARgRAAQgNAAgIgIgAgYAZQAAAHAFAFQAFAEAHAAQAHAAAIgFQAIgFAHgHIAAgbQgvAHAAAVg");
	this.shape_30.setTransform(21.3,16);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#034262").s().p("AgcAtQgIgHAAgQIAAhJIAOAAIAABIQAAATARAAQAFAAAJgEQAIgFAGgHIAAhLIAOAAIAABmIgOAAIAAgPIgBAAQgOAQgOABQgNAAgJgIg");
	this.shape_31.setTransform(10.9,16.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#034262").s().p("AglA3QgQgTAAgkQAAgjAQgTQAPgTAYAAQAoAAAMArIgPADQgGgRgIgIQgJgHgNAAQgQAAgMAOQgMAOAAAfQAAAgAMAOQAMAOAQAAQARAAAIgJQAJgJAAgOIAAgMIggAAIAAgOIAwAAIAABGIgNAAIAAgNQgLAPgbAAQgYAAgPgTg");
	this.shape_32.setTransform(-1.6,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,204.1,27.7);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,62);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._250_footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,19);


// stage content:
(lib._250x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib._300_border();
	this.instance.setTransform(0,0,0.833,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302));

	// Layer 20
	this.instance_1 = new lib.Symbol3copy();
	this.instance_1.setTransform(164,193,1,1,0,0,0,113,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(286).to({_off:false},0).to({alpha:1},11).wait(5));

	// Layer 1
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.setTransform(150,268.5,1,1,0,0,0,150,11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(275).to({_off:false},0).to({y:242.5},11).wait(16));

	// Layer 9
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(388.3,125.1,1,1,0,0,0,84.4,33.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(258).to({_off:false},0).to({x:108.3,alpha:1},11).wait(33));

	// Layer 10
	this.instance_4 = new lib.Symbol12_1();
	this.instance_4.setTransform(383,83.9,1,1,0,0,0,79.1,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(252).to({_off:false},0).to({x:103,alpha:1},11).wait(39));

	// Layer 11
	this.instance_5 = new lib.Symbol9_1();
	this.instance_5.setTransform(357.7,51,1,1,0,0,0,53.8,15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(247).to({_off:false},0).to({x:77.7,alpha:1},11).wait(44));

	// Layer 7
	this.instance_6 = new lib.Symbol12();
	this.instance_6.setTransform(453.3,42.2,1,1,0,0,0,139.3,24.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(146).to({_off:false},0).to({x:153.3},13).wait(78).to({alpha:0},9).wait(56));

	// Layer 2
	this.instance_7 = new lib.Symbol11();
	this.instance_7.setTransform(430.3,18.4,1,1,0,0,0,120.3,13.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(137).to({_off:false},0).to({x:130.3},13).wait(87).to({alpha:0},9).wait(56));

	// Layer 6
	this.instance_8 = new lib.Symbol10();
	this.instance_8.setTransform(386.8,50,1,1,0,0,0,68.3,11.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(47).to({_off:false},0).to({x:186.8},13).wait(67).to({alpha:0},9).wait(166));

	// Layer 5
	this.instance_9 = new lib.Symbol9();
	this.instance_9.setTransform(373.9,35.3,1,1,0,0,0,55.4,11.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40).to({_off:false},0).to({x:173.9},13).wait(74).to({alpha:0},9).wait(166));

	// Layer 4
	this.instance_10 = new lib.Symbol8();
	this.instance_10.setTransform(377.9,20.6,1,1,0,0,0,59.4,11.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({_off:false},0).to({x:177.9},13).wait(80).to({alpha:0},9).wait(166));

	// Layer 14
	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(78.2,-35.4,1,1,0,0,0,33.2,35.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(26).to({_off:false},0).to({y:34.6},13).wait(88).to({alpha:0},9).wait(166));

	// Layer 13
	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(150,162,1,1,0,0,0,150,98);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({alpha:1},13).wait(211).to({alpha:0},9).wait(56));

	// Layer 12
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},13).wait(289));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,125,250,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;