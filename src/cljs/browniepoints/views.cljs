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
                     :flex-grow "1"}}]]
   [:div {:style {:display "flex"
                  :justify-content "center"
                  :align-items "stretch"
                  :margin-top "10px"}}
    [:input {:type "button"
             :value "Delete"
             :style {:width "50%"
                     :font-size "100%"}
             :on-click #(re-frame/dispatch [:del-person k])}]]])

(defn add-person-form []
  [:div {:style {:display "flex"
                 :justify-content "center"
                 :align-items "stretch"
                 :padding "20px"}}
   [:input {:type "text"
            :placeholder "Name"
            :id "new-name"}]
   [:input {:type "button"
            :value "Add"
            :on-click #(let [elm (.getElementById js/document "new-name")]
                         (re-frame/dispatch [:add-person (.-value elm)])
                         (set! (.-value elm) ""))}]])

(defn main-panel []
  (let [people (re-frame/subscribe [::subs/people])]
    [:div {:align "center"}
     [header]
     (for [[k p] @people]
       [person k p])
     [add-person-form]]))
