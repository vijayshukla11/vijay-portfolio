import { resumeHighlights } from "@/lib/data";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Download, Star } from "lucide-react";

const ResumeSection = () => (
    <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Resume Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-left">
            {resumeHighlights.slice(0, 8).map((highlight, i) => (
                <Card key={i} className="bg-card/50">
                    <CardContent className="p-4 flex items-start gap-3">
                        <Star className="h-5 w-5 mt-1 text-yellow-400 flex-shrink-0" />
                        <p className="text-sm text-card-foreground">{highlight}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
        <Button size="lg" asChild>
            <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Full Resume
            </a>
        </Button>
    </div>
);

export default ResumeSection;
