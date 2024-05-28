A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.


exemple  with 4 steps:
-you can hop 1 step
or
-you can hop 2
or 
-you can hop 3
at a time !

How many ways you can run up the stairs ?

steps = 4;
 WAY 1:  1 + 1 + 1 + 1 = 4
 WAY 2: 1 + 1 + 2 = 4
 WAY 3: 1 + 2 + 1 = 4
 WAY 4: 1 + 3 = 4
 Way 5: 2 + 1 + 1 = 4
 Way 6: 2 + 2 = 4
 Way 7: 3 + 1 = 4
 
So 7 different ways !

We can do a if else if else to check if we have steps left to hop or not and if yes then try n-1 OR n-2 OR n-3 !

if a number is = 0 then we return 1
else if that number is < 0 then we rerturn 0