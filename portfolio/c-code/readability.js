#include <cs50.h>
#include <stdio.h>
#include <string.h>

int count_letters();
int count_words();
int count_sentences();

int main(void)
{
    // Prompt the user for the text
    string input = get_string("Text: ");
    float letters = count_letters(input);
    float words = count_words(input);
    float sentences = count_sentences(input);
    
    // Coleman-Liau Index Formula ► L: Average nº of letters per 100 words, S: Average nº of sentences per 100 words CLI = 0.0588L - 0.296S - 15.8
    float l = (letters / words) * 100;
    float s = (sentences / words) * 100;
    float index = (0.0588 * l) - (0.296 * s) - 15.8;
    
    if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (index > 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %.f\n", index);
    }
}

// Count the amount of letters
int count_letters(string input)
{
    int letters;
    for (int i = 0, j = 0, n = strlen(input); i < n; i++)
    {
        // Count characters from a to z, and A to Z
        if ((input[i] >= 'a' && input[i] <= 'z') || (input[i] >= 'A' && input[i] <= 'Z'))
        {
            j++;
        }
        letters = j;
    }
    return letters;
}

// Count the amount of words
int count_words(string input)
{
    int words;
    for (int i = 0, j = 0, n = strlen(input); i < n; i++)
    {
        // Count words by checking the current letter and the next one
        if (((input[i] >= 'a' && input[i] <= 'z') || (input[i] >= 'A' && input[i] <= 'Z')) && (input[i + 1] ==
                ' ' || input[i + 1] == '\0' || input[i + 1] == ',' || input[i + 1] == '.' || input[i + 1] == ':' ||
                input[i + 1] == ';' || input[i + 1] == '!' || input[i + 1] == '?'))
        {
            j++;
        }
        words = j;
    }
    return words;
}

// Count the amount of sentences
int count_sentences(string input)
{
    int sentences;
    for (int i = 0, j = 0, n = strlen(input); i < n; i++)
    {
        // Count sentences by analyzing any periods, exclamation point or question mark
        if (input[i] == '.' || input[i] == '!' || input[i] == '?')
        {
            j++;
        }
        sentences = j;
    }
    return sentences;
}