#include <cs50.h>
#include <stdio.h>

long get_positive_number();

int main(void)
{
    long user_input = get_positive_number();

    // Gets last digit
    int d1 = user_input % 10;

    // Gets second-to-last digit by subtracting the last digit and dividing by 10
    long inputd1 = user_input - d1;
    inputd1 = inputd1 / 10;
    int d2 = inputd1 % 10;

    long inputd2 = inputd1 - d2;
    inputd2 = inputd2 / 10;
    int d3 = inputd2 % 10;

    long inputd3 = inputd2 - d3;
    inputd3 = inputd3 / 10;
    int d4 = inputd3 % 10;

    long inputd4 = inputd3 - d4;
    inputd4 = inputd4 / 10;
    int d5 = inputd4 % 10;

    long inputd5 = inputd4 - d5;
    inputd5 = inputd5 / 10;
    int d6 = inputd5 % 10;

    long inputd6 = inputd5 - d6;
    inputd6 = inputd6 / 10;
    int d7 = inputd6 % 10;
    
    long inputd7 = inputd6 - d7;
    inputd7 = inputd7 / 10;
    int d8 = inputd7 % 10;

    long inputd8 = inputd7 - d8;
    inputd8 = inputd8 / 10;
    int d9 = inputd8 % 10;

    long inputd9 = inputd8 - d9;
    inputd9 = inputd9 / 10;
    int d10 = inputd9 % 10;

    long inputd10 = inputd9 - d10;
    inputd10 = inputd10 / 10;
    int d11 = inputd10 % 10;

    long inputd11 = inputd10 - d11;
    inputd11 = inputd11 / 10;
    int d12 = inputd11 % 10;

    long inputd12 = inputd11 - d12;
    inputd12 = inputd12 / 10;
    int d13 = inputd12 % 10;

    long inputd13 = inputd12 - d13;
    inputd13 = inputd13 / 10;
    int d14 = inputd13 % 10;

    long inputd14 = inputd13 - d14;
    inputd14 = inputd14 / 10;
    int d15 = inputd14 % 10;

    long inputd15 = inputd14 - d15;
    inputd15 = inputd15 / 10;
    int d16 = inputd15 % 10;

    // Multiplying every other digit from second-to-last ** m for multiplied
    int md2 = d2 * 2;
    int md4 = d4 * 2;
    int md6 = d6 * 2;
    int md8 = d8 * 2;
    int md10 = d10 * 2;
    int md12 = d12 * 2;
    int md14 = d14 * 2;
    int md16 = d16 * 2;

    // Gets each digit of those multiplied digits above
    int md2a = md2 % 10; 
    int md2b = md2 - md2a;
    md2b = md2b / 10;
    md2b = md2b % 10;

    int md4a = md4 % 10; 
    int md4b = md4 - md4a;
    md4b = md4b / 10;
    md4b = md4b % 10;

    int md6a = md6 % 10; 
    int md6b = md6 - md6a;
    md6b = md6b / 10;
    md6b = md6b % 10;

    int md8a = md8 % 10; 
    int md8b = md8 - md8a;
    md8b = md8b / 10;
    md8b = md8b % 10;

    int md10a = md10 % 10; 
    int md10b = md10 - md10a;
    md10b = md10b / 10;
    md10b = md10b % 10;

    int md12a = md12 % 10; 
    int md12b = md12 - md12a;
    md12b = md12b / 10;
    md12b = md12b % 10;

    int md14a = md14 % 10; 
    int md14b = md14 - md14a;
    md14b = md14b / 10;
    md14b = md14b % 10;

    int md16a = md16 % 10; 
    int md16b = md16 - md16a;
    md16b = md16b / 10;
    md16b = md16b % 10;

    // Sums up all the digits of this first group, e.g. even variables
    int result_even_a = md2a + md2b + md4a + md4b + md6a + md6b + md8a + md8b + md10a;
    int result_even_b = md10b + md12a + md12b + md14a + md14b + md16a + md16b;
    int result_even = result_even_a + result_even_b;

    // Sums up all the digits that remained intact, e.g. odd variables
    int result_odd = d1 + d3 + d5 + d7 + d9 + d11 + d13 + d15;

    int result = result_even + result_odd;
    int result_last_digit = result % 10;

    if (d15 == 3 && (d14 == 4 || d14 == 7) && result_last_digit == 0)
    {
        printf("AMEX\n");
    }
    else if (d16 == 5 && (d15 == 1 || d15 == 2 || d15 == 3 || d15 == 4 || d15 == 5) && result_last_digit == 0)
    {
        printf("MASTERCARD\n");
    }
    else if ((d13 == 4 || d16 == 4) && result_last_digit == 0)
    {
        printf("VISA\n");
    }
    else
    {
        printf("INVALID\n");
    }
}

//Get a positive number
long get_positive_number()
{
    long n;
    do
    {
        n = get_long("Number: ");
    }
    while (n < 1);
    return n;
}