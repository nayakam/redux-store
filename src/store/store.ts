export class Store {

  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any }

  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  // dispatch(param: { type: string; payload: { label: string; complete: boolean } })
  dispatch(action) {
    this.state = this.reduce(this.state, action);
    console.log("Dispatch:" + JSON.stringify(this.state));
    console.log(this.state);
  }

  private reduce(state, action: any) {
    const newState = {};

    for (const prop in this.reducers) {
      //Each reducer manages particular slice of state, just pass the related sub state which reducer has access
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}
