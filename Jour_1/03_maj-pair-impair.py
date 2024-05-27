def find_the_element_with_bigger_occurence_in_a_list_of_int(list):
    counter = 0
    num = list[0]
    for i in list:
        current_frequency = list.count(i)
        if current_frequency > counter :
            counter = current_frequency
            num = i
            result = num                      
        elif current_frequency == counter and i != num :
            result = oven_or_odd(list)
    return result

def oven_or_odd(list):
    number_of_even = 0
    number_of_odd = 0
    for i in list:
        if i % 2 == 0 :
            number_of_even +=1
        else: number_of_odd +=1
    if number_of_even > number_of_odd:
        return "maj de pairs"
    elif number_of_even < number_of_odd:
        return"maj d'impairs"
    else :
        return 0



list1 = [2,6,2,8,3,6,9,2]   
list2 = [2,6,2,8,6,9] 
list3 = [2,3,6,7,2,9,6,11]
print(find_the_element_with_bigger_occurence_in_a_list_of_int(list3))
#print(oven_or_odd(list2))
    

