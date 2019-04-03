def test():
	global y
	y=20
	print "inside test",x,"inside y is",y
x=50
test()
print "value of x is",x,"value of y is",y
