#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

int main(int argc, string argv[])
{
    // Checks if there's only one command-line argument
    if (argc != 2)
    {
        printf("ERROR 666, missing right command-line\n");
        return 1;
    }

    // A loop to check if the string is only made by numeric characters
    for (int i = 0, j = 0, n = strlen(argv[1]); i < n; i++)
    {
        // If there's any other character, the software doesn't execute
        if (argv[1][i] < '0' || argv[1][i] > '9')
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
        else
        {
            // If it's a number, it sums up to the variable 'j' and if 'j' it's equal to the length of the command-line argument, it executes
            j++;
            if (j == n)
            {
                // Converts argv to int
                int key = atoi(argv[1]);
                string plaintext = get_string("plaintext: ");
                printf("ciphertext: ");

                // Loop to convert each char of the plaintext string to the ciphertext
                for (int k = 0, m = strlen(plaintext); k < m; k++)
                {
                    // Checks if it's upper case, lower case or neutral
                    if (isupper(plaintext[k]))
                    {
                        // Converts each char using caesar’s algorithm, subtracting by the ASCII value and adding it again in the end
                        int cipherchar = ((plaintext[k] - 65) + key) % 26;
                        cipherchar += 65;
                        printf("%c", cipherchar);
                    }
                    else if (islower(plaintext[k]))
                    {
                        int cipherchar = ((plaintext[k] - 97) + key) % 26;
                        cipherchar += 97;
                        printf("%c", cipherchar);
                    }
                    else
                    {
                        printf("%c", plaintext[k]);
                    }
                }
                printf("\n");
                return 0;
            }
        }
    }
}