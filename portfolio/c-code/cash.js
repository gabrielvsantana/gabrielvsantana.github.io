#include <cs50.h>
#include <stdio.h>
#include <math.h>

float get_positive_float();

int main(void)
{
    // x = input
    float x_dollars = get_positive_float();
    int x_coins = round(x_dollars * 100);

    int quarter = 25, dime = 10, nickel = 5, penny = 1;

    // r for remainder; q for quotient
    int ra, qa, rb, qb, rc, qc, rd, qd;
    ra = qa = rb = qb = rc = qc = rd = qd = 0;

    // If the value of the coin is bigger than the input, it goes to the next if statement - otherwise it keeps on the same and jumps to the final sum of quotients:

    // If the change is bigger than the $0.25
    if (x_coins > quarter)
    {
        ra = x_coins % quarter;
        qa = x_coins / quarter;

        rb = ra % dime;
        qb = ra / dime;

        rc = rb % nickel;
        qc = rb / nickel;

        rd = rc % penny;
        qd = rc / penny;
    }

    // If the change is bigger than the $0.10
    else if (x_coins > dime || x_coins < quarter)
    {
        rb = x_coins % dime;
        qb = x_coins / dime;

        rc = rb % nickel;
        qc = rb / nickel;

        rd = rc % penny;
        qd = rc / penny;
    }

    // If the change is bigger than the $0.05
    else if (x_coins > nickel || x_coins < dime)
    {
        rc = x_coins % nickel;
        qc = x_coins / nickel;

        rd = rc % penny;
        qd = rc / penny;
    }

    // If the change is bigger than the $0.01
    else if (x_coins > penny || x_coins < nickel)
    {
        rd = x_coins % penny;
        qd = x_coins / penny;
    }

    // Sums each quotient, which equals to number of coins
    int y = qa + qb + qc + qd;

    // Print amount of coins
    printf("%i\n", y);
}

// Get positive float as input
float get_positive_float()
{
    float n;
    do
    {
        n = get_float("Change owed: ");
    }
    while (n < 0);
    return n;
}