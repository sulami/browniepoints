goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54068){
var map__54069 = p__54068;
var map__54069__$1 = (((((!((map__54069 == null))))?(((((map__54069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54069):map__54069);
var m = map__54069__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54069__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54069__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54071_54282 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54072_54283 = null;
var count__54073_54284 = (0);
var i__54074_54285 = (0);
while(true){
if((i__54074_54285 < count__54073_54284)){
var f_54286 = chunk__54072_54283.cljs$core$IIndexed$_nth$arity$2(null,i__54074_54285);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54286], 0));


var G__54287 = seq__54071_54282;
var G__54288 = chunk__54072_54283;
var G__54289 = count__54073_54284;
var G__54290 = (i__54074_54285 + (1));
seq__54071_54282 = G__54287;
chunk__54072_54283 = G__54288;
count__54073_54284 = G__54289;
i__54074_54285 = G__54290;
continue;
} else {
var temp__5735__auto___54291 = cljs.core.seq(seq__54071_54282);
if(temp__5735__auto___54291){
var seq__54071_54292__$1 = temp__5735__auto___54291;
if(cljs.core.chunked_seq_QMARK_(seq__54071_54292__$1)){
var c__4556__auto___54293 = cljs.core.chunk_first(seq__54071_54292__$1);
var G__54294 = cljs.core.chunk_rest(seq__54071_54292__$1);
var G__54295 = c__4556__auto___54293;
var G__54296 = cljs.core.count(c__4556__auto___54293);
var G__54297 = (0);
seq__54071_54282 = G__54294;
chunk__54072_54283 = G__54295;
count__54073_54284 = G__54296;
i__54074_54285 = G__54297;
continue;
} else {
var f_54298 = cljs.core.first(seq__54071_54292__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54298], 0));


var G__54299 = cljs.core.next(seq__54071_54292__$1);
var G__54300 = null;
var G__54301 = (0);
var G__54302 = (0);
seq__54071_54282 = G__54299;
chunk__54072_54283 = G__54300;
count__54073_54284 = G__54301;
i__54074_54285 = G__54302;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54304 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54304], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54304)))?cljs.core.second(arglists_54304):arglists_54304)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54078_54306 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54079_54307 = null;
var count__54080_54308 = (0);
var i__54081_54309 = (0);
while(true){
if((i__54081_54309 < count__54080_54308)){
var vec__54095_54310 = chunk__54079_54307.cljs$core$IIndexed$_nth$arity$2(null,i__54081_54309);
var name_54311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54095_54310,(0),null);
var map__54098_54312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54095_54310,(1),null);
var map__54098_54313__$1 = (((((!((map__54098_54312 == null))))?(((((map__54098_54312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54098_54312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54098_54312):map__54098_54312);
var doc_54314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54098_54313__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54098_54313__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54311], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54315], 0));

if(cljs.core.truth_(doc_54314)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54314], 0));
} else {
}


var G__54316 = seq__54078_54306;
var G__54317 = chunk__54079_54307;
var G__54318 = count__54080_54308;
var G__54319 = (i__54081_54309 + (1));
seq__54078_54306 = G__54316;
chunk__54079_54307 = G__54317;
count__54080_54308 = G__54318;
i__54081_54309 = G__54319;
continue;
} else {
var temp__5735__auto___54320 = cljs.core.seq(seq__54078_54306);
if(temp__5735__auto___54320){
var seq__54078_54321__$1 = temp__5735__auto___54320;
if(cljs.core.chunked_seq_QMARK_(seq__54078_54321__$1)){
var c__4556__auto___54322 = cljs.core.chunk_first(seq__54078_54321__$1);
var G__54323 = cljs.core.chunk_rest(seq__54078_54321__$1);
var G__54324 = c__4556__auto___54322;
var G__54325 = cljs.core.count(c__4556__auto___54322);
var G__54326 = (0);
seq__54078_54306 = G__54323;
chunk__54079_54307 = G__54324;
count__54080_54308 = G__54325;
i__54081_54309 = G__54326;
continue;
} else {
var vec__54101_54327 = cljs.core.first(seq__54078_54321__$1);
var name_54328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54101_54327,(0),null);
var map__54104_54329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54101_54327,(1),null);
var map__54104_54330__$1 = (((((!((map__54104_54329 == null))))?(((((map__54104_54329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54104_54329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54104_54329):map__54104_54329);
var doc_54331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54104_54330__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54104_54330__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54328], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54332], 0));

if(cljs.core.truth_(doc_54331)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54331], 0));
} else {
}


var G__54334 = cljs.core.next(seq__54078_54321__$1);
var G__54335 = null;
var G__54336 = (0);
var G__54337 = (0);
seq__54078_54306 = G__54334;
chunk__54079_54307 = G__54335;
count__54080_54308 = G__54336;
i__54081_54309 = G__54337;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__54106 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54107 = null;
var count__54108 = (0);
var i__54109 = (0);
while(true){
if((i__54109 < count__54108)){
var role = chunk__54107.cljs$core$IIndexed$_nth$arity$2(null,i__54109);
var temp__5735__auto___54338__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54338__$1)){
var spec_54339 = temp__5735__auto___54338__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54339)], 0));
} else {
}


var G__54340 = seq__54106;
var G__54341 = chunk__54107;
var G__54342 = count__54108;
var G__54343 = (i__54109 + (1));
seq__54106 = G__54340;
chunk__54107 = G__54341;
count__54108 = G__54342;
i__54109 = G__54343;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54106);
if(temp__5735__auto____$1){
var seq__54106__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54106__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54106__$1);
var G__54344 = cljs.core.chunk_rest(seq__54106__$1);
var G__54345 = c__4556__auto__;
var G__54346 = cljs.core.count(c__4556__auto__);
var G__54347 = (0);
seq__54106 = G__54344;
chunk__54107 = G__54345;
count__54108 = G__54346;
i__54109 = G__54347;
continue;
} else {
var role = cljs.core.first(seq__54106__$1);
var temp__5735__auto___54348__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54348__$2)){
var spec_54349 = temp__5735__auto___54348__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54349)], 0));
} else {
}


var G__54350 = cljs.core.next(seq__54106__$1);
var G__54351 = null;
var G__54352 = (0);
var G__54353 = (0);
seq__54106 = G__54350;
chunk__54107 = G__54351;
count__54108 = G__54352;
i__54109 = G__54353;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54354 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54355 = cljs.core.ex_cause(t);
via = G__54354;
t = G__54355;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__54117 = datafied_throwable;
var map__54117__$1 = (((((!((map__54117 == null))))?(((((map__54117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54117):map__54117);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54117__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54118 = cljs.core.last(via);
var map__54118__$1 = (((((!((map__54118 == null))))?(((((map__54118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54118):map__54118);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54118__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54118__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54118__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54119 = data;
var map__54119__$1 = (((((!((map__54119 == null))))?(((((map__54119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54119):map__54119);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54119__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54119__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54119__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54120 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54120__$1 = (((((!((map__54120 == null))))?(((((map__54120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54120):map__54120);
var top_data = map__54120__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54120__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54142 = phase;
var G__54142__$1 = (((G__54142 instanceof cljs.core.Keyword))?G__54142.fqn:null);
switch (G__54142__$1) {
case "read-source":
var map__54143 = data;
var map__54143__$1 = (((((!((map__54143 == null))))?(((((map__54143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54143):map__54143);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54143__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54143__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54145 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54145__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54145,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54145);
var G__54145__$2 = (cljs.core.truth_((function (){var fexpr__54150 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54150.cljs$core$IFn$_invoke$arity$1 ? fexpr__54150.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54150.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54145__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54145__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54145__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54145__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54154 = top_data;
var G__54154__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54154,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54154);
var G__54154__$2 = (cljs.core.truth_((function (){var fexpr__54155 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54155.cljs$core$IFn$_invoke$arity$1 ? fexpr__54155.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54155.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54154__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54154__$1);
var G__54154__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54154__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54154__$2);
var G__54154__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54154__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54154__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54154__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54154__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54167 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54167,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54167,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54167,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54167,(3),null);
var G__54173 = top_data;
var G__54173__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54173,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54173);
var G__54173__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54173__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54173__$1);
var G__54173__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54173__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54173__$2);
var G__54173__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54173__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54173__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54173__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54173__$4;
}

break;
case "execution":
var vec__54189 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54189,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54189,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54189,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54189,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54116_SHARP_){
var or__4126__auto__ = (p1__54116_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54202 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54202.cljs$core$IFn$_invoke$arity$1 ? fexpr__54202.cljs$core$IFn$_invoke$arity$1(p1__54116_SHARP_) : fexpr__54202.call(null,p1__54116_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54203 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54203__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54203,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54203);
var G__54203__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54203__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54203__$1);
var G__54203__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54203__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54203__$2);
var G__54203__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54203__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54203__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54203__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54203__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54142__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54224){
var map__54228 = p__54224;
var map__54228__$1 = (((((!((map__54228 == null))))?(((((map__54228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54228):map__54228);
var triage_data = map__54228__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__54238 = phase;
var G__54238__$1 = (((G__54238 instanceof cljs.core.Keyword))?G__54238.fqn:null);
switch (G__54238__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54243 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54244 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54245 = loc;
var G__54246 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54247_54367 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54248_54368 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54249_54369 = true;
var _STAR_print_fn_STAR__temp_val__54250_54370 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54249_54369);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54250_54370);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54215_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54215_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54248_54368);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54247_54367);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54243,G__54244,G__54245,G__54246) : format.call(null,G__54243,G__54244,G__54245,G__54246));

break;
case "macroexpansion":
var G__54251 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54252 = cause_type;
var G__54253 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54254 = loc;
var G__54255 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54251,G__54252,G__54253,G__54254,G__54255) : format.call(null,G__54251,G__54252,G__54253,G__54254,G__54255));

break;
case "compile-syntax-check":
var G__54256 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54257 = cause_type;
var G__54258 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54259 = loc;
var G__54260 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54256,G__54257,G__54258,G__54259,G__54260) : format.call(null,G__54256,G__54257,G__54258,G__54259,G__54260));

break;
case "compilation":
var G__54261 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54262 = cause_type;
var G__54263 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54264 = loc;
var G__54265 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54261,G__54262,G__54263,G__54264,G__54265) : format.call(null,G__54261,G__54262,G__54263,G__54264,G__54265));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54267 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54268 = symbol;
var G__54269 = loc;
var G__54270 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54271_54371 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54272_54372 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54273_54373 = true;
var _STAR_print_fn_STAR__temp_val__54274_54374 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54273_54373);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54274_54374);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54218_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54218_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54272_54372);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54271_54371);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54267,G__54268,G__54269,G__54270) : format.call(null,G__54267,G__54268,G__54269,G__54270));
} else {
var G__54276 = "Execution error%s at %s(%s).\n%s\n";
var G__54277 = cause_type;
var G__54278 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54279 = loc;
var G__54280 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54276,G__54277,G__54278,G__54279,G__54280) : format.call(null,G__54276,G__54277,G__54278,G__54279,G__54280));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54238__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
