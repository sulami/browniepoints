goog.provide('cognitect.transit');
(cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
}));
(cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));
(goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return other.cljs$core$IEquiv$_equiv$arity$2(null,this$__$1);
} else {
return this$__$1.equiv(other);
}
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));
(goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash(this$__$1.toString());
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));
(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
}));
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__47036_47418 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__47037_47419 = null;
var count__47038_47420 = (0);
var i__47039_47421 = (0);
while(true){
if((i__47039_47421 < count__47038_47420)){
var k_47425 = chunk__47037_47419.cljs$core$IIndexed$_nth$arity$2(null,i__47039_47421);
var v_47428 = (b[k_47425]);
(a[k_47425] = v_47428);


var G__47429 = seq__47036_47418;
var G__47430 = chunk__47037_47419;
var G__47431 = count__47038_47420;
var G__47432 = (i__47039_47421 + (1));
seq__47036_47418 = G__47429;
chunk__47037_47419 = G__47430;
count__47038_47420 = G__47431;
i__47039_47421 = G__47432;
continue;
} else {
var temp__5735__auto___47433 = cljs.core.seq(seq__47036_47418);
if(temp__5735__auto___47433){
var seq__47036_47434__$1 = temp__5735__auto___47433;
if(cljs.core.chunked_seq_QMARK_(seq__47036_47434__$1)){
var c__4556__auto___47435 = cljs.core.chunk_first(seq__47036_47434__$1);
var G__47436 = cljs.core.chunk_rest(seq__47036_47434__$1);
var G__47437 = c__4556__auto___47435;
var G__47438 = cljs.core.count(c__4556__auto___47435);
var G__47439 = (0);
seq__47036_47418 = G__47436;
chunk__47037_47419 = G__47437;
count__47038_47420 = G__47438;
i__47039_47421 = G__47439;
continue;
} else {
var k_47440 = cljs.core.first(seq__47036_47434__$1);
var v_47441 = (b[k_47440]);
(a[k_47440] = v_47441);


var G__47442 = cljs.core.next(seq__47036_47434__$1);
var G__47443 = null;
var G__47444 = (0);
var G__47445 = (0);
seq__47036_47418 = G__47442;
chunk__47037_47419 = G__47443;
count__47038_47420 = G__47444;
i__47039_47421 = G__47445;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
});
(cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
}));

(cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
}));

(cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
}));

(cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,true,true) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true));
}));

(cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapBuilder.cljs$lang$type = true);

(cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder");

(cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/MapBuilder");
}));

/**
 * Positional factory function for cognitect.transit/MapBuilder.
 */
cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
});
(cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
}));

(cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
}));

(cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
}));

(cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(arr,true) : cljs.core.PersistentVector.fromArray.call(null,arr,true));
}));

(cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorBuilder.cljs$lang$type = true);

(cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder");

(cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/VectorBuilder");
}));

/**
 * Positional factory function for cognitect.transit/VectorBuilder.
 */
cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from string tag to a decoder function of one
 * argument which returns the in-memory representation of the semantic transit
 * value. If a :default handler is provided, it will be used when no matching
 * read handler can be found.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__47062 = arguments.length;
switch (G__47062) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name(type),cognitect.transit.opts_merge(({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, ["$",(function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
}),":",(function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
}),"set",(function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__47496 = (i + (2));
var G__47497 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__47496;
ret = G__47497;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
}),"with-meta",(function (v){
return cljs.core.with_meta((v[(0)]),(v[(1)]));
})], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328))], 0))), "defaultHandler": new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.reader.cljs$lang$maxFixedArity = 2);

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
});
(cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
}));

(cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.KeywordHandler.cljs$lang$type = true);

(cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler");

(cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/KeywordHandler");
}));

/**
 * Positional factory function for cognitect.transit/KeywordHandler.
 */
cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
});
(cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
}));

(cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SymbolHandler.cljs$lang$type = true);

(cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler");

(cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/SymbolHandler");
}));

/**
 * Positional factory function for cognitect.transit/SymbolHandler.
 */
cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
});
(cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
}));

(cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__47101_47519 = cljs.core.seq(v);
var chunk__47102_47520 = null;
var count__47103_47521 = (0);
var i__47104_47522 = (0);
while(true){
if((i__47104_47522 < count__47103_47521)){
var x_47523 = chunk__47102_47520.cljs$core$IIndexed$_nth$arity$2(null,i__47104_47522);
ret.push(x_47523);


var G__47524 = seq__47101_47519;
var G__47525 = chunk__47102_47520;
var G__47526 = count__47103_47521;
var G__47527 = (i__47104_47522 + (1));
seq__47101_47519 = G__47524;
chunk__47102_47520 = G__47525;
count__47103_47521 = G__47526;
i__47104_47522 = G__47527;
continue;
} else {
var temp__5735__auto___47528 = cljs.core.seq(seq__47101_47519);
if(temp__5735__auto___47528){
var seq__47101_47529__$1 = temp__5735__auto___47528;
if(cljs.core.chunked_seq_QMARK_(seq__47101_47529__$1)){
var c__4556__auto___47530 = cljs.core.chunk_first(seq__47101_47529__$1);
var G__47532 = cljs.core.chunk_rest(seq__47101_47529__$1);
var G__47533 = c__4556__auto___47530;
var G__47534 = cljs.core.count(c__4556__auto___47530);
var G__47535 = (0);
seq__47101_47519 = G__47532;
chunk__47102_47520 = G__47533;
count__47103_47521 = G__47534;
i__47104_47522 = G__47535;
continue;
} else {
var x_47540 = cljs.core.first(seq__47101_47529__$1);
ret.push(x_47540);


var G__47544 = cljs.core.next(seq__47101_47529__$1);
var G__47545 = null;
var G__47546 = (0);
var G__47547 = (0);
seq__47101_47519 = G__47544;
chunk__47102_47520 = G__47545;
count__47103_47521 = G__47546;
i__47104_47522 = G__47547;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.ListHandler.cljs$lang$type = true);

(cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler");

(cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/ListHandler");
}));

/**
 * Positional factory function for cognitect.transit/ListHandler.
 */
cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
});
(cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
}));

(cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
}));

(cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapHandler.cljs$lang$type = true);

(cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler");

(cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/MapHandler");
}));

/**
 * Positional factory function for cognitect.transit/MapHandler.
 */
cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
});
(cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
}));

(cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__47136_47576 = cljs.core.seq(v);
var chunk__47137_47577 = null;
var count__47138_47578 = (0);
var i__47139_47579 = (0);
while(true){
if((i__47139_47579 < count__47138_47578)){
var x_47585 = chunk__47137_47577.cljs$core$IIndexed$_nth$arity$2(null,i__47139_47579);
ret.push(x_47585);


var G__47587 = seq__47136_47576;
var G__47588 = chunk__47137_47577;
var G__47589 = count__47138_47578;
var G__47590 = (i__47139_47579 + (1));
seq__47136_47576 = G__47587;
chunk__47137_47577 = G__47588;
count__47138_47578 = G__47589;
i__47139_47579 = G__47590;
continue;
} else {
var temp__5735__auto___47591 = cljs.core.seq(seq__47136_47576);
if(temp__5735__auto___47591){
var seq__47136_47593__$1 = temp__5735__auto___47591;
if(cljs.core.chunked_seq_QMARK_(seq__47136_47593__$1)){
var c__4556__auto___47595 = cljs.core.chunk_first(seq__47136_47593__$1);
var G__47596 = cljs.core.chunk_rest(seq__47136_47593__$1);
var G__47597 = c__4556__auto___47595;
var G__47598 = cljs.core.count(c__4556__auto___47595);
var G__47599 = (0);
seq__47136_47576 = G__47596;
chunk__47137_47577 = G__47597;
count__47138_47578 = G__47598;
i__47139_47579 = G__47599;
continue;
} else {
var x_47603 = cljs.core.first(seq__47136_47593__$1);
ret.push(x_47603);


var G__47604 = cljs.core.next(seq__47136_47593__$1);
var G__47605 = null;
var G__47606 = (0);
var G__47607 = (0);
seq__47136_47576 = G__47604;
chunk__47137_47577 = G__47605;
count__47138_47578 = G__47606;
i__47139_47579 = G__47607;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
}));

(cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SetHandler.cljs$lang$type = true);

(cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler");

(cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/SetHandler");
}));

/**
 * Positional factory function for cognitect.transit/SetHandler.
 */
cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
});
(cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
}));

(cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__47159_47615 = cljs.core.seq(v);
var chunk__47160_47616 = null;
var count__47161_47617 = (0);
var i__47162_47618 = (0);
while(true){
if((i__47162_47618 < count__47161_47617)){
var x_47620 = chunk__47160_47616.cljs$core$IIndexed$_nth$arity$2(null,i__47162_47618);
ret.push(x_47620);


var G__47621 = seq__47159_47615;
var G__47622 = chunk__47160_47616;
var G__47623 = count__47161_47617;
var G__47624 = (i__47162_47618 + (1));
seq__47159_47615 = G__47621;
chunk__47160_47616 = G__47622;
count__47161_47617 = G__47623;
i__47162_47618 = G__47624;
continue;
} else {
var temp__5735__auto___47632 = cljs.core.seq(seq__47159_47615);
if(temp__5735__auto___47632){
var seq__47159_47633__$1 = temp__5735__auto___47632;
if(cljs.core.chunked_seq_QMARK_(seq__47159_47633__$1)){
var c__4556__auto___47634 = cljs.core.chunk_first(seq__47159_47633__$1);
var G__47635 = cljs.core.chunk_rest(seq__47159_47633__$1);
var G__47636 = c__4556__auto___47634;
var G__47637 = cljs.core.count(c__4556__auto___47634);
var G__47638 = (0);
seq__47159_47615 = G__47635;
chunk__47160_47616 = G__47636;
count__47161_47617 = G__47637;
i__47162_47618 = G__47638;
continue;
} else {
var x_47641 = cljs.core.first(seq__47159_47633__$1);
ret.push(x_47641);


var G__47643 = cljs.core.next(seq__47159_47633__$1);
var G__47644 = null;
var G__47645 = (0);
var G__47646 = (0);
seq__47159_47615 = G__47643;
chunk__47160_47616 = G__47644;
count__47161_47617 = G__47645;
i__47162_47618 = G__47646;
continue;
}
} else {
}
}
break;
}

return ret;
}));

(cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorHandler.cljs$lang$type = true);

(cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler");

(cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/VectorHandler");
}));

/**
 * Positional factory function for cognitect.transit/VectorHandler.
 */
cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
});
(cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
}));

(cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
}));

(cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
}));

(cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.UUIDHandler.cljs$lang$type = true);

(cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler");

(cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/UUIDHandler");
}));

/**
 * Positional factory function for cognitect.transit/UUIDHandler.
 */
cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});


/**
* @constructor
*/
cognitect.transit.WithMeta = (function (value,meta){
this.value = value;
this.meta = meta;
});

(cognitect.transit.WithMeta.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(cognitect.transit.WithMeta.cljs$lang$type = true);

(cognitect.transit.WithMeta.cljs$lang$ctorStr = "cognitect.transit/WithMeta");

(cognitect.transit.WithMeta.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/WithMeta");
}));

/**
 * Positional factory function for cognitect.transit/WithMeta.
 */
cognitect.transit.__GT_WithMeta = (function cognitect$transit$__GT_WithMeta(value,meta){
return (new cognitect.transit.WithMeta(value,meta));
});


/**
* @constructor
*/
cognitect.transit.WithMetaHandler = (function (){
});
(cognitect.transit.WithMetaHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "with-meta";
}));

(cognitect.transit.WithMetaHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return com.cognitect.transit.tagged("array",[v.value,v.meta]);
}));

(cognitect.transit.WithMetaHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.WithMetaHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.WithMetaHandler.cljs$lang$type = true);

(cognitect.transit.WithMetaHandler.cljs$lang$ctorStr = "cognitect.transit/WithMetaHandler");

(cognitect.transit.WithMetaHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/WithMetaHandler");
}));

/**
 * Positional factory function for cognitect.transit/WithMetaHandler.
 */
cognitect.transit.__GT_WithMetaHandler = (function cognitect$transit$__GT_WithMetaHandler(){
return (new cognitect.transit.WithMetaHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map with the following optional keys:
 * 
 *  :handlers  - a map of type constructors to handler instances. Can optionally
 *               provide a :default write handler which will be used if no
 *               matching handler can be found.
 *  :transform - a function of one argument returning a transformed value. Will
 *               be invoked on a value before it is written.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__47228 = arguments.length;
switch (G__47228) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var meta_handler = (new cognitect.transit.WithMetaHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cognitect.transit.WithMeta,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,meta_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Eduction !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Eduction,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Repeat !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Repeat,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.MapEntry !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.MapEntry,vector_handler]):null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));
return com.cognitect.transit.writer(cljs.core.name(type),cognitect.transit.opts_merge(({"objectBuilder": (function (m,kfn,vfn){
return cljs.core.reduce_kv((function (obj,k,v){
var G__47241 = obj;
G__47241.push((kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(k) : kfn.call(null,k)),(vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(v) : vfn.call(null,v)));

return G__47241;
}),["^ "],m);
}), "handlers": (function (){var x47242 = cljs.core.clone(handlers);
(x47242.forEach = (function (f){
var coll = this;
var seq__47247 = cljs.core.seq(coll);
var chunk__47248 = null;
var count__47249 = (0);
var i__47250 = (0);
while(true){
if((i__47250 < count__47249)){
var vec__47277 = chunk__47248.cljs$core$IIndexed$_nth$arity$2(null,i__47250);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47277,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),k)){
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,"default") : f.call(null,v,"default"));
} else {
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));
}


var G__47689 = seq__47247;
var G__47690 = chunk__47248;
var G__47691 = count__47249;
var G__47692 = (i__47250 + (1));
seq__47247 = G__47689;
chunk__47248 = G__47690;
count__47249 = G__47691;
i__47250 = G__47692;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47247);
if(temp__5735__auto__){
var seq__47247__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47247__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47247__$1);
var G__47702 = cljs.core.chunk_rest(seq__47247__$1);
var G__47704 = c__4556__auto__;
var G__47705 = cljs.core.count(c__4556__auto__);
var G__47706 = (0);
seq__47247 = G__47702;
chunk__47248 = G__47704;
count__47249 = G__47705;
i__47250 = G__47706;
continue;
} else {
var vec__47282 = cljs.core.first(seq__47247__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47282,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47282,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),k)){
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,"default") : f.call(null,v,"default"));
} else {
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));
}


var G__47726 = cljs.core.next(seq__47247__$1);
var G__47727 = null;
var G__47728 = (0);
var G__47729 = (0);
seq__47247 = G__47726;
chunk__47248 = G__47727;
count__47249 = G__47728;
i__47250 = G__47729;
continue;
}
} else {
return null;
}
}
break;
}
}));

return x47242;
})(), "unpack": (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
})}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.writer.cljs$lang$maxFixedArity = 2);

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__47294 = arguments.length;
switch (G__47294) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if((typeof cognitect !== 'undefined') && (typeof cognitect.transit !== 'undefined') && (typeof cognitect.transit.t_cognitect$transit47300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit47300 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta47301){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta47301 = meta47301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cognitect.transit.t_cognitect$transit47300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47302,meta47301__$1){
var self__ = this;
var _47302__$1 = this;
return (new cognitect.transit.t_cognitect$transit47300(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta47301__$1));
}));

(cognitect.transit.t_cognitect$transit47300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47302){
var self__ = this;
var _47302__$1 = this;
return self__.meta47301;
}));

(cognitect.transit.t_cognitect$transit47300.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.tag_fn.call(null,o));
}));

(cognitect.transit.t_cognitect$transit47300.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.rep_fn.call(null,o));
}));

(cognitect.transit.t_cognitect$transit47300.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.str_rep_fn.call(null,o));
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit47300.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit47300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta47301","meta47301",527724921,null)], null);
}));

(cognitect.transit.t_cognitect$transit47300.cljs$lang$type = true);

(cognitect.transit.t_cognitect$transit47300.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit47300");

(cognitect.transit.t_cognitect$transit47300.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cognitect.transit/t_cognitect$transit47300");
}));

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit47300.
 */
cognitect.transit.__GT_t_cognitect$transit47300 = (function cognitect$transit$__GT_t_cognitect$transit47300(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta47301){
return (new cognitect.transit.t_cognitect$transit47300(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta47301));
});

}

return (new cognitect.transit.t_cognitect$transit47300(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
}));

(cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4);

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4126__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});
/**
 * For :transform. Will write any metadata present on the value.
 */
cognitect.transit.write_meta = (function cognitect$transit$write_meta(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMeta$))))?true:false):false)){
var m = x.cljs$core$IMeta$_meta$arity$1(null);
if((!((m == null)))){
return (new cognitect.transit.WithMeta(x.cljs$core$IWithMeta$_with_meta$arity$2(null,null),m));
} else {
return x;
}
} else {
return x;
}
});

//# sourceMappingURL=cognitect.transit.js.map
