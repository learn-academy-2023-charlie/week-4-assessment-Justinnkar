# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Method that determines if a number is even or odd
reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def even_or_odd(number)
    if number % 2 == 0
      "#{number} is even"  # Return a string indicating the number is even
    else
      "#{number} is odd"  # Return a string indicating the number is odd
    end
  end
puts even_or_odd(reposts1)
puts even_or_odd(reposts2)
puts even_or_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(string)
    string.delete('aeiouAEIOU') # Remove all characters the matcht he given argument 
  end
  puts remove_vowels(beatles_album1)
  puts remove_vowels(beatles_album2)
  puts remove_vowels(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome?(string)
    normalized_string = string.downcase  # Convert the string to lowercase for case-insensitive comparison
    normalized_string == normalized_string.reverse  # Check if the string is equal to its reverse form
  end
  puts "#{palindrome_test_case1} is#{palindrome?(palindrome_test_case1) ? '' : ' not'} a palindrome"
  puts "#{palindrome_test_case2} is#{palindrome?(palindrome_test_case2) ? '' : ' not'} a palindrome"
  puts "#{palindrome_test_case3} is#{palindrome?(palindrome_test_case3) ? '' : ' not'} a palindrome"