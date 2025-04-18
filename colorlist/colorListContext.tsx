import React, { createContext, useReducer, useContext, Children } from "react";
import {
  SampleDataListActionType,
  sampleDataListReducer,
} from "./colorListReducer";
import { SampleDataListState, SampleDataListAction } from "./colorListReducer";
import { sampleDisplayData } from "./sampledata";
import { useEffect, useState } from "react";

// #region Context set up stuff
const initialState: SampleDataListState = {
  items: [],
  isLoading: true,
};

const SampleDataListContext = createContext<{
  state: SampleDataListState;
  dispatch: React.Dispatch<SampleDataListAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const SampleDataListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(sampleDataListReducer, initialState);

  return (
    <SampleDataListContext.Provider value={{ state, dispatch }}>
      {children}
    </SampleDataListContext.Provider>
  );
};

// #endregion

export const useSampleDataList = () => useContext(SampleDataListContext);

// #region custom hooks(methods) for getting stuff done

export const useSampleDataListBusinessLogic = () => {
  const { dispatch } = useSampleDataList();

  const loadItems = () => {
    console.log("in load");
    dispatch({ type: SampleDataListActionType.SET_LOADING, payload: true });
    dispatch({ type: SampleDataListActionType.SET_ITEMS, payload: null });
    console.log("loading");

    setTimeout(() => {
      dispatch({
        type: SampleDataListActionType.SET_ITEMS,
        payload: sampleDisplayData,
      });
      dispatch({ type: SampleDataListActionType.SET_LOADING, payload: false });
    }, 1000);
  };

  //could have more methods here if you want. Right now its just load items

  //return all methods available to the caller - in this case the view
  return {
    loadItems,
  };
};

//#endregion
