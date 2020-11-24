(ns browniepoints.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::people
 (fn [db]
   (:people db)))

(re-frame/reg-sub
 ::person
 (fn [[db name]]
   (-> db
       :people
       name)))
