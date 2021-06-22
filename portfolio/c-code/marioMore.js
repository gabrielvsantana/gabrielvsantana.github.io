#include <cs50.h>
#include <stdio.h>

int get_positive_integer();

int main(void)
{
    // Prompt user for height
    int input = get_positive_integer();

    // Define the two chars the piramid is going to be made of
    char block = '#';
    char space = ' ';

    // Initialize some variables to be used in the following loop
    int bricks0 = 1;
    int n_of_spaces = input - bricks0;

    // Loop for each line of the piramid
    for (int height = 0; height < input; height++)
    {
        // Spaces before the first piramid
        while (n_of_spaces > height)
        {
            printf("%c", space);
            n_of_spaces--;
        }

        // First piramid
        for (int bricks1 = -1; bricks1 < height; bricks1++)
        {
            printf("%c", block);
        }
        printf("  ");

        // Second piramid
        for (int bricks2 = -1; bricks2 < height; bricks2++)
        {
            printf("%c", block);
        }
        printf("\n");

        // Descrease numbers of space before the first piramid
        n_of_spaces = input - bricks0;
    }
}

// Get positive input between 1 and 8
int get_positive_integer()
{
    int n;
    do
    {
        n = get_int("Height: ");
    }
    while (n < 1 || n > 8);
    return n;
}