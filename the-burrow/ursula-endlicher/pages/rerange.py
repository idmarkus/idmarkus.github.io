import re

# inw = 800
# inh = 720


# left_e = re.compile(r'left: (?P<n>[0-9]+)px')
# top_e = re.compile(r'top: (?P<n>[0-9]+)px')

# leftsub = lambda m: "left: " + str((int(m.group('n')) / 800) * 100) + "vw"
# topsub = lambda m: "top: " + str((int(m.group('n')) / 720) * 100) + "vh"

# with open("roots1.html", 'r') as f:
#     html = f.read();
#     re.sub(left_e, leftsub, html)
#     re.sub(top_e, topsub, html)
#     print(html)

# exp = re.compile(r'<META\s*HTTP-EQUIV\s*=\s*"REFRESH"\s*CONTENT\s*=\s*"[\s\S]*?"/?>')
exp = re.compile(r'<(META|meta) [\s\S]+?>')
expbody = re.compile(r'body {')
exp3 = re.compile(r'no-repeat;"')
for i in range(1, 52):
    with open('roots{}.html'.format(i), 'r', encoding="utf-8") as f, open("parsed{}.html".format(i), 'w+', encoding="utf-8") as f2:
        html = f.read()
        newhtml = re.sub(exp, "", html)
        newhtml = re.sub(expbody, "body {overflow:hidden;", newhtml)
        newhtml = re.sub(exp3, "no-repeat;", newhtml)
        f2.write(newhtml)
