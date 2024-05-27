def is_all_char_unique(string):
    new_string = string.replace(" ","")
    for i in range(len(new_string)) :
        for j in range(i+1, len(new_string)):
            if new_string[i] == new_string[j]:
                return "false";
    return "true"

print(is_all_char_unique("je sui claro"))