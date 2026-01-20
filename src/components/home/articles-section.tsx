'use client';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const ArticlesSection = () => {
    return (
        <div className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Insights & Articles</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                    Exploring topics in data analytics, operations, and business intelligence.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => {
                    const articleImage = PlaceHolderImages.find(p => p.id === article.imageUrl);
                    return (
                        <Card key={article.id} className="flex flex-col bg-card/60 border-border/20 backdrop-blur-sm overflow-hidden group transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                            {articleImage && (
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={articleImage.imageUrl}
                                        alt={article.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        data-ai-hint={articleImage.imageHint}
                                    />
                                    <div className="absolute top-3 right-3 text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-primary-foreground bg-primary/70">
                                        {article.category}
                                    </div>
                                </div>
                            )}
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5" />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="h-3.5 w-3.5" />
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                    {article.description}
                                </p>
                                <Link href={article.articleUrl} className="font-semibold text-primary inline-flex items-center group/link">
                                    Read Full Article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
             <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild>
                    <Link href="#">
                        View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default ArticlesSection;
