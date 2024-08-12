/* 
DAY1
A react variable can store tag.
We can implement javascript operation inside tag use {}.
There must be only one wrapper in return.
Anythings that is written inside return will display in browser.


Elements
1) block element ->
  it takes all width
  it always start from new lines
2) inline element ->
  it takes required width


Images -> always place images or file at public folder.
    . at src of images refers to public folder.


CSS
  inline ->
    obj is used for styling purposes.
    you must use camel case conversion.
  external ->
    it is a three step process
      1) define, 2) import and 3) use.

    
In react console is appear at developer panel.


DAY2
  Component
    it is function whose first letter is capital 
    We call component like calling html tag.
  

  If props is other than string then always wrap it with curly bracket{}.
  Component are the custom tag.

  Inbuilt props (className, style) are only support in inbuilt tag(html tags) i.e. it not support in custom tag (component).

DAY3.
  .jsx 
    It is the extension.
    It is the combination of javaScript with xml(html)

  Limitation of curly braces
    It must return only one value.
    It does not support if, else, for while, do-while
    We can not define variables inside curly braces.

  Limitation of ternary operator(condition?value:value)
    It must have else part (: )

  Boolean are not shown in browser for this we have add some logic.

  Don't call object inside html tag children.

useState

handleImg     (e)=>{}                   if value is not passed in onclick.
handleImg()   ()=>{return (e)=>{}}      if value is passed in onclick.

A page will rendering When the state variable is changed

When state variable change
A component gets render such that 
the state variable which is changed holds changed values
Where as other state variable holds previous value.
  
UseEffect 
  It is asynchronous function
  useEffect function only execute in first render.
  useEffect function will run for 1st render but from second render the execution of function depends on its dependency.


Lifecycle of components =>
  Components did mount( during first render)
    useEffect fun wll run
  Components did update(second render ) (when state variable change)
    useEffect fun wll run only if its dependency changes
  Component dd unmount(component removed)
    nothing get execute
    but clean up function wll execute

  Before working with react-router-dom you have to wrap App component by BrowserRouter


In input what ever you place in value it is display in the browser(input)
for all   value     e.target.value
for checkbox   checked      e.target.checked
for radio  checked      e.target.value

*/
// alt + shift+ a to create a /* */
/* 
<div className="temp">hello</div>
here class Name is prop and hello s a child 


always use setState and navigate on button click or inside useEffect.

*************************************
why global state management or (redux) is required
because we cannot send data from one sibling to another sibling
because of props drilling


npm install @redux.js/toolkit react-redux

1) store configuration
  a) create store by using configureStore
  b) provide store by the help of provider wrapper at index.js 
      so that all component can use store variable <Provider store = {store}> </Provider>

2) defining variable in store and initializing it 
  a) create slice (do as boiler plate)
  b) add slice to  store

3) get store variable 
  a) useSelector

4) change store variable
  a) make function that can change store variable in slice folder and export it.
  b) useDispatch which call function of slice.

  
--thus slice folder is important.


*/





