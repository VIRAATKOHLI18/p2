import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { personalInfo } from '@/data/portfolio';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-purple-600 to-blue-600 opacity-20"
              />
              <Avatar className="h-32 w-32 border-4 border-background shadow-2xl">
                <AvatarImage src="/Sunnyda.jpg" alt={personalInfo.name} />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-purple-600 text-white">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalInfo.tagline}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 transition-colors">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 transition-colors">
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <ArrowDown className="h-8 w-8 text-muted-foreground/70" />
        </motion.div>
      </div>
    </section>
  );
}