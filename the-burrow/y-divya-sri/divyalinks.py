drawing = ["drawing-{}.jpg".format(i) for i in range(10, 17)]
writing = ["writing-{}.jpg".format(i) for i in range(20, 27)]
dish =    ["dish-{}.jpg".format(i)    for i in range(27, 34)]

l_drawing = ['<a href="img/{}"><img width="745" height="1064" src="thumbs/{}"></a>\n'.format(x, x) for x in drawing]
l_writing = ['<a href="img/{}"><img width="745" height="1064" src="thumbs/{}"></a>\n'.format(x, x) for x in writing]
l_dish = ['<a href="img/{}"><img width="745" height="1064" src="thumbs/{}"></a>\n'.format(x, x) for x in dish]

collected = ""
for i in range(7):
    collected += "{}{}{}\n".format(l_drawing[i], l_writing[i], l_dish[i])



# print(l_drawing)
# print("\n")
# print(l_writing)
# print("\n")
# print(l_dish)
print(collected)
print("\n\n")
print("".join(l_drawing))
print("".join(l_writing))
print("".join(l_dish))
