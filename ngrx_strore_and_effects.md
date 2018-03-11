
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
 Component --- Dispatch Action ---> Store ---> Reducer ---> New State ---- Render--> Againg to Component

#### Immutability 
Object state can't be modified after creation means that object state can't be changed after constructed.
   * useful in concurrent applications. Since they cannot change state, they cannot be corrupted by thread interference or observed in an inconsistent state.
   * Re usability limitations in objects
   * Performance impact on object creations 

Object.assign({},existingObject,Change) equivalent Spread operation (...)   

#####


#### 
#####
