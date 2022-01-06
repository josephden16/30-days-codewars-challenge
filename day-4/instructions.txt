Day 4: URL shortener
Kata Level: 5 Kyu

Problem Description
====================
Background Information
When do we use an URL shortener?
In your PC life you have probably seen URLs like this before:

https://bit.ly/3kiMhkU
If we want to share a URL we sometimes have the problem that it is way too long, for example this URL:

https://www.google.com/search?q=codewars&tbm=isch&ved=2ahUKEwjGuLOJjvjsAhXNkKQKHdYdDhUQ2-cCegQIABAA&oq=codewars&gs_lcp=CgNpbWcQAzICCAAyBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBggAEAUQHlDADlibD2CjEGgAcAB4AIABXIgBuAGSAQEymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=RJmqX8aGHM2hkgXWu7ioAQ&bih=1099&biw=1920#imgrc=Cq0ZYnAGP79ddM
In such cases a URL shortener is very useful.

How does it work?
The URL shortener is given a long URL, which is then converted into a shorter one. Both URLs are stored in a database. It is important that each long URL is assigned a unique short URL.

If a user then calls up the short URL, the database is checked to see which long URL belongs to this short URL and you are redirected to the original/long URL.

Important Note: Some URLs such as www.google.com are used very often. It can happen that two users want to shorten the same URL, so you have to check if this URL has been shortened before to save memory in your database.

Task
Write a class with two methods, shorten and redirect

URL Shortener
Write a method shorten, which receives a long URL and returns a short URL starting with short.ly/, consisting only of lowercase letters (and one dot and one slash) and max length of 13.

Note: short.ly/ is not a valid short URL.

Redirect URL
Write a method redirect, which receives the shortened URL and returns the corresponding long URL.

Performance
There are 475_000 random tests. You don't need a complicated algorithm to solve this kata, but iterating each time through the whole database to check if a URL was used before or generating short URLs based on randomness, won't pass.

GOOD LUCK AND HAVE FUN!

Link to kata: https://www.codewars.com/kata/5fee4559135609002c1a1841
