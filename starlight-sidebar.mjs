/**
 * Orden de la barra lateral alineado con `src/content/docs/index.md` (lista de bienvenida).
 * Los `slug` corresponden a las rutas de Starlight (colección docs).
 * Virtualización no aparece en esa lista pero existe en el repo; va al final para no perder la página.
 */
export const starlightSidebar = [
  { label: 'Inicio', link: '/' },

  {
    label: 'Conceptos básicos',
    collapsed: false,
    items: [
      'conceptos-basicos/mitos',
      'conceptos-basicos/conceptosbasicos',
      'conceptos-basicos/legalidadhacking',
    ],
  },
  {
    label: 'Virtualización',
    collapsed: false,
    items: ['virtualizacion/virtualizacion'],
  },
  {
    label: 'Linux',
    collapsed: false,
    items: [
      {
        label: 'Comandos por secciones',
        collapsed: true,
        items: [
          'linux/comandoslinux',
          'linux/ayudalinux',
          'linux/gestiondeprocesos',
          'linux/gruposyusuarios',
          'linux/permisos',
          'linux/busqueda',
          'linux/atajosdeteclado',
        ],
      },
      {
        label: 'Comandos individuales',
        collapsed: true,
        items: [
          'linux/comandos/less',
          'linux/comandos/ncat',
          'linux/comandos/netcat',
          'linux/comandos/which',
          'linux/comandos/wc',
          'linux/comandos/diff',
          'linux/comandos/xxd',
          'linux/comandos/cifradocesartr',
        ],
      },
      {
        label: 'Bash Script',
        collapsed: true,
        items: [
          'linux/fundamentos',
          'linux/condiciones',
          'linux/estcontrol',
          'linux/funciones',
          'linux/funcionesexternas',
          'linux/arrays',
          'linux/manipulaciondestrings',
          'linux/entradaysalida',
        ],
      },
      'linux/banditresolucion',
    ],
  },

  {
    label: 'Python',
    collapsed: false,
    items: [
      'python/todopython',
      'python/clasespython',
      'python/variablesclases',
      'python/gettersetter',
      'python/classmethod',
      'python/property',
      {
        label: 'Módulos',
        collapsed: true,
        items: [
          'python/modulos/os',
          'python/modulos/subprocess',
          'python/modulos/re',
          'python/modulos/sys',
          'python/modulos/sockets',
          'python/modulos/request',
          'python/modulos/threading',
          'python/modulos/multiprocessing',
          'python/modulos/tkinter',
        ],
      },
    ],
  },

  {
    label: 'Redes',
    collapsed: false,
    items: ['redes/teoria', 'redes/herramientas', 'redes/subnetting', 'redes/cidrshosts'],
  },

  {
    label: 'Windows',
    collapsed: false,
    items: [
      'windows/historia',
      'windows/powershellcmd',
      'windows/directorios',
      'windows/comodines',
      'windows/navegacion',
      'windows/variablesentorno',
      'windows/ayudasoporte',
      'windows/gestionusuarios',
      'windows/gestiongrupos',
      'windows/gestionred',
      'windows/gestionpermisos',
      'windows/gestionprocesos',
      'windows/redireccionespowershell',
      'windows/aliaspowershell',
    ],
  },

  {
    label: 'Pentesting',
    collapsed: false,
    items: ['pentesting/fases', 'pentesting/cajas'],
  },

  {
    label: 'OSINT',
    collapsed: false,
    items: ['osint/basic', 'osint/googledoorks', 'osint/terminologia'],
  },

  {
    label: 'Anonimato',
    collapsed: false,
    items: [
      'anonimato/privacidadanonimato',
      'anonimato/huelladigital',
      'anonimato/useragent',
      'anonimato/filtraciones',
    ],
  },

  {
    label: 'Otros',
    collapsed: false,
    items: [
      'otros/ramasciberseguridad',
      'otros/distribucioneslinux',
      'otros/concientizacion',
      'otros/herramientas',
      'otros/recursos',
      'otros/notasactualizacion',
    ],
  },
];
