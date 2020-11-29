goog.provide('browniepoints.events');
browniepoints.events.db__GT_local_store = (function browniepoints$events$db__GT_local_store(db){
return localStorage.setItem("browniepoints",cljs.core.str.cljs$core$IFn$_invoke$arity$1(db));
});
browniepoints.events.local_store__GT_db = (function browniepoints$events$local_store__GT_db(){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem("browniepoints"));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("browniepoints.events","initialize-db","browniepoints.events/initialize-db",591757386),(function (_,___$1){
var ls = browniepoints.events.local_store__GT_db();
if(cljs.core.truth_(ls)){
return ls;
} else {
return browniepoints.db.default_db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc","inc",-1316026094),(function (db,p__42702){
var vec__42703 = p__42702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42703,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42703,(1),null);
var new_db = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"people","people",1443537404),k,new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.inc);
browniepoints.events.db__GT_local_store(new_db);

return new_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec","dec",1888433436),(function (db,p__42707){
var vec__42708 = p__42707;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42708,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42708,(1),null);
var new_db = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"people","people",1443537404),k,new cljs.core.Keyword(null,"points","points",-1486596883)], null),(function (p1__42706_SHARP_){
var x__4214__auto__ = (0);
var y__4215__auto__ = (p1__42706_SHARP_ - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}));
browniepoints.events.db__GT_local_store(new_db);

return new_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-person","add-person",-1414042916),(function (db,p__42711){
var vec__42712 = p__42711;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42712,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42712,(1),null);
var kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(name,/\s/,"-"));
var new_db = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"people","people",1443537404)], null),cljs.core.assoc,kw,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null));
browniepoints.events.db__GT_local_store(new_db);

return new_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"del-person","del-person",-1848906354),(function (db,p__42715){
var vec__42716 = p__42715;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42716,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42716,(1),null);
var new_db = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"people","people",1443537404)], null),cljs.core.dissoc,k);
browniepoints.events.db__GT_local_store(new_db);

return new_db;
}));

//# sourceMappingURL=browniepoints.events.js.map
