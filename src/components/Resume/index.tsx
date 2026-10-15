import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { Sidebar } from './Sidebar'
import { MainContent } from './MainContent'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { PdfDownload } from './PdfDownload'

export function Resume() {
  const { resolve } = useTranslation()

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Top bar: theme toggle + language + pdf */}
      <div className="flex items-center justify-between mb-4 no-print">
        <PdfDownload />
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle label={resolve(resumeConfig.labels.actions.switchTheme)} />
        </div>
      </div>

      {/* Resume card */}


        <div className="bg-resume-bg-card rounded-lg shadow-2xl overflow-hidden print-crop flex flex-col md:flex-row">

          {/* 1. LA SIDEBAR (À gauche visuellement) */}
          <div className="md:w-[38%] bg-gradient-to-b from-resume-sidebar-from to-resume-sidebar-to p-8 order-2 md:order-1">
            <Sidebar />
          </div>

          {/* 2. LA COLONNE DE DROITE (Contient l'en-tête + le MainContent) */}
          <div className="md:w-[62%] p-8 order-1 md:order-2 flex flex-col">

            {/* L'en-tête positionné en haut à droite */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold tracking-[0.15em] text-resume-text">
                {resumeConfig.personal.name.toUpperCase()}
              </h1>
              <p className="text-base text-resume-text-secondary tracking-widest mt-2">
                {resolve(resumeConfig.personal.title).toUpperCase()}
              </p>
              {resumeConfig.personal.subtitle && (
                <p className="text-sm text-resume-primary mt-1">{resolve(resumeConfig.personal.subtitle)}</p>
              )}
            </div>

            {/* Le reste du contenu principal */}
            <MainContent />
          </div>

        </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-resume-bg-card rounded-lg shadow-2xl overflow-hidden dark:border dark:border-resume-primary/10 print-crop"
      >


          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.15em] text-resume-text">
              {resumeConfig.personal.name.toUpperCase()}
            </h1>
            <p className="text-base text-resume-text-secondary tracking-widest mt-2">
              {resolve(resumeConfig.personal.title).toUpperCase()}
            </p>
            {resumeConfig.personal.subtitle && (
              <p className="text-sm text-resume-primary mt-1">{resolve(resumeConfig.personal.subtitle)}</p>
            )}
          </div>



        <div className="flex flex-col-reverse md:flex-row">
          <Sidebar />
          <MainContent />
        </div>
      </motion.div> */}

      {/* Hint */}
      <p className="text-center text-sm text-resume-text-secondary mt-6 no-print">
        {resolve(resumeConfig.labels.actions.clickHint)}
      </p>
    </div>
  )
}
