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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.border = function() {
	this.initialize(img.border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,96);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgEAFgEQADgFAGAAQAFAAAEAFQAEAEgBAEQABAGgEAEQgEADgFAAQgGAAgDgDg");
	this.shape.setTransform(165.9,48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjA8IAAg/QAAgLgCgHQgCgHgEgGQgDgFgGgCQgHgDgJAAQgJABgJAFQgHAFgEAJQgFAOAAAKIAAA8IgQAAIAAhaIgCgaIARAAIABASIAAAAQAGgJALgGQALgGALAAQALAAAIADQAJADAFAGQAFAGADAJQADAIAAALIAABJg");
	this.shape_1.setTransform(155.3,43.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYA5QgMgFgHgIQgJgJgFgKQgEgMAAgNQAAgMAEgMQAFgLAJgIQAHgJAMgEQALgEANgBQANABAMAEQAMAEAIAJQAIAIAEALQAFAMAAAMQAAANgFAMQgEAKgIAJQgIAIgMAFQgMAEgNABQgNgBgLgEgAgRgqQgIADgGAHQgGAGgDAJQgDAIAAAJQAAAKADAIQADAJAGAGQAGAHAIADQAIADAJAAQAKAAAJgDQAHgDAGgHQAGgGADgJQADgIABgKQgBgJgDgIQgDgJgGgGQgGgHgHgDQgJgEgKABQgJgBgIAEg");
	this.shape_2.setTransform(141.2,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBXIAAh0IAQAAIAAB0gAgIhBQgDgEAAgFQAAgFADgEQAEgDAEAAQAEAAAEADQAEAEAAAFQAAAFgEAEQgEADgEAAQgEAAgEgDg");
	this.shape_3.setTransform(130.8,41.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDBGQgEgDgCgGQgEgHAAgJIAAhJIgYAAIAAgPIAYAAIAAggIAQAAIAAAgIAiAAIAAAPIgiAAIAABFQABALAEAGQADADAJAAQAJAAAIgEIABAPQgJAFgNAAQgOgCgFgFg");
	this.shape_4.setTransform(123.6,42.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA8QgHgDgFgEQgGgEgDgHQgEgGAAgJQAAgHACgFQACgGAEgEQAGgHAMgFQAPgEAfgCIAIAAIAAgCQAAgIgCgFQgBgGgEgEQgEgDgGgDQgFgBgIAAQgJgBgJAEQgJADgIAHIgKgMQAJgIAMgEQANgEAPgBQAJABAHACQAIADAGAEQAGAGADAIQAEAHAAALIAAA0QAAANACAMIgQAAQgCgIAAgLIAAAAQgEAHgEADIgJAHQgFADgGABIgNACQgHAAgIgCgAgKAEQgJADgGAEQgGAGAAAIQAAAGADAEQACAEAEADQAIAEALAAQAIAAAGgCQAHgDAEgFQAFgFACgHQACgIAAgHIAAgJIgIAAQgWABgLADg");
	this.shape_5.setTransform(112.7,44.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiA8IAAg/QAAgLgCgHQgBgHgEgGQgDgFgGgCQgHgDgIAAQgKABgIAFQgIAFgEAJQgFAOAAAKIAAA8IgQAAIAAhaIgCgaIARAAIABASIABAAQAFgJALgGQALgGAKAAQAMAAAIADQAIADAGAGQAGAGACAJQADAIAAALIAABJg");
	this.shape_6.setTransform(99.4,43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBXIAAh0IAQAAIAAB0gAgIhBQgDgEAAgFQAAgFADgEQAEgDAEAAQAEAAAEADQAEAEAAAFQAAAFgEAEQgEADgEAAQgEAAgEgDg");
	this.shape_7.setTransform(89.6,41.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDBGQgEgDgDgGQgDgHAAgJIAAhJIgYAAIAAgPIAYAAIAAggIAQAAIAAAgIAiAAIAAAPIgiAAIAABFQABALAEAGQADADAKAAQAIAAAIgEIABAPQgJAFgNAAQgOgCgFgFg");
	this.shape_8.setTransform(82.5,42.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZA4QgFgDgFgEQgFgEgEgHIAOgJQAFAIAIAFQAIAEAJAAQALAAAHgEQAEgCADgEQACgEAAgFQAAgIgHgEQgEgEgLgDIgPgEQgegHAAgWQAAgJADgHQAEgHAGgEQAGgEAIgDQAHgCAIAAQANAAAKAGIAJAFQAEAFADAFIgPALQgEgIgGgEQgGgFgJABQgJAAgGADQgIAGAAAIQAAAIAGAEQAFAEALADIAQADIAMAFQAFABAEAEQAEAFACAFQACAFAAAHQAAAIgEAIQgEAHgGAEQgGAEgJADQgIACgIAAQgRgCgIgEg");
	this.shape_9.setTransform(73,44.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgJgIQgHgJgFgKQgFgMABgNQgBgMAFgMQAFgLAHgIQAIgJALgEQALgEALgBQANAAALAGQALADAHAJQAHAIAEAKQAEALgBAMIAAAGIhgAAQABAJADAIQAEAHAFAHQAGAFAIADQAIADAHAAQAJABAOgHQAJgFAFgIIAOAKIgLALQgHAEgGADQgGADgHACQgHABgHABQgMgBgLgEgAAngIQAAgIgCgIQgDgGgFgFQgFgFgGgDQgIgDgJABQgGAAgIACQgIADgFAGQgGAFgDAHQgDAHAAAHIBNAAIAAAAg");
	this.shape_10.setTransform(60.7,44.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYBcQgMgFgIgJQgIgIgFgLQgEgMAAgNQAAgNAEgLQAFgKAIgIQAIgJAMgFQALgEANAAQANAAAMAFQAGADAFAEQAGAFAEAFIAAAAIAAhbIARAAIAAC8IgRAAIAAgTIAAAAQgEAFgGAFQgFAEgGADQgMAFgNAAQgNAAgLgEgAgRgHQgIADgHAGQgGAFgDAJQgCAJAAAJQAAAKACAJQADAJAGAFQAHAHAIADQAIAEAJAAQAJAAAKgEQAIgDAGgHQAGgFAEgJQADgJAAgKQAAgJgDgJQgEgIgGgGQgGgGgIgDQgKgEgJAAQgJAAgIAEg");
	this.shape_11.setTransform(45.8,40.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBYQgIgBgHgDQgHgDgGgEIgMgLIAMgMQAIAJALAGIAMAFIAOABQALAAAJgDQAJgEAFgHQAFgFADgJQACgIAAgKIAAgVIAAAAQgEAGgFAEIgLAHQgKAFgOAAQgMAAgLgFQgLgEgIgIQgJgIgEgKQgFgLAAgNQAAgMAEgLQAFgLAIgIQAIgJALgFQALgEANAAQALAAAKAEQAGADAGAEQAGAFAFAGIAAAAIAAgTIARAAIAABzQAAALgDAJQgDALgGAJQgLAMgIADQgHADgIABQgHACgJAAQgJAAgHgCgAgPhGQgJADgGAHQgFAGgEAHQgDAJAAAJQAAAJADAIQAEAIAFAGQAGAGAJAEQAHADAJAAQAIAAAJgDQAIgEAGgFQAGgGADgIQAEgIAAgKQAAgJgEgJQgDgHgFgGQgGgHgIgDQgIgEgKAAQgJAAgHAEg");
	this.shape_12.setTransform(23.6,46.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiA8IAAg/QAAgLgBgHQgCgHgEgGQgDgFgGgCQgHgDgJAAQgJABgJAFQgHAFgEAJQgFAOAAAKIAAA8IgQAAIAAhaIgCgaIARAAIABASIABAAQAFgJALgGQALgGALAAQALAAAIADQAIADAGAGQAGAGACAJQADAIAAALIAABJg");
	this.shape_13.setTransform(9.2,43.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHBXIAAh0IAPAAIAAB0gAgHhBQgEgEAAgFQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_14.setTransform(-0.6,41.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBGQgEgDgDgGQgCgHAAgJIAAhJIgZAAIAAgPIAZAAIAAggIAQAAIAAAgIAhAAIAAAPIghAAIAABFQgBALAFAGQADADAKAAQAIAAAIgEIABAPQgKAFgMAAQgOgCgFgFg");
	this.shape_15.setTransform(-7.7,42.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgIgIQgJgJgEgKQgFgMABgNQgBgMAFgMQAEgLAJgIQAHgJALgEQALgEALgBQAOAAAKAGQALADAHAJQAHAIAEAKQADALAAAMIAAAGIhgAAQABAJADAIQAEAHAFAHQAHAFAHADQAIADAHAAQAJABAOgHQAJgFAGgIIAMAKIgKALQgHAEgGADQgGADgHACQgHABgHABQgMgBgLgEgAAngIQAAgIgCgIQgDgGgFgFQgEgFgIgDQgHgDgJABQgGAAgIACQgIADgFAGQgGAFgDAHQgEAHABAHIBNAAIAAAAg");
	this.shape_16.setTransform(-18.8,44.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgJgIQgHgJgFgKQgEgMgBgNQABgMAEgMQAFgLAHgIQAJgJAKgEQALgEAMgBQANAAAKAGQAKADAIAJQAHAIAEAKQADALAAAMIAAAGIhgAAQABAJAEAIQACAHAHAHQAFAFAIADQAHADAIAAQAJABAOgHQAJgFAFgIIAOAKIgMALQgFAEgHADQgGADgHACQgGABgIABQgMgBgLgEgAAngIQAAgIgCgIQgDgGgEgFQgFgFgHgDQgIgDgIABQgIAAgHACQgHADgGAGQgGAFgDAHQgDAHgBAHIBOAAIAAAAg");
	this.shape_17.setTransform(-32.7,44.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABIA8IAAhDQgBgJgBgHQgCgHgDgFQgDgEgGgCQgFgDgJAAQgJAAgGAEQgHADgDAGQgFAGgCAIQgBAHAAAIIAAA+IgQAAIAAhDQAAgJgBgHQgBgHgEgFQgDgEgGgCQgGgDgIAAQgKABgIAFQgGAFgEAJQgFAOAAAKIAAA8IgRAAIAAhaIgBgaIASAAIAAASIAAAAQADgFAFgEQAEgEAFgDQALgFAKAAQAMAAAJAEQAFADAEAFQADAFADAHQADgFAEgFIAJgIIALgEQAGgCAGAAQALAAAJADQAHADAGAGQAFAGADAJQADAIAAALIAABJg");
	this.shape_18.setTransform(-50.5,43.9);

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

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-63,0,234.6,58), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAtIABgIQACACAEAAQAEAAADgDQADgDACgGIAEgLIgZg+IALAAIATAzIASgzIALAAIgeBNIgDAGIgEAGIgGACIgGABIgIgBg");
	this.shape.setTransform(141.7,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAlQgCgCgBgDQgCgDAAgFIAAgmIgNAAIAAgIIANAAIAAgRIAIAAIAAARIASAAIAAAIIgSAAIAAAjQAAAHACACQACACAFAAQAEAAAFgCIAAAIQgFACgHAAQgHAAgCgDg");
	this.shape_1.setTransform(136.4,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAuIAAg9IAHAAIAAA9gAgDgiQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_2.setTransform(132.6,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAeQgFgCgFgFQgEgEgDgGQgCgGAAgHQAAgGACgGQADgGAEgEQAFgEAFgDQAHgDAGABQAGAAAGACQAGADAEAFIgGAGQgDgEgDgCQgFgCgFAAQgFAAgDACQgFABgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEQADADAFACQADACAFgBQAFABAFgDQADgCADgEIAGAGQgEAFgGADQgGACgGAAQgGAAgHgCg");
	this.shape_3.setTransform(128.1,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBAlQgCgCgCgDQgBgDAAgFIAAgmIgNAAIAAgIIANAAIAAgRIAHAAIAAARIASAAIAAAIIgSAAIAAAjQABAHACACQACACAEAAQAGAAADgCIABAIQgFACgHAAQgHAAgCgDg");
	this.shape_4.setTransform(118.9,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAgIAAghIgBgKQgBgEgCgCIgFgEQgDgCgFAAQgEABgFADQgEACgCAFQgDAHAAAFIAAAgIgIAAIAAgvIgBgOIAJAAIAAAKIABAAQADgFAFgDQAGgEAFAAQAGAAAFACQAEACADADQADADABAEQACAFAAAGIAAAmg");
	this.shape_5.setTransform(112.9,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgFgFQgEgEgCgGQgDgGAAgHQAAgGADgGQACgFAEgFQAFgEAGgDQAGgDAGABQAHgBAGADQAGADAEAEQAFAFACAFQADAGAAAGQAAAHgDAGQgCAGgFAEQgEAFgGACQgGACgHAAQgGAAgGgCgAgJgVQgEABgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADADQADAEAEACQAFACAEgBQAFABAFgCQAEgCADgEIAFgHQABgFAAgFQAAgEgBgFIgFgIQgDgDgEgBQgFgCgFAAQgEAAgFACg");
	this.shape_6.setTransform(105.5,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAgIAAgqIgBgTIAJAAIAAALIAAAAQACgFAFgEIAFgDIAHgBIAGABIgBAJIgFgBQgFAAgEACIgEAFQgDADgBADIgCAHIAAAig");
	this.shape_7.setTransform(100,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAzIAAg1IgMAAIAAgIIAMAAIAAgRQAAgGACgEQABgFADgCQACgDAEgBQAEgCAEAAIAHABIgBAIIgGgBQgEAAgCACIgEADQgCADAAAIIAAAQIAPAAIAAAIIgPAAIAAA1g");
	this.shape_8.setTransform(95.6,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAgIAAgqIgBgTIAJAAIAAALIAAAAQADgFAEgEIAFgDIAHgBIAGABIgBAJIgFgBQgFAAgEACIgFAFQgCADgBADIgCAHIAAAig");
	this.shape_9.setTransform(91.7,8.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAeQgGgDgEgEQgFgEgCgGQgCgGAAgHQAAgGACgGQACgFAFgFQAEgEAFgDQAGgDAGABQAHgBAFADQAGADAEAEQADAEACAGQACAFAAAGIAAAEIgyAAQAAAEACAEQACAEADADQADADAEACQAEACAEgBQAEAAAIgCQAFgDACgFIAHAGIgGAFIgGAFIgHACIgHAAQgGAAgGgCgAAVgDQAAgFgCgDQgBgEgDgDIgGgEQgEgBgEAAIgHABIgHAEIgFAHQgCAEAAAEIApAAIAAAAg");
	this.shape_10.setTransform(85.3,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBAlQgDgCgBgDQgBgDAAgFIAAgmIgNAAIAAgIIANAAIAAgRIAIAAIAAARIARAAIAAAIIgRAAIAAAjQAAAHACACQACACAEAAQAFAAAEgCIABAIQgFACgHAAQgHAAgCgDg");
	this.shape_11.setTransform(79.5,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAgQgEgCgDgCIgFgFQgBgEAAgFIABgGIACgFQAEgEAGgBQAIgDAQgBIAEAAIAAgCIgBgGIgDgGIgFgCIgGgBQgFAAgFACQgEABgEAEIgGgGQAFgFAGgCQAHgDAIABQAEgBAEACIAHAEQAEADABAEQACAEAAAFIAAAbIABAOIgIAAIgBgKIgFAFIgEAEIgGACIgGAAIgIAAgAgFACQgFABgDADQgDADAAAFIABAEIAEAEQAEADAGgBQADABAEgCIAGgEQACgDABgDIABgIIAAgFIgEAAQgMAAgFACg");
	this.shape_12.setTransform(73.7,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAfIgQgyIAAAAIgQAyIgJAAIgUg9IAKAAIAPAxIAQgxIAIAAIARAxIAAAAIAOgxIALAAIgUA9g");
	this.shape_13.setTransform(65.7,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAgIAAgqIgBgTIAJAAIAAALIAAAAQADgFAEgEIAFgDIAHgBIAGABIgBAJIgFgBQgFAAgEACIgFAFQgCADgBADIgCAHIAAAig");
	this.shape_14.setTransform(55.7,8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAeQgEgCgDgDQgDgDgBgFQgCgEAAgGIAAgmIAJAAIAAAiIABAJIACAGQACADAEACIAIAAIACAAQAEAAADgCQAEgDACgFIACgGIABgHIAAgfIAIAAIAAAvIABAOIgJAAIAAgKIgBAAQgDAFgGAEQgFACgGAAQgFAAgFgBg");
	this.shape_15.setTransform(49.3,9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgFgFQgEgEgCgGQgDgGAAgHQAAgGADgGQACgFAEgFQAFgEAGgDQAGgDAGABQAHgBAGADQAGADAEAEQAFAFACAFQADAGAAAGQAAAHgDAGQgCAGgFAEQgEAFgGACQgGACgHAAQgGAAgGgCgAgJgVQgEABgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADADQADAEAEACQAFACAEgBQAFABAFgCQAEgCADgEIAFgHQABgFAAgFQAAgEgBgFIgFgIQgDgDgEgBQgFgCgFAAQgEAAgFACg");
	this.shape_16.setTransform(41.8,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKAeQgGgDgEgEQgFgEgCgGQgCgGAAgHQAAgGACgGQACgFAFgFQAEgEAFgDQAGgDAGABQAHgBAFADQAGADAEAEQADAEACAGQACAFAAAGIAAAEIgyAAQAAAEACAEQACAEADADQADADAEACQAEACAEgBQAEAAAIgCQAFgDACgFIAHAGIgGAFIgGAFIgHACIgHAAQgGAAgGgCgAAVgDQAAgFgCgDQgBgEgDgDIgGgEQgEgBgEAAIgHABIgHAEIgFAHQgCAEAAAEIApAAIAAAAg");
	this.shape_17.setTransform(30.6,8.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOAyIggghIAAAhIgIAAIAAhjIAIAAIAABBIAdgbIANAAIgeAbIAhAig");
	this.shape_18.setTransform(24.2,7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAgQgEgCgDgCIgFgFQgBgEAAgFIABgGIACgFQAEgEAGgBQAIgDAQgBIAEAAIAAgCIgBgGIgDgGIgFgCIgGgBQgFAAgFACQgEABgEAEIgGgGQAFgFAGgCQAHgDAIABQAEgBAEACIAHAEQAEADABAEQACAEAAAFIAAAbIABAOIgIAAIgBgKIgFAFIgEAEIgGACIgGAAIgIAAgAgFACQgFABgDADQgDADAAAFIABAEIAEAEQAEADAGgBQADABAEgCIAGgEQACgDABgDIABgIIAAgFIgEAAQgMAAgFACg");
	this.shape_19.setTransform(17,8.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAlAvIAAhQIgBAAIgiBQIgEAAIghhQIgBAAIAABQIgJAAIAAhdIAOAAIAfBLIAghLIAOAAIAABdg");
	this.shape_20.setTransform(7.9,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,147.1,17.2), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAGgHAJAAQAKAAAHAHQAGAHAAAIQAAAJgGAHQgHAHgKAAQgJAAgGgHg");
	this.shape.setTransform(149,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFB3QgIgHgEgKQgEgLAAgPIAAh7IgqAAIAAgZIAqAAIAAg3IAbAAIAAA3IA4AAIAAAZIg4AAIAABzQAAAUAHAJQAHAGAOAAQAPABAOgIIABAZQgQAIgWgBQgWgCgJgHg");
	this.shape_1.setTransform(136.2,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBfQgTgHgOgOQgOgOgHgTQgIgTAAgWQAAgVAIgTQAHgTAOgOQAOgOATgIQAUgHAVAAQAWAAAUAHQATAIAOAOQAOAOAIATQAHATABAVQgBAWgHATQgIATgOAOQgOAOgTAHQgUAIgWAAQgVAAgUgIgAgehHQgOAGgJAKQgKALgFAOQgFAOAAAQQAAAQAFAPQAFAOAKALQAJAKAOAGQAOAGAQAAQARAAAOgGQAOgGAJgKQAKgLAFgOQAFgPAAgQQAAgQgFgOQgFgOgKgLQgJgKgOgGQgOgGgRAAQgQAAgOAGg");
	this.shape_2.setTransform(116.8,46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhoChIAAk8IAcAAIAAAgIABAAQAHgJAJgIQAJgHAKgEQAUgJAUAAQAXAAAUAHQATAIAOAOQAOAOAHATQAIATAAAWQAAAWgIATQgHASgOAOQgOAOgTAHQgUAIgXAAQgUAAgUgJQgKgFgJgHQgJgHgHgKIgBAAIAACagAgeiBQgOAGgLAKQgKALgGAOQgGAPAAAQQAAAQAGAPQAGAOAKALQALAJAOAGQAPAGAPAAQARAAAOgGQAOgGAKgJQAKgLAFgOQAFgPAAgQQAAgRgFgOQgFgOgKgLQgKgKgOgGQgOgGgRAAQgPAAgPAGg");
	this.shape_3.setTransform(92.2,52.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBfQgLgFgHgHQgKgIgGgKIAYgQQAJAOAMAHQAOAIAQAAQATAAAMgIQAHgEADgGQAFgGAAgJQAAgNgMgIQgIgGgSgEIgZgGQgzgOAAglQAAgPAGgMQAGgKAKgIQAKgHAOgEQANgDAMAAQAXAAAQAIQAIAEAHAHQAHAGAFAKIgYAQQgHgMgKgHQgMgHgOAAQgPAAgLAHQgOAIAAAOQAAANAKAIQAJAGATAEIAcAHQALACAIAFQAJAEAGAHQAGAHAEAJQAEAJAAAKQAAAPgHAMQgGALgLAIQgKAHgOAEQgNADgPAAQgdgCgMgGg");
	this.shape_4.setTransform(69.9,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFB3QgIgHgEgKQgEgLAAgPIAAh7IgqAAIAAgZIAqAAIAAg3IAbAAIAAA3IA4AAIAAAZIg4AAIAABzQAAAUAHAJQAHAGAOAAQAPABAOgIIABAZQgQAIgWgBQgWgCgJgHg");
	this.shape_5.setTransform(42.3,44.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpBfQgTgHgOgOQgOgOgHgTQgJgTABgWQgBgVAJgTQAHgTAOgOQAOgOATgIQAUgHAVAAQAXAAATAHQATAIAOAOQAOAOAIATQAHATAAAVQAAAWgHATQgIATgOAOQgOAOgTAHQgTAIgXAAQgVAAgUgIgAgehHQgNAGgKAKQgKALgFAOQgFAOAAAQQAAAQAFAPQAFAOAKALQAKAKANAGQAOAGAQAAQARAAAOgGQANgGAKgKQAKgLAFgOQAFgPAAgQQAAgQgFgOQgFgOgKgLQgKgKgNgGQgOgGgRAAQgQAAgOAGg");
	this.shape_6.setTransform(22.9,46.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA5CfIAAhtQAAgRgDgMQgDgNgFgIQgHgIgKgEQgKgFgQAAQgRABgOAKQgMAIgHAOQgIAYAAASIAABlIgcAAIAAk9IAcAAIAACZIABAAQAJgQASgLQATgKASAAQATAAAOAFQAOAFAJAKQAJAKAFANQAEAPAAASIAAB9g");
	this.shape_7.setTransform(-1.5,40.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVApIAAg2IgBgZIAMAAIAAAPQACgHAHgFQACgCAEgBQAEgCAFAAIAIABIgCALIgGgBQgHAAgEADQgEACgDAEQgDAEgBAEIgCAJIAAAsg");
	this.shape_8.setTransform(129,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAoQgEgBgFgDQgEgDgBgEQgDgFAAgFQAAgFACgEIADgHQAFgEAHgDQALgEAVAAIAGAAIAAgCQAAgFgCgEQgBgEgDgCQgDgDgDgBQgEgCgFAAQgGAAgGADQgHACgEAFIgHgIQAFgGAIgDQAKgDAKAAQAGAAAFACQAFACAEADQAEAEACAFQACAFABAHIAAAjQgBAJACAJIgLAAIgBgNIAAAAIgGAHIgGAEQgDACgEABIgIABQgGAAgFgCgAgHADQgGABgEAEQgDADAAAGQgBAEACADIAFAEQAFAEAHAAQAFAAAEgCQAFgCAEgEQACgDACgFQACgFAAgFIAAgGIgGAAQgPAAgIADg");
	this.shape_9.setTransform(120.9,15.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQA+QgIgDgGgGQgFgFgDgIQgDgIAAgJQAAgIADgIQADgHAFgFQAGgGAIgDQAIgDAIAAQAJAAAIADIAHAFIAHAHIAAAAIAAg+IALAAIAAB/IgLAAIAAgNIAAAAQgDAEgEADIgHAFQgIADgJAAQgIAAgIgDgAgMgFQgFADgEADQgEAEgCAGQgCAGAAAGQAAAHACAGQACAGAEAEQAEAEAFADQAGACAGAAQAHAAAGgCQAFgDAFgEQAEgEACgGQADgGAAgHQAAgGgDgGQgCgGgEgEQgFgDgFgDQgGgCgHAAQgGAAgGACg");
	this.shape_10.setTransform(111.2,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAoQgGgBgDgDQgFgDgCgEQgCgFAAgFQAAgFACgEIADgHQAEgEAJgDQAKgEAUAAIAHAAIAAgCQgBgFgBgEQgBgEgDgCQgDgDgDgBQgEgCgFAAQgGAAgHADQgFACgFAFIgIgIQAHgGAIgDQAIgDALAAQAFAAAFACQAGACAEADQAEAEACAFQADAFgBAHIAAAjQABAJABAJIgLAAIgBgNIAAAAIgGAHIgGAEQgDACgEABIgIABQgGAAgEgCgAgGADQgHABgDAEQgFADAAAGQABAEABADIAFAEQAEAEAIAAQAFAAAEgCQAFgCADgEQADgDACgFQABgFABgFIAAgGIgHAAQgPAAgGADg");
	this.shape_11.setTransform(101.7,15.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVApIAAg2IAAgZIALAAIAAAPQACgHAHgFQACgCAEgBQAEgCAFAAIAJABIgDALIgGgBQgGAAgFADQgDACgEAEQgDAEgCAEIgBAJIAAAsg");
	this.shape_12.setTransform(95.5,15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAGIAAgLIArAAIAAALg");
	this.shape_13.setTransform(89.1,15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAnQgIgDgFgGQgGgGgDgHQgDgIAAgJQAAgIADgIQADgHAGgGQAFgGAHgDQAIgDAHAAQAJAAAHADQAHADAFAGQAFAFADAIQACAHAAAIIAAAEIhBAAQAAAGADAFQACAFAEAEQAEAEAFACQAFADAFAAQAGAAAKgFQAGgDAEgGIAIAHIgHAIIgIAFIgJADIgKABQgIAAgHgDgAAbgFQAAgGgCgFQgCgEgDgEQgDgDgFgCQgFgCgGAAQgEAAgFADQgFACgEADQgEAEgDAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_14.setTransform(81.5,15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAXBAIAAgsIgBgMQgBgFgDgDQgCgDgEgBQgEgCgHAAQgGAAgGAEQgFADgCAFQgEAKAAAHIAAApIgLAAIAAh/IALAAIAAA9IABAAQADgGAIgEQAHgEAHAAQAIAAAFACQAGACAEAEQADAEACAFQACAFAAAIIAAAyg");
	this.shape_15.setTransform(72,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBAwQgEgDgBgEQgCgEAAgGIAAgyIgRAAIAAgKIARAAIAAgWIAKAAIAAAWIAXAAIAAAKIgXAAIAAAvQAAAIADADQADADAGAAQAGAAAFgDIABAKQgHADgIAAQgKgBgCgDg");
	this.shape_16.setTransform(64.6,14.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAGIAAgLIArAAIAAALg");
	this.shape_17.setTransform(58.9,15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJBBIAAhEIgQAAIAAgKIAQAAIAAgWQAAgIACgGQACgFADgEQADgDAFgCQAEgBAHAAIAJABIgCAKIgIgBQgFAAgDABQgCACgCADQgCAEAAAKIAAAVIATAAIAAAKIgTAAIAABEg");
	this.shape_18.setTransform(54,13.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJBBIAAhEIgRAAIAAgKIARAAIAAgWQAAgIACgGQACgFAEgEQACgDAFgCQAEgBAHAAIAKABIgCAKIgJgBQgEAAgDABQgDACgCADQgCAEgBAKIAAAVIATAAIAAAKIgTAAIAABEg");
	this.shape_19.setTransform(49,13.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAnQgIgDgFgGQgGgGgDgHQgDgIAAgJQAAgIADgIQADgHAGgGQAFgGAIgDQAIgDAIAAQAJAAAIADQAIADAGAGQAFAGADAHQADAIAAAIQAAAJgDAIQgDAHgFAGQgGAGgIADQgIADgJAAQgIAAgIgDgAgLgcQgGACgEAEQgEAFgCAGQgCAFAAAGQAAAHACAFQACAGAEAEQAEAFAGACQAFADAGAAQAHAAAGgDQAFgCAEgFQAEgEACgGQACgFAAgHQAAgGgCgFQgCgGgEgFQgEgEgFgCQgGgDgHAAQgGAAgFADg");
	this.shape_20.setTransform(41.1,15.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAXApIAAgrIgBgMQgBgFgCgEQgDgDgEgCQgEgCgHAAQgFABgGAEQgFADgDAGQgEAKAAAGIAAApIgLAAIAAg9IgBgSIAMAAIAAANIABAAQAEgHAHgEQAIgEAGAAQAIAAAGACQAFACAEAEQADAEADAGQACAGAAAHIAAAyg");
	this.shape_21.setTransform(26.5,15.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAsA8IgNgfIg9AAIgNAfIgOAAIA0h3IALAAIA0B3gAAaARIgag+IgZA+IAzAAg");
	this.shape_22.setTransform(16.1,13.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AMZCtQAIgCAFgEQAEgFADgGQADgGAAgJQgLAAgFgGQgGgGAAgIQAAgHAGgGQAGgGAHAAQAKAAAIAIQAHAJAAAPQAAANgGALQgGALgJAJQgKAIgOACgALgCtQAIgCAFgEQAEgFADgGQACgGAAgJQgLAAgFgGQgFgGAAgIQAAgHAGgGQAGgGAHAAQAKAAAHAIQAHAJAAAPQAAANgFALQgGALgJAJQgKAIgOACgAsEhuQgHgIAAgPQAAgNAFgMQAGgLAKgIQAJgIAOgCIAAAPQgIACgFAEQgEAFgDAFQgCAHAAAJQAKAAAGAHQAFAGAAAGQAAAJgGAFQgGAGgHAAQgKAAgHgJgAs+huQgHgIAAgPQAAgNAGgMQAGgLAJgIQAKgIAOgCIAAAPQgJACgEAEQgEAFgDAFQgDAHAAAJQALAAAFAHQAGAGAAAGQAAAJgGAFQgGAGgIAAQgJAAgIgJg");
	this.shape_23.setTransform(83.8,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-14.9,5,182.5,64), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape.setTransform(251,-84.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBjIBQizIhfAAIAAgSIB1AAIAAASIhPCzg");
	this.shape_1.setTransform(238.9,-92.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBjIAAisIgjAfIgMgPIAxgpIASAAIAADFg");
	this.shape_2.setTransform(222.3,-92.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBkQgIgDgHgFQgHgEgFgHQgFgFgEgJQgFgKgFgWQgCgQAAgTQAAgSACgQQACgMAIgVQAEgIAFgFQAFgIAHgEQAHgEAIgDQAJgCAJAAQAKAAAJACQAJADAHAEQAGAEAFAIQAFAFAEAIQAIAVACAMQACAQAAASQAAATgCAQQgFAWgFAKQgEAJgFAFQgFAHgGAEQgHAFgJADQgJACgKAAQgJAAgJgCgAgNhQQgGABgFAFQgFADgEAHIgGALQgEAMgCAPIgBAaQABAlAGARIAGALQAEAGAFAEQAFAEAGACQAGADAHAAQAIAAAHgDQAGgCAFgEQAGgGAIgPQAGgRABglQAAgOgBgMQgCgPgEgMIgGgLQgEgHgEgDQgFgFgGgBQgHgDgIAAQgHAAgGADg");
	this.shape_3.setTransform(208.2,-92.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+BlIAAgXIBOhQQAMgMAFgIQAEgGACgGQACgGAAgHQAAgIgDgGQgDgHgFgEQgFgFgIgCQgGgCgIAAQgGAAgIACQgFACgGAEQgFAEgDAGQgEAGgCAHIgVgCQACgLAGgJQAFgJAHgGQAIgGAKgEQAKgDALAAQALAAALADQALAEAIAGQAJAHAFAJQAEAKAAANQABAKgEALQgDAJgGAIIgNAPIgOAPIg+A+IBnAAIAAATg");
	this.shape_4.setTransform(192.5,-92.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBDIAAhHQAAgMgDgIQgBgIgEgGQgEgGgHgCQgHgDgKAAQgLAAgKAHQgHAGgFAJQgGAQAAALIAABDIgTAAIAAhlIgBgdIATAAIABAVIAAAAQAHgKAMgHQAMgHAMAAQANAAAKADQAIAEAHAGQAGAHADAJQADAKAAAMIAABSg");
	this.shape_5.setTransform(169.1,-89.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBhIAAiBIARAAIAACBgAgIhJQgFgEABgGQgBgFAFgFQAEgDAEAAQAFAAAEADQAFAFAAAFQAAAGgFAEQgEADgFABQgEgBgEgDg");
	this.shape_6.setTransform(158.2,-92.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBqIAAjTIARAAIAADTg");
	this.shape_7.setTransform(143.8,-93.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXA/QgMgEgJgKQgJgJgFgNQgFgNAAgOQAAgNAFgOQAFgMAJgJQAJgJAMgGQAMgFANAAQAOAAAMAFQAMAFAIAKQAIAIAEAMQAEAMAAAOIAAAHIhsAAQABAKAEAJQAEAIAHAGQAGAHAIAEQAJADAIAAQAKAAAQgHQALgGAFgKIAPAMQgGAIgHAEQgGAGgHADIgPAGQgHABgJAAQgNAAgNgGgAAsgJQAAgKgDgHQgCgIgGgFQgGgGgHgDQgIgDgKAAQgIAAgJAEQgIADgGAGQgHAGgDAHQgEAIAAAIIBXAAIAAAAg");
	this.shape_8.setTransform(132.6,-89.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKBBIg1iBIAXAAIAoBsIABAAIAqhsIAUAAIg1CBg");
	this.shape_9.setTransform(118.2,-89.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbBDQgIgDgGgFQgGgFgEgHQgEgHAAgJQAAgJACgGIAGgKQAIgJANgEQARgGAjgBIAJAAIAAgDQAAgJgCgGQgCgGgEgFQgFgEgGgCQgGgCgJAAQgKAAgKAEQgKAEgJAHIgLgNQAJgJAOgFQAOgFASAAQAJAAAJADQAJADAGAGQAHAFAEAJQADAJAAAMIAAA5QAAAPADAOIgSAAQgCgJAAgMIgBAAQgDAGgFAFQgFAFgGADQgFADgHACIgOABQgJAAgIgCgAgLAFQgLACgGAGQgHAFAAAKQAAAGADAFQADAEAEADQAJAGAMAAQAJAAAIgDQAHgEAFgFQAFgGACgIQADgHAAgKIAAgJIgKAAQgYAAgMAFg");
	this.shape_10.setTransform(103.8,-89.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjBDIAAhZIgBgpIASAAIAAAZIABAAQAEgMAKgIQAEgEAHgCQAHgCAJAAQAHAAAGABIgDATQgEgCgHAAQgKAAgIAEQgGAEgGAHQgFAGgCAHQgDAHAAAHIAABJg");
	this.shape_11.setTransform(93.5,-89.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJBjIAAizIhDAAIAAgSICYAAIAAASIhCAAIAACzg");
	this.shape_12.setTransform(79.7,-92.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbA/QgNgEgJgKQgKgJgEgNQgGgNAAgOQAAgNAGgOQAEgMAKgJQAJgJANgGQANgFAOAAQAPAAANAFQAMAGAKAJQAJAJAGAMQAEAOAAANQAAAOgEANQgGANgJAJQgKAKgMAEQgNAGgPAAQgOAAgNgGgAgUgvQgIAEgHAHQgHAHgDAKQgDAJgBAKQABALADAJQADAKAHAHQAHAHAIAEQAKAEAKAAQALAAAJgEQAKgEAGgHQAHgHADgKQAEgJgBgLQABgKgEgJQgDgKgHgHQgGgHgKgEQgJgEgLAAQgKAAgKAEg");
	this.shape_13.setTransform(55.6,-89.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBPQgFgEgDgHQgDgHAAgKIAAhSIgbAAIAAgRIAbAAIAAglIASAAIAAAlIAlAAIAAARIglAAIAABMQgBAOAGAFQAEAFAKAAQAJAAAJgFIABARQgKAFgPAAQgOgCgGgFg");
	this.shape_14.setTransform(42.7,-91.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AQiDGQAIgCAEgEQAFgEADgGQADgHAAgJQgMAAgEgHQgGgFAAgHQAAgJAGgFQAGgGAHAAQAKAAAHAIQAIAJAAAPQgBANgFAMQgGALgJAIQgKAIgOACgAPpDGQAIgCAEgEQAFgEADgGQACgHAAgJQgLAAgFgHQgFgFAAgHQAAgJAFgFQAHgGAHAAQAKAAAHAIQAHAJAAAPQAAANgGAMQgFALgKAIQgJAIgOACgAwNiHQgHgIAAgPQAAgNAFgMQAGgLAKgIQAJgIAOgCIAAAPQgIACgEAEQgFAFgDAFQgCAHAAAJQALAAAFAHQAFAGAAAGQAAAJgFAFQgHAGgHAAQgKAAgHgJgAxGiHQgIgIAAgPQABgNAFgMQAGgLAJgIQAKgIAOgCIAAAPQgJACgEAEQgEAFgDAFQgDAHAAAJQAMAAAEAHQAGAGAAAGQAAAJgGAFQgGAGgHAAQgKAAgHgJg");
	this.shape_15.setTransform(155.3,-114.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbA/QgHgDgFgFQgGgFgEgHIAPgLQAGAJAJAGQAJAFAKAAQAMAAAIgFQAGgDACgEQADgEAAgGQAAgJgIgFQgFgEgMgDIgRgEQgigJAAgZQAAgJAEgIQAEgIAHgEQAHgFAIgDQAJgCAIAAQAPAAALAFQAGAEAEADQAFAGADAFIgRAMQgEgJgHgFQgHgEgKAAQgJAAgIAEQgJAGAAAKQAAAIAGAFQAGAEANADIASAFQAIABAGADQAFACAFAFQAEAFACAFQACAHABAHQgBAKgEAIQgEAIgIAEQgGAFgKADQgIACgKAAQgTgCgIgEg");
	this.shape_16.setTransform(229.7,-122.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXBAQgMgGgJgJQgJgJgFgMQgFgNAAgPQAAgOAFgNQAFgMAJgJQAJgJAMgGQAMgFANAAQAOAAAMAFQAMAFAIAJQAIAJAEAMQAEAMAAANIAAAIIhsAAQABAKAEAIQAEAJAHAHQAGAGAIAEQAJADAIAAQAKAAAQgHQALgGAFgJIAPALQgGAHgHAFQgGAGgHADIgPAFQgHACgJAAQgNAAgNgFgAAsgJQAAgJgDgIQgCgIgGgGQgGgFgHgDQgIgDgKAAQgIAAgJADQgIAEgGAGQgHAGgDAIQgEAHAAAIIBXAAIAAAAg");
	this.shape_17.setTransform(215.9,-122.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRBAQgMgFgKgKQgJgJgFgMQgEgNAAgPQAAgOAEgNQAFgMAJgKQAKgJAMgFQANgFAPAAQANABAMAFQANAFAKAMIgQAMQgFgIgHgFQgJgFgLAAQgLAAgJADQgIAEgHAHQgGAIgEAJQgDAKAAAKQAAALADAKQAEAJAGAIQAHAHAIAEQAJADALAAQALAAAJgFQAHgEAFgJIAQAMQgKAMgNAFQgMAFgNABQgPAAgNgFg");
	this.shape_18.setTransform(201.9,-122.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbBDQgIgDgGgFQgGgFgEgHQgEgHAAgJQAAgJACgGIAGgLQAIgIANgEQARgGAjgBIAJAAIAAgDQAAgJgCgGQgCgGgEgEQgFgFgGgCQgGgCgJAAQgKAAgKAEQgKADgJAIIgLgNQAJgJAOgFQAOgFASAAQAJAAAJADQAJADAGAFQAHAHAEAIQADAJAAALIAAA6QAAAQADAOIgSAAQgCgKAAgMIgBAAQgDAGgFAGQgFAEgGADQgFADgHABIgOACQgJAAgIgCgAgLAEQgLAEgGAFQgHAFAAAKQAAAGADAFQADAEAEAEQAJAFAMAAQAJAAAIgDQAHgEAFgFQAFgGACgIQADgIAAgIIAAgJIgKAAQgYAAgMADg");
	this.shape_19.setTransform(187.1,-122.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIBqIAAjTIARAAIAADTg");
	this.shape_20.setTransform(176.8,-126.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag8BjIAAjFIA5AAQAOAAAMADQAMADAJAHQAIAHAFAKQAFAJAAANQAAAOgFAKQgFAKgIAHQgJAFgMAEQgMADgOAAIgmAAIAABcgAgpgLIAhAAQAMAAAKgCQAJgDAGgFQAGgEACgHQADgGgBgIQABgGgDgGQgCgHgGgFQgGgFgJgCQgKgDgMAAIghAAg");
	this.shape_21.setTransform(166.3,-125.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDBPQgFgEgDgHQgDgHAAgKIAAhSIgcAAIAAgRIAcAAIAAglIASAAIAAAlIAmAAIAAARIgmAAIAABMQgBAOAGAFQAEAFAKAAQAJAAAKgFIABARQgLAFgPAAQgOgCgGgFg");
	this.shape_22.setTransform(145.1,-124.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbA/QgHgDgGgFQgFgFgFgHIAQgLQAGAJAJAGQAIAFALAAQAMAAAIgFQAFgDADgEQACgEAAgGQABgJgIgFQgGgEgLgDIgRgEQgigJAAgZQAAgJAEgIQAEgIAHgEQAHgFAIgDQAJgCAIAAQAPAAALAFQAGAEAEADQAFAGADAFIgRAMQgEgJgHgFQgHgEgKAAQgKAAgHAEQgJAGAAAKQAAAIAHAFQAFAEANADIASAFQAIABAFADQAGACAFAFQAEAFACAFQADAHAAAHQAAAKgFAIQgEAIgHAEQgHAFgKADQgJACgJAAQgTgCgIgEg");
	this.shape_23.setTransform(134.5,-122.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXBAQgMgGgJgJQgJgJgFgMQgFgNAAgPQAAgOAFgNQAFgMAJgJQAJgJAMgGQAMgFANAAQAOAAAMAFQAMAFAIAJQAIAJAEAMQAEAMAAANIAAAIIhsAAQABAKAEAIQAEAJAHAHQAGAGAIAEQAJADAIAAQAKAAAQgHQALgGAFgJIAPALQgGAHgHAFQgGAGgHADIgPAFQgHACgJAAQgNAAgNgFgAAsgJQAAgJgDgIQgCgIgGgGQgGgFgHgDQgIgDgKAAQgIAAgJADQgIAEgGAGQgHAGgDAIQgEAHAAAIIBXAAIAAAAg");
	this.shape_24.setTransform(120.7,-122.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhBBjIAAjFIA7AAQAMAAALACQALADAJAFQAJAHAFAJQAGAKAAAOQAAAHgDAIQgCAHgFAGQgEAFgHAEQgGAEgIACIAAABQAKAAAIAEQAJADAFAGQAGAGADAJQADAKAAAKQgCAUgKANQgMALgKAFQgHACgJACQgKACgLAAgAgtBQIAmAAQALAAAJgCQAKgCAGgFQAIgEADgHQAFgIAAgJQAAgKgEgHQgDgHgGgFQgGgFgKgDQgJgBgLAAIgpAAgAgtgLIAoAAQAHAAAHgCQAHgCAGgEQAGgFADgGQAEgHAAgJQgFgiglAAIgmAAg");
	this.shape_25.setTransform(104.7,-125.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSBkQgIgCgHgFQgHgFgFgHQgFgGgEgHQgFgKgFgYQgCgQAAgSQAAgSACgQQACgLAIgWQAEgHAFgHQAFgGAHgFQAHgEAIgDQAJgDAJABQAKgBAJADQAJADAHAEQAGAFAFAGQAFAHAEAHQAIAWACALQACAQAAASQAAASgCAQQgFAYgFAKQgEAHgFAGQgFAHgGAFQgHAFgJACQgJADgKAAQgJAAgJgDgAgNhRQgGADgFAEQgFAEgEAFIgGAMQgEAMgCAPIgBAaQABAkAGARIAGANQAEAFAFAEQAFAEAGACQAGADAHAAQAIAAAHgDQAGgCAFgEQAGgGAIgQQAGgRABgkQAAgOgBgMQgCgPgEgMIgGgMQgEgFgEgEQgFgEgGgDQgHgCgIAAQgHAAgGACg");
	this.shape_26.setTransform(79.8,-125.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWBiQgJgCgHgEQgHgFgGgGQgGgHgEgJIAUgIQAFALAKAHQALAHANAAQAIAAAJgDQAHgEAGgGQAHgGADgIQADgIABgJQgBgKgDgJQgDgJgIgGQgGgFgIgEQgJgDgKAAQgKAAgLADQgKADgKAEIABhmIBkAAIAAASIhQAAIgBA8QAMgFAPAAQANAAAMAFQALAFAIAIQAJAJAEALQAFALAAAOQAAAOgGAMQgEAMgJAJQgKAIgLAFQgNAFgNAAQgJAAgJgDg");
	this.shape_27.setTransform(64.1,-125.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(36,-139,229.5,65), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgFgCgGQgDgHAAgHQAAgGADgHQACgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAEAFACAGQACAGAAAGIAAAEIg1AAIACAJQACAEADADIAIAFQAEACAEAAQAFAAAIgDQAFgEADgEIAHAGIgGAGIgHAEIgHADIgIAAQgGAAgHgCgAAWgEQAAgFgBgEIgEgGQgDgDgEgCQgEgBgFAAQgDAAgFACQgEABgDADQgDADgCAEQgCAEAAAEIArAAIAAAAg");
	this.shape.setTransform(112.3,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATA1IAAgkIgBgKIgCgHIgGgEQgEgBgFAAQgFABgFADQgDACgDAEQgCAIgBAHIAAAhIgJAAIAAhpIAJAAIAAAzQADgGAHgDQAGgDAFAAQAHAAAFABQAEACADAEQADADABAEQACAEAAAHIAAApg");
	this.shape_1.setTransform(104.5,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBAoQgDgDgBgDQgBgDAAgGIAAgoIgOAAIAAgIIAOAAIAAgTIAIAAIAAATIATAAIAAAIIgTAAIAAAmQAAAHACACQADADAEAAQAFAAAFgDIAAAJQgFACgHAAQgIgBgCgCg");
	this.shape_2.setTransform(98.4,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA2IAAg4IgOAAIAAgJIAOAAIAAgSQAAgGABgFQACgEADgDQACgDAEgBQAEgCAFAAIAIABIgCAJIgHgBIgGABIgEADQgCAEAAAIIAAARIAQAAIAAAJIgQAAIAAA4g");
	this.shape_3.setTransform(90.5,7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAgQgHgDgEgEQgFgFgCgGQgDgHAAgHQAAgGADgHQACgGAFgFQAEgEAHgDQAHgCAGAAQAHAAAHACQAGADAFAEQAFAFADAGQACAHAAAGQAAAHgCAHQgDAGgFAFQgFAEgGADQgHACgHAAQgGAAgHgCgAgKgXQgEACgDADQgDAEgCAFQgBAEAAAFIABAKQACAFADAEQADADAEACQAFACAFAAQAGAAAEgCQAFgCADgDQADgEACgFIACgKQgBgFgBgEQgCgFgDgEQgDgDgFgCQgEgCgGAAQgFAAgFACg");
	this.shape_4.setTransform(84,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgFgCgGQgDgHAAgHQAAgGADgHQACgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAEAFACAGQACAGAAAGIAAAEIg1AAIACAJQACAEADADIAIAFQAEACAEAAQAFAAAIgDQAFgEADgEIAHAGIgGAGIgHAEIgHADIgIAAQgGAAgHgCgAAWgEQAAgFgBgEIgEgGQgDgDgEgCQgEgBgFAAQgDAAgFACQgEABgDADQgDADgCAEQgCAEAAAEIArAAIAAAAg");
	this.shape_5.setTransform(72.1,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAhIAAgjIgBgJIgCgIIgGgEQgDgCgGAAQgFABgEAEQgEACgDAFQgCAIAAAFIAAAhIgKAAIAAgyIAAgOIAJAAIABALQADgGAGgDQAGgDAGAAQAGAAAFABQAEACADADQADADACAFQABAFAAAGIAAAog");
	this.shape_6.setTransform(64.2,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAgQgGgDgFgEQgFgFgCgGQgDgHAAgHQAAgGADgHQACgGAFgFQAFgEAGgDQAGgCAHAAQAIAAAGACQAHADAEAEQAEAFAEAGQACAHAAAGQAAAHgCAHQgEAGgEAFQgEAEgHADQgGACgIAAQgHAAgGgCgAgJgXQgFACgDADQgEAEgBAFQgCAEAAAFIACAKQABAFAEAEQADADAFACQAEACAFAAQAFAAAFgCQAFgCADgDQAEgEABgFIACgKQgBgFgBgEQgBgFgEgEQgDgDgFgCQgFgCgFAAQgFAAgEACg");
	this.shape_7.setTransform(56.3,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAzQgGgCgFgFQgFgFgCgGQgDgGAAgHQAAgIADgGQACgGAFgEQAFgFAGgCQAHgDAGAAQAHAAAHADIAGAEQADACACAEIAAg0IAKAAIAABpIgKAAIAAgLQgCAEgDACQgCACgEACQgHADgHAAQgGAAgHgDgAgJgEQgFACgDADQgEADgBAFQgCAFAAAGQAAAFACAFQABAEAEAEQADAEAFACQAEACAFAAQAFAAAFgCQAFgCADgEQAFgEABgEQACgFAAgFQAAgGgCgFQgBgEgFgEQgDgDgFgCQgFgCgFAAQgFAAgEACg");
	this.shape_8.setTransform(43.8,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgFgCgGQgDgHAAgHQAAgGADgHQACgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAEAFACAGQACAGAAAGIAAAEIg1AAIACAJQACAEADADIAIAFQAEACAEAAQAFAAAIgDQAFgEADgEIAHAGIgGAGIgHAEIgHADIgIAAQgGAAgHgCgAAWgEQAAgFgBgEIgEgGQgDgDgEgCQgEgBgFAAQgDAAgFACQgEABgDADQgDADgCAEQgCAEAAAEIArAAIAAAAg");
	this.shape_9.setTransform(35.9,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAoAhIAAgkIgBgJQgBgFgCgCIgFgEQgDgCgFAAQgFAAgDADQgEACgCADIgDAIIgBAIIAAAiIgIAAIAAgkIgBgJIgDgHQgCgDgDgBQgDgCgFAAQgGABgEAEQgEACgCAFQgCAIAAAFIAAAhIgKAAIAAgyIAAgOIAKAAIAAAKIAEgFIAFgEQAGgCAGAAQAHAAAEACIAGAEIADAHIAEgGIAFgEIAGgCIAGgBQAHAAAEABQAFACADADQADADACAFQABAFAAAGIAAAog");
	this.shape_10.setTransform(26,9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAhIgHgDIgFgGQgCgEAAgFQAAgEACgDIACgFQAEgEAGgCQAJgDARAAIAFAAIAAgCIgCgIIgDgFIgFgDIgHgBQgFAAgFACQgFACgFAEIgFgHQAFgFAGgCQAIgCAIAAIAJABQAFABADADQADADACAEQACAFAAAGIAAAcIABAPIgJAAIgBgLIgFAGIgFAEIgGACIgGAAIgJgBgAgFACQgGACgDACQgCADAAAFIABAGIADADQAFADAFAAQAFAAADgCQAEgBACgDIAEgHIACgIIAAgFIgFAAQgMAAgGACg");
	this.shape_11.setTransform(16.3,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcAxIg5hTIgBAAIAABTIgKAAIAAhhIAMAAIA7BSIAAAAIAAhSIAKAAIAABhg");
	this.shape_12.setTransform(7.5,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,122.2,18), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,300,250), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,300,250), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,300,250), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,300,250), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,300,96), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_304 = function() {
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
	this.frame_365 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(304).call(this.frame_304).wait(61).call(this.frame_365).wait(1));

	// Layer 10
	this.instance = new lib.border();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(366));

	// Layer 11
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,312,1,1,0,0,0,150,48);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(291).to({_off:false},0).to({y:202},11).wait(64));

	// Layer 9
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(558.7,186.5,1,1,0,0,0,172.8,14.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(218).to({_off:false},0).to({x:269.2,alpha:1},11).wait(62).to({y:73.5},11).wait(64));

	// Layer 8
	this.instance_3 = new lib.Symbol9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(471.7,155.6,1,1,0,0,0,105.2,11.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(211).to({_off:false},0).to({x:182.2,alpha:1},11).wait(69).to({y:42.6},11).wait(64));

	// Layer 7
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(291).to({_off:false},0).to({alpha:1},11).wait(64));

	// Layer 6
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(200).to({_off:false},0).to({alpha:1},11).wait(155));

	// Layer 5
	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(522.8,177,1,1,0,0,0,183.8,17);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(113).to({_off:false},0).to({x:262.8,alpha:1},11).wait(242));

	// Layer 4
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({_off:false},0).to({alpha:1},11).wait(253));

	// Layer 12
	this.instance_8 = new lib.Symbol7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(483.2,316.5,1,1,0,0,0,191.2,14.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({x:191.2,alpha:1},11).wait(337));

	// Layer 2
	this.instance_9 = new lib.Symbol6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(464,149,1,1,0,0,0,81,12);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({_off:false},0).to({x:172,alpha:1},11).wait(344));

	// Layer 1
	this.instance_10 = new lib.Symbol3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},11).wait(355));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
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