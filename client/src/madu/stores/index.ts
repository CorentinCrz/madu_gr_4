import React from "react";
import templateStore from "./templateStore/index";
import clientStore from "./clientStore/index";
import pointOfInterestStore from "./pointOfInterestStore/index";
import { createContext } from "react";

export const stores = { templateStore, clientStore, pointOfInterestStore };
export const StoreContext = createContext({});
export const StoreProvider = StoreContext.Provider;

export const storesContext = React.createContext({
    templateStore: new templateStore(),
    clientStore: new clientStore(),
    pointOfInterestStore: new pointOfInterestStore(),
});
