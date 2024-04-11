// See https://aka.ms/new-console-template for more information
using System;
using System.Collections;
// Find the missing number 
Console.WriteLine("Hello, World!");
int n = 5;
int[] numbers = { 1, 2, 3, 5 };
// n = n * (n + 1 )/2
int sumOfNaturalNumbers = n * (n + 1)/2;

for  (int i = 0; i < numbers.Length; i++ )
{
    sumOfNaturalNumbers -= numbers[i];
    Console.WriteLine(sumOfNaturalNumbers);
}
Console.WriteLine("Missing number is: " + sumOfNaturalNumbers);