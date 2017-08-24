export var buttons = [
  {
    id: 0,
    path: '/',
    linkText: 'Camera de zi',
  },
  {
    id: 1,
    path: '/noapte',
    linkText: 'Camera de noapte',
  },
  {
    id: 2,
    handlers: {
      onClick: function() {
        window.scrollTo(0, document.body.scrollHeight);
      },
    },
    linkText: 'Contact',
  },
];
