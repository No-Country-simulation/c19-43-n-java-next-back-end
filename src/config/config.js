import * as ricon from '@remixicon/react';

const navbar_list = [
  {
    title: "Inicio",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Servicios",
    href: "/services",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Contacto",
    href: "/contact",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  }
];

const sidebar_list = [
  {title:'Buscar Doctor',href:'/user/doctors',icon:ricon.RiSearchLine, subs:[],},
  {title:'Mis consultas',href:'/user/appointments',icon:ricon.RiCalendar2Line, subs:[],},
  {title:'Perfil',href:'/user/profile',icon:ricon.RiClipboardLine, subs:[],},
];

export { navbar_list, sidebar_list };
