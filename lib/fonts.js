import FontFaceObserver from 'fontfaceobserver';

const observeFontFace = () => {
  if (typeof document !== 'undefined') {
    const nanumNormal = new FontFaceObserver('Nanum Gothic', { weight: 400 });
    const nanumBold = new FontFaceObserver('Nanum Gothic', { weight: 800 });
    Promise.all([nanumNormal.load()]).then(() => {
      sessionStorage.fontsLoaded = true;
      document.documentElement.classList.add('fonts-loaded');
      Promise.all([nanumBold.load()]).then(() => {
        sessionStorage.fontsLoaded = true;
        document.documentElement.classList.add('fonts-loaded');
      });
    });
  }
};

observeFontFace();
