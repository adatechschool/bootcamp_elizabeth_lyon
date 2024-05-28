Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be first allocated to a respondent who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call should be escalated to a director. Design the classes and data structures for this problem. Implement a method dispatchCall() which assigns a call to the first available employee.

-----------------------------------------------------------
The Call Center :
3 level of Employees:
- Director
- Manager
- Respondent

If ther is a phone call --> goes first to a free Respondant
If Respondant can't handle call --> then goes to a Manager
If manager is not free OR not able to handle it then it goes to a Director


We need to:

° Design classes and data structures
° implement a method DispatchCall()


Classes :  CallCenter, Employees , Respondent, Manager, Director

- CallCenter will handle the list of the employees and the distribution of the calls ( DispatchCall() ) depending on the employee rank ( Respondant < Manger < Director )



- Employee, respondant, Manager and Directo will all shares caracteristics and functionnalities
   ° Employee will have basic parameters like "name", "isFree" and method for handling and endig calls : "handleCall()" and "endCall()".
   ° Manager,Respondent and Director will inherite from Employee Class and also have a Rank.

Method : DispatchCall will seek who to transfer the call first, check if the employee is free, if yes then he answers, if he cannot handle it it will then be transfers to the newt higher up employee available.
