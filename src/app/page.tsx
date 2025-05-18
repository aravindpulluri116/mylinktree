"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/social-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Github, Linkedin, Instagram, Twitter, Mail, Globe, Code, Monitor, Cpu, Sparkles, Heart, Book, GraduationCap } from "lucide-react";

export default function Home() {
  const links = [
    {
      id: "promptperfect",
      title: "Prompt Perfect (Chrome Extension)",
      url: "https://chromewebstore.google.com/detail/prompt-perfect-ai-prompt/kigfbkddbfgbdbdekajodpggpkpfdjfp",
      icon: <Monitor className="h-5 w-5 mr-2" />,
      delay: "delay-100"
    },
     {
      id: "firebase",
      title: "Firebase",
      url: "https://firebase.google.com/?mcp_token=eyJwaWQiOjI2OTI3NDcsInNpZCI6NzAwODY4MTI0LCJheCI6ImQyZWUwY2RjZmM2OGI5MGFhYjI3ODU0MWFlZmVlZWU4IiwidHMiOjE3NDczMjQ5NDQsImV4cCI6MTc0OTc0NDE0NH0.rXtxbbpQcMDtDjjdCCW79F8Ny7PgVI1Q0mo1ZTFhZdE&fbclid=PAQ0xDSwKS72ZleHRuA2FlbQIxMAABp1YJT9QN6vZf6QSgEN6KfEbPeybBLdf2tNWAAOG6sPvtDTw-qgAeWRXQUk10_aem_lmQqSAsftJPbV2KAEB8J0g",
      icon: <Globe className="h-5 w-5 mr-2" />, 
      delay: "delay-700"
    },
    {
      id:"examside",
      title:"ExamSide",
      url:"https://questions.examside.com/",
      icon:<GraduationCap className="h-5 w-5 mr-2"/>,
      delay:"delay-100"
    }
    ,{
      id: "lovable",
      title: "Lovable.dev",
      url: "https://lovable.dev/",
      icon: <Heart className="h-5 w-5 mr-2" />,
      delay: "delay-100"
    },
    {
      id: "trae",
      title: "Trae.ai",
      url: "https://www.trae.ai/",
      icon: <Sparkles className="h-5 w-5 mr-2" />,
      delay: "delay-100"
    },
    {
      id: "ebooks",
      title: "Programming Notes",
      url: "https://topperworld.in/e-books/",
      icon: <Book className="h-5 w-5 mr-2" />,
      delay: "delay-700"
    },
    {
      id: "contact",
      title: "Contact Me",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=pulluriaravind@gmail.com",
      icon: <Mail className="h-5 w-5 mr-2" />,
      delay: "delay-700"
    },
   ,
  ];

  const socialLinks = [
    { id: "github", href: "https://github.com/aravindpulluri116", icon: Github },
    { id: "linkedin", href: "https://www.linkedin.com/in/aravind-pulluri-101291334/", icon: Linkedin },
    { id: "instagram", href: "https://instagram.com/techy.aravind", icon: Instagram },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <ThemeToggle />
      <div className="container max-w-md mx-auto flex flex-col items-center gap-8 py-8">
        <header className="flex flex-col items-center text-center animate-fade-in">
          <div className="relative">
            <Avatar className="h-32 w-32 ring-4 ring-blue-500 dark:ring-blue-400 border-2 border-white dark:border-zinc-800 shadow-xl shadow-blue-500/30 dark:shadow-blue-400/20 relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:ring-4 before:ring-blue-500/70 dark:before:ring-blue-400/70 before:duration-500 before:ease-linear">
              <AvatarImage src="/avatar-placeholder.png" alt="Aravind" />
              <AvatarFallback className="text-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                AR
              </AvatarFallback>
            </Avatar>
            <div 
              className="absolute -bottom-1 -right-1 bg-cyan-500 dark:bg-cyan-400 text-white dark:text-zinc-900 text-xs font-medium rounded-full w-6 h-6 flex items-center justify-center animate-bounce cursor-pointer"
              onClick={() => {
                const random = Math.random() > 0.5;
                window.open(random 
                  ? 'https://www.linkedin.com/in/aravind-pulluri-101291334/'
                  : 'https://instagram.com/techy.aravind', '_blank');
              }}
            >
              <Code className="h-3 w-3" />
            </div>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">@techy.aravind</h1>
          <p className="mt-2 text-zinc-700 dark:text-gray-300 text-sm">Exploring the future ; One byte at a time </p>
          <p className="text-zinc-500 dark:text-gray-400 text-xs mt-1">Check Bottom</p>
        </header>

        <section className="w-full space-y-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full transform transition-all hover:scale-105 hover:translate-x-1 animate-fade-in-up ${link.delay}`}
            >
              <Card className="backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 bg-white/90 dark:bg-zinc-800/50 hover:bg-gray-50 dark:hover:bg-zinc-700/50 transition-colors p-0 overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20 hover:shadow-blue-500/10">
                <Button
                  variant="ghost"
                  className="w-full rounded-md text-zinc-800 dark:text-white flex justify-start items-center p-4 h-auto"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Button>
              </Card>
            </a>
          ))}
        </section>

        <footer className="mt-4 w-full flex flex-col items-center space-y-4 animate-fade-in-up delay-800">
          <div className="flex items-center space-x-3">
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.id}
                href={link.href}
                icon={link.icon}
                className="bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 hover:scale-110 transition-transform"
              />
            ))}
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs">© 2025 Aravind Pulluri</p>
        </footer>
      </div>
    </main>
  );
}
