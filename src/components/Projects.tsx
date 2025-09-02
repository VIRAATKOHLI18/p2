import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/10 to-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-2 hover:border-primary/20 transition-all duration-500 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card to-muted/20">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Zap className="h-6 w-6 text-white drop-shadow-lg" />
                  </motion.div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.1) + (techIndex * 0.05),
                          type: "spring"
                        }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs px-3 py-1 bg-gradient-to-r from-secondary to-muted hover:from-primary hover:to-purple-600 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    
                    {project.demoUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          size="sm" 
                          asChild
                          className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}