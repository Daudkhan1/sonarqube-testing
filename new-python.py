import os
import sys

def run_command(command):
    """
    SECURITY VULNERABILITY:
    This function is vulnerable to command injection because it executes
    a command directly from an unsanitized input string.
    """
    os.system(f"echo {command}")

def check_password(user_input):
    """
    CORRECTNESS/SECURITY ISSUE:
    This function has a hardcoded password. Secrets like passwords
    should never be stored directly in code.
    """
    # Hardcoded password
    # Semgrep should flag this.
    if user_input == "super":
        return True
    return False

def process_data(data):
    """
    PERFORMANCE ISSUE:
    This function uses a highly inefficient nested loop, which
    will be very slow for large datasets.
    """
    result = []
    # This is an intentional performance issue.
    for x in data:
        for y in data:
            if x == y:
                result.append(x)
    return result

if __name__ == "__main__":
    if len(sys.argv) > 1:
        user_input = sys.argv[1]
        print(f"Executing command for: {user_input}")
        run_command(user_input)

    # Example usage of the other functions
    print(f"Password check result: {check_password('wrong_password')}")
    
    large_list = list(range(100))
    print("Processing a large list...")
    # This call will be slow but will show the performance issue.
    processed_list = process_data(large_list)
    print(f"Processed list size: {len(processed_list)}")
