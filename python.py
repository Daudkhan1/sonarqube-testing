# Introduce a potential security issue: hardcoded password
password = "SuperSecret123"  # semgrep should catch hardcoded credentials

#  Introduce a bad function usage: eval()
user_input = "2  + 2"
result = eval(user_input)  # semgrep rule p/ci should catch unsafe eval usage

# Introduce a duplicate code issue
print("This is a duplicate line")
print("This is a duplicate line")
