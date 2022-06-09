def factorial(num):
	if num == 0:
		return 1
	return num*factorial(num-1)

def palindrome(word):
	word = (str(word)).lower()
	word = "".join(filter(str.isalnum, word))
	word = list(word)
	if word.pop(0) != word.pop(-1): 
		return False
	elif len(word) <= 1:
		return True
	else:	
		return palindrome(word)


def bottles(num):
	pass

def roman_num(num):
	pass

