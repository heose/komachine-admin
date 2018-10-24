import FontFaceObserver from 'fontfaceobserver';


(() => {
  if (typeof document !== 'undefined') {
    const nanumNormal = new FontFaceObserver('Nanum Gothic', {weight: 400});
    const nanumBold = new FontFaceObserver('Nanum Gothic', {weight: 800});
    Promise.all([nanumNormal.load(), nanumBold.load()])
      .then(fonts => {
        fonts.forEach(font => {
          if (font.family === 'Nanum Gothic' && font.weight === 400) {
            document.documentElement.className += " fonts-loaded";
          }
          console.log(font.family + ' ' + font.weight + ' ' + 'loaded');
        })
      });
  }
})();