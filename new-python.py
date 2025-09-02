# This file is for testing the Semgrep GitHub Action.
# It contains intentional security, correctness, and performance issues
# that should be caught by the standard rule packs.

import os
import requests
import json
import time

# --- P/SECURITY TEST CASE ---
# The p/security rule pack should flag this line.
# It uses an insecure method (os.system) with untrusted user input,
# which is a classic command injection vulnerability.
def execute_insecure_command(user_input):
    # ruleid: python.os.injection.os-system-injection
    os.system("echo Hello, " + user_input)

# --- P/CORRECTNESS TEST CASE ---
# The p/correctness rule pack should flag this.
# The 'result' variable is used before it is assigned a value in the 'if' block.
def check_for_empty_list(data_list):
    if not data_list:
        return "List is empty."
    else:
        result = "List is not empty."
    # ruleid: python.correctness.is-or-is-not.is-or-is-not
    if result is "List is not empty.":
        print(result)

# --- P/PERFORMANCE TEST CASE ---
# The p/performance rule pack should flag this.
# Concatenating a string inside a loop with a fixed-size list is inefficient.
# Using `str.join()` is the idiomatic and performant way to build a string.
def inefficient_string_builder():
    start_time = time.time()
    s = ""
    for i in range(10000):
        s += "a"
    end_time = time.time()
    print("Inefficient concatenation took: {} seconds".format(end_time - start_time))
    
# Function calls to avoid Semgrep warnings about unused functions
if __name__ == "__main__":
    execute_insecure_command("test")
    check_for_empty_list([1, 2, 3])
    inefficient_string_builder()
