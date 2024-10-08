//javascript Execution Context(JEC)
//It means how javascript works how our files execute, how memory management works.
//There are three types of JEC 
//1. Global EC
//2. Function EC
//3. Eval Ec

//1. Global EC
//koi b code phly wo global EC sy run hota ha hr surat, then us ko 'this' ma save kia jata ha
    //1.1: Memory Phase: Is ma sary variable k name lia jaty han or un ko save kr dia jata ha
    //undefined
    
//1. Whenever any JavaScript code is executed an execution context is created and it is the Global Execution Context.
//2. An Execution Context is basically a box which has two components called Memory Component(Variable Environment) and Code Component(Thread Of Execution).
//3. The Execution context is created in two phases :
   //a. Memory Creation Phase : In this Phase, Memory is allocated to all the variables and functions which are present in the global scope. Special keyword Undefined in case of variables and literally the whole function in case of functions.
  // b. Code Execution Phase : In this Phase, code is executed line by line.

//4. Whenever there is a function invocation an all new execution context is created and same process is followed again.
// 5. If there is any function parameter then it is also allocated memory while creating the execution context of the function.
//6. Whenever return keyword is encountered , it means the task of function is over and it returns back the control of the program back to the place where it was invoked. and with this this execution context is deleted from stack.

//7. Call Stack is basically a stack which maintains the order of execution of execution context. Whenever a code is executed the Global Execution Context is pushed into the stack first and later on as per the function invocation the  execution context is pushed into the stack. When the function code is done executing the execution context is popped out and last the Global Execution Context s also deleted.It uses lifo method.ie last in first out.
