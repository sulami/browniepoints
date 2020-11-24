(ns browniepoints.events
  (:require [clojure.edn :refer [read-string]]
            [re-frame.core :as re-frame]
            [browniepoints.db :as db]))

(defn- db->local-store [db]
  (.setItem js/localStorage "browniepoints" (str db)))

(defn- local-store->db []
  (read-string (.getItem js/localStorage "browniepoints")))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   (let [ls (local-store->db)]
     (if ls
       ls
       db/default-db))))

(re-frame/reg-event-db
 :inc
 (fn [db [_ k]]
   (let [new-db (update-in db [:people k :points] inc)]
     (db->local-store new-db)
     new-db)))


(re-frame/reg-event-db
 :dec
 (fn [db [_ k]]
   (let [new-db (update-in db [:people k :points] #(max 0 (dec %)))]
     (db->local-store new-db)
     new-db)))
