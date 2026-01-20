'use server';

import { z } from 'zod';
import { generateRecipesFromIngredients } from '@/ai/flows/generate-recipes-from-ingredients';

const schema = z.object({
  ingredients: z.string().min(3, { message: 'Please enter at least one ingredient.' }),
});

export interface RecipeState {
  recipes: string | null;
  error: string | null;
}

export async function getRecipes(prevState: RecipeState, formData: FormData): Promise<RecipeState> {
  const validatedFields = schema.safeParse({
    ingredients: formData.get('ingredients'),
  });

  if (!validatedFields.success) {
    return {
      recipes: null,
      error: validatedFields.error.flatten().fieldErrors.ingredients?.[0] || 'Invalid input.',
    };
  }

  try {
    const result = await generateRecipesFromIngredients({ ingredients: validatedFields.data.ingredients });
    if (result.recipes) {
      return { recipes: result.recipes, error: null };
    }
    return { recipes: null, error: 'Could not generate recipes. Please try again.' };

  } catch (error) {
    console.error(error);
    return {
      recipes: null,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
