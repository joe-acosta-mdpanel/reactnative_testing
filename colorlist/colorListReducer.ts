export interface SampleData {
  id: string;
  title: string;
  subtitle: string;
  hexColor: string;
}

export interface SampleDataListState {
  items: SampleData[] | null;
  isLoading: boolean;
}

export enum SampleDataListActionType {
  SET_ITEMS = "SET_ITEMS",
  SET_LOADING = "SET_LOADING",
}

export type SampleDataListAction =
  | { type: SampleDataListActionType.SET_ITEMS; payload: SampleData[] | null }
  | { type: SampleDataListActionType.SET_LOADING; payload: boolean };

export const sampleDataListReducer = (
  state: SampleDataListState,
  action: SampleDataListAction
): SampleDataListState => {
  switch (action.type) {
    case SampleDataListActionType.SET_ITEMS:
      return { ...state, items: action.payload };
    case SampleDataListActionType.SET_LOADING:
      return { ...state, isLoading: action.payload };
  }
};
