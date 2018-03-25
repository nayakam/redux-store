
### Application State
State is representation of a application. This live inside the store. This consist of server response, user info, input , UI state and url (router).
  * [Managing State in Angular Applications](https://blog.nrwl.io/managing-state-in-angular-applications-22b75ef5625f)
  * [State Management](https://angular-2-training-book.rangle.io/handout/state-management/)
  * [Redux in Angular, Really :D using NGRX v4](https://rahulrsingh09.github.io/AngularConcepts/ngrx)
  
#### Redux

##### Three Principles 
  * Single source of truth  
  * State is read-only
  * Pure functions update state  

#### Core Concepts

##### Single state tree
 Plain JSON objects composed by reducers  

##### Actions
Properties
  * Type - Unique string describes event 
  * Payload - Additional optional data
Dispatch actions to reducers

##### Reducers
* Pure Functions and perform actions, Compose and return new state. 
  
#### Store
State container 
Store invokes reduces with previous state and action
Once this updated then notify subscribers (components)

#### One-way data flow
 Component --- Dispatch Action ---> Store ---> Reducer ---> New State ---- Render--> Again to Component

#### Immutability 
Object state can't be modified after creation or object state can't be changed after constructed.
   * useful in concurrent applications. Since they cannot change state, they cannot be corrupted by thread interference or observed in an inconsistent state.
   * Re usability limitations in objects
   * Performance impact on object creations 

Object.assign({},existingObject,Change) equivalent Spread operation (...)   

### NGRX / Store
Redux inspired reactive state management for angular written with observables.
  
Reactive Angular  
Container vs Presentational components
S --SELECT --> C  -- @INPUT --> C
C --@OUTPUT--> C  -- DISPATCH -> S

#### ngrx/effects
* Side effects model for ngrx/store
  * Listen for ngrx/store actions
  * Isolate side effects from components
  * Communicate outside of Angular

####
 
### References:

* [Build a Better Angular 2 Application with Redux and ngrx](http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/)
* [Building a Redux application with Angular 2 - Part 1](https://www.pluralsight.com/guides/front-end-javascript/building-a-redux-application-with-angular-2-part-1)
* [Building a Redux application with Angular 2 - Part 2](https://www.pluralsight.com/guides/front-end-javascript/building-a-redux-application-with-angular-2-part-2)
* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
* [A Cartoon Intro To Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)
* [From Redux to Angular ngrx/store](https://julienrenaux.fr/2017/02/16/from-redux-to-angular-ngrxstore/)
* [Redux in Angular, Really :D using NGRX v4](https://rahulrsingh09.github.io/AngularConcepts/ngrx)
