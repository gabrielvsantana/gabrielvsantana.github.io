#include <cs50.h>
#include <stdio.h>

int get_positive_integer(void);

int main(void)
{
    // Prompts user for height
    int height = get_positive_integer();

    // Initialize some variables to be used in the following loop
    int width = 0;
    int space = height - 1;
    int i = 0;

    // Loop for each line of the piramid
    for (int height2 = 0; height2 < height; height2++)
    {
        while (i < space)
        {
            printf(" ");
            i++;
        }
        do
        {
            printf("#");
            width++;
        }
        while (width < height2);
        printf("\n");

        // Reset variables so the loop can go all over again to make the piramid
        width = -1;
        i = 0;
        space--;
    }
}

// Get a positive number in between 1 and 8
int get_positive_integer(void)
{
    int n;
    do
    {
        n = get_int("Height: ");
    }
    while (n < 1 || n > 8);
    return n;
}
