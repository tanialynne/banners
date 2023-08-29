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



(lib.border = function() {
	this.initialize(img.border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,113);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AgJAJQgDgEAAgFQAAgEADgFQAFgDAEAAQAGAAAEADQADAFABAEQgBAFgDAEQgEAFgGAAQgEAAgFgFg");
	this.shape.setTransform(129.4,81.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiA8IAAhAQAAgKgCgHQgBgIgDgFQgEgFgGgDQgHgCgIAAQgKAAgIAHQgIAEgEAJQgFAPAAAJIAAA8IgRAAIAAhbIgBgZIARAAIABATIABAAQAFgKALgGQALgGAKAAQAMAAAIADQAJADAFAGQAGAGACAIQADAJAAALIAABJg");
	this.shape_1.setTransform(118.8,76.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYA5QgLgEgJgJQgIgJgEgLQgFgLAAgNQAAgMAFgLQAEgLAIgJQAJgIALgFQAMgFAMABQAOgBALAFQALAFAJAIQAIAJAFALQAEALAAAMQAAANgEALQgFALgIAJQgJAJgLAEQgLAFgOgBQgMABgMgFgAgRgqQgIAEgGAGQgGAGgDAJQgDAIAAAJQAAAKADAJQADAIAGAGQAGAGAIAEQAIADAJABQAKgBAIgDQAIgEAHgGQAFgGADgIQAEgJgBgKQABgJgEgIQgDgJgFgGQgHgGgIgEQgIgEgKAAQgJAAgIAEg");
	this.shape_2.setTransform(104.7,77.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBXIAAh0IAPAAIAAB0gAgHhBQgEgEAAgFQAAgFAEgDQAEgEADAAQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAQgDAAgEgDg");
	this.shape_3.setTransform(94.3,74.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCBHQgFgEgDgGQgCgGAAgKIAAhIIgZAAIAAgQIAZAAIAAghIAQAAIAAAhIAhAAIAAAQIghAAIAABDQgBAMAFAFQADAFAKAAQAIgBAIgEIABAPQgKAEgMAAQgOgBgEgEg");
	this.shape_4.setTransform(87.1,75.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA7QgHgCgFgEQgGgFgDgGQgEgHAAgHQAAgHACgHQACgFAEgEQAGgHAMgEQAPgGAfgBIAIAAIAAgCQAAgIgCgGQgBgFgEgEQgEgDgGgCQgFgCgIgBQgJAAgJAEQgJAEgIAGIgKgLQAJgJAMgEQANgFAPABQAJgBAHADQAIADAGAFQAGAFADAHQAEAJAAAKIAAAzQAAAOACAMIgQAAQgCgIAAgLIAAAAQgEAGgEAEIgJAIQgFACgGABIgNABQgHAAgIgCgAgKAEQgJADgGAFQgGAFAAAIQAAAFADAFQACAEAEACQAIAGALAAQAIAAAGgEQAHgDAEgEQAFgGACgHQACgGAAgIIAAgIIgIAAQgWgBgLAEg");
	this.shape_5.setTransform(76.2,77.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjA8IAAhAQAAgKgDgHQgBgIgDgFQgEgFgGgDQgGgCgKAAQgJAAgIAHQgIAEgEAJQgFAPAAAJIAAA8IgRAAIAAhbIgBgZIARAAIABATIAAAAQAGgKALgGQALgGALAAQALAAAIADQAIADAGAGQAFAGADAIQADAJAAALIAABJg");
	this.shape_6.setTransform(62.9,76.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBXIAAh0IAPAAIAAB0gAgHhBQgEgEAAgFQAAgFAEgDQAEgEADAAQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAQgDAAgEgDg");
	this.shape_7.setTransform(53.1,74.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCBHQgFgEgCgGQgDgGAAgKIAAhIIgZAAIAAgQIAZAAIAAghIAPAAIAAAhIAiAAIAAAQIgiAAIAABDQAAAMAFAFQAEAFAIAAQAJgBAIgEIABAPQgKAEgMAAQgOgBgEgEg");
	this.shape_8.setTransform(46,75.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZA5QgFgDgFgFQgFgEgEgGIAOgKQAFAJAIADQAIAGAJAAQALgBAHgEQAEgDADgDQACgEAAgFQAAgIgHgFQgEgDgLgDIgPgEQgegHAAgWQAAgJADgHQAEgGAGgFQAGgEAIgDQAHgBAIAAQANAAAKAEIAJAGQAEAFADAFIgPAKQgEgHgGgEQgGgFgJAAQgJABgGAEQgIAEAAAJQAAAIAGAEQAFADALADIAQAFIAMADQAFADAEADQAEAFACAFQACAFAAAGQAAAJgEAIQgEAGgGAFQgGAEgJACQgIACgIAAQgRgBgIgDg");
	this.shape_9.setTransform(36.5,77.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUA5QgLgEgIgJQgJgJgEgLQgEgLgBgNQABgMAEgLQAEgLAJgJQAHgIALgFQALgFAMABQANAAAKAEQAKAFAIAIQAHAIAEALQADAKABAMIAAAGIhhAAQABAJADAIQAEAIAFAFQAHAGAHADQAIADAHABQAJAAAOgHQAJgFAGgIIAMAKIgLALQgFAFgHADQgGADgHABQgHABgHAAQgMABgLgFgAAogIQgBgJgCgGQgCgHgFgFQgGgFgHgDQgHgDgIAAQgHABgIADQgIADgFAFQgGAGgDAGQgDAHAAAHIBOAAIAAAAg");
	this.shape_10.setTransform(24.2,77.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZBbQgKgEgJgJQgIgIgFgLQgFgMAAgNQAAgMAFgMQAFgKAIgJQAJgIAKgEQAMgFANAAQANAAALAGQAGACAGAFQAFAEAEAGIABAAIAAhcIAQAAIAAC8IgQAAIAAgUIgBAAQgEAGgFAFQgGAEgGACQgLAGgNAAQgNAAgMgFgAgSgIQgHAEgGAFQgHAHgCAIQgEAIAAAKQAAALAEAIQACAIAHAHQAGAGAHAEQAJADAJAAQAJAAAJgDQAJgEAGgGQAGgHAEgIQADgJAAgKQAAgJgDgJQgEgIgGgHQgGgFgJgEQgJgDgJAAQgJAAgJADg");
	this.shape_11.setTransform(9.3,73.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBZQgIgCgHgDQgHgDgGgEIgMgLIAMgMQAIAKALAFIAMAFIAOABQALAAAJgDQAJgEAFgGQAFgHADgIQACgIAAgKIAAgVIAAAAQgEAGgFAEIgLAHQgKAFgOAAQgMAAgLgEQgLgFgIgIQgJgIgEgKQgFgLAAgMQAAgNAEgLQAFgLAIgIQAIgJALgFQALgEANAAQALAAAKAEQAGADAGAEQAGAFAFAGIAAAAIAAgTIARAAIAABzQAAALgDAJQgDALgGAJQgLALgIAEQgHADgIACQgHABgJAAQgJAAgHgBgAgPhGQgJADgGAHQgFAFgEAJQgDAIAAAJQAAAJADAIQAEAJAFAEQAGAHAJADQAHAEAJAAQAIAAAJgDQAIgEAGgGQAGgEADgIQAEgJAAgKQAAgJgEgIQgDgJgFgFQgGgHgIgDQgIgEgKAAQgJAAgHAEg");
	this.shape_12.setTransform(86.6,48.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiA8IAAg/QABgLgCgHQgCgIgEgEQgDgGgGgCQgHgDgJAAQgJABgJAFQgHAGgEAIQgFAOAAAKIAAA8IgQAAIAAhaIgCgaIARAAIABASIABAAQAFgJALgGQALgGALAAQALAAAIADQAJADAFAGQAGAGACAJQADAIAAALIAABJg");
	this.shape_13.setTransform(72.2,45.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHBXIAAh0IAPAAIAAB0gAgHhCQgEgDAAgFQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_14.setTransform(62.4,43.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBGQgEgDgDgGQgCgHAAgIIAAhKIgZAAIAAgOIAZAAIAAgiIAQAAIAAAiIAhAAIAAAOIghAAIAABEQgBANAFAFQADADAKAAQAIABAIgFIABAQQgKADgMABQgOgCgFgFg");
	this.shape_15.setTransform(55.3,44.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgIgIQgJgIgEgLQgFgMABgNQgBgMAFgMQAEgKAJgJQAHgIALgFQALgFALAAQAOABAKAFQALADAHAJQAHAIAEAKQADALAAAMIAAAHIhgAAQABAIADAIQAEAIAFAGQAHAFAHADQAIAEAHgBQAJAAAOgFQAJgGAGgJIANALIgLALQgHAEgGADQgGAEgHABQgHABgHABQgMgBgLgEgAAngIQAAgIgCgIQgDgGgFgFQgEgFgIgDQgHgCgJgBQgGAAgIADQgIAEgFAFQgGAGgDAGQgEAHABAHIBNAAIAAAAg");
	this.shape_16.setTransform(44.2,46.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgJgIQgHgIgFgLQgEgMgBgNQABgMAEgMQAFgKAHgJQAJgIAKgFQALgFAMAAQANABAKAFQAKADAIAJQAHAIAEAKQADALABAMIAAAHIhhAAQABAIAEAIQACAIAHAGQAFAFAIADQAHAEAIgBQAJAAAOgFQAJgGAFgJIAOALIgMALQgFAEgHADQgGAEgHABQgGABgIABQgMgBgLgEgAAogIQgBgIgCgIQgDgGgEgFQgFgFgHgDQgIgCgIgBQgIAAgHADQgHAEgGAFQgGAGgDAGQgDAHgBAHIBPAAIAAAAg");
	this.shape_17.setTransform(30.3,46.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABIA8IAAhDQgBgKgBgGQgCgHgDgEQgDgFgGgCQgFgDgJAAQgJAAgGAEQgHADgDAGQgFAGgBAIQgCAHAAAIIAAA+IgQAAIAAhDQAAgKgBgGQgBgHgEgEQgDgFgGgCQgGgDgIAAQgKABgIAFQgGAGgEAIQgFAOAAAKIAAA8IgRAAIAAhaIgBgaIASAAIAAASIAAAAQADgFAFgEQAEgEAFgDQALgFAKAAQAMAAAJAEQAFAEAEAEQADAFADAIQADgHAEgEIAJgHIALgGQAGgBAGAAQALAAAJADQAHADAGAGQAFAGADAJQADAIAAALIAABJg");
	this.shape_18.setTransform(12.5,45.9);

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

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,135.1,91), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAwIABgJQADACAEAAQAEAAAEgDQACgCACgHIAFgMIgahBIALAAIATA1IAVg1IALAAIggBRIgDAHIgFAFQgCACgDABIgHACIgJgCg");
	this.shape.setTransform(87.6,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAoQgDgDgBgDQgBgDAAgGIAAgoIgOAAIAAgIIAOAAIAAgTIAIAAIAAATIATAAIAAAIIgTAAIAAAmQAAAHACACQADADAEAAQAFAAAFgDIAAAJQgFACgHAAQgIgBgCgCg");
	this.shape_1.setTransform(81.9,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAxIAAhBIAJAAIAABBgAgEgkQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDACgCQACgCACAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_2.setTransform(77.9,28.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAgQgHgDgEgEQgEgFgDgGQgDgHAAgHQAAgGADgHQADgGAEgFQAEgEAHgDQAHgDAGABQAHAAAHACQAGADAEAGIgHAGQgDgEgEgDQgEgCgGAAQgFAAgEACQgEACgEADQgDAEgBAFQgCAEAAAFQAAAGACAEQABAFADAEQAEADAEACQAEACAFAAQAGAAAEgDQAEgCADgEIAHAGQgEAGgGADQgHACgHAAIgCAAQgFAAgGgCg");
	this.shape_3.setTransform(73.1,30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBAoQgDgDgBgDQgBgDAAgGIAAgoIgOAAIAAgIIAOAAIAAgTIAIAAIAAATIATAAIAAAIIgTAAIAAAmQAAAHACACQADADAEAAQAFAAAFgDIAAAJQgFACgHAAQgIgBgCgCg");
	this.shape_4.setTransform(63.4,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAhIAAgjIgBgKIgCgHIgGgEQgDgCgGABQgFAAgEADQgEADgDAFQgCAIAAAFIAAAhIgKAAIAAgxIAAgPIAJAAIABAKQADgFAGgEQAGgCAGAAQAGgBAFACQAEACADADQADADACAFQABAFAAAGIAAAog");
	this.shape_5.setTransform(57.1,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAgQgGgDgFgEQgEgFgDgGQgDgHAAgHQAAgGADgHQADgGAEgFQAFgEAGgDQAHgCAGAAQAIAAAGACQAHADAEAEQAEAFADAGQADAHAAAGQAAAHgDAHQgDAGgEAFQgEAEgHADQgGACgIAAQgGAAgHgCgAgKgXQgEACgDADQgDAEgCAFQgCAEABAFQgBAFACAFQACAFADAEQADADAEACQAGACAEAAQAGAAAEgCQAFgCADgDQADgEACgFIABgKQAAgFgBgEQgCgFgDgEQgDgDgFgCQgEgCgGAAQgEAAgGACg");
	this.shape_6.setTransform(49.2,30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAhIAAgsIAAgUIAJAAIAAAMIAAAAQACgGAFgEIAFgDIAIAAIAHAAIgCAJIgFAAQgFAAgEABIgGAGIgDAGIgBAHIAAAkg");
	this.shape_7.setTransform(43.3,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHA2IAAg4IgOAAIAAgJIAOAAIAAgSQAAgGACgFQABgEADgDQABgDAFgBQADgCAGAAIAIABIgCAJIgHgBIgGABIgEADQgCAEAAAIIAAARIAPAAIAAAJIgPAAIAAA4g");
	this.shape_8.setTransform(38.7,28.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAhIAAgsIAAgUIAJAAIAAAMIAAAAQACgGAFgEIAFgDIAIAAIAHAAIgCAJIgGAAQgEAAgFABIgFAGIgEAGIgBAHIAAAkg");
	this.shape_9.setTransform(34.6,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgFgCgGQgDgHAAgHQAAgGADgHQACgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAEAFACAGQACAGAAAGIAAAEIg1AAIACAJQACAEADADIAIAFQAEACAEAAQAFAAAIgDQAFgEADgEIAHAGIgGAGIgHAEIgHADIgIAAQgGAAgHgCgAAWgEQAAgFgBgEIgEgGQgDgDgEgCQgEgBgFAAQgDAAgFACQgEABgDADQgDADgCAEQgCAEAAAEIArAAIAAAAg");
	this.shape_10.setTransform(27.8,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBAoQgDgDgBgDQgBgDAAgGIAAgoIgOAAIAAgIIAOAAIAAgTIAIAAIAAATIATAAIAAAIIgTAAIAAAmQAAAHACACQADADAEAAQAFAAAFgDIAAAJQgFACgHAAQgIgBgCgCg");
	this.shape_11.setTransform(21.7,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAhIgIgDIgFgGQgCgEAAgFQAAgEABgDIAEgFQADgEAHgCQAIgDARAAIAEAAIAAgCIgBgIIgCgFIgGgDIgHgBQgFAAgFACQgFACgFAEIgFgHQAEgFAIgCQAGgCAJAAIAJABQAEABADADQAEADACAEQACAFAAAGIAAAcIABAPIgJAAIgBgLIgEAGIgGAEIgGACIgGAAIgIgBgAgFACQgFACgDACQgEADAAAFIABAGIAEADQAFADAGAAQADAAAEgCQAEgBADgDIADgHIABgIIAAgFIgEAAQgMAAgGACg");
	this.shape_12.setTransform(15.6,30.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASAhIgSg1IgQA1IgLAAIgVhBIAMAAIAOA0IABAAIARg0IAJAAIARA0IAQg0IAKAAIgUBBg");
	this.shape_13.setTransform(7.1,30.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAhIAAgsIgBgUIAJAAIAAAMIABAAQACgGAFgEIAFgCIAIgBIAHAAIgCAJIgFAAQgGAAgDACIgGAEIgDAHIgBAIIAAAjg");
	this.shape_14.setTransform(59,9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAgQgEgBgEgEQgCgEgCgEQgCgFABgGIAAgpIAJAAIAAAjIABAKIACAHQACADAEACQAEABAFABIACgBQAFgBACgDQAFgCACgFIACgGIABgIIAAghIAIAAIAAAzIABAOIgJAAIAAgLIgBAAQgDAGgGADQgGAEgGAAQgGAAgFgCg");
	this.shape_15.setTransform(52.2,9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAgQgGgDgFgEQgFgFgCgGQgDgHAAgHQAAgGADgHQACgGAFgFQAFgEAGgDQAGgCAHAAQAIAAAGACQAHADAEAEQAEAFAEAGQACAHAAAGQAAAHgCAHQgEAGgEAFQgEAEgHADQgGACgIAAQgHAAgGgCgAgJgXQgFACgDADQgEAEgBAFQgCAEAAAFIACAKQABAFAEAEQADADAFACQAEACAFAAQAFAAAFgCQAFgCADgDQAEgEABgFIACgKQgBgFgBgEQgBgFgEgEQgDgDgFgCQgFgCgFAAQgFAAgEACg");
	this.shape_16.setTransform(44.2,9.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgFgCgGQgDgHAAgHQAAgGADgHQACgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAEAFACAGQACAGAAAGIAAAEIg1AAIACAJQACAEADADIAIAFQAEACAEAAQAFAAAIgDQAFgEADgEIAHAGIgGAGIgHAEIgHADIgIAAQgGAAgHgCgAAWgEQAAgFgBgEIgEgGQgDgDgEgCQgEgBgFAAQgDAAgFACQgEABgDADQgDADgCAEQgCAEAAAEIArAAIAAAAg");
	this.shape_17.setTransform(32.3,9.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPA1IghgiIAAAiIgKAAIAAhpIAKAAIAABFIAdgdIAOAAIgfAeIAjAjg");
	this.shape_18.setTransform(25.6,7.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAhIgIgDIgFgGQgCgEAAgFQAAgEABgDIAEgFQADgEAHgCQAIgDARAAIAEAAIAAgCIgBgIIgCgFIgGgDIgHgBQgFAAgFACQgFACgFAEIgFgHQAEgFAIgCQAHgCAIAAIAJABQAFABADADQADADACAEQACAFAAAGIAAAcIABAPIgJAAIgBgLIgEAGIgGAEIgGACIgGAAIgIgBgAgFACQgFACgDACQgDADgBAFIACAGIADADQAFADAFAAQAEAAAEgCQAEgBADgDIADgHIABgIIAAgFIgEAAQgMAAgGACg");
	this.shape_19.setTransform(17.9,9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAnAxIAAhUIgkBUIgFAAIgjhUIgBAAIAABUIgKAAIAAhhIAQAAIAgBPIAihPIAPAAIAABhg");
	this.shape_20.setTransform(8.2,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,93.1,39), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgDgEAAgGQAAgEADgEQAFgFAEAAQAGAAAEAFQADAEABAEQgBAGgDAEQgEADgGAAQgEAAgFgDg");
	this.shape.setTransform(93.1,131.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBZIBIigIhWAAIAAgRIBpAAIAAARIhHCgg");
	this.shape_1.setTransform(82.3,124.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMBZIAAiaIgeAcIgLgOIAsglIAPAAIAACxg");
	this.shape_2.setTransform(67.5,124.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBZQgIgCgGgEIgLgKIgHgMQgFgKgEgUQgCgOAAgRQAAgQACgOQACgKAHgUIAHgMIALgKQAGgEAIgCQAIgCAIAAQAJAAAIACQAHACAHAEIALAKIAHAMQAHAUACAKQACAOAAAQQAAARgCAOQgEAUgFAKIgHAMIgLAKQgHAEgHACQgIACgJAAQgIAAgIgCgAgMhIQgFACgFADQgEAFgDAEIgGALQgDALgCANIgBAXQABAhAFAPIAGAKQADAGAEADQAFAEAFACQAGACAGAAQAHAAAGgCQAFgCAFgEQAFgEAIgPQAFgPABghIgBgXQgCgNgDgLIgGgLIgHgJQgFgDgFgCQgGgCgHAAQgGAAgGACg");
	this.shape_3.setTransform(54.9,124.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BaIAAgVIBFhGQALgMAFgGIAFgLQACgFAAgHQAAgHgDgGQgDgFgEgEQgFgEgGgDQgGgCgHAAQgGAAgGACQgGACgEAEQgFAEgDAFQgDAFgCAGIgTgBQACgLAFgHQAEgIAHgGQAHgFAJgDQAJgDAJAAQALAAAKADQAJADAIAFQAHAHAEAIQAFAJAAALQAAAJgDAJQgDAJgFAHQgFAIgHAGIgNANIg3A3IBcAAIAAARg");
	this.shape_4.setTransform(40.8,123.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiA8IAAhAQAAgKgCgHQgBgIgDgEQgEgGgGgCQgGgDgJAAQgKABgIAFQgIAGgEAIQgFAOAAAKIAAA8IgRAAIAAhbIgBgZIARAAIABASIAAAAQAGgJALgGQALgGAKAAQAMAAAIADQAJADAFAGQAFAGADAJQADAIAAALIAABJg");
	this.shape_5.setTransform(19.9,126.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBXIAAh0IAQAAIAAB0gAgIhCQgDgDAAgFQAAgFADgEQAEgDAEAAQAEAAAEADQAEAEAAAFQAAAFgEADQgEAEgEAAQgEAAgEgEg");
	this.shape_6.setTransform(10.2,124.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBfIAAi8IAPAAIAAC8g");
	this.shape_7.setTransform(104.6,86.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUA5QgLgEgIgJQgJgIgEgLQgFgMABgNQgBgMAFgMQAEgKAJgJQAHgIALgFQALgFALAAQAOABAKAFQALADAHAJQAHAIAEAKQAEALAAAMIAAAHIhhAAQABAIADAIQADAIAGAFQAHAGAHADQAHAEAIgBQAJAAAOgFQAJgGAGgJIAMALIgKALQgHAEgGADQgGAEgHABQgGABgIAAQgMAAgLgEgAAogIQAAgIgDgIQgCgGgGgFQgEgFgIgDQgHgCgJgBQgGAAgIADQgHAEgGAFQgGAGgDAGQgEAHABAHIBOAAIAAAAg");
	this.shape_8.setTransform(94.7,90.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIA7Igwh0IAUAAIAkBhIABAAIAlhhIATAAIgwB0g");
	this.shape_9.setTransform(81.7,90.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYA8QgHgDgFgEQgGgFgDgGQgEgGAAgJQAAgGACgGQACgGAEgEQAGgHAMgFQAPgEAfgBIAIAAIAAgDQAAgIgCgFQgBgGgEgEQgEgEgGgCQgFgCgIAAQgJABgJADQgJAEgIAGIgKgMQAJgIAMgEQANgFAPAAQAJAAAHADQAIACAGAFQAGAGADAIQAEAHAAALIAAA0QAAANACANIgQAAQgCgJAAgKIAAAAQgEAFgEAFIgJAGQgFADgGABIgNABQgHAAgIgBgAgKAEQgJACgGAFQgGAGAAAIQAAAFADAFQACAEAEADQAIAEALAAQAIAAAGgDQAHgDAEgFQAFgFACgGQACgIAAgIIAAgIIgIAAQgWABgLADg");
	this.shape_10.setTransform(68.9,90.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfA8IAAhQIgBgkIAQAAIAAAWIABAAQAEgLAIgGQAEgEAGgCQAGgCAIAAQAHAAAFACIgDAQIgKgBQgJgBgHAEQgFAEgFAFQgFAFgCAHQgBAHgBAGIAABBg");
	this.shape_11.setTransform(59.6,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIBZIAAigIg7AAIAAgRICHAAIAAARIg7AAIAACgg");
	this.shape_12.setTransform(47.2,87.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYA5QgLgEgJgJQgIgIgEgLQgFgMAAgNQAAgMAFgMQAEgKAIgJQAJgIALgFQAMgFAMAAQANAAAMAFQALAFAJAIQAIAJAEAKQAFAMAAAMQAAANgFAMQgEALgIAIQgJAJgLAEQgMAEgNAAQgMAAgMgEgAgRgqQgJAEgFAGQgGAGgDAIQgDAJAAAJQAAAKADAIQADAJAGAGQAFAHAJADQAIAEAJgBQAKABAIgEQAIgDAHgHQAFgGADgJQADgIAAgKQAAgJgDgJQgDgIgFgGQgHgGgIgEQgIgDgKgBQgJABgIADg");
	this.shape_13.setTransform(25.7,90.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBGQgEgDgCgGQgEgHAAgIIAAhKIgYAAIAAgOIAYAAIAAgiIAQAAIAAAiIAiAAIAAAOIgiAAIAABEQABANAEAFQADADAJAAQAJABAIgFIABAQQgJADgNAAQgOgBgFgFg");
	this.shape_14.setTransform(14.2,88.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZA4QgFgDgFgEQgFgEgEgHIAOgJQAFAIAIAEQAIAGAJAAQALgBAHgEQAEgCADgEQACgEAAgFQAAgIgHgFQgEgDgLgDIgPgEQgegHAAgWQAAgJADgHQAEgGAGgFQAGgEAIgDQAHgCAIAAQANAAAKAGIAJAFQAEAFADAFIgPAKQgEgHgGgEQgGgFgJABQgJAAgGADQgIAFAAAJQAAAIAGAEQAFADALAEIAQADIAMAFQAFACAEADQAEAFACAFQACAFAAAHQAAAIgEAIQgEAGgGAFQgGAFgJABQgIADgIAAQgRgCgIgEg");
	this.shape_15.setTransform(75.8,52.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgIgIQgJgJgEgKQgFgMABgNQgBgMAFgMQAEgLAJgIQAHgIALgFQALgEALgBQAOAAAKAGQALAEAHAIQAHAIAEALQADAKAAAMIAAAGIhgAAQABAJADAIQAEAHAFAHQAHAFAHADQAIADAHABQAJAAAOgHQAJgFAGgIIAMAKIgKALQgHAFgGACQgGADgHACQgHACgHAAQgMAAgLgFgAAngIQAAgIgCgIQgDgGgFgFQgEgFgHgDQgIgCgJAAQgGAAgIADQgIACgFAGQgGAFgDAHQgEAHABAHIBNAAIAAAAg");
	this.shape_16.setTransform(63.5,52.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPA5QgLgFgJgIQgIgIgEgLQgEgMAAgNQAAgMAEgMQAEgLAIgIQAJgIALgFQAMgEANgBQAMAAALAGQALAFAIAKIgNAKQgEgHgIgEQgIgFgJABQgKgBgIAEQgIADgGAGQgFAHgDAJQgDAIAAAJQAAAKADAJQADAJAFAGQAGAGAIADQAIADAKABQAJgBAIgEQAIgFAEgGIANAKQgIAKgLAFQgLAFgMABQgNAAgMgFg");
	this.shape_17.setTransform(50.9,52.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYA7QgHgCgFgEQgGgFgDgGQgEgHAAgHQAAgIACgGQACgFAEgEQAGgHAMgFQAPgEAfgCIAIAAIAAgCQAAgIgCgFQgBgGgEgEQgEgDgGgCQgFgCgIAAQgJgBgJAEQgJADgIAHIgKgLQAJgJAMgEQANgEAPgBQAJABAHACQAIADAGAEQAGAGADAIQAEAHAAALIAAAzQAAAOACAMIgQAAQgCgIAAgLIAAAAQgEAHgEADIgJAHQgFADgGABIgNACQgHAAgIgDgAgKAEQgJADgGAEQgGAGAAAIQAAAGADAEQACAEAEACQAIAGALAAQAIgBAGgCQAHgEAEgEQAFgGACgHQACgHAAgHIAAgIIgIAAQgWAAgLADg");
	this.shape_18.setTransform(37.7,52.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHBeIAAi8IAPAAIAAC8g");
	this.shape_19.setTransform(28.5,48.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BYIAAivIAzAAQANAAAKADQAMACAHAGQAIAGAEAJQAEAJAAAMQAAAMgEAIQgEAJgIAHQgHAEgMAEQgKACgNAAIghAAIAABSgAgkgKIAdAAQALAAAIgCQAJgCAFgFQAFgEACgFQADgGAAgGQAAgHgDgFQgCgGgFgEQgFgEgJgCQgIgDgLAAIgdAAg");
	this.shape_20.setTransform(19.1,49.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCBHQgFgEgCgGQgDgGgBgKIAAhIIgYAAIAAgQIAYAAIAAggIAQAAIAAAgIAiAAIAAAQIgiAAIAABEQAAALAFAFQAEAFAIAAQAJgBAIgEIABAPQgKAEgMABQgOgCgEgEg");
	this.shape_21.setTransform(90.4,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZA4QgFgCgFgFQgFgEgEgHIAOgJQAFAJAIADQAIAGAJAAQALgBAHgEQAEgDADgDQACgEAAgFQAAgIgHgFQgEgDgLgDIgPgEQgegHAAgWQAAgJADgHQAEgGAGgFQAGgEAIgDQAHgBAIAAQANAAAKAEIAJAGQAEAFADAFIgPAKQgEgHgGgEQgGgFgJABQgJAAgGAEQgIAEAAAJQAAAIAGAEQAFAEALADIAQADIAMAEQAFADAEADQAEAFACAFQACAFAAAHQAAAIgEAIQgEAGgGAFQgGAEgJACQgIACgIABQgRgCgIgEg");
	this.shape_22.setTransform(81,15.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgIgIQgJgJgEgLQgEgLAAgNQAAgMAEgMQAEgLAJgIQAIgIAKgFQALgEALAAQANAAALAEQAKAFAIAIQAHAIAEALQAEAKAAAMIAAAGIhhAAQABAJADAIQAEAHAFAHQAHAFAHADQAHADAIABQAJAAAOgHQAJgFAGgIIAMAKIgKALQgGAFgHADQgGADgHABQgGACgIAAQgMAAgLgFgAAogIQAAgIgDgIQgCgGgFgFQgGgFgHgDQgHgCgJAAQgGAAgIADQgHADgGAFQgGAGgDAGQgDAHAAAHIBOAAIAAAAg");
	this.shape_23.setTransform(68.7,15.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag6BYIAAivIA1AAQAKAAAKACQAKADAIAEQAIAGAFAIQAFAJAAAMQAAAHgDAHQgCAGgEAFQgEAFgGADQgFAEgIACQAJABAIADQAHADAGAFQAFAGADAIQACAIAAAKQgCARgJALQgKAKgJAFQgHACgIACQgJACgJgBgAgoBIIAiAAQAJAAAIgCQAJgCAGgEQAHgEADgHQAEgGAAgIQAAgJgDgHQgDgGgGgEQgFgFgIgCQgJgCgKAAIgkAAgAgogKIAkAAQAGAAAGgBQAHgDAEgDQAGgEADgGQADgGAAgIQgEgeghAAIgiAAg");
	this.shape_24.setTransform(54.3,12.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQBZQgHgCgHgEIgLgKIgHgNQgFgJgEgUQgCgOAAgRQAAgQACgOQACgKAHgTIAHgNIALgKQAHgEAHgCQAHgCAJgBQAJABAIACQAIACAGAEIAKAKIAIANQAHATACAKQACAOAAAQQAAARgCAOQgFAUgEAJIgIANIgKAKQgGAEgIACQgIADgJAAQgJAAgHgDgAgMhIQgGACgEAEQgEAEgDAFIgFAKQgEAKgCAPIgBAWQABAgAGAQIAFALQADAFAEAEQAEADAGACQAGACAGAAQAHAAAGgCQAFgCAFgDQAFgFAIgPQAFgQABggIgBgWQgBgPgEgKIgGgKIgHgJQgFgEgFgCQgGgCgHAAQgGAAgGACg");
	this.shape_25.setTransform(32.1,12.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTBYQgIgCgHgEQgGgEgFgGQgGgGgDgHIASgIQAFAKAJAGQAJAGALAAQAIAAAHgCQAHgDAGgGQAFgGADgGQADgIAAgIQAAgJgDgIQgDgIgGgGQgGgEgIgDQgIgDgIAAQgKAAgJACQgJADgJAEIAChbIBZAAIAAARIhIAAIgBA1QALgFANAAQALAAALAFQAKAEAIAHQAHAIAEAJQAEALAAAMQAAANgEALQgFAKgIAIQgIAHgLAFQgLAEgLAAQgJAAgHgCg");
	this.shape_26.setTransform(17.9,12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAOAjQgIgJABgPQAAgMAFgMQAFgKAKgJQAKgIAOgCIAAAPQgIACgFAEQgEAEgDAHQgDAGAAAIQALAAAFAGQAFAGABAHQAAAJgGAFQgGAGgHAAQgLAAgGgIgAgrAjQgHgJAAgPQAAgMAFgMQAHgKAJgJQAJgIAOgCIAAAPQgIACgFAEQgEAEgDAHQgCAGAAAIQALAAAFAGQAGAGgBAHQAAAJgFAFQgGAGgIAAQgKAAgHgIg");
	this.shape_27.setTransform(5.1,8.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAHAcQAHgCAFgEQAEgFADgFQADgHAAgIQgLAAgFgHQgFgGgBgGQAAgJAHgFQAFgGAHAAQALAAAHAJQAHAIAAAPQAAAMgGAMQgFALgKAIQgKAIgNACgAgyAcQAJgCAEgEQAFgFACgFQACgHABgIQgLAAgGgHQgEgGAAgGQgBgJAGgFQAGgGAIAAQAKAAAHAJQAGAIAAAPQABAMgGAMQgGALgJAIQgKAIgOACg");
	this.shape_28.setTransform(101.9,121.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,109.8,141), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,118.4,18), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAkIAAgvIgBgWIAKAAIAAANIAAAAQACgGAGgEIAFgEIAJgBIAHABIgCAJIgGAAQgFAAgEACQgDACgDADIgEAIIgBAIIAAAmg");
	this.shape.setTransform(130.4,308.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAjIgIgDQgEgDgCgEQgCgEAAgFQAAgEABgEIAEgFQADgEAIgCQAIgEATAAIAFAAIAAgCQAAgFgCgDIgCgFIgHgEIgHgBQgFAAgGACQgFACgFAEIgGgHQAFgFAIgDQAHgCAJAAQAGAAAEABQAFACADADQADADACAFQACAEABAHIAAAeQAAAJABAHIgJAAIgBgLIgBAAIgEAFIgGAFQgDACgEAAIgGABQgGAAgDgCgAgFACIgJAFQgEADAAAFIABAGIAFAEQAEADAGAAQAFAAAEgCQAEgCADgDIADgHQACgEAAgFIAAgFIgFAAQgOAAgFACg");
	this.shape_1.setTransform(123.2,308.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOA3QgHgDgFgFQgFgFgDgHQgCgGAAgIQAAgIACgHQADgGAFgFQAFgFAHgCQAHgDAHAAQAHAAAIADIAGAEQAEADACADIAAAAIAAg3IAKAAIAABxIgKAAIAAgMIAAAAIgGAGIgGAEQgIAEgHAAQgHAAgHgDgAgKgEQgFACgDADQgEAEgCAFQgBAFgBAGQABAGABAFQACAFAEAEQADADAFACQAFADAFAAQAGAAAFgDQAFgCAEgDIAGgJQACgGAAgFQAAgGgCgFIgGgJQgEgDgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_2.setTransform(114.7,306.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAjIgIgDQgDgDgCgEQgCgEAAgFQAAgEABgEIAEgFQADgEAHgCQAJgEATAAIAFAAIAAgCQAAgFgBgDIgEgFIgFgEIgIgBQgGAAgFACQgFACgFAEIgFgHQAEgFAHgDQAIgCAJAAQAFAAAFABQAEACAEADQADADADAFQACAEAAAHIAAAeQgBAJACAHIgJAAIgBgLIgBAAIgFAFIgFAFQgDACgEAAIgGABQgFAAgFgCgAgFACIgJAFQgEADAAAFIACAGIADAEQAFADAGAAQAFAAAEgCQAEgCACgDIAFgHQABgEAAgFIAAgFIgGAAQgNAAgFACg");
	this.shape_3.setTransform(106.3,308.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAkIAAgvIgBgWIAKAAIAAANIAAAAQACgGAGgEIAFgEIAJgBIAHABIgCAJIgGAAQgFAAgEACQgDACgDADIgEAIIgBAIIAAAmg");
	this.shape_4.setTransform(100.8,308.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAFIAAgJIAlAAIAAAJg");
	this.shape_5.setTransform(95.2,308.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAiQgGgDgFgFQgFgFgCgGQgDgIAAgHQAAgHADgHQACgHAFgFQAFgEAGgDQAGgDAHAAQAIAAAGADQAGADAFAEQAEAFACAGQACAHAAAHIAAADIg5AAQAAAGADAFQACAEAEADQADAEAFACQAEACAEAAQAGAAAHgEQAHgDACgFIAIAGIgHAGIgHAGIgHACIgJABQgGAAgIgDgAAYgEQAAgGgBgDQgCgFgDgDQgDgDgEgCQgFgBgFAAQgEAAgEACQgEACgEADQgDADgCAEQgCAEAAAFIAuAAIAAAAg");
	this.shape_6.setTransform(88.6,308.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUA5IAAgnIgBgKQgBgFgCgDQgCgCgEgCQgDgBgGAAQgFAAgGAEQgEACgCAFQgEAIAAAHIAAAkIgJAAIAAhxIAJAAIAAA3IABAAQADgGAHgEQAGgDAGAAQAHAAAFACQAFABADAEQADADADAFQABAFAAAGIAAAtg");
	this.shape_7.setTransform(80.2,306.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBAqQgDgCgBgEQgCgEAAgFIAAgrIgPAAIAAgJIAPAAIAAgUIAJAAIAAAUIAUAAIAAAJIgUAAIAAAoQAAAIADACQACADAFAAQAGAAAEgDIABAJQgGADgHAAQgJgBgCgDg");
	this.shape_8.setTransform(73.6,308);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAFIAAgJIAlAAIAAAJg");
	this.shape_9.setTransform(68.7,308.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHA6IAAg8IgPAAIAAgJIAPAAIAAgUQAAgGABgGQACgFADgDQACgDAEgBIAKgBIAIABIgBAJIgIgBIgHABIgDADQgCAFAAAJIAAASIAQAAIAAAJIgQAAIAAA8g");
	this.shape_10.setTransform(64.4,306.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHA6IAAg8IgQAAIAAgJIAQAAIAAgUQAAgGABgGQABgFAEgDQACgDAEgBIAKgBIAIABIgCAJIgHgBIgHABIgEADQgBAFAAAJIAAASIAQAAIAAAJIgQAAIAAA8g");
	this.shape_11.setTransform(60,306.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgFQgFgFgCgGQgDgHAAgIQAAgHADgHQACgHAFgFQAFgEAHgDQAHgDAHAAQAIAAAHADQAHADAFAEQAFAFADAHQACAHAAAHQAAAIgCAHQgDAGgFAFQgFAFgHADQgHADgIAAQgHAAgHgDgAgKgZQgFACgDAEQgEAEgBAFQgCAFAAAFQAAAGACAFQABAFAEAEQADADAFACQAFADAFAAQAGAAAFgDQAFgCAEgDIAFgJQACgFAAgGQAAgFgCgFIgFgJQgEgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_12.setTransform(53,308.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVAkIAAgmIgBgKQgBgFgDgDQgCgDgDgCQgEgBgFAAQgGABgFADQgFADgCAFQgDAJAAAFIAAAkIgKAAIAAg2IgBgPIAKAAIABALIAAAAQAEgFAHgFQAGgDAGAAQAGAAAFACQAGACADADQADAEACAFQABAFABAGIAAAsg");
	this.shape_13.setTransform(40.2,308.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnA1IgMgcIg1AAIgMAcIgNAAIAuhpIAKAAIAvBpgAAXAPIgXg2IgWA2IAtAAg");
	this.shape_14.setTransform(31,307.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANAjQgGgJAAgPQgBgMAGgMQAFgKAKgJQAKgIAOgCIAAAPQgJACgEAEQgFAEgCAHQgCAGgBAIQALAAAGAHQAEAFAAAHQABAJgGAFQgGAGgIAAQgJAAgIgIgAgrAjQgHgJAAgPQAAgMAGgMQAFgKAKgJQAKgIANgCIAAAPQgIACgEAEQgFAEgCAHQgDAGAAAIQALAAAFAHQAFAFAAAHQABAJgHAFQgFAGgIAAQgJAAgIgIg");
	this.shape_15.setTransform(18,299.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAGAcQAJgCAEgEQAFgFADgFQACgHAAgIQgLAAgFgHQgGgGAAgHQABgIAFgFQAGgGAIAAQAJAAAIAJQAHAIAAAPQAAAMgFALQgHALgJAJQgJAIgPACgAgyAcQAJgCAEgEQAEgFADgFQACgHAAgIQgKAAgFgHQgGgGAAgHQABgIAFgFQAGgGAHAAQALAAAGAJQAIAIAAAPQgBAMgFALQgGALgJAJQgKAIgOACg");
	this.shape_16.setTransform(132.4,387.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRARQgHgHAAgKQAAgJAHgHQAHgIAKAAQALAAAHAIQAHAHAAAJQAAAKgHAHQgHAIgLAAQgKAAgHgIg");
	this.shape_17.setTransform(121.6,397.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFCCQgJgHgEgLQgFgMAAgRIAAiHIguAAIAAgbIAuAAIAAg9IAdAAIAAA9IA+AAIAAAbIg+AAIAAB/QAAAWAJAJQAHAHAPAAQARAAAPgIIABAcQgRAIgYAAQgZgDgJgIg");
	this.shape_18.setTransform(107.6,386.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtBpQgVgIgPgQQgPgPgJgVQgIgVAAgYQAAgXAIgVQAJgUAPgQQAPgPAVgJQAVgIAYAAQAZAAAVAIQAVAJAPAPQAQAQAIAUQAIAVAAAXQAAAYgIAVQgIAVgQAPQgPAQgVAIQgVAIgZAAQgYAAgVgIgAghhOQgOAGgLAMQgLAMgFAPQgGAQAAARQAAASAGAQQAFAPALAMQALAMAOAGQAQAHARAAQASAAAQgHQAPgGAKgMQALgMAGgPQAFgQAAgSQAAgRgFgQQgGgPgLgMQgKgMgPgGQgQgGgSAAQgRAAgQAGg");
	this.shape_19.setTransform(86.3,389.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhyCxIAAlbIAfAAIAAAkIABAAQAHgLAKgIQAKgHALgGQAWgKAWAAQAZAAAWAJQAUAIAQAQQAPAPAJAVQAIAVAAAYQAAAYgIAVQgJATgPAQQgQAPgUAIQgWAJgZAAQgWAAgWgKQgLgFgKgIQgKgIgHgLIgBAAIAACpgAghiNQgQAGgLAMQgMALgGAQQgHAQAAASQAAARAHAQQAGAQAMAMQALAKAQAHQAQAGARAAQATAAAPgGQAPgHALgKQALgMAFgQQAGgPAAgSQAAgTgGgPQgFgQgLgLQgLgMgPgGQgPgHgTAAQgRAAgQAHg");
	this.shape_20.setTransform(59.4,395.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguBoQgKgFgJgIQgKgIgHgMIAagSQAKAQAOAIQAOAJASAAQAUAAAOgJQAHgFAEgGQAFgHAAgJQAAgPgMgJQgJgGgUgFIgdgHQg2gOAAgpQAAgQAGgNQAHgMALgIQALgIAOgEQAOgEAPAAQAYAAASAJQAKAEAHAIQAIAHAFALIgbASQgIgOgLgIQgMgHgPAAQgSAAgMAHQgOAJAAAQQgBAOALAIQAJAHAWAFIAfAHQALADAJAFQAKAEAHAIQAHAIAEAJQAEAKAAALQAAARgHANQgGAMgNAJQgMAIgPAEQgOADgQAAQgfgDgPgGg");
	this.shape_21.setTransform(34.9,389.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFCCQgJgHgEgLQgFgMAAgRIAAiHIguAAIAAgbIAuAAIAAg9IAdAAIAAA9IA+AAIAAAbIg+AAIAAB/QAAAWAJAJQAHAHAPAAQARAAAPgIIABAcQgRAIgYAAQgZgDgJgIg");
	this.shape_22.setTransform(81.5,343.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgtBpQgVgIgPgQQgPgPgJgVQgIgVAAgYQAAgXAIgVQAJgUAPgQQAPgPAVgJQAVgIAYAAQAZAAAVAIQAVAJAPAPQAQAQAIAUQAIAVAAAXQAAAYgIAVQgIAVgQAPQgPAQgVAIQgVAIgZAAQgYAAgVgIgAghhOQgOAGgLAMQgLAMgFAPQgGAQAAARQAAASAGAQQAFAPALAMQALAMAOAGQAQAHARAAQASAAAQgHQAPgGAKgMQALgMAGgPQAFgQAAgSQAAgRgFgQQgGgPgLgMQgKgMgPgGQgQgGgSAAQgRAAgQAGg");
	this.shape_23.setTransform(60.2,346.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA+CuIAAh3QAAgTgDgNQgDgOgGgJQgHgJgLgFQgMgEgRAAQgSAAgQALQgNAJgHAPQgKAbAAATIAABvIgeAAIAAlbIAeAAIAACnIABAAQAKgSAVgLQAUgLAUAAQAVAAAPAGQAPAFAKALQAKALAFAOQAFAQAAAUIAACJg");
	this.shape_24.setTransform(33.6,339.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(12.9,295.3,125.7,118.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,160,600), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,160,600), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,160,600), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,160,113), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(80,56.5,1,1,0,0,0,80,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,160,113), null);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_264 = function() {
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
	this.frame_340 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(264).call(this.frame_264).wait(76).call(this.frame_340).wait(1));

	// Layer 8
	this.instance = new lib.border();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(341));

	// Layer 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,663.5,1,1,0,0,0,80,56.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({y:543.5},12).wait(317));

	// Layer 10
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(237.6,337.9,1,1,0,0,0,67.5,45.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(247).to({_off:false},0).to({x:77.6,alpha:1},12).wait(82));

	// Layer 9
	this.instance_3 = new lib.Symbol9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(216.6,242.2,1,1,0,0,0,46.5,19.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240).to({_off:false},0).to({x:56.6,alpha:1},12).wait(89));

	// Layer 7
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(228).to({_off:false},0).to({alpha:1},12).wait(101));

	// Layer 6
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(240,300,1,1,0,0,0,80,300);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(139).to({_off:false},0).to({x:80,alpha:1},12).wait(190));

	// Layer 5
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(127).to({_off:false},0).to({alpha:1},12).wait(202));

	// Layer 4
	this.instance_7 = new lib.Symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(238.7,321.2,1,1,0,0,0,54.9,70.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({x:68.7,alpha:1},12).wait(297));

	// Layer 3
	this.instance_8 = new lib.Symbol7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(238.3,214.7,1,1,0,0,0,55.3,9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({x:68.3,alpha:1},12).wait(305));

	// Layer 1
	this.instance_9 = new lib.Symbol3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},12).wait(329));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
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