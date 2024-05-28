class Employee:
    def __init__(self, name, status):
        self.name = name
        self.status = status

    def __str__(self):
        return f"{self.name}({self.status})"
    
employee1 = Employee("Jane", False)
#print(employee1)

class Respondant(Employee):
    pass

class Manager(Employee):
    pass

class Director(Employee):
    pass

class Call_center:
    respondants = [Respondant]
    managers = [Manager]
    directors = [Director]

    def __init__(self, respondants, managers, directors):
        self.respondants = respondants
        self.managers = managers
        self.directors =directors
        
    def checkAvailability(employees):
        for respondant in employees.respondants:
            if respondant.status == True :
                return f"call have been taken by the respondant {respondant.name}"
        for manager in employees.managers:
            if manager.status == True:
                return f"call have been taken by the manager {manager.name}"
        for director in employees.directors:
            if director.status == True:
                return f"call have been taken by the director {director.name}"
            else :
                return "no one could answer your call, please try again later"


list_of_respondants =[Respondant("lola", False), Respondant("tony", False), Respondant("robert",False)]
print(list_of_respondants[2])
list_of_managers = [Manager("cassie",False),Manager("bobby", False), Manager("Ariana", True)]   
list_of_directors = [Director("bella", False),("fatima",False)]                       
call_center_1 = Call_center(list_of_respondants,list_of_managers,list_of_directors)
print(call_center_1.checkAvailability())