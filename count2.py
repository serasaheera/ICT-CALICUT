a=raw_input("enter the string")
print a
n=0
p=0
k=0
j=0
for i in a:
	if i in "aeiouAEIOU":
		n=n+1
	elif i in "bcdfgjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ":
		p=p+1
	elif i in " ":
		k=k+1
	elif i in "?":
		j=j+1
print("the number of vowels is",n)
print("the number of consonants is",p)
print("the number of words",k+1)
print("the number of ? is",j)
