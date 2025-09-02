import { motion } from 'framer-motion';
import { Code2, Palette, Database, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { personalInfo, skills, experience } from '@/data/portfolio';

export function About() {
  const skillCategories = {
    frontend: { skills: skills.filter(skill => skill.category === 'frontend'), icon: Code2, color: 'from-blue-500 to-cyan-500' },
    backend: { skills: skills.filter(skill => skill.category === 'backend'), icon: Database, color: 'from-green-500 to-emerald-500' },
    tools: { skills: skills.filter(skill => skill.category === 'tools'), icon: Wrench, color: 'from-orange-500 to-red-500' },
    design: { skills: skills.filter(skill => skill.category === 'design'), icon: Palette, color: 'from-purple-500 to-pink-500' },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            {personalInfo.bio}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Code2 className="h-6 w-6 text-primary" />
              Skills & Technologies
            </h3>
            
            <div className="space-y-8">
              {Object.entries(skillCategories).map(([category, { skills: categorySkills, icon: Icon, color }]) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: Object.keys(skillCategories).indexOf(category) * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${color}`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      {category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Badge variant="secondary" className="text-sm px-4 py-2 bg-gradient-to-r from-secondary to-muted hover:from-primary hover:to-purple-600 hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Star className="h-6 w-6 text-primary" />
              Experience
            </h3>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, x: 30 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-xl text-primary">{exp.role}</h4>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">{exp.duration}</span>
                      </div>
                      <p className="font-semibold text-lg mb-3 text-foreground">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">{exp.description}</p>
                      
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary via-purple-600 to-blue-600 rounded-r-full"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: index * 0.3, ease: "easeOut" }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}