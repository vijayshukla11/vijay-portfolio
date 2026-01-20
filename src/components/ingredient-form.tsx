'use client';

import { useActionState } from 'react';
import { getRecipes, type RecipeState } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LoaderCircle, Sparkles, Salad, UtensilsCrossed } from 'lucide-react';

const initialState: RecipeState = {
  recipes: null,
  error: null,
};

export function IngredientForm() {
  const [state, formAction, isPending] = useActionState(getRecipes, initialState);

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <form action={formAction} className="space-y-6 bg-card p-6 rounded-lg shadow-sm">
          <div className="space-y-2">
            <label htmlFor="ingredients" className="text-lg font-medium text-foreground">
              What's in your fridge?
            </label>
            <p className="text-sm text-muted-foreground">
              Enter the ingredients you have available, separated by commas.
            </p>
          </div>
          <Textarea
            id="ingredients"
            name="ingredients"
            placeholder="e.g., chicken breast, broccoli, garlic, soy sauce"
            rows={4}
            required
            className="text-base"
          />
          <Button type="submit" disabled={isPending} size="lg" className="w-full sm:w-auto">
            {isPending ? (
              <>
                <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Recipes
              </>
            )}
          </Button>
        </form>

        <div className="mt-12">
          {isPending && (
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">The chef is crafting some recipes for you...</p>
            </div>
          )}

          {state?.error && !isPending && (
            <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-center text-destructive">
              <p>
                <strong>Oops!</strong> {state.error}
              </p>
            </div>
          )}

          {!isPending && !state?.recipes && !state?.error && (
            <div className="space-y-4 pt-8 text-center text-muted-foreground">
              <Salad className="mx-auto h-16 w-16" />
              <h2 className="text-xl font-semibold text-foreground">Ready to cook?</h2>
              <p>Enter your ingredients above and let's find your next meal!</p>
            </div>
          )}

          {state?.recipes && !isPending && (
            <Card className="mt-12 border-accent/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-headline text-accent">
                  <UtensilsCrossed />
                  Recipe Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-wrap font-body text-base leading-relaxed text-foreground/90">
                  {state.recipes}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
