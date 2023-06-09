import argparse
import os
import re

import pyphen

def main():
    for fname in args.files:
        if not os.path.isfile(fname):
            print("ERR: Not a file: {}".format(fname))
            continue
        string = u'<div class="text-inner">'
        with open(fname, "r", encoding="utf-8") as f:
            lines = f.read()
            for line in lines.split("\n\n"):
                tag = "p"
                wrk = line
                if line[:4] == "<img":
                    string += line + '\n\n'
                    continue
                if line[:2] == "<h" and line[3] == ">":
                    tag = line[1:3]
                    wrk = line[3:-4]

                outstr = u""
                for word in wrk.split(" "):
                    outstr += "{} ".format(dic.inserted(word, hyphen='&#173;'))
                string += '<{tag} lang="en">{txt}</{tag}>\n\n'.format(tag=tag, txt=outstr)
        string += '</div>'
        # print(string)
        # outname = fname[:-4] + ".html" if fname[-4] == "." else fname + ".html"
        outname = fname + ".paragraphized.html"
        with open(outname, "w+", encoding="utf-8") as f:
            f.write(string)
            
if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("files", type=str, nargs='+')
    args = parser.parse_args()

    dic = pyphen.Pyphen(lang='en', left=3, right=3)
    main()
