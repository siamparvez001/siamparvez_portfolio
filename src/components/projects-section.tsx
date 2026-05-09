import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { ScrollReveal, StaggerContainer, StaggerItem, TiltCard } from "@/components/motion"

const projects = [
  {
    id: 4,
    name: "Skill Sphere",
    icon: "🧠",
    description: "SkillSphere is an online learning platform where people can explore courses, watch lessons, and build new skills. The platform has courses on Web Development, Design, Marketing, Data Science, and more.",
    demo: "https://skill-sphere-theta-henna.vercel.app/",
    technology: ["React", "Note.js", "MongoDB"],
    note: "Developed web application using React"
  },
  {
    id: 5,
    name: "Pixgen",
    icon: "💳",
    description: "An AI-powered image generation platform where users can turn text prompts into stunning visuals — with gallery, pricing, and user authentication.",
    demo: "https://pixgen-black.vercel.app/",
    technology: ["React", "Note.js", "MongoDB"],
  },
  {
    id: 6,
    name: "Digi Tools",
    icon: "📊",
    description: "A marketplace where users can browse and purchase subscriptions for various AI tools — all in one place",
    demo: "https://frolicking-raindrop-10bb00.netlify.app/",
    technology: ["React", "JavaScript", "Tailwind Css"],
  },
  {
    id: 7,
    name: "English Janala",
    icon: "🌐",
    description: "A Bengali-English learning platform with interactive vocabulary lessons and structured courses for Bangla-speaking learners.",
    demo: "https://siamparvez001.github.io/ENGLISH-JANALA/",
    technology: ["React", "JavaScript", "Tailwind Css"],
  },
 
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground text-sm">Recent work and personal projects</p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <TiltCard className="h-full">
                <Card className="group hover:shadow-md transition-shadow gap-1 h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{project.icon}</span>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {project.technology.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs px-2 py-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.demo && (
                        <Link href={project.demo} target="_blank">
                          <Button variant="default" size="sm" className="h-8 text-xs">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Demo
                          </Button>
                        </Link>
                      )}
                      {/* {project.demoAPP && (
                        <Link href={project.demoAPP} target="_blank" rel="noopener noreferrer">
                          <Button variant="default" size="sm" className="h-8 text-xs">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Android
                          </Button>
                        </Link>
                      )} */}
                      {/* {"demoIOS" in project && project.demoIOS && (
                        <Link href={project.demoIOS} target="_blank" rel="noopener noreferrer">
                          <Button variant="default" size="sm" className="h-8 text-xs">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            iOS
                          </Button>
                        </Link>
                      )} */}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="text-center mt-8" delay={0.08}>
          <Link href="https://github.com/siamparvez001" target="_blank">
            <Button variant="outline" size="sm" className="h-9 cursor-pointer">
              <Github className="mr-2 h-4 w-4" />
              More on GitHub
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
} 