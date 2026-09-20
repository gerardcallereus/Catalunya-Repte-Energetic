/**
 * =========================================================================
 * CATALUNYA: REPTE ENERGÈTIC - CONFIGURACIÓ DE VISIBILITAT I ACCÉS
 * =========================================================================
 * 
 * Modifica els valors següents (true = visible/actiu, false = ocult/desactivat)
 * per controlar quines pestanyes i eines estan disponibles per als alumnes.
 */

window.APP_CONFIG = {
  // PESTANYES DE LA NAVEGACIÓ PRINCIPAL
  tabs: {
    repte: true,        // 'El Repte de Govern' (Portada / Introducció)
    fonts: false,       // 'Fonts d'Energia'
    centrals: false,    // 'Catàleg de Centrals'
    balanca: false,     // 'Demanda i consum d'energia' (inclou balanç i simulador de xarxa)
    actors: false,      // 'Guia d'Actors Socials'
    politiques: false   // 'Polítiques Públiques'
  },

  // ACCÉS AL SIMULADOR DE GOVERN
  // Si és false:
  // 1) S'oculta el botó/targeta de la capçalera a la portada.
  // 2) Es bloqueja l'accés directe a la URL /joc/index.html amb una pantalla de bloqueig.
  simulator: false
};
