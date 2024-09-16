const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );
  
  export function register(config)
  {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator)
    {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin)
      {
        return;
      }
  
      window.addEventListener('load', () =>
      {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost)
        {
          checkValidServiceWorker(swUrl, config);
          navigator.serviceWorker.ready.then(() =>
          {
            console.log('Service worker actif.');
          });
        } else
        {
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config)
  {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) =>
      {
        registration.onupdatefound = () =>
        {
          const installingWorker = registration.installing;
          if (installingWorker == null)
          {
            return;
          }
          installingWorker.onstatechange = () =>
          {
            if (installingWorker.state === 'installed')
            {
              if (navigator.serviceWorker.controller)
              {
                console.log('Nouveau contenu disponible; veuillez actualiser.');
                if (config && config.onUpdate)
                {
                  config.onUpdate(registration);
                }
              } else
              {
                console.log('Contenu mis en cache pour une utilisation hors ligne.');
                if (config && config.onSuccess)
                {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) =>
      {
        console.error('Erreur lors de l\'enregistrement du service worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config)
  {
    fetch(swUrl, { headers: { 'Service-Worker': 'script' } })
      .then((response) =>
      {
        if (
          response.status === 404 ||
          response.headers.get('content-type').indexOf('javascript') === -1
        )
        {
          navigator.serviceWorker.ready.then((registration) =>
          {
            registration.unregister().then(() =>
            {
              window.location.reload();
            });
          });
        } else
        {
          registerValidSW(swUrl, config);
        }
      })
      .catch(() =>
      {
        console.log('Pas de connexion internet trouvée. Mode hors-ligne activé.');
      });
  }
  
  export function unregister()
  {
    if ('serviceWorker' in navigator)
    {
      navigator.serviceWorker.ready
        .then((registration) =>
        {
          registration.unregister();
        })
        .catch((error) =>
        {
          console.error(error.message);
        });
    }
  }
  