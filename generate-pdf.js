import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const URL = 'http://localhost:5173'; // Vérifiez le port
const OUTPUT_DIR = 'public/cv';

const perfectCSS = `
  @page {margin: 0px !important; size: A4;}
  html { font-size: 15px !important; }
  * {
    box-sizing: border-box !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  html, body, #root {
    margin: 0 !important;
    padding: 0 !important;
    width: 210mm !important;
    height: 297mm !important;
    max-width: none !important;
  }
  #root > div {
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
    width: 100% !important;
    height: 100% !important;
  }
  header, nav, select, .styles-module__toolbar___wNsdK, .no-print {
    display: none !important;
  }
  .print-crop {
    margin: 0 !important;
    padding: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    border: none !important;
    height: 297mm !important;
  }
  .print-crop > div {
    height: 100% !important;
  }

  .fold-spaces,
  .fold-spaces * {
    margin-top: 1px !important;
    margin-bottom: 1px !important;
    padding-top: 1px !important;
    padding-bottom: 1px !important;
    line-height: 1.3 !important; /* Rapproche aussi légèrement les lignes de texte */
  }

  /* Optionnel : réduire l'écartement de la grille/flexbox si besoin */
  .fold-spaces {
    gap: 0.25rem !important;
  }
`;

// Fonction pour manipuler le menu déroulant
async function switchLanguage(page, targetLang) {
  // 1. Clique sur le bouton principal via son aria-label
  await page.click('button[aria-label="Select language"]');

  // 2. Laisse le temps au petit menu de s'ouvrir
  await new Promise(r => setTimeout(r, 300));

  // 3. Cherche et clique sur l'option précise (FR ou EN)
  await page.evaluate((lang) => {
    const elements = Array.from(document.querySelectorAll('*'));
    // On cherche l'élément qui contient exactement 'FR' ou 'EN'
    const option = elements.find(el => el.textContent.trim() === lang && el.children.length === 0);
    if (option) option.click();
  }, targetLang);

  // 4. Laisse React mettre à jour les textes du CV
  await new Promise(r => setTimeout(r, 500));
}

const pdfOptions = {
  format: 'A4',
  printBackground: true,
  scale: 1,
  pageRanges: '1',
  margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
};

(async () => {
  console.log('🚀 Lancement du navigateur...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setViewport({ width: 1122, height: 1587, deviceScaleFactor: 2 });

  try {
    // ---- 🇫🇷 VERSION FRANÇAISE ----
    console.log(`⏳ Chargement de la page...`);
    await page.goto(URL, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('screen');

    console.log(`🔘 Passage en FR...`);
    await switchLanguage(page, 'FR');

    // On injecte VOTRE CSS seulement APRES avoir cliqué
    await page.addStyleTag({ content: perfectCSS });

    if (!fs.existsSync(`${OUTPUT_DIR}/fr`)) fs.mkdirSync(`${OUTPUT_DIR}/fr`, { recursive: true });

    await page.pdf({
      ...pdfOptions,
      path: `${OUTPUT_DIR}/fr/resume-fr.pdf`
    });
    console.log('✅ PDF Français généré !');

    // ---- 🇬🇧 VERSION ANGLAISE ----
    console.log(`🔄 Rechargement de la page pour réinitialiser le CSS...`);
    // Indispensable : recharger annule perfectCSS pour qu'on puisse revoir les boutons
    await page.goto(URL, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('screen');

    console.log(`🔘 Passage en EN...`);
    await switchLanguage(page, 'EN');

    // On réinjecte VOTRE CSS
    await page.addStyleTag({ content: perfectCSS });

    if (!fs.existsSync(`${OUTPUT_DIR}/en`)) fs.mkdirSync(`${OUTPUT_DIR}/en`, { recursive: true });

    await page.pdf({
      ...pdfOptions,
      path: `${OUTPUT_DIR}/en/resume-en.pdf`
    });
    console.log('✅ PDF Anglais généré !');

  } catch (error) {
    console.error('❌ Erreur :', error);
  } finally {
    await browser.close();
    console.log('👋 Terminé !');
  }
})();
