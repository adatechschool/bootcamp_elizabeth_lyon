def flip_list_y(list):
    new_list = []
    for i in range((len(list)-1), -1, -1):
        new_list.append(list[i])
    return new_list

def flip_list_x(list):
    new_list =[]
    for i in list:
        new_list.append(flip_list_y(i))
    return new_list

def flip_list(list, method):
    return method(list)


list1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ]

#print(flip_list_y(list1))
#print(flip_list_x(list1))
print(flip_list(list1, flip_list_x))
print(flip_list(list1, flip_list_y))