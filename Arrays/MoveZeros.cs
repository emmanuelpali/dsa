using System;
using System.Collections;

Console.WriteLine("Hello, World!");
int[] numbers = {0,1,0,4,12};
int left = 0;
int right = 0;
while(right < numbers.Length)
{
    if(numbers[right] != 0)
    {
        (numbers[left], numbers[right]) = (numbers[right], numbers[left]);
        left++;
    }
        right++;
}
foreach(int x in numbers)
{
    Console.WriteLine(x);
}

Console.WriteLine("finished");