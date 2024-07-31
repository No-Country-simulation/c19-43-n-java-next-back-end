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
  {title:'Buscar Doctor',href:'user/buscar',icon:ricon.RiSearchLine, subs:[],},
  {title:'Mis consultas',href:'user/consultas',icon:ricon.RiCalendar2Line, subs:[],},
  {title:'Historia Médica',href:'user/historia',icon:ricon.RiClipboardLine, subs:[],},
];

export { navbar_list, sidebar_list };
