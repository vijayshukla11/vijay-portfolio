'use server';

/**
 * @fileOverview A flow for generating a professional portfolio biography.
 *
 * - generateBio - A function that takes user notes and returns a polished bio.
 * - GenerateBioInput - The input type for the generateBio function.
 * - GenerateBioOutput - The return type for the generateBio function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateBioInputSchema = z.object({
  notes: z.string().describe('A few sentences or bullet points about skills, experience, and career goals.'),
});
export type GenerateBioInput = z.infer<typeof GenerateBioInputSchema>;

const GenerateBioOutputSchema = z.object({
  bio: z.string().describe('A professionally written, third-person summary for a portfolio website, between 2-4 sentences long.'),
});
export type GenerateBioOutput = z.infer<typeof GenerateBioOutputSchema>;

export async function generateBio(input: GenerateBioInput): Promise<GenerateBioOutput> {
  return generateBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBioPrompt',
  input: { schema: GenerateBioInputSchema },
  output: { schema: GenerateBioOutputSchema },
  prompt: `You are a professional resume writer and career coach. Based on the following notes, write a compelling and professional third-person summary for a portfolio website. Keep it concise, between 2 and 4 sentences.

Notes:
{{{notes}}}`,
});

const generateBioFlow = ai.defineFlow(
  {
    name: 'generateBioFlow',
    inputSchema: GenerateBioInputSchema,
    outputSchema: GenerateBioOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
