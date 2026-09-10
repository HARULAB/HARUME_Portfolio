import DetailsInfo from "@/components/DetailsInfo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { motion } from "framer-motion";
import { FaTwitter, FaDiscord, FaInstagram, FaGithub } from "react-icons/fa";
import { withBase } from "@/utils/paths";
import { SOCIAL_LINKS } from "@/data/social";
import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  const socialLinks = [
    { name: "Twitter (X)", url: "https://twitter.com/your_x_account", icon: <FaTwitter /> },
    { name: "Discord", url: "https://discord.gg/yourdiscord", icon: <FaDiscord /> },
    { name: "Instagram", url: "#", icon: <FaInstagram /> },
    { name: "GitHub", url: "#", icon: <FaGithub /> },
  ];

  return (
    <Providers>
      <div className="min-h-screen flex flex-col bg-[var(--bg-primary)]">
      <Header />

      <main className="flex-1 w-full">
        <Container className="pb-32 md:pb-20 pt-12 md:pt-40 lg:pt-48">

        <div className="flex flex-col items-center gap-12 max-w-3xl mx-auto">
          {/* Left Column: Profile Image & Basic Info */}
          <motion.div 
            className="w-full flex flex-col gap-8 items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full">
               <img
                  src={withBase("/HARUME_icon.jpg")}
                  alt="HARUME Logo"
                  className="w-full h-full object-cover"
                />
            </div>
            
            <div className="flex flex-col gap-4">
               <h2 className="text-2xl font-black text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                 HARUME / 晴芽
               </h2>
            </div>
          </motion.div>

          {/* Right Column: DetailsInfo Accordions */}
          <div className="w-full flex flex-col gap-6">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="space-y-4"
             >
                <DetailsInfo summary="プロフィール">
                  <div className="space-y-6 text-sm md:text-base leading-relaxed font-bold text-[var(--text-primary)]">
                    <p>
                      透明感のある映像を作っています。創作やものづくりにチャレンジするも、結局うまくいかないことが多いですが、作ることはやはり好きなので続けたいです。
                    </p>
                  </div>
                </DetailsInfo>

                <DetailsInfo summary="スキル">
                  <ul className="space-y-4 text-sm md:text-base font-bold text-[var(--text-primary)]">
                    <li className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--corporate-color)]" />
                      3Dやモーショングラフィックスを用いた映像制作
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--corporate-color)]" />
                      曲を作った、１曲完成させたいよ
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--corporate-color)]" />
                      ちょっとしたものづくり  
                    </li>
                  </ul>
                </DetailsInfo>

                <DetailsInfo summary="SNS・お問い合わせ">
                  <div className="space-y-6 pt-1 pb-2">
                    <div className="space-y-2">
                      <a 
                         href={`mailto:${SOCIAL_LINKS.email}`} 
                         className="group flex items-center text-[var(--text-primary)] hover:opacity-60 transition-opacity"
                      >
                         <span className="text-sm md:text-base font-bold tracking-tight">
                           {SOCIAL_LINKS.email}
                         </span>
                      </a>
                    </div>

                    <div className="space-y-4">
                      <div className="flex w-full gap-4 md:justify-start">
                        {[
                          { name: "Twitter", url: SOCIAL_LINKS.twitter, icon: <FaTwitter /> },
                          { name: "Instagram", url: SOCIAL_LINKS.instagram, icon: <FaInstagram /> },
                          { name: "Discord", url: SOCIAL_LINKS.discord, icon: <FaDiscord /> },
                          { name: "GitHub", url: SOCIAL_LINKS.github, icon: <FaGithub /> },
                        ].map((link) => (
                          <a 
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 md:flex-none md:w-14 md:h-14 aspect-square rounded-full border border-[var(--border-color)] flex items-center justify-center text-xl md:text-2xl text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:border-[var(--text-primary)] transition-all duration-300"
                            aria-label={link.name}
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </DetailsInfo>
             </motion.div>
          </div>
        </div>
        </Container>
      </main>

      <Footer />
      </div>
    </Providers>
  );
}
