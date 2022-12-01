#!/usr/bin/python3

if __name__ == '__main__':
    import sys

    index = len(sys.argv) - 1
    total = 0    
    for b in range(index):
        total += int(sys.argv[b+1])
    print("{}".format(total))
