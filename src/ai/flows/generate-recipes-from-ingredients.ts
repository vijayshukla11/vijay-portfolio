'use server';

/**
 * @fileOverview Generates recipe suggestions based on available ingredients.
 *
 * - generateRecipesFromIngredients - A function that generates recipe suggestions.
 * - GenerateRecipesInput - The input type for the generateRecipesFromIngredients function.
 * - GenerateRecipesOutput - The return type for the generateRecipesFromIngredients function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRecipesInputSchema = z.object({
  ingredients: z
    .string()
    .describe('A comma-separated list of ingredients the user has available.'),
});
export type GenerateRecipesInput = z.infer<typeof GenerateRecipesInputSchema>;

const GenerateRecipesOutputSchema = z.object({
  recipes: z
    .string()
    .describe(
      'A list of recipe suggestions based on the provided ingredients, with instructions, cooking time, and nutritional information for each recipe.'
    ),
});
export type GenerateRecipesOutput = z.infer<typeof GenerateRecipesOutputSchema>;

export async function generateRecipesFromIngredients(
  input: GenerateRecipesInput
): Promise<GenerateRecipesOutput> {
  return generateRecipesFromIngredientsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRecipesFromIngredientsPrompt',
  input: {schema: GenerateRecipesInputSchema},
  output: {schema: GenerateRecipesOutputSchema},
  prompt: `You are a professional chef. Generate recipe suggestions based on the ingredients provided by the user. Include instructions, cooking time, and nutritional information for each recipe.

Ingredients: {{{ingredients}}}`,
});

const generateRecipesFromIngredientsFlow = ai.defineFlow(
  {
    name: 'generateRecipesFromIngredientsFlow',
    inputSchema: GenerateRecipesInputSchema,
    outputSchema: GenerateRecipesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
