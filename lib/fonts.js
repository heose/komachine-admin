import FontFaceObserver from 'fontfaceobserver';


(() => {
  if (typeof document !== 'undefined') {
    const nanumNormal = new FontFaceObserver('Nanum Gothic', {weight: 400});
    const nanumBold = new FontFaceObserver('Nanum Gothic', {weight: 800});
    Promise.all([nanumNormal.load()])
      .then(fonts => {
          sessionStorage.fontsLoaded = true;
          document.documentElement.classList.add('fonts-loaded');
          console.log(fonts[0].family + ' ' + fonts[0].weight + ' ' + 'loaded');
          Promise.all([nanumBold.load()])
            .then(fonts => {
              sessionStorage.fontsLoaded = true;
              document.documentElement.classList.add('fonts-loaded');
              console.log(fonts[0].family + ' ' + fonts[0].weight + ' ' + 'loaded');

            })
      })
  }
})();