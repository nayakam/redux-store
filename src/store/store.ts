export class Store {

  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any }

  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  // dispatch(param: { type: string; payload: { label: string; complete: boolean } })
  dispatch(action) {
    this.state = {
      ...this.state,
      todos: [...this.state.todos, action.payload]
    };
    console.log("Dispatch:" + JSON.stringify(this.state));
    console.log(this.state);
  }
}
