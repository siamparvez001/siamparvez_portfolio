import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion"

const skills = [
  "Html", "tailwind", "JavaScript", "React", "Next.js", "Node.js",
  "MongoDB", "Express", "Git",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">About Me</h2>
          <div className="h-0.5 w-12 bg-black dark:bg-white mx-auto"></div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          <StaggerItem>
            <div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">


                I'm Siam Parvez, a passionate MERN Stack Developer from Dhaka, Bangladesh. I love building fast, scalable, and beautiful web applications — from clean UI with React & Next.js to robust backends with Node.js, Express, and MongoDB. I'm always learning, always building, and always pushing to write better code.

              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate about shipping reliable apps, learning new tools, and contributing to open-source when
                I can.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}