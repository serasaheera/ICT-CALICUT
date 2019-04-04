class person:
    def __init__(self,name,age,cgpa):
        self.name=name
        self.age=age
        self.cgpa=cgpa
student= person("Ajay",23,7.7)
print(student.name,student.age,student.cgpa)
name=raw_input("Enter the name")
age=input("Enter the age")
cgpa=input("Enter the cgpa")
student1=person(name,age,cgpa)
print(student1.name,student1.age,student1.cgpa)