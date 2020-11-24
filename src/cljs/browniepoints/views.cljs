(ns browniepoints.views
  (:require [re-frame.core :as re-frame]
            [browniepoints.subs :as subs]))

(defn header []
  [:div
   [:h1 "Brownie Points"]
   [:img {:src "static/brownie.png"
          :style {:margin-top "-30px"
                  :width "150px"}}]])

(defn person [k p]
  [:div {:align "left"
         :style {:max-width "250px"}}
   [:p {:style {:display "flex"
                :justify-content "space-between"}}
    [:span "Name:"] [:span (:name p)]]
   [:p
    {:style {:display "flex"
             :justify-content "space-between"}}
    [:span "Points:"] [:span (:points p)]]
   [:div
    {:style {:display "flex"
             :justify-content "space-around"}}
    [:input {:type "button"
             :value "-"
             :on-click #(re-frame/dispatch [:dec k])
             :style {:color "red"
                     :font-size "110%"
                     :flex-grow "1"}}]
    [:input {:type "button"
             :value "+"
             :on-click #(re-frame/dispatch [:inc k])
             :style {:color "green"
                     :font-size "110%"
                     :flex-grow "1"}}]]])

(defn main-panel []
  (let [people (re-frame/subscribe [::subs/people])]
    [:div {:align "center"}
     [header]
     (for [[k p] @people]
       [person k p])]))
