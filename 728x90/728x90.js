(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.border = function() {
	this.initialize(img.border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,90);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAJQgDgEAAgFQAAgFADgEQAFgDAEAAQAGAAAEADQADAEABAFQgBAFgDAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(340,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiA8IAAg/QAAgLgCgHQgBgHgDgGQgEgFgGgDQgHgCgIAAQgKAAgIAHQgIAEgEAJQgFAPAAAJIAAA8IgRAAIAAhaIgBgaIARAAIABATIABAAQAFgKALgGQALgGAKAAQAMAAAIADQAJADAFAGQAGAGACAIQADAJAAALIAABJg");
	this.shape_1.setTransform(329.4,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYA5QgLgFgJgIQgIgJgEgLQgFgLAAgNQAAgMAFgMQAEgLAIgIQAJgIALgFQAMgEAMAAQAOAAALAEQALAFAJAIQAIAIAFALQAEAMAAAMQAAANgEALQgFALgIAJQgJAIgLAFQgLAFgOAAQgMAAgMgFgAgRgqQgIAEgGAGQgGAGgDAJQgDAIAAAJQAAAKADAJQADAIAGAGQAGAGAIAEQAIADAJABQAKgBAIgDQAIgEAHgGQAFgGADgIQAEgJgBgKQABgJgEgIQgDgJgFgGQgHgGgIgEQgIgDgKAAQgJAAgIADg");
	this.shape_2.setTransform(315.3,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBXIAAh0IAPAAIAAB0gAgHhBQgEgEAAgFQAAgFAEgDQAEgEADAAQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAQgDAAgEgDg");
	this.shape_3.setTransform(304.9,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCBHQgFgEgDgGQgCgGAAgKIAAhIIgZAAIAAgQIAZAAIAAggIAQAAIAAAgIAhAAIAAAQIghAAIAABEQgBALAFAFQADAFAKAAQAIgBAIgEIABAPQgKAEgMABQgOgCgEgEg");
	this.shape_4.setTransform(297.7,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA7QgHgCgFgEQgGgFgDgGQgEgHAAgHQAAgIACgGQACgFAEgEQAGgHAMgEQAPgFAfgCIAIAAIAAgCQAAgIgCgGQgBgFgEgEQgEgDgGgCQgFgCgIAAQgJAAgJADQgJAEgIAGIgKgLQAJgJAMgEQANgEAPAAQAJgBAHADQAIADAGAEQAGAGADAHQAEAIAAALIAAAzQAAAOACAMIgQAAQgCgIAAgLIAAAAQgEAHgEADIgJAHQgFADgGABIgNACQgHgBgIgCgAgKAEQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAIAGALAAQAIAAAGgDQAHgEAEgEQAFgGACgHQACgHAAgHIAAgIIgIAAQgWgBgLAEg");
	this.shape_5.setTransform(286.8,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjA8IAAg/QAAgLgDgHQgBgHgDgGQgEgFgGgDQgGgCgKAAQgJAAgJAHQgHAEgEAJQgFAPAAAJIAAA8IgRAAIAAhaIgBgaIARAAIABATIAAAAQAGgKALgGQALgGALAAQALAAAIADQAIADAGAGQAFAGADAIQADAJAAALIAABJg");
	this.shape_6.setTransform(273.5,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBXIAAh0IAPAAIAAB0gAgHhBQgEgEAAgFQAAgFAEgDQAEgEADAAQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAQgDAAgEgDg");
	this.shape_7.setTransform(263.7,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCBHQgFgEgCgGQgDgGAAgKIAAhIIgZAAIAAgQIAZAAIAAggIAPAAIAAAgIAiAAIAAAQIgiAAIAABEQAAALAFAFQAEAFAIAAQAJgBAIgEIABAPQgKAEgMABQgOgCgEgEg");
	this.shape_8.setTransform(256.6,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZA4QgFgCgFgFQgFgEgEgHIAOgJQAFAJAIADQAIAGAJAAQALgBAHgEQAEgDADgDQACgEAAgFQAAgIgHgFQgEgDgLgDIgPgEQgegHAAgWQAAgJADgHQAEgGAGgFQAGgEAIgDQAHgBAIAAQANAAAKAEIAJAGQAEAFADAFIgPAKQgEgHgGgEQgGgFgJABQgJAAgGAEQgIAEAAAJQAAAIAGAEQAFAEALADIAQADIAMAEQAFADAEADQAEAFACAFQACAFAAAHQAAAIgEAIQgEAGgGAFQgGAEgJACQgIACgIABQgRgCgIgEg");
	this.shape_9.setTransform(247.1,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgIgIQgJgJgEgLQgEgLAAgNQAAgMAEgMQAEgLAJgIQAHgIALgFQALgEAMAAQANAAAKAEQAKAFAIAIQAHAIAEALQADAKABAMIAAAGIhhAAQABAJADAIQAEAHAFAHQAHAFAHADQAIADAHABQAJAAAOgHQAJgFAGgIIAMAKIgLALQgFAFgHADQgGADgHABQgHACgHAAQgMAAgLgFgAAogIQgBgIgCgIQgCgGgFgFQgGgFgHgDQgHgCgIAAQgHAAgIADQgIADgFAFQgGAGgDAGQgDAHgBAHIBPAAIAAAAg");
	this.shape_10.setTransform(234.8,15.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZBcQgKgFgJgJQgIgIgFgLQgFgLAAgOQAAgNAFgLQAFgKAIgJQAJgIAKgEQAMgFANAAQANAAAMAFQAFADAGAFQAFAEAEAGIABAAIAAhcIAQAAIAAC8IgQAAIAAgTIgBAAQgEAFgFAFQgGAEgFACQgMAGgNAAQgNAAgMgEgAgSgIQgHAEgGAGQgHAFgCAJQgEAIAAAKQAAAKAEAJQACAIAHAHQAGAGAHAEQAJADAJAAQAJAAAJgDQAJgEAGgGQAGgHAEgIQADgJAAgKQAAgJgDgJQgEgIgGgGQgGgGgJgEQgJgDgJAAQgJAAgJADg");
	this.shape_11.setTransform(219.9,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBYQgHgBgHgDQgHgCgGgFIgMgKIAMgOQAHAKAMAGIAMAFIAOABQALAAAJgEQAJgDAFgHQAGgFACgJQACgIAAgKIAAgVIAAAAQgEAGgFAEIgKAHQgLAFgOAAQgLAAgMgFQgLgEgIgIQgIgIgFgKQgFgLAAgNQAAgMAFgMQAEgKAIgJQAIgIAKgEQAMgFANAAQALAAALAFQAGACAFAEQAGAFAFAHIAAAAIAAgUIARAAIAABzQAAALgCAKQgEALgGAIQgKALgJAEQgHADgHABQgJACgIAAQgIAAgJgCgAgQhHQgHAEgGAHQgHAGgCAHQgEAJAAAJQAAAJAEAIQACAJAHAFQAGAGAHAEQAJADAHAAQAKAAAHgDQAJgEAGgFQAHgFADgJQADgIAAgKQAAgJgDgJQgDgHgGgGQgGgHgIgEQgJgDgKAAQgHAAgJADg");
	this.shape_12.setTransform(197.7,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiA8IAAg/QAAgLgCgHQgBgHgDgGQgEgFgGgDQgGgCgJAAQgKAAgIAHQgIAEgEAJQgFAPAAAJIAAA8IgRAAIAAhaIgBgaIARAAIABATIAAAAQAGgKALgGQALgGAKAAQAMAAAIADQAJADAFAGQAFAGADAIQADAJAAALIAABJg");
	this.shape_13.setTransform(183.3,14.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIBXIAAh0IAQAAIAAB0gAgIhBQgDgEAAgFQAAgFADgDQAEgEAEAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgEAAgEgDg");
	this.shape_14.setTransform(173.5,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBHQgEgEgCgGQgEgGAAgKIAAhIIgYAAIAAgQIAYAAIAAggIAQAAIAAAgIAiAAIAAAQIgiAAIAABEQABALAEAFQADAFAJAAQAJgBAIgEIABAPQgJAEgNABQgOgCgFgEg");
	this.shape_15.setTransform(166.4,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgJgIQgIgJgEgLQgEgLgBgNQABgMAEgMQAEgLAIgIQAJgIAKgFQALgEAMAAQANAAAKAEQALAFAHAIQAHAIAEALQADAKABAMIAAAGIhhAAQABAJAEAIQACAHAHAHQAFAFAIADQAIADAHABQAJAAAOgHQAJgFAGgIIAMAKIgLALQgFAFgHADQgGADgHABQgHACgHAAQgMAAgLgFgAAogIQgBgIgCgIQgDgGgEgFQgGgFgHgDQgHgCgIAAQgIAAgHADQgIADgFAFQgGAGgDAGQgDAHgBAHIBPAAIAAAAg");
	this.shape_16.setTransform(155.3,15.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgIgIQgJgJgEgLQgFgLABgNQgBgMAFgMQAEgLAJgIQAHgIALgFQALgEALAAQAOAAAKAEQALAFAHAIQAHAIAEALQADAKAAAMIAAAGIhgAAQABAJADAIQAEAHAFAHQAHAFAHADQAIADAHABQAJAAAOgHQAJgFAGgIIAMAKIgKALQgHAFgGADQgGADgHABQgHACgHAAQgMAAgLgFgAAngIQAAgIgCgIQgDgGgFgFQgEgFgIgDQgHgCgJAAQgGAAgIADQgIADgFAFQgGAGgDAGQgEAHABAHIBNAAIAAAAg");
	this.shape_17.setTransform(141.4,15.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABHA8IAAhDQABgKgCgGQgCgHgCgFQgEgEgGgDQgFgCgJAAQgJAAgHADQgGAEgEAGQgDAGgDAIQgBAHAAAJIAAA9IgQAAIAAhDQAAgKgBgGQgBgHgDgFQgEgEgGgDQgGgCgIAAQgKAAgIAHQgHAEgDAJQgFAPAAAJIAAA8IgQAAIAAhaIgCgaIASAAIAAASIABAAQADgFAEgEQAEgEAFgDQALgFALAAQALAAAJAFQAFADAEAEQAEAFADAHQACgFAEgFIAKgIIALgEQAFgCAGAAQALAAAIADQAJADAFAGQAGAGADAIQACAJAAALIAABJg");
	this.shape_18.setTransform(123.6,14.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDBHQgEgEgCgGQgEgGAAgKIAAhIIgYAAIAAgQIAYAAIAAggIAQAAIAAAgIAiAAIAAAQIgiAAIAABEQABALAEAFQADAFAJAAQAJgBAIgEIABAPQgKAEgMABQgOgCgFgEg");
	this.shape_19.setTransform(102,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAmA6IgngzIglAzIgVAAIAwg9Igrg3IAXAAIAgAsIAfgsIAUAAIgpA3IAxA9g");
	this.shape_20.setTransform(91.8,15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgJgIQgHgJgFgLQgEgLgBgNQABgMAEgMQAFgLAHgIQAJgIAKgFQALgEAMAAQANAAAKAEQAKAFAIAIQAHAIAEALQADAKAAAMIAAAGIhgAAQABAJAEAIQACAHAHAHQAFAFAIADQAHADAIABQAJAAAOgHQAJgFAFgIIAOAKIgMALQgFAFgHADQgGADgHABQgGACgIAAQgMAAgLgFgAAngIQAAgIgCgIQgDgGgEgFQgFgFgHgDQgIgCgIAAQgIAAgHADQgHADgGAFQgGAGgDAGQgDAHgBAHIBOAAIAAAAg");
	this.shape_21.setTransform(78.9,15.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAjA8IAAg/QAAgLgCgHQgCgHgDgGQgEgFgGgDQgGgCgKAAQgJAAgJAHQgHAEgEAJQgFAPAAAJIAAA8IgRAAIAAhaIgBgaIARAAIABATIAAAAQAGgKALgGQALgGALAAQALAAAIADQAIADAGAGQAFAGADAIQADAJAAALIAABJg");
	this.shape_22.setTransform(64.8,14.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfA8IAAhPIgBglIAQAAIAAAWIAAAAQAFgKAJgIQADgDAGgCQAHgCAHAAQAHAAAFACIgDAPIgJgBQgKABgGADQgGADgFAHQgEAEgCAIQgCAGAAAGIAABBg");
	this.shape_23.setTransform(48,14.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZA5QgIgDgGgGQgFgGgDgJQgDgIAAgLIAAhJIARAAIAABAQAAAKABAHQACAIADAEQAEAGAGACQAGADAKAAIAFgBQAHgBAGgEQAHgGAEgIIAEgLQABgHAAgHIAAg7IARAAIAABaIABAaIgRAAIgBgTIgBAAQgFAJgLAHQgLAGgLAAQgLAAgIgDg");
	this.shape_24.setTransform(35.7,15.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYA5QgMgFgHgIQgJgJgFgLQgEgLAAgNQAAgMAEgMQAFgLAJgIQAHgIAMgFQALgEANAAQANAAAMAEQAMAFAIAIQAIAIAEALQAFAMAAAMQAAANgFALQgEALgIAJQgIAIgMAFQgMAFgNAAQgNAAgLgFgAgRgqQgIAEgGAGQgGAGgDAJQgDAIAAAJQAAAKADAJQADAIAGAGQAGAGAIAEQAIADAJABQAKgBAJgDQAHgEAGgGQAGgGADgIQADgJABgKQgBgJgDgIQgDgJgGgGQgGgGgHgEQgJgDgKAAQgJAAgIADg");
	this.shape_25.setTransform(21.5,15.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag1BXIACgQQAFACAIAAQAHABAGgGQAFgFAEgKIAIgXIgvh2IAVAAIAjBgIAkhgIATAAIg5CTIgGAMQgDAGgEAEQgFAEgFACQgGACgHAAQgKAAgGgCg");
	this.shape_26.setTransform(8.1,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,345.7,29), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBCIABgMQAEACAGAAQAGAAAFgEQADgEADgIIAGgRIgkhZIAQAAIAbBIIAbhIIAPAAIgrBvIgFAJIgGAHQgDADgEACQgEABgHAAIgLgBg");
	this.shape.setTransform(203.6,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCA2QgDgDgCgFQgCgFAAgHIAAg3IgTAAIAAgLIATAAIAAgZIAMAAIAAAZIAZAAIAAALIgZAAIAAA0QAAAJADAEQADADAGAAQAHAAAHgEIAAAMQgHADgKAAQgKgBgEgDg");
	this.shape_1.setTransform(195.9,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFBCIAAhYIALAAIAABYgAgFgyQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_2.setTransform(190.4,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLArQgJgDgGgHQgGgGgDgJQgEgIAAgKQAAgJAEgJQADgIAGgHQAGgGAJgEQAJgDAJAAQAKAAAIAEQAJAEAGAHIgKAIQgEgFgFgDQgGgEgIAAQgHAAgFADQgHACgEAFQgEAFgDAHQgCAGAAAHQAAAHACAHQADAHAEAEQAEAFAHADQAFACAHAAQAIAAAGgDQAFgEAEgFIAKAIQgGAIgJAEQgIADgKABQgJAAgJgEg");
	this.shape_3.setTransform(183.9,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBA2QgEgDgCgFQgCgFAAgHIAAg3IgTAAIAAgLIATAAIAAgZIALAAIAAAZIAaAAIAAALIgaAAIAAA0QAAAJAEAEQADADAHAAQAGAAAGgEIABAMQgHADgKAAQgLgBgCgDg");
	this.shape_4.setTransform(170.6,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaAuIAAgxQAAgHgBgGQgBgFgDgEQgDgFgEgBQgFgCgHAAQgHAAgHAEQgFAFgDAGQgEALAAAHIAAAuIgNAAIAAhFIgBgTIANAAIABAOQAEgIAJgEQAIgFAIABQAJAAAGACQAGACAEAFQAEAEADAHQACAFAAAJIAAA4g");
	this.shape_5.setTransform(162,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSArQgJgDgGgHQgGgGgEgJQgDgIAAgKQAAgJADgJQAEgIAGgHQAGgGAJgDQAJgEAJAAQAKAAAJAEQAJADAGAGQAGAHAEAIQADAJAAAJQAAAKgDAIQgEAJgGAGQgGAHgJADQgJAEgKAAQgJAAgJgEgAgNggQgGADgEAFQgFAEgCAHQgCAGAAAHQAAAHACAHQACAGAFAFQAEAFAGACQAGADAHAAQAIAAAGgDQAGgCAFgFQAEgFACgGQADgHAAgHQAAgHgDgGQgCgHgEgEQgFgFgGgDQgGgDgIAAQgHAAgGADg");
	this.shape_6.setTransform(151.3,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAuIAAg8IAAgcIAMAAIAAAQIAAAAQADgIAHgFIAHgEQAFgBAGAAIAJABIgCAMIgIgBQgGAAgGACQgEADgEAEQgDAEgCAGQgBAFAAAEIAAAyg");
	this.shape_7.setTransform(143.3,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBJIAAhMIgTAAIAAgMIATAAIAAgYQAAgJACgGQACgHAEgDQADgEAGgCQAFgCAHAAIALABIgCAMIgKgCQgFABgEABQgDACgBADQgDAFAAAMIAAAWIAVAAIAAAMIgVAAIAABMg");
	this.shape_8.setTransform(137,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAuIAAg8IAAgcIAMAAIAAAQIAAAAQADgIAHgFIAHgEQAFgBAGAAIAJABIgCAMIgIgBQgGAAgGACQgEADgEAEQgDAEgCAGQgBAFAAAEIAAAyg");
	this.shape_9.setTransform(131.4,11.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPArQgIgDgHgHQgGgGgDgJQgEgIAAgKQAAgJAEgJQADgIAGgHQAGgGAJgDQAIgEAIAAQAKAAAIAEQAIADAGAGQAFAGADAIQADAIAAAJIAAAFIhJAAQAAAHADAGQADAGAEAEQAEAEAGADQAGACAFAAQAHAAALgFQAHgEAEgGIAKAIIgJAIIgJAGIgKADIgLACQgIAAgJgEgAAegGQAAgGgCgGQgCgFgEgEQgDgDgGgCQgFgDgHAAQgFAAgGADQgFACgEAEQgFAEgCAFQgDAGAAAFIA7AAIAAAAg");
	this.shape_10.setTransform(122.2,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCA2QgDgDgCgFQgCgFAAgHIAAg3IgTAAIAAgLIATAAIAAgZIAMAAIAAAZIAZAAIAAALIgZAAIAAA0QgBAJAEAEQADADAGAAQAHAAAHgEIAAAMQgHADgKAAQgLgBgDgDg");
	this.shape_11.setTransform(113.8,10.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAtQgGgCgEgDQgFgDgCgFQgDgFAAgGQAAgGACgEQABgEADgDQAFgFAJgEQALgEAYAAIAGAAIAAgDIgBgKQgCgEgDgDQgCgDgFgBQgEgCgGAAQgHAAgHADQgGADgGAFIgIgJQAHgGAJgEQAKgDALAAQAHAAAFACQAGACAFAEQAEAEADAFQACAHAAAIIAAAmQAAALACAJIgMAAIgBgOIgBAAQgCAEgEADQgDAEgEACIgIADIgJABQgGAAgFgCgAgHADQgHACgEADQgFAFAAAGQAAAEACADIAFAFQAFAEAJAAQAGAAAFgCQAFgCADgEQAEgEABgFQACgGAAgGIAAgGIgHAAQgQAAgIADg");
	this.shape_12.setTransform(105.4,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYAtIgYhIIgXBIIgNAAIgdhYIAPAAIAUBHIABAAIAXhHIANAAIAXBHIAVhHIAPAAIgcBYg");
	this.shape_13.setTransform(93.9,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAuIAAg8IAAgcIAMAAIAAAQIAAAAQADgIAHgFIAHgEQAFgBAGAAIAJABIgCAMIgIgBQgGAAgGACQgEADgEAEQgDAEgCAGQgBAFAAAEIAAAyg");
	this.shape_14.setTransform(79.5,11.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTArQgGgCgEgFQgEgEgCgGQgDgHAAgIIAAg4IANAAIAAAxIABANQABAFADAEQADAEAEACQAFACAHAAIAEgBQAGgBAEgDQAFgEADgGIADgIIABgLIAAgtIANAAIAABFIABATIgNAAIgBgOIAAAAQgEAHgJAFQgIAFgIAAQgJAAgGgDg");
	this.shape_15.setTransform(70.2,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSArQgJgDgGgHQgGgGgEgJQgDgIAAgKQAAgJADgJQAEgIAGgHQAGgGAJgDQAJgEAJAAQAKAAAJAEQAJADAGAGQAGAHAEAIQADAJAAAJQAAAKgDAIQgEAJgGAGQgGAHgJADQgJAEgKAAQgJAAgJgEgAgNggQgGADgEAFQgFAEgCAHQgCAGAAAHQAAAHACAHQACAGAFAFQAEAFAGACQAGADAHAAQAIAAAGgDQAGgCAFgFQAEgFACgGQADgHAAgHQAAgHgDgGQgCgHgEgEQgFgFgGgDQgGgDgIAAQgHAAgGADg");
	this.shape_16.setTransform(59.3,11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPArQgIgDgHgHQgGgGgDgJQgEgIAAgKQAAgJAEgJQADgIAGgHQAGgGAJgDQAIgEAIAAQAKAAAIAEQAIADAGAGQAFAGADAIQADAIAAAJIAAAFIhJAAQAAAHADAGQADAGAEAEQAEAEAGADQAGACAFAAQAHAAALgFQAHgEAEgGIAKAIIgJAIIgJAGIgKADIgLACQgIAAgJgEgAAegGQAAgGgCgGQgCgFgEgEQgDgDgGgCQgFgDgHAAQgFAAgGADQgFACgEAEQgFAEgCAFQgDAGAAAFIA7AAIAAAAg");
	this.shape_17.setTransform(43.2,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAUBIIgtgvIAAAvIgNAAIAAiPIANAAIAABeIAognIATAAIgrAoIAwAwg");
	this.shape_18.setTransform(34,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAtQgGgCgEgDQgFgDgCgFQgDgFAAgGQAAgGACgEQABgEADgDQAFgFAJgEQALgEAYAAIAGAAIAAgDIgBgKQgCgEgDgDQgCgDgFgBQgEgCgGAAQgHAAgHADQgGADgGAFIgIgJQAHgGAJgEQAKgDALAAQAHAAAFACQAGACAFAEQAEAEADAFQACAHAAAIIAAAmQAAALACAJIgMAAIgBgOIgBAAQgCAEgEADQgDAEgEACIgIADIgJABQgGAAgFgCgAgHADQgHACgEADQgFAFAAAGQAAAEACADIAFAFQAFAEAJAAQAGAAAFgCQAFgCADgEQAEgEABgFQACgGAAgGIAAgGIgHAAQgQAAgIADg");
	this.shape_19.setTransform(23.6,11.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA0BDIAAhzIgxBzIgGAAIgwhzIgBAAIAABzIgNAAIAAiFIAUAAIAtBsIAthsIAVAAIAACFg");
	this.shape_20.setTransform(10.5,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,210.4,23), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLALQgEgFAAgGQAAgGAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAGQAAAGgEAFQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(350.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDBVQgGgFgDgHQgDgIAAgLIAAhXIgeAAIAAgSIAeAAIAAgoIATAAIAAAoIAoAAIAAASIgoAAIAABSQAAAOAGAGQAEAFAKAAQALAAAKgGIABATQgMAFgPAAQgQgCgGgFg");
	this.shape_1.setTransform(341.4,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBEQgNgFgLgKQgKgKgFgOQgGgNABgQQgBgPAGgNQAFgOAKgKQALgKANgFQAOgGAPAAQAQAAAOAGQANAFALAKQAKAKAFAOQAGANgBAPQABAQgGANQgFAOgKAKQgLAKgNAFQgOAGgQAAQgPAAgOgGgAgVgyQgJAEgIAHQgGAIgFAKQgDAKAAALQAAAMADAKQAFAKAGAIQAIAHAJAFQAKAEALAAQAMAAAKgEQAKgFAGgHQAIgIADgKQAEgKAAgMQAAgLgEgKQgDgKgIgIQgGgHgKgEQgKgFgMAAQgLAAgKAFg");
	this.shape_2.setTransform(327.6,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKBzIAAjiIAUAAIAAAYIABAAQAEgHAHgFQAGgFAIgEQAOgGAOAAQARAAANAFQAOAGAKAKQAKAKAGANQAFAOAAAQQAAAPgFAOQgGAMgKAKQgKAKgOAGQgNAFgRAAQgOAAgOgGQgIgEgGgFQgHgFgEgHIgBAAIAABugAgVhcQgKAEgIAIQgHAIgFAKQgEAKAAAMQAAALAEALQAFAKAHAHQAIAHAKAEQAKAEALAAQAMAAAKgEQAKgEAHgHQAHgHAEgKQADgLAAgLQAAgMgDgKQgEgLgHgHQgHgIgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_3.setTransform(310,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBEQgHgEgGgFQgGgFgFgHIARgMQAGAKAJAFQAKAGALAAQANAAAJgGQAFgDADgEQADgFAAgGQAAgJgIgGQgGgEgNgDIgSgEQgkgKAAgaQAAgLAEgIQAEgIAIgFQAHgGAJgCQAJgDAKAAQAPAAAMAGQAGADAFAFQAFAFADAGIgRAMQgFgJgHgFQgIgFgKAAQgLAAgIAFQgKAGAAAKQAAAKAHAFQAGAEAOADIAUAFQAHACAHADQAGADAEAFQAFAFADAGQACAGAAAIQAAALgEAIQgFAIgIAGQgHAFgKACQgKADgKAAQgUgCgJgEg");
	this.shape_4.setTransform(294,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDBVQgGgFgDgHQgDgIAAgLIAAhXIgeAAIAAgSIAeAAIAAgoIATAAIAAAoIAoAAIAAASIgoAAIAABSQAAAOAGAGQAEAFAKAAQALAAAKgGIABATQgMAFgPAAQgQgCgGgFg");
	this.shape_5.setTransform(274.3,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBEQgNgFgLgKQgKgKgFgOQgGgNABgQQgBgPAGgNQAFgOAKgKQALgKANgFQAOgGAPAAQAQAAAOAGQANAFALAKQAKAKAFAOQAGANgBAPQABAQgGANQgFAOgKAKQgLAKgNAFQgOAGgQAAQgPAAgOgGgAgVgyQgJAEgIAHQgGAIgFAKQgDAKAAALQAAAMADAKQAFAKAGAIQAIAHAJAFQAKAEALAAQAMAAAKgEQAKgFAGgHQAIgIADgKQAEgKAAgMQAAgLgEgKQgDgKgIgIQgGgHgKgEQgKgFgMAAQgLAAgKAFg");
	this.shape_6.setTransform(260.5,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAoBxIAAhNQAAgMgBgJQgCgJgFgGQgEgFgHgDQgIgDgLgBQgMABgKAHQgIAFgFAKQgGARAAANIAABIIgUAAIAAjiIAUAAIAABtIAAAAQAHgLANgHQANgIANAAQAOAAAKAEQAKAEAGAHQAHAHADAJQADALAAANIAABYg");
	this.shape_7.setTransform(243.1,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmBIIAAhgIgBgsIAUAAIAAAaIAAAAQAFgMALgIQAFgEAHgDQAHgCAJAAQAJAAAGACIgEATIgLgBQgLAAgJAEQgGAEgGAHQgFAGgDAJQgDAIAAAHIAABOg");
	this.shape_8.setTransform(222.9,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBHQgIgCgHgFQgGgGgEgHQgFgIAAgKQABgJACgGQACgHAEgFQAIgIAPgGQARgGAmgBIAKAAIAAgDQAAgKgCgGQgDgHgEgFQgEgEgHgDQgHgCgJAAQgMAAgLAFQgKAEgKAIIgLgOQAJgKAQgFQAOgGATAAQAKAAAKADQAJADAHAGQAHAHAFAJQADAKAAAMIAAA+QAAAQACAPIgTAAQgBgKAAgNIgBAAQgEAHgFAFQgGAFgFAEQgGADgIABIgPACQgJAAgJgDgAgMAFQgLADgHAGQgHAGAAAKQAAAHADAFQADAFAFADQAIAGAOAAQAJAAAIgEQAJgDAFgGQAGgHACgIQACgIABgKIAAgKIgKAAQgbABgNAEg");
	this.shape_9.setTransform(208.6,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBuQgOgGgKgKQgKgKgFgNQgGgOAAgPQAAgQAGgOQAFgMAKgKQAKgKAOgGQAOgFAPAAQAPAAAOAGQAIAEAGAFQAHAFAFAHIAAAAIAAhuIAUAAIAADiIgUAAIAAgYIAAAAQgFAHgHAFQgGAFgIAEQgOAGgPAAQgPAAgOgFgAgVgJQgKAEgHAHQgHAHgDALQgEAKAAAMQAAALAEALQADAKAHAHQAHAIAKAEQAKAEALAAQAMAAAKgEQAKgEAIgIQAIgHAEgKQAEgLAAgLQAAgMgEgKQgEgKgIgIQgIgHgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_10.setTransform(191.5,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdBHQgIgCgHgFQgGgGgFgHQgEgIABgKQAAgJACgGQACgHAEgFQAIgIAOgGQASgGAmgBIAKAAIAAgDQAAgKgCgGQgDgHgEgFQgFgEgGgDQgIgCgIAAQgLAAgMAFQgKAEgJAIIgMgOQAJgKAPgFQAQgGASAAQALAAAJADQAJADAHAGQAHAHAFAJQAEAKgBAMIAAA+QABAQABAPIgTAAQgBgKAAgNIgBAAQgEAHgFAFQgFAFgGAEQgGADgIABIgPACQgJAAgJgDgAgMAFQgLADgHAGQgHAGAAAKQAAAHADAFQACAFAGADQAIAGAOAAQAKAAAHgEQAJgDAFgGQAGgHACgIQACgIABgKIAAgKIgKAAQgbABgNAEg");
	this.shape_11.setTransform(174.7,17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmBIIAAhgIgBgsIAUAAIAAAaIAAAAQAFgMALgIQAFgEAHgDQAHgCAJAAQAJAAAGACIgEATIgLgBQgLAAgJAEQgGAEgGAHQgFAGgDAJQgDAIAAAHIAABOg");
	this.shape_12.setTransform(163.6,17.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglAKIAAgTIBLAAIAAATg");
	this.shape_13.setTransform(152.4,17.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZBEQgNgFgJgKQgLgKgEgOQgGgNAAgQQAAgPAGgNQAEgOALgKQAJgKANgFQANgGAOAAQAPAAANAGQAMAFAKAKQAIAKAEAMQAFANAAAOIAAAJIh0AAQABAKAEAJQAEAJAHAHQAHAHAJAEQAJAEAJAAQALAAARgIQALgGAGgKIAQAMIgNAOQgHAFgIAEQgHADgJACQgHACgKAAQgOAAgOgGgAAvgKQABgKgEgIQgDgIgGgGQgGgGgIgEQgJgDgKAAQgJAAgJAEQgIAEgIAGQgGAGgFAJQgDAIAAAIIBdAAIAAAAg");
	this.shape_14.setTransform(139.1,17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAoBxIAAhNQAAgMgBgJQgCgJgFgGQgEgFgHgDQgIgDgLgBQgMABgKAHQgIAFgFAKQgGARAAANIAABIIgUAAIAAjiIAUAAIAABtIAAAAQAHgLANgHQANgIANAAQAOAAAKAEQAKAEAGAHQAHAHADAJQADALAAANIAABYg");
	this.shape_15.setTransform(122.3,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDBVQgGgFgDgHQgDgIAAgLIAAhXIgeAAIAAgSIAeAAIAAgoIATAAIAAAoIAoAAIAAASIgoAAIAABSQAAAOAGAGQAEAFAKAAQALAAAKgGIABATQgMAFgPAAQgQgCgGgFg");
	this.shape_16.setTransform(109.1,15.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmAKIAAgTIBMAAIAAATg");
	this.shape_17.setTransform(99.2,17.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQBzIAAh5IgeAAIAAgSIAeAAIAAgnQAAgNADgKQAEgKAFgGQAFgGAKgDQAIgDALAAQAHAAAKACIgEASQgIgCgHAAQgIAAgFADQgFACgDAFQgEAIAAASIAAAkIAhAAIAAASIghAAIAAB5g");
	this.shape_18.setTransform(90.5,13.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQBzIAAh5IgeAAIAAgSIAeAAIAAgnQAAgNADgKQADgKAHgGQAFgGAIgDQAJgDALAAQAHAAAKACIgEASQgIgCgHAAQgIAAgFADQgFACgDAFQgEAIAAASIAAAkIAhAAIAAASIghAAIAAB5g");
	this.shape_19.setTransform(81.6,13.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdBEQgOgFgKgKQgKgKgFgOQgFgNAAgQQAAgPAFgNQAFgOAKgKQAKgKAOgFQAOgGAPAAQAQAAAOAGQANAFAKAKQALAKAFAOQAGANgBAPQABAQgGANQgFAOgLAKQgKAKgNAFQgOAGgQAAQgPAAgOgGgAgVgyQgJAEgIAHQgGAIgEAKQgEAKAAALQAAAMAEAKQAEAKAGAIQAIAHAJAFQAKAEALAAQAMAAAKgEQAKgFAGgHQAIgIADgKQAEgKAAgMQAAgLgEgKQgDgKgIgIQgGgHgKgEQgKgFgMAAQgLAAgKAFg");
	this.shape_20.setTransform(67.7,17.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AApBIIAAhNQAAgMgCgJQgBgIgFgHQgEgGgIgDQgHgDgLAAQgMABgKAHQgIAGgGAKQgFARAAAMIAABIIgVAAIAAhsIgBggIAVAAIABAXIAAAAQAHgMANgGQANgIANAAQANAAALADQAJAFAHAHQAGAHADAJQAEALAAANIAABYg");
	this.shape_21.setTransform(41.9,17.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABOBqIgYg4IhsAAIgXA4IgZAAIBcjTIAUAAIBdDTgAAuAfIguhvIguBvIBcAAg");
	this.shape_22.setTransform(23.6,14.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A7sAnQgHgIAAgPQAAgNAFgLQAGgLAKgIQAJgIAOgCIAAAPQgIACgEAEQgFAFgDAFQgCAGAAAJQALAAAFAHQAFAGAAAGQAAAJgFAFQgHAGgHAAQgKAAgHgJgA8lAnQgIgIAAgPQABgNAFgLQAGgLAJgIQAKgIAOgCIAAAPQgJACgEAEQgEAFgDAFQgDAGAAAJQAMAAAEAHQAGAGAAAGQAAAJgGAFQgGAGgHAAQgKAAgHgJgAcBAXQAIgCAFgEQAEgFADgFQACgHABgIQgMAAgFgHQgFgGAAgGQAAgJAGgFQAGgGAHAAQAKAAAIAJQAGAIAAAPQABANgGAKQgGAMgKAIQgJAIgOACgAbHAXQAJgCAEgEQAFgFACgFQADgHAAgIQgLAAgFgHQgFgGAAgGQAAgJAGgFQAFgGAIAAQAKAAAHAJQAHAIAAAPQAAANgGAKQgFAMgJAIQgLAIgOACg");
	this.shape_23.setTransform(183.8,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,367.5,34), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A83AoQgHgJAAgPQAAgNAFgLQAGgKAKgJQAJgIAOgCIAAAPQgIACgEAEQgFAEgDAHQgCAFAAAJQALAAAFAGQAFAHAAAHQAAAHgFAGQgHAGgHAAQgKAAgHgIgA9wAoQgIgJAAgPQABgNAFgLQAGgKAJgJQAKgIAOgCIAAAPQgJACgEAEQgEAEgDAHQgDAFAAAJQAMAAAEAGQAGAHAAAHQAAAHgGAGQgGAGgHAAQgKAAgHgIgAdMAXQAIgCAEgEQAFgFADgGQADgGAAgIQgMAAgEgGQgGgHAAgHQAAgHAGgGQAGgGAHAAQAKAAAHAIQAIAJAAAPQgBANgFAKQgGALgJAJQgKAIgOACgAcTAXQAIgCAEgEQAFgFADgGQACgGAAgIQgLAAgFgGQgFgHAAgHQAAgHAFgGQAHgGAHAAQAKAAAHAIQAHAJAAAPQAAANgGAKQgFALgKAJQgJAIgOACg");
	this.shape.setTransform(191.3,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAJQgFgEAAgFQAAgFAFgEQADgDAGAAQAFAAAEADQADAEAAAFQAAAFgDAEQgEAFgFAAQgGAAgDgFg");
	this.shape_1.setTransform(369.1,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBYIBIifIhWAAIAAgQIBpAAIAAAQIhHCfg");
	this.shape_2.setTransform(358.4,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANBYIAAiZIggAcIgKgNIAsglIAQAAIAACvg");
	this.shape_3.setTransform(343.5,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBZQgHgCgHgEIgKgKIgIgNQgEgJgFgUQgCgOAAgRQAAgQACgOQACgKAHgTIAIgNIAKgKQAHgEAHgCQAHgCAJgBQAJABAIACQAIACAGAEIALAKIAHANQAHATACAKQACAOAAAQQAAARgCAOQgFAUgEAJIgHANIgLAKQgGAEgIACQgIADgJAAQgJAAgHgDgAgMhIQgFACgEAEQgFAEgDAFIgGAKQgDAKgCAPIgBAWQABAgAFAQIAGALQADAFAFAEQAEADAFACQAGACAGAAQAHAAAGgCQAGgCAEgDQAGgFAGgPQAGgQABggIgBgWQgCgPgEgKIgFgKIgHgJQgEgEgGgCQgGgCgHAAQgGAAgGACg");
	this.shape_4.setTransform(330.9,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BaIAAgVIBFhHQALgKAFgIIAFgKQACgGAAgFQAAgIgDgFQgDgGgEgFQgFgDgGgCQgGgCgHAAQgGAAgGACQgGACgEADQgFADgDAGQgDAFgCAHIgTgDQACgJAFgJQAEgHAHgGQAHgFAJgDQAJgDAJAAQALAAAKADQAJADAIAFQAHAGAEAJQAFAJAAALQAAAJgDAKQgDAHgFAJQgFAGgHAHIgNANIg3A4IBcAAIAAAQg");
	this.shape_5.setTransform(316.9,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjA8IAAg/QAAgLgDgHQgBgHgDgGQgEgFgGgDQgGgCgKAAQgJAAgJAHQgHAEgEAJQgFAPAAAJIAAA8IgRAAIAAhaIgBgaIARAAIABATIAAAAQAGgKALgGQALgGALAAQALAAAIADQAIADAGAGQAFAGADAIQADAJAAALIAABJg");
	this.shape_6.setTransform(296,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBXIAAh0IAPAAIAAB0gAgHhBQgEgEAAgFQAAgFAEgDQAEgEADAAQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAQgDAAgEgDg");
	this.shape_7.setTransform(286.2,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHBeIAAi8IAPAAIAAC8g");
	this.shape_8.setTransform(273.2,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgIgIQgJgJgEgLQgFgLABgNQgBgMAFgMQAEgLAJgIQAHgIALgFQALgEALAAQAOAAAKAEQALAFAHAIQAHAIAEALQADAKAAAMIAAAGIhgAAQABAJADAIQAEAHAFAHQAHAFAHADQAIADAHABQAJAAAOgHQAJgFAGgIIAMAKIgKALQgHAFgGADQgGADgHABQgHACgHAAQgMAAgLgFgAAngIQAAgIgCgIQgDgGgFgFQgEgFgIgDQgHgCgJAAQgGAAgIADQgIADgFAFQgGAGgDAGQgEAHABAHIBNAAIAAAAg");
	this.shape_9.setTransform(263.3,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA6Igwh0IAUAAIAkBiIABAAIAlhiIATAAIgwB0g");
	this.shape_10.setTransform(250.3,15.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYA7QgHgCgFgEQgGgFgDgGQgEgHAAgHQAAgIACgGQACgFAEgEQAGgHAMgEQAPgFAfgCIAIAAIAAgCQAAgIgCgGQgBgFgEgEQgEgDgGgCQgFgCgIAAQgJAAgJADQgJAEgIAGIgKgLQAJgJAMgEQANgEAPAAQAJgBAHADQAIADAGAEQAGAGADAHQAEAIAAALIAAAzQAAAOACAMIgQAAQgCgIAAgLIAAAAQgEAHgEADIgJAHQgFADgGABIgNACQgHgBgIgCgAgKAEQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAIAGALAAQAIAAAGgDQAHgEAEgEQAFgGACgHQACgHAAgHIAAgIIgIAAQgWgBgLAEg");
	this.shape_11.setTransform(237.5,15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfA8IAAhPIgBglIAQAAIAAAWIABAAQAEgKAIgIQAEgDAGgCQAGgCAIAAQAHAAAFACIgDAPIgJgBQgJABgIADQgFADgFAHQgFAEgCAIQgBAGAAAGIAABBg");
	this.shape_12.setTransform(228.3,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBYIAAifIg7AAIAAgQICHAAIAAAQIg7AAIAACfg");
	this.shape_13.setTransform(215.9,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYA5QgLgFgJgIQgIgJgEgLQgFgLAAgNQAAgMAFgMQAEgLAIgIQAJgIALgFQAMgEAMAAQANAAAMAEQAMAFAIAIQAIAIAEALQAFAMAAAMQAAANgFALQgEALgIAJQgIAIgMAFQgMAFgNAAQgMAAgMgFgAgRgqQgJAEgFAGQgGAGgDAJQgDAIAAAJQAAAKADAJQADAIAGAGQAFAGAJAEQAIADAJABQAKgBAIgDQAJgEAGgGQAFgGADgIQADgJABgKQgBgJgDgIQgDgJgFgGQgGgGgJgEQgIgDgKAAQgJAAgIADg");
	this.shape_14.setTransform(194.4,15.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBHQgEgEgDgGQgDgGAAgKIAAhIIgYAAIAAgQIAYAAIAAggIAQAAIAAAgIAiAAIAAAQIgiAAIAABEQABALAEAFQADAFAKAAQAIgBAIgEIABAPQgJAEgNABQgOgCgFgEg");
	this.shape_15.setTransform(182.8,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZA4QgFgCgFgFQgFgEgEgHIAOgJQAFAJAIADQAIAGAJAAQALgBAHgEQAEgDADgDQACgEAAgFQAAgIgHgFQgEgDgLgDIgPgEQgegHAAgWQAAgJADgHQAEgGAGgFQAGgEAIgDQAHgBAIAAQANAAAKAEIAJAGQAEAFADAFIgPAKQgEgHgGgEQgGgFgJABQgJAAgGAEQgIAEAAAJQAAAIAGAEQAFAEALADIAQADIAMAEQAFADAEADQAEAFACAFQACAFAAAHQAAAIgEAIQgEAGgGAFQgGAEgJACQgIACgIABQgRgCgIgEg");
	this.shape_16.setTransform(166.4,15.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgJgIQgHgJgFgLQgFgLAAgNQAAgMAFgMQAFgLAHgIQAJgIAKgFQALgEAMAAQAMAAALAEQAKAFAIAIQAHAIAEALQADAKAAAMIAAAGIhgAAQABAJAEAIQACAHAHAHQAFAFAIADQAHADAIABQAJAAAOgHQAJgFAFgIIAOAKIgMALQgGAFgGADQgGADgHABQgGACgIAAQgMAAgLgFgAAngIQABgIgDgIQgDgGgEgFQgFgFgHgDQgIgCgIAAQgIAAgHADQgHADgGAFQgGAGgDAGQgEAHAAAHIBOAAIAAAAg");
	this.shape_17.setTransform(154.1,15.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPA5QgLgFgJgIQgIgIgEgMQgEgLAAgNQAAgMAEgMQAEgLAIgIQAJgIALgFQAMgEANAAQAMAAALAEQALAGAIAKIgNAKQgEgHgIgEQgIgFgJABQgKAAgIADQgIADgGAGQgFAHgDAJQgDAIAAAJQAAAKADAJQADAIAFAGQAGAHAIADQAIADAKABQAJgBAIgEQAIgEAEgHIANAKQgIAKgLAFQgLAFgMABQgNAAgMgFg");
	this.shape_18.setTransform(141.5,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYA7QgHgCgFgEQgGgFgDgGQgEgHAAgHQAAgIACgGQACgFAEgEQAGgHAMgEQAPgFAfgCIAIAAIAAgCQAAgIgCgGQgBgFgEgEQgEgDgGgCQgFgCgIAAQgJAAgJADQgJAEgIAGIgKgLQAJgJAMgEQANgEAPAAQAJgBAHADQAIADAGAEQAGAGADAHQAEAIAAALIAAAzQAAAOACAMIgQAAQgCgIAAgLIAAAAQgEAHgEADIgJAHQgFADgGABIgNACQgHgBgIgCgAgKAEQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAIAGALAAQAIAAAGgDQAHgEAEgEQAFgGACgHQACgHAAgHIAAgIIgIAAQgWgBgLAEg");
	this.shape_19.setTransform(128.3,15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHBeIAAi8IAPAAIAAC8g");
	this.shape_20.setTransform(119.1,11.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2BYIAAivIAzAAQANAAALADQAKADAIAFQAHAGAFAJQAEAJAAAMQAAALgEAJQgFAJgHAHQgIAFgKADQgLACgNAAIghAAIAABSgAgkgKIAdAAQALAAAJgBQAHgDAFgFQAFgEADgFQACgGAAgGQAAgHgCgFQgDgGgFgEQgFgEgHgCQgJgDgLAAIgdAAg");
	this.shape_21.setTransform(109.7,12.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgCBHQgFgEgDgGQgCgGAAgKIAAhIIgZAAIAAgQIAZAAIAAggIAQAAIAAAgIAhAAIAAAQIghAAIAABEQgBALAFAFQADAFAKAAQAIgBAIgEIABAPQgKAEgMABQgOgCgEgEg");
	this.shape_22.setTransform(90.7,13.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZA4QgFgCgFgFQgFgEgEgHIAOgJQAFAJAIADQAIAGAJAAQALgBAHgEQAEgDADgDQACgEAAgFQAAgIgHgFQgEgDgLgDIgPgEQgegHAAgWQAAgJADgHQAEgGAGgFQAGgEAIgDQAHgBAIAAQANAAAKAEIAJAGQAEAFADAFIgPAKQgEgHgGgEQgGgFgJABQgJAAgGAEQgIAEAAAJQAAAIAGAEQAFAEALADIAQADIAMAEQAFADAEADQAEAFACAFQACAFAAAHQAAAIgEAIQgEAGgGAFQgGAEgJACQgIACgIABQgRgCgIgEg");
	this.shape_23.setTransform(81.3,15.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgJgIQgHgJgFgLQgEgLgBgNQABgMAEgMQAFgLAHgIQAJgIAKgFQALgEAMAAQANAAAKAEQAKAFAIAIQAHAIAEALQADAKAAAMIAAAGIhgAAQABAJAEAIQACAHAHAHQAFAFAIADQAHADAIABQAJAAAOgHQAJgFAFgIIAOAKIgMALQgFAFgHADQgGADgHABQgGACgIAAQgMAAgLgFgAAogIQgBgIgCgIQgDgGgEgFQgFgFgHgDQgIgCgIAAQgIAAgHADQgHADgGAFQgGAGgDAGQgDAHgBAHIBPAAIAAAAg");
	this.shape_24.setTransform(69,15.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag6BYIAAivIA1AAQAKAAAKACQAKADAIAEQAIAGAFAIQAFAJAAAMQAAAHgDAHQgCAGgEAFQgEAFgGADQgFAEgIACQAJABAIADQAHADAGAFQAFAGADAIQACAIAAAKQgCARgJALQgKAKgJAFQgHACgIACQgJACgJgBgAgoBIIAiAAQAJAAAIgCQAJgCAGgEQAHgEADgHQAEgGAAgIQAAgJgDgHQgDgGgGgEQgFgFgIgCQgJgCgKAAIgkAAgAgogKIAkAAQAGAAAGgBQAHgDAEgDQAGgEADgGQADgGAAgIQgEgeghAAIgiAAg");
	this.shape_25.setTransform(54.6,12.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQBZQgIgCgGgEIgLgKIgHgNQgFgJgEgUQgCgOAAgRQAAgQACgOQACgKAHgTIAHgNIALgKQAGgEAIgCQAIgCAIgBQAJABAIACQAHACAHAEIALAKIAHANQAHATACAKQACAOAAAQQAAARgCAOQgEAUgFAJIgHANIgLAKQgHAEgHACQgIADgJAAQgIAAgIgDgAgMhIQgFACgFAEQgEAEgDAFIgGAKQgDAKgCAPIgBAWQABAgAFAQIAGALQADAFAEAEQAFADAFACQAGACAGAAQAHAAAGgCQAFgCAFgDQAFgFAIgPQAFgQABggIgBgWQgCgPgDgKIgGgKIgHgJQgFgEgFgCQgGgCgHAAQgGAAgGACg");
	this.shape_26.setTransform(32.4,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTBYQgIgCgHgEQgGgEgFgGQgGgGgDgHIASgIQAFAKAJAGQAJAGALAAQAIAAAHgCQAHgDAGgGQAFgGADgGQADgIAAgIQAAgJgDgIQgDgIgGgGQgGgEgIgDQgIgDgIAAQgKAAgJACQgJADgJAEIAChbIBZAAIAAARIhIAAIgBA1QALgFANAAQALAAALAFQAKAEAIAHQAHAIAEAJQAEALAAAMQAAANgEALQgFAKgIAIQgIAHgLAFQgLAEgLAAQgJAAgHgCg");
	this.shape_27.setTransform(18.2,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,382.5,29), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAtQgIgDgHgHQgGgHgEgIQgEgKAAgKQAAgJAEgKQADgJAHgGQAGgHAIgEQAKgDAIAAQALAAAIAEQAJADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAEQAFAFAFADQAGACAGAAQAIAAALgFQAHgEAFgHIAKAIQgEAGgFADQgFAEgEADIgLADIgMABQgJAAgJgEgAAggGQAAgHgDgFQgCgGgDgEQgFgEgFgCQgFgCgIAAQgFAAgGACQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAIAAAAg");
	this.shape.setTransform(159.9,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbBMIAAg1QAAgHgBgGQgCgHgDgDQgDgDgEgCQgFgCgHAAQgIAAgHAEQgGAEgDAGQgEAMAAAJIAAAwIgNAAIAAiXIANAAIAABJIABAAQAEgIAIgEQAKgFAIgBQAJAAAHADQAGADAEAEQAFAFACAGQACAGAAAJIAAA8g");
	this.shape_1.setTransform(148.7,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCA4QgDgDgCgEQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2QAAAKADAEQADADAHAAQAHAAAHgDIAAAMQgHADgKAAQgLgBgEgEg");
	this.shape_2.setTransform(140,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBNIAAhRIgTAAIAAgMIATAAIAAgZQAAgKADgGQACgHAEgEQADgEAGgCQAFgCAIAAIALACIgCAMIgKgCQgGAAgDACQgEACgBADQgDAFAAAMIAAAYIAWAAIAAAMIgWAAIAABRg");
	this.shape_3.setTransform(128.6,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAtQgJgDgHgHQgGgHgEgIQgEgKAAgKQAAgJAEgKQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAHAGADAJQAEAKAAAJQAAAKgEAKQgDAIgHAHQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGACgFAGQgEAEgDAHQgCAHAAAHQAAAIACAHQADAGAEAFQAFAGAGACQAHADAHAAQAIAAAHgDQAGgCAFgGQAEgFADgGQACgHAAgIQAAgHgCgHQgDgHgEgEQgFgGgGgCQgHgDgIAAQgHAAgHADg");
	this.shape_4.setTransform(119.3,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAtQgIgDgHgHQgGgHgEgIQgEgKAAgKQAAgJAEgKQADgJAGgGQAHgHAJgEQAIgDAKAAQAKAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAEQAEAFAGADQAGACAHAAQAHAAALgFQAIgEADgHIAKAIQgEAGgEADQgEAEgGADIgLADIgKABQgKAAgJgEgAAfgGQAAgHgBgFQgCgGgFgEQgEgEgFgCQgGgCgGAAQgGAAgGACQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAIAAAAg");
	this.shape_5.setTransform(102.3,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcAwIAAgzQAAgIgCgGQgBgGgDgEQgDgEgFgCQgEgCgIAAQgHABgIAEQgFAFgEAGQgDALAAAIIAAAwIgOAAIAAhIIgBgVIAOAAIABAQIAAAAQAFgIAIgFQAJgFAIAAQAKAAAGACQAGADAFAFQAEAEADAHQABAHAAAJIAAA6g");
	this.shape_6.setTransform(91,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAtQgJgDgHgHQgGgHgEgIQgEgKAAgKQAAgJAEgKQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAHAGADAJQAEAKAAAJQAAAKgEAKQgDAIgHAHQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGACgFAGQgEAEgDAHQgCAHAAAHQAAAIACAHQADAGAEAFQAFAGAGACQAHADAHAAQAIAAAHgDQAGgCAFgGQAEgFADgGQACgHAAgIQAAgHgCgHQgDgHgEgEQgFgGgGgCQgHgDgIAAQgHAAgHADg");
	this.shape_7.setTransform(79.7,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBJQgKgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAKgEQAJgEAKAAQAKAAAJAFQAGACADADQAFAEADAEIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAEgFAEQgDADgGACQgJAFgKAAQgKAAgJgEgAgOgGQgGADgFAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAFgFAEgHQACgHAAgIQAAgHgCgHQgEgHgFgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_8.setTransform(61.8,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAtQgJgDgGgHQgGgHgEgIQgEgKAAgKQAAgJAEgKQADgJAGgGQAHgHAIgEQAJgDAJAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQADAGAEAEQAFAFAGADQAFACAGAAQAIAAALgFQAHgEAFgHIAKAIQgFAGgEADQgFAEgEADIgLADIgMABQgIAAgKgEgAAggGQgBgHgCgFQgCgGgDgEQgEgEgGgCQgFgCgIAAQgFAAgGACQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAIAAAAg");
	this.shape_9.setTransform(50.5,12.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA5AwIAAg2QAAgHgBgFQgBgGgDgEQgDgDgEgCQgFgCgHAAQgHAAgFADQgFACgDAFQgDAFgCAHIgBAMIAAAxIgMAAIAAg2IgBgMQgBgGgDgEQgDgDgEgCQgFgCgHAAQgIABgGAEQgFAEgDAHQgEALAAAIIAAAwIgNAAIAAhIIgBgVIAOAAIAAAPIAAAAIAGgHIAIgGQAIgEAIAAQAKAAAHADQAEADADAEQADAEACAFQACgEAEgEIAHgGIAJgDQAEgCAFAAQAJAAAHACQAGADAFAFQAEAEACAHQACAHAAAJIAAA6g");
	this.shape_10.setTransform(36.3,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAvQgGgBgFgEQgEgDgDgFQgDgGAAgGQAAgGACgEQABgFADgDQAFgFAKgEQAMgEAZgBIAGAAIAAgCQAAgGgBgFQgCgEgDgDQgDgDgEgCQgFgBgGAAQgHAAgHADQgHACgGAGIgIgKQAGgGAKgEQAKgDAMAAQAHAAAGACQAHACAEAEQAFAEADAGQACAHAAAIIAAApQAAALACAKIgNAAQgBgHAAgIIgHAIIgHAFQgEACgFABIgJABQgHAAgFgCgAgHADQgIACgEAEQgFAEAAAHQAAAEACAEQABADAEACQAGAEAJAAQAGAAAFgCQAGgDADgEQAEgEABgFQACgGAAgGIAAgHIgHAAQgRAAgIADg");
	this.shape_11.setTransform(22.5,12.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AApBHIhUh4IAAAAIAAB4IgPAAIAAiNIASAAIBUB3IAAAAIAAh3IAPAAIAACNg");
	this.shape_12.setTransform(9.8,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,173.2,24), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,728,90), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,728,90), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,728,90), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,728,90), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,238,90), null);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_315 = function() {
		if(!this.alreadyExecuted){
			this.alreadyExecuted=true;
			this.loopNum=1;
		} else {
			this.loopNum++;
			if(this.loopNum==2){
				this.stop();
			}
		}
	}
	this.frame_385 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(315).call(this.frame_315).wait(70).call(this.frame_385).wait(1));

	// Layer 7
	this.instance = new lib.border();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(386));

	// Layer 10
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(859,45,1,1,0,0,0,119,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300).to({_off:false},0).to({x:609},12).wait(74));

	// Layer 13
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(190.8,147.4,1,1,0,0,0,172.8,14.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(224).to({_off:false},0).to({y:57.4,alpha:1},12).wait(150));

	// Layer 8
	this.instance_3 = new lib.Symbol9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(123.2,114.4,1,1,0,0,0,105.2,11.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(216).to({_off:false},0).to({y:24.4,alpha:1},12).wait(158));

	// Layer 9
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(300).to({_off:false},0).to({alpha:1},12).wait(74));

	// Layer 6
	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(204).to({_off:false},0).to({alpha:1},12).wait(170));

	// Layer 5
	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(208.6,128,1,1,0,0,0,183.8,17);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(122).to({_off:false},0).to({y:48,alpha:1},12).wait(252));

	// Layer 4
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110).to({_off:false},0).to({alpha:1},12).wait(264));

	// Layer 12
	this.instance_8 = new lib.Symbol7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(211.7,147.5,1,1,0,0,0,191.2,14.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({y:57.5,alpha:1},12).wait(354));

	// Layer 3
	this.instance_9 = new lib.Symbol6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(100,114,1,1,0,0,0,81,12);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({y:24,alpha:1},12).wait(362));

	// Layer 2
	this.instance_10 = new lib.Symbol5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},12).wait(374));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"border.png", id:"border"},
		{src:"logo.png", id:"logo"},
		{src:"p1.jpg", id:"p1"},
		{src:"p2.jpg", id:"p2"},
		{src:"p3.jpg", id:"p3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;