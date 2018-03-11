export class Store {

  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any }

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    this.notify();

    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn);
    };
  }

  // dispatch(param: { type: string; payload: { label: string; complete: boolean } })
  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.notify();
  }

  private notify() {
    this.subscribers.forEach(fn => fn(this.value));
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
