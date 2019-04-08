import pickle
n=int(input("enter the limit"))
f1=open("test.dat","w")
for i in range(n):
    r=int(input("enter the number"))
    pickle.dump(r,f1)
f1.close()
f1=open("test.dat","r")
for i in range(n):
    print (pickle.load(f1))
