import { motion } from 'framer-motion';
import { Github, Mail, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-background via-muted/20 to-background border-t border-border/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-muted-foreground font-medium">{personalInfo.tagline}</p>
          </div>

          <div className="flex items-center space-x-6">
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 transition-all duration-300">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 transition-all duration-300">
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 font-medium">
            © {new Date().getFullYear()} {personalInfo.name}. Made with
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            and lots of coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}