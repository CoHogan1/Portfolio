#  multiple assignment
# x,y, name, is_cool = (1,2.5,"John", True)
print("program start")
print(' ')


# name = "Bob"
# age = 44
#
# print('Hello, whats up {name}'.format(name=name))
# print(f'Hello {name}, I am {age}')
#
#
# print(name.replace('B','C'))

num = list((1,2,3,4,5))
fruit = ['apples','grapes','oranges','pears']

fruit.append('watermelon')

fruit.insert(2, "strawberries")

fruit.pop(2)

fruit[1] = 'blueberries'

# print(fruit)

# tuples in order unchageable
fru = ('banana', "grapes", 'berries')

# sets are unordered and unindexes no dups
ggg = {'one','two','three'}

ggg.add('four')

books = {'one':"one", 'two':2, 'three':'III'}

print(books['one'])



for item in fru:
    print(item)






print(' ')
print("program end")
