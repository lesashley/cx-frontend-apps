const promoGridSchema = {
  title: 'Grilla de Promociones',
  type: 'object',
  properties: {
    mobileGridType: {
      title: 'Selector de grilla móvil',
      type: 'number',
      enum: [
        1,
        2,
        3,
        4
      ]
    },
    desktopGridType: {
      title: 'Selector de grilla desktop',
      type: 'number',
      enum: [
        1,
        2,
        3,
        4,
        5,
        6
      ]
    },
    mobileImageMain: {
      title: 'Imagen de bloque principal mobile',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    desktopImageMain: {
      title: 'Imagen de bloque principal desktop',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    titleMain: {
      title: 'Titulo de bloque principal',
      type: 'string'
    },
    descriptionMain: {
      title: 'Descripción de bloque principal',
      type: 'string'
    },
    ctaMain: {
      title: 'Call to action de bloque principal',
      type: 'string'
    },
    hrefMain: {
      title: 'Link de bloque principal',
      type: 'string'
    },

    mobileImageOne: {
      title: 'Imagen de bloque uno mobile',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    desktopImageOne: {
      title: 'Imagen de bloque uno desktop',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    titleOne: {
      title: 'Titulo de bloque uno',
      type: 'string'
    },
    ctaOne: {
      title: 'Call to action de bloque uno',
      type: 'string'
    },
    hrefOne: {
      title: 'Link de bloque uno',
      type: 'string'
    },

    mobileImageTwo: {
      title: 'Imagen de bloque dos mobile',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    desktopImageTwo: {
      title: 'Imagen de bloque dos desktop',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    titleTwo: {
      title: 'Titulo de bloque dos',
      type: 'string'
    },
    descriptionTwo: {
      title: 'Descripción de bloque dos',
      type: 'string'
    },
    ctaTwo: {
      title: 'Call to action de bloque dos',
      type: 'string'
    },
    hrefTwo: {
      title: 'Link de bloque dos',
      type: 'string'
    },

    mobileImageThree: {
      title: 'Imagen de bloque tres mobile',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    desktopImageThree: {
      title: 'Imagen de bloque tres desktop',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    titleThree: {
      title: 'Titulo de bloque tres',
      type: 'string'
    },
    ctaThree: {
      title: 'Call to action de bloque tres',
      type: 'string'
    },
    hrefThree: {
      title: 'Link de bloque tres',
      type: 'string'
    },

    mobileImageFour: {
      title: 'Imagen de bloque cuatro mobile',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    desktopImageFour: {
      title: 'Imagen de bloque cuatro desktop',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    titleFour: {
      title: 'Titulo de bloque cuatro',
      type: 'string'
    },
    descriptionFour: {
      title: 'Descripción de bloque cuatro',
      type: 'string'
    },
    ctaFour: {
      title: 'Call to action de bloque cuatro',
      type: 'string'
    },
    hrefFour: {
      title: 'Link de bloque cuatro',
      type: 'string'
    }
  }
}

export default promoGridSchema
