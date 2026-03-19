// ============================================================
//  KVENTURE — BASE DE DATOS PRINCIPAL
//  Archivo: js/database.js
//
//  Aquí guardo TODA la información de la tienda:
//  empresas, grupos y productos.
//
//  ¿Cómo funciona?
//  ─ Todo está en un objeto llamado "KventureDB"
//  ─ Dentro hay tres secciones: empresas, grupos y productos
//  ─ Los productos tienen un campo "grupo" que los conecta
//    con su grupo, y cada grupo tiene un campo "empresa"
//    que lo conecta con su empresa.
//  ─ Las imágenes se guardan en la carpeta /imagenes/
//    Grupos    → /imagenes/grupos/nombre-grupo.jpg
//    Productos → /imagenes/productos/nombre-producto.jpg
//
//  IMPORTANTE: Si quieres agregar un producto nuevo,
//  solo agrega un objeto nuevo en el array "productos"
//  siguiendo el mismo formato que los demás.
// ============================================================

const KventureDB = {

  // ----------------------------------------------------------
  //  EMPRESAS
  //  Cada empresa tiene: id, nombre, descripción, año de
  //  fundación, ciudad, imagen del logo y el archivo HTML
  //  al que lleva el enlace.
  // ----------------------------------------------------------
  empresas: [
    {
      id: "yg",
      nombre: "YG Entertainment",
      descripcion: "Sello conocido por su estilo hip-hop y artistas con mucha actitud.",
      fundada: 1996,
      ciudad: "Seúl, Corea del Sur",
      imagen: "imagenes/grupos/yg-logo.jpg",         // logo de la empresa
      href: "YG.html"
    },
    {
      id: "sm",
      nombre: "SM Entertainment",
      descripcion: "La empresa más antigua del Big 4, pionera del K-pop moderno.",
      fundada: 1995,
      ciudad: "Seúl, Corea del Sur",
      imagen: "imagenes/grupos/sm-logo.jpg",
      href: "SM.html"
    },
    {
      id: "hybe",
      nombre: "HYBE Music",
      descripcion: "La empresa más grande de K-pop, hogar de BTS y muchos más.",
      fundada: 2005,
      ciudad: "Seúl, Corea del Sur",
      imagen: "imagenes/grupos/hybe-logo.jpg",
      href: "Hybe.html"
    },
    {
      id: "pnation",
      nombre: "P Nation",
      descripcion: "Sello independiente fundado por Psy, hogar de MAMAMOO.",
      fundada: 2019,
      ciudad: "Seúl, Corea del Sur",
      imagen: "imagenes/grupos/pnation-logo.jpg",
      href: "Pnation.html"
    },
    {
      id: "jyp",
      nombre: "JYP Entertainment",
      descripcion: "Empresa reconocida por sus grupos con gran presencia en el mercado global.",
      fundada: 1997,
      ciudad: "Seúl, Corea del Sur",
      imagen: "imagenes/grupos/jyp-logo.jpg",
      href: "JYP.html"
    }
  ],

  // ----------------------------------------------------------
  //  GRUPOS
  //  Cada grupo tiene: id, nombre, empresa a la que pertenece,
  //  año de debut, número de miembros, tipo (boy group /
  //  girl group), generación, color temático del grupo,
  //  imagen de portada y el archivo HTML de su página.
  // ----------------------------------------------------------
  grupos: [
    // ── YG Entertainment ─────────────────────────────────────
    {
      id: "bigbang",
      nombre: "BIGBANG",
      empresa: "yg",
      debut: 2006,
      miembros: 5,
      tipo: "Boy Group",
      generacion: "2nd Generation",
      color: "#FFD700",
      imagen: "imagenes/grupos/bigbang.jpg",
      href: "BIGBANG.html"
    },
    {
      id: "blackpink",
      nombre: "BLACKPINK",
      empresa: "yg",
      debut: 2016,
      miembros: 4,
      tipo: "Girl Group",
      generacion: "3rd Generation",
      color: "#FF69B4",
      imagen: "imagenes/grupos/blackpink.jpg",
      href: "BLACKPINK.html"
    },
    {
      id: "winner",
      nombre: "WINNER",
      empresa: "yg",
      debut: 2014,
      miembros: 4,
      tipo: "Boy Group",
      generacion: "3rd Generation",
      color: "#4169E1",
      imagen: "imagenes/grupos/winner.jpg",
      href: "WINNER.html"
    },
    {
      id: "ikon",
      nombre: "iKON",
      empresa: "yg",
      debut: 2015,
      miembros: 6,
      tipo: "Boy Group",
      generacion: "3rd Generation",
      color: "#DC143C",
      imagen: "imagenes/grupos/ikon.jpg",
      href: "IKON.html"
    },
    {
      id: "2ne1",
      nombre: "2NE1",
      empresa: "yg",
      debut: 2009,
      miembros: 4,
      tipo: "Girl Group",
      generacion: "2nd Generation",
      color: "#FF4500",
      imagen: "imagenes/grupos/2ne1.jpg",
      href: "2NEE1.html"
    },
    {
      id: "cl",
      nombre: "CL",
      empresa: "yg",
      debut: 2009,           // como parte de 2NE1
      miembros: 1,
      tipo: "Solista",
      generacion: "2nd Generation",
      color: "#FF6347",
      imagen: "imagenes/grupos/cl.jpg",
      href: "CL.html"
    },
    {
      id: "treasure",
      nombre: "TREASURE",
      empresa: "yg",
      debut: 2020,
      miembros: 10,
      tipo: "Boy Group",
      generacion: "4th Generation",
      color: "#FF8C00",
      imagen: "imagenes/grupos/treasure.jpg",
      href: "TRESURE.html"
    },
    // ── SM Entertainment ─────────────────────────────────────
    {
      id: "nct",
      nombre: "NCT",
      empresa: "sm",
      debut: 2016,
      miembros: 26,           // contando todas las subunidades
      tipo: "Boy Group",
      generacion: "3rd Generation",
      color: "#00FF7F",
      imagen: "imagenes/grupos/nct.jpg",
      href: "NCT.html"
    },
    {
      id: "exo",
      nombre: "EXO",
      empresa: "sm",
      debut: 2012,
      miembros: 9,
      tipo: "Boy Group",
      generacion: "2nd Generation",
      color: "#C0C0C0",
      imagen: "imagenes/grupos/exo.jpg",
      href: "EXO.html"
    },
    {
      id: "aespa",
      nombre: "aespa",
      empresa: "sm",
      debut: 2020,
      miembros: 4,
      tipo: "Girl Group",
      generacion: "4th Generation",
      color: "#B47FD4",
      imagen: "imagenes/grupos/aespa.jpg",
      href: "aespa.html"
    },
    // ── HYBE ─────────────────────────────────────────────────
    {
      id: "bts",
      nombre: "BTS",
      empresa: "hybe",
      debut: 2013,
      miembros: 7,
      tipo: "Boy Group",
      generacion: "3rd Generation",
      color: "#9B59B6",
      imagen: "imagenes/grupos/bts.jpg",
      href: "BTS.html"
    },
    {
      id: "txt",
      nombre: "TXT",
      empresa: "hybe",
      debut: 2019,
      miembros: 5,
      tipo: "Boy Group",
      generacion: "4th Generation",
      color: "#5B9BD5",
      imagen: "imagenes/grupos/txt.jpg",
      href: "TXT.html"
    },
    {
      id: "enhypen",
      nombre: "ENHYPEN",
      empresa: "hybe",
      debut: 2020,
      miembros: 7,
      tipo: "Boy Group",
      generacion: "4th Generation",
      color: "#C0392B",
      imagen: "imagenes/grupos/enhypen.jpg",
      href: "ENHYPHEN.html"
    },
    {
      id: "seventeen",
      nombre: "Seventeen",
      empresa: "hybe",
      debut: 2015,
      miembros: 13,
      tipo: "Boy Group",
      generacion: "3rd Generation",
      color: "#2ECC9A",
      imagen: "imagenes/grupos/seventeen.jpg",
      href: "SEVENTEEN.html"
    },
    // ── P Nation ─────────────────────────────────────────────
    {
      id: "mamamoo",
      nombre: "MAMAMOO",
      empresa: "pnation",
      debut: 2014,
      miembros: 4,
      tipo: "Girl Group",
      generacion: "3rd Generation",
      color: "#27AE60",
      imagen: "imagenes/grupos/mamamoo.jpg",
      href: "MAMAMOO.html"
    },
    // ── JYP Entertainment ─────────────────────────────────────
    {
      id: "twice",
      nombre: "TWICE",
      empresa: "jyp",
      debut: 2015,
      miembros: 9,
      tipo: "Girl Group",
      generacion: "3rd Generation",
      color: "#FF6EB4",
      imagen: "imagenes/grupos/twice.jpg",
      href: "TWICE.html"
    },
    {
      id: "straykids",
      nombre: "Stray Kids",
      empresa: "jyp",
      debut: 2018,
      miembros: 8,
      tipo: "Boy Group",
      generacion: "4th Generation",
      color: "#F4C430",
      imagen: "imagenes/grupos/straykids.jpg",
      href: "STRAYKIDS.html"
    }
  ],

  // ----------------------------------------------------------
  //  PRODUCTOS
  //  Cada producto tiene:
  //  · id        → identificador único para el carrito
  //  · nombre    → nombre que se muestra en la card
  //  · grupo     → id del grupo al que pertenece
  //  · categoria → "album" | "lightstick" | "peluche" | "ropa"
  //  · precio    → número (en dólares, sin símbolo)
  //  · badge     → "new" | "hot" | "ltd" | null (sin badge)
  //  · descripcion → texto corto debajo del nombre
  //  · imagen    → ruta a la imagen del producto
  //
  //  Los precios siempre son números así puedo hacer cálculos
  //  fácilmente en el carrito (sumar totales, aplicar descuentos).
  // ----------------------------------------------------------
  productos: [

    // ══════════════════════════════════════════════════════════
    //  BTS
    // ══════════════════════════════════════════════════════════
    { id: "bts-al-01", nombre: "MAP OF THE SOUL: 7 (2020)", grupo: "bts", categoria: "album",      precio: 30, badge: "hot", descripcion: "4to álbum completo — Black Swan, ON",           imagen: "imagenes/productos/bts-mots7.jpg" },
    { id: "bts-al-02", nombre: "LOVE YOURSELF: ANSWER (2018)", grupo: "bts", categoria: "album",   precio: 28, badge: null, descripcion: "Álbum repackage — Idol, Fake Love",              imagen: "imagenes/productos/bts-lyanswer.jpg" },
    { id: "bts-al-03", nombre: "BE (2020)",                    grupo: "bts", categoria: "album",   precio: 26, badge: null, descripcion: "Álbum especial — Life Goes On, Dynamite",       imagen: "imagenes/productos/bts-be.jpg" },
    { id: "bts-al-04", nombre: "Dark & Wild (2014)",           grupo: "bts", categoria: "album",   precio: 22, badge: null, descripcion: "1er álbum completo — Danger, War of Hormone",   imagen: "imagenes/productos/bts-darkwild.jpg" },
    { id: "bts-ls-01", nombre: "BTS Army Bomb Ver.4",           grupo: "bts", categoria: "lightstick", precio: 55, badge: "new", descripcion: "Lightstick oficial, edición especial ARMY", imagen: "imagenes/productos/bts-armybomb4.jpg" },
    { id: "bts-ls-02", nombre: "Army Bomb Map of the Soul",     grupo: "bts", categoria: "lightstick", precio: 60, badge: "ltd", descripcion: "Edición limitada MOTS con Bluetooth",       imagen: "imagenes/productos/bts-armybomb-mots.jpg" },
    { id: "bts-pe-01", nombre: "Muñeco RM",                    grupo: "bts", categoria: "peluche",  precio: 35, badge: "new", descripcion: "Peluche oficial 25cm, outfit Butter",          imagen: "imagenes/productos/bts-plush-rm.jpg" },
    { id: "bts-pe-02", nombre: "Muñeco Jungkook",               grupo: "bts", categoria: "peluche",  precio: 35, badge: "hot", descripcion: "Peluche oficial 25cm, outfit Butter",          imagen: "imagenes/productos/bts-plush-jk.jpg" },
    { id: "bts-pe-03", nombre: "Muñeco Jin",                   grupo: "bts", categoria: "peluche",  precio: 35, badge: null, descripcion: "Peluche oficial 25cm, outfit Butter",          imagen: "imagenes/productos/bts-plush-jin.jpg" },
    { id: "bts-ro-01", nombre: "Hoodie Butter",                grupo: "bts", categoria: "ropa",     precio: 65, badge: "new", descripcion: "Sudadera amarilla tallas S–XL",                imagen: "imagenes/productos/bts-hoodie-butter.jpg" },
    { id: "bts-ro-02", nombre: "Camiseta BTS Logo",            grupo: "bts", categoria: "ropa",     precio: 38, badge: null, descripcion: "Camiseta negra con logo, unisex",              imagen: "imagenes/productos/bts-tshirt-logo.jpg" },
    { id: "bts-ro-03", nombre: "Cap ARMY Oficial",             grupo: "bts", categoria: "ropa",     precio: 30, badge: null, descripcion: "Gorra morada ajustable con bordado BTS",       imagen: "imagenes/productos/bts-cap.jpg" },
    { id: "bts-ro-04", nombre: "Tote Bag ARMY",                grupo: "bts", categoria: "ropa",     precio: 25, badge: null, descripcion: "Bolsa de tela oficial edición especial",       imagen: "imagenes/productos/bts-totebag.jpg" },

    // ══════════════════════════════════════════════════════════
    //  BLACKPINK
    // ══════════════════════════════════════════════════════════
    { id: "bp-al-01", nombre: "BORN PINK (2022)",         grupo: "blackpink", categoria: "album",      precio: 30, badge: "hot", descripcion: "2do álbum completo — Pink Venom, Shut Down",  imagen: "imagenes/productos/bp-bornpink.jpg" },
    { id: "bp-al-02", nombre: "THE ALBUM (2020)",         grupo: "blackpink", categoria: "album",      precio: 28, badge: null, descripcion: "1er álbum completo — Lovesick Girls, Ice Cream", imagen: "imagenes/productos/bp-thealbum.jpg" },
    { id: "bp-al-03", nombre: "SQUARE UP (2018)",         grupo: "blackpink", categoria: "album",      precio: 24, badge: null, descripcion: "1er mini álbum — DDU-DU DDU-DU",               imagen: "imagenes/productos/bp-squareup.jpg" },
    { id: "bp-ls-01", nombre: "BLACKPINK Lightstick Ver.2", grupo: "blackpink", categoria: "lightstick", precio: 52, badge: "new", descripcion: "Lightstick oficial rosa y negro, BLINK",       imagen: "imagenes/productos/bp-lightstick2.jpg" },
    { id: "bp-ls-02", nombre: "Lightstick BORN PINK Tour", grupo: "blackpink", categoria: "lightstick", precio: 60, badge: "ltd", descripcion: "Edición especial del World Tour",               imagen: "imagenes/productos/bp-lightstick-bptour.jpg" },
    { id: "bp-pe-01", nombre: "Muñeca Jennie",            grupo: "blackpink", categoria: "peluche",    precio: 35, badge: "hot", descripcion: "Peluche oficial 25cm, outfit BORN PINK",        imagen: "imagenes/productos/bp-plush-jennie.jpg" },
    { id: "bp-pe-02", nombre: "Muñeca Lisa",              grupo: "blackpink", categoria: "peluche",    precio: 35, badge: "new", descripcion: "Peluche oficial 25cm, outfit BORN PINK",        imagen: "imagenes/productos/bp-plush-lisa.jpg" },
    { id: "bp-pe-03", nombre: "Muñeca Rosé",              grupo: "blackpink", categoria: "peluche",    precio: 35, badge: null, descripcion: "Peluche oficial 25cm, outfit BORN PINK",        imagen: "imagenes/productos/bp-plush-rose.jpg" },
    { id: "bp-pe-04", nombre: "Muñeca Jisoo",             grupo: "blackpink", categoria: "peluche",    precio: 35, badge: null, descripcion: "Peluche oficial 25cm, outfit BORN PINK",        imagen: "imagenes/productos/bp-plush-jisoo.jpg" },
    { id: "bp-ro-01", nombre: "Hoodie BORN PINK",         grupo: "blackpink", categoria: "ropa",       precio: 65, badge: "new", descripcion: "Sudadera rosa palo, tallas S–XL",              imagen: "imagenes/productos/bp-hoodie-bornpink.jpg" },
    { id: "bp-ro-02", nombre: "Camiseta BLACKPINK Logo",  grupo: "blackpink", categoria: "ropa",       precio: 38, badge: null, descripcion: "Camiseta negra con logo rosa, unisex",          imagen: "imagenes/productos/bp-tshirt-logo.jpg" },
    { id: "bp-ro-03", nombre: "Cap BLINK Oficial",        grupo: "blackpink", categoria: "ropa",       precio: 30, badge: null, descripcion: "Gorra negra ajustable con bordado BLINK",       imagen: "imagenes/productos/bp-cap.jpg" },

    // ══════════════════════════════════════════════════════════
    //  TWICE
    // ══════════════════════════════════════════════════════════
    { id: "tw-al-01", nombre: "With YOU-th (2024)",       grupo: "twice", categoria: "album",      precio: 28, badge: "new", descripcion: "13mo mini álbum — I Got You, Dive",              imagen: "imagenes/productos/twice-withyouth.jpg" },
    { id: "tw-al-02", nombre: "READY TO BE (2023)",       grupo: "twice", categoria: "album",      precio: 26, badge: null, descripcion: "12mo mini álbum — Set Me Free, Moonlight Sunrise", imagen: "imagenes/productos/twice-readytobe.jpg" },
    { id: "tw-al-03", nombre: "Formula of Love (2021)",   grupo: "twice", categoria: "album",      precio: 28, badge: null, descripcion: "3er álbum completo — Alcohol-Free, The Feels",    imagen: "imagenes/productos/twice-formulaoflove.jpg" },
    { id: "tw-al-04", nombre: "PAGE TWO (2016)",          grupo: "twice", categoria: "album",      precio: 22, badge: null, descripcion: "2do mini álbum — Cheer Up, TT",                   imagen: "imagenes/productos/twice-pagetwo.jpg" },
    { id: "tw-ls-01", nombre: "TWICE Candybong ∞",        grupo: "twice", categoria: "lightstick", precio: 50, badge: "new", descripcion: "Lightstick oficial rosa, edición infinita ONCE",  imagen: "imagenes/productos/twice-candybong.jpg" },
    { id: "tw-ls-02", nombre: "Candybong Z",              grupo: "twice", categoria: "lightstick", precio: 60, badge: "ltd", descripcion: "Edición especial con Bluetooth y app",           imagen: "imagenes/productos/twice-candybong-z.jpg" },
    { id: "tw-pe-01", nombre: "Muñeca Nayeon",            grupo: "twice", categoria: "peluche",    precio: 35, badge: "new", descripcion: "Peluche oficial 25cm, outfit With YOU-th",       imagen: "imagenes/productos/twice-plush-nayeon.jpg" },
    { id: "tw-pe-02", nombre: "Muñeca Tzuyu",             grupo: "twice", categoria: "peluche",    precio: 35, badge: null, descripcion: "Peluche oficial 25cm, outfit With YOU-th",       imagen: "imagenes/productos/twice-plush-tzuyu.jpg" },
    { id: "tw-pe-03", nombre: "Muñeca Sana",              grupo: "twice", categoria: "peluche",    precio: 35, badge: null, descripcion: "Peluche oficial 25cm, outfit With YOU-th",       imagen: "imagenes/productos/twice-plush-sana.jpg" },
    { id: "tw-pe-04", nombre: "Muñeca Jihyo",             grupo: "twice", categoria: "peluche",    precio: 35, badge: "hot", descripcion: "Peluche oficial 25cm, outfit With YOU-th",       imagen: "imagenes/productos/twice-plush-jihyo.jpg" },
    { id: "tw-ro-01", nombre: "Hoodie With YOU-th",       grupo: "twice", categoria: "ropa",       precio: 65, badge: "new", descripcion: "Sudadera rosa chicle, tallas S–XL",              imagen: "imagenes/productos/twice-hoodie.jpg" },
    { id: "tw-ro-02", nombre: "Camiseta TWICE Logo",      grupo: "twice", categoria: "ropa",       precio: 38, badge: null, descripcion: "Camiseta blanca con logo, unisex",               imagen: "imagenes/productos/twice-tshirt.jpg" },
    { id: "tw-ro-03", nombre: "Cap ONCE Oficial",         grupo: "twice", categoria: "ropa",       precio: 30, badge: null, descripcion: "Gorra rosa ajustable con bordado TWICE",         imagen: "imagenes/productos/twice-cap.jpg" },
    { id: "tw-ro-04", nombre: "Tote Bag ONCE",            grupo: "twice", categoria: "ropa",       precio: 25, badge: null, descripcion: "Bolsa de tela oficial edición especial",         imagen: "imagenes/productos/twice-totebag.jpg" },

    // ══════════════════════════════════════════════════════════
    //  STRAY KIDS
    // ══════════════════════════════════════════════════════════
    { id: "sk-al-01", nombre: "ATE (2024)",               grupo: "straykids", categoria: "album",      precio: 30, badge: "new", descripcion: "8vo álbum completo — Chk Chk Boom",          imagen: "imagenes/productos/sk-ate.jpg" },
    { id: "sk-al-02", nombre: "★★★★★ (5-STAR) (2023)",   grupo: "straykids", categoria: "album",      precio: 28, badge: null, descripcion: "7mo álbum completo — S-Class, Miroh",         imagen: "imagenes/productos/sk-5star.jpg" },
    { id: "sk-al-03", nombre: "MAXIDENT (2022)",          grupo: "straykids", categoria: "album",      precio: 25, badge: null, descripcion: "6to mini álbum — CASE 143, Super Board",     imagen: "imagenes/productos/sk-maxident.jpg" },
    { id: "sk-al-04", nombre: "Clé 1: MIROH (2019)",     grupo: "straykids", categoria: "album",      precio: 22, badge: null, descripcion: "3er mini álbum — Miroh, Side Effects",       imagen: "imagenes/productos/sk-cle1.jpg" },
    { id: "sk-ls-01", nombre: "SKZ Official Lightstick Ver.2", grupo: "straykids", categoria: "lightstick", precio: 50, badge: "new", descripcion: "Diseño amarillo dorado, edición STAY",  imagen: "imagenes/productos/sk-lightstick2.jpg" },
    { id: "sk-ls-02", nombre: "SKZ Lightstick MANIAC Tour", grupo: "straykids", categoria: "lightstick", precio: 58, badge: "ltd", descripcion: "Edición especial tour MANIAC",               imagen: "imagenes/productos/sk-lightstick-maniac.jpg" },
    { id: "sk-pe-01", nombre: "Muñeco Bang Chan",         grupo: "straykids", categoria: "peluche",    precio: 35, badge: "new", descripcion: "Peluche oficial 25cm, outfit 5-STAR",         imagen: "imagenes/productos/sk-plush-bangchan.jpg" },
    { id: "sk-pe-02", nombre: "Muñeco Felix",             grupo: "straykids", categoria: "peluche",    precio: 35, badge: null, descripcion: "Peluche oficial 25cm, outfit 5-STAR",         imagen: "imagenes/productos/sk-plush-felix.jpg" },
    { id: "sk-pe-03", nombre: "Muñeco Lee Know",          grupo: "straykids", categoria: "peluche",    precio: 35, badge: "hot", descripcion: "Peluche oficial 25cm, outfit 5-STAR",         imagen: "imagenes/productos/sk-plush-leeknow.jpg" },
    { id: "sk-ro-01", nombre: "Hoodie 5-STAR",            grupo: "straykids", categoria: "ropa",       precio: 65, badge: "new", descripcion: "Sudadera negra con estrellas doradas, S–XL",  imagen: "imagenes/productos/sk-hoodie-5star.jpg" },
    { id: "sk-ro-02", nombre: "Camiseta SKZ Logo",        grupo: "straykids", categoria: "ropa",       precio: 38, badge: null, descripcion: "Camiseta negra con logo amarillo, unisex",    imagen: "imagenes/productos/sk-tshirt.jpg" },

    // ══════════════════════════════════════════════════════════
    //  NCT
    // ══════════════════════════════════════════════════════════
    { id: "nct-al-01", nombre: "GOLDEN AGE (2023)",       grupo: "nct", categoria: "album",      precio: 30, badge: "new", descripcion: "4to álbum NCT 127 — Fact Check, Asteroid",       imagen: "imagenes/productos/nct-goldenage.jpg" },
    { id: "nct-al-02", nombre: "Universe (2021)",         grupo: "nct", categoria: "album",      precio: 25, badge: null, descripcion: "3er álbum NCT 127 — Universe, Favorite",          imagen: "imagenes/productos/nct-universe.jpg" },
    { id: "nct-al-03", nombre: "Resonance Pt.1 (2020)",  grupo: "nct", categoria: "album",      precio: 24, badge: null, descripcion: "2do álbum NCT — From Home, Make A Wish",          imagen: "imagenes/productos/nct-resonance.jpg" },
    { id: "nct-ls-01", nombre: "NCT Official Lightstick Ver.2", grupo: "nct", categoria: "lightstick", precio: 48, badge: "new", descripcion: "Diseño verde neón, edición GOLDEN AGE",    imagen: "imagenes/productos/nct-lightstick2.jpg" },
    { id: "nct-ls-02", nombre: "NCT Dream Lightstick",   grupo: "nct", categoria: "lightstick", precio: 52, badge: "ltd", descripcion: "Edición especial subunidad NCT Dream",             imagen: "imagenes/productos/nct-lightstick-dream.jpg" },
    { id: "nct-pe-01", nombre: "Muñeco Taeyong",         grupo: "nct", categoria: "peluche",    precio: 35, badge: "new", descripcion: "Peluche oficial 25cm, outfit GOLDEN AGE",         imagen: "imagenes/productos/nct-plush-taeyong.jpg" },
    { id: "nct-pe-04", nombre: "Muñeco Jaehyun",         grupo: "nct", categoria: "peluche",    precio: 35, badge: "hot", descripcion: "Peluche oficial 25cm, outfit GOLDEN AGE",         imagen: "imagenes/productos/nct-plush-jaehyun.jpg" },
    { id: "nct-ro-01", nombre: "Hoodie GOLDEN AGE",      grupo: "nct", categoria: "ropa",       precio: 65, badge: "new", descripcion: "Sudadera negra con diseño neón, tallas S–XL",     imagen: "imagenes/productos/nct-hoodie.jpg" },

    // ══════════════════════════════════════════════════════════
    //  EXO
    // ══════════════════════════════════════════════════════════
    { id: "exo-al-01", nombre: "EXIST (2023)",            grupo: "exo", categoria: "album",      precio: 30, badge: "new", descripcion: "7mo álbum completo — Hear Me Out, Let Me In",    imagen: "imagenes/productos/exo-exist.jpg" },
    { id: "exo-al-02", nombre: "XOXO (2013)",             grupo: "exo", categoria: "album",      precio: 22, badge: null, descripcion: "1er álbum completo — Wolf, Growl",               imagen: "imagenes/productos/exo-xoxo.jpg" },
    { id: "exo-ls-01", nombre: "EXO Official Lightstick Ver.3", grupo: "exo", categoria: "lightstick", precio: 48, badge: "new", descripcion: "Diseño prisma plateado, edición EXIST",    imagen: "imagenes/productos/exo-lightstick3.jpg" },
    { id: "exo-pe-01", nombre: "Muñeco Baekhyun",         grupo: "exo", categoria: "peluche",    precio: 35, badge: "hot", descripcion: "Peluche oficial 25cm, outfit EXIST",             imagen: "imagenes/productos/exo-plush-baekhyun.jpg" },
    { id: "exo-ro-01", nombre: "Hoodie EXIST",            grupo: "exo", categoria: "ropa",       precio: 65, badge: "new", descripcion: "Sudadera negra con diseño EXIST, tallas S–XL",   imagen: "imagenes/productos/exo-hoodie.jpg" },

    // ══════════════════════════════════════════════════════════
    //  aespa
    // ══════════════════════════════════════════════════════════
    { id: "ae-al-01", nombre: "Armageddon (2024)",        grupo: "aespa", categoria: "album",      precio: 30, badge: "new", descripcion: "1er álbum completo — Supernova, Drama",         imagen: "imagenes/productos/aespa-armageddon.jpg" },
    { id: "ae-al-02", nombre: "MY WORLD (2023)",          grupo: "aespa", categoria: "album",      precio: 26, badge: null, descripcion: "3er mini álbum — Better Things, Spicy",         imagen: "imagenes/productos/aespa-myworld.jpg" },
    { id: "ae-ls-01", nombre: "aespa Official Lightstick", grupo: "aespa", categoria: "lightstick", precio: 48, badge: "new", descripcion: "Diseño futurista, edición MYs",               imagen: "imagenes/productos/aespa-lightstick.jpg" },
    { id: "ae-pe-01", nombre: "Muñeca Karina",            grupo: "aespa", categoria: "peluche",    precio: 35, badge: "hot", descripcion: "Peluche oficial 25cm, outfit Armageddon",       imagen: "imagenes/productos/aespa-plush-karina.jpg" },
    { id: "ae-ro-01", nombre: "Hoodie Armageddon",        grupo: "aespa", categoria: "ropa",       precio: 65, badge: "new", descripcion: "Sudadera futurista plateada, tallas S–XL",      imagen: "imagenes/productos/aespa-hoodie.jpg" },

    // ══════════════════════════════════════════════════════════
    //  TXT
    // ══════════════════════════════════════════════════════════
    { id: "txt-al-01", nombre: "minisode 3: TOMORROW (2024)", grupo: "txt", categoria: "album",   precio: 28, badge: "new", descripcion: "6to mini álbum — Chasing That Feeling",          imagen: "imagenes/productos/txt-minisode3.jpg" },
    { id: "txt-al-02", nombre: "FREEFALL (2023)",         grupo: "txt", categoria: "album",      precio: 30, badge: null, descripcion: "3er álbum completo — Chasing That Feeling",       imagen: "imagenes/productos/txt-freefall.jpg" },
    { id: "txt-ls-01", nombre: "TXT Official Lightstick",  grupo: "txt", categoria: "lightstick", precio: 48, badge: "new", descripcion: "Diseño estrella azul, edición oficial MOA",       imagen: "imagenes/productos/txt-lightstick.jpg" },
    { id: "txt-pe-01", nombre: "Muñeco Yeonjun",           grupo: "txt", categoria: "peluche",    precio: 35, badge: "new", descripcion: "Peluche oficial 25cm, outfit FREEFALL",           imagen: "imagenes/productos/txt-plush-yeonjun.jpg" },
    { id: "txt-ro-01", nombre: "Hoodie FREEFALL",           grupo: "txt", categoria: "ropa",       precio: 65, badge: "new", descripcion: "Sudadera azul grisácea, tallas S–XL",            imagen: "imagenes/productos/txt-hoodie.jpg" },

    // ══════════════════════════════════════════════════════════
    //  ENHYPEN
    // ══════════════════════════════════════════════════════════
    { id: "en-al-01", nombre: "ROMANCE: UNTOLD (2024)",   grupo: "enhypen", categoria: "album",   precio: 30, badge: "new", descripcion: "4to álbum completo — XO (Only If You Say So)",  imagen: "imagenes/productos/en-romance-untold.jpg" },
    { id: "en-al-02", nombre: "DARK BLOOD (2023)",        grupo: "enhypen", categoria: "album",   precio: 26, badge: null, descripcion: "5to mini álbum — Dark Blood, Bills",              imagen: "imagenes/productos/en-darkblood.jpg" },
    { id: "en-ls-01", nombre: "ENHYPEN Official Lightstick", grupo: "enhypen", categoria: "lightstick", precio: 48, badge: "new", descripcion: "Diseño rojo oscuro, edición ENGENE",        imagen: "imagenes/productos/en-lightstick.jpg" },
    { id: "en-pe-01", nombre: "Muñeco Sunghoon",          grupo: "enhypen", categoria: "peluche",  precio: 35, badge: "hot", descripcion: "Peluche oficial 25cm, outfit DARK BLOOD",        imagen: "imagenes/productos/en-plush-sunghoon.jpg" },
    { id: "en-ro-01", nombre: "Hoodie DARK BLOOD",        grupo: "enhypen", categoria: "ropa",     precio: 65, badge: "new", descripcion: "Sudadera negra con diseño vampiro, S–XL",        imagen: "imagenes/productos/en-hoodie.jpg" },

    // ══════════════════════════════════════════════════════════
    //  SEVENTEEN
    // ══════════════════════════════════════════════════════════
    { id: "sv-al-01", nombre: "SPILL THE FEELS (2024)",   grupo: "seventeen", categoria: "album",   precio: 30, badge: "new", descripcion: "13vo mini álbum — Spill the Feels",            imagen: "imagenes/productos/sv-spillthefeel.jpg" },
    { id: "sv-al-02", nombre: "Face the Sun (2022)",      grupo: "seventeen", categoria: "album",   precio: 28, badge: null, descripcion: "4to álbum completo — Hot, Rock with You",       imagen: "imagenes/productos/sv-facethesun.jpg" },
    { id: "sv-ls-01", nombre: "Seventeen Carat Bong Ver.3", grupo: "seventeen", categoria: "lightstick", precio: 50, badge: "new", descripcion: "Lightstick oficial verde agua, CARAT",    imagen: "imagenes/productos/sv-caratbong3.jpg" },
    { id: "sv-pe-01", nombre: "Muñeco Mingyu",            grupo: "seventeen", categoria: "peluche",  precio: 35, badge: "hot", descripcion: "Peluche oficial 25cm, outfit Face the Sun",    imagen: "imagenes/productos/sv-plush-mingyu.jpg" },
    { id: "sv-ro-01", nombre: "Hoodie Face the Sun",      grupo: "seventeen", categoria: "ropa",     precio: 65, badge: "new", descripcion: "Sudadera verde agua, tallas S–XL",             imagen: "imagenes/productos/sv-hoodie.jpg" },

    // ══════════════════════════════════════════════════════════
    //  MAMAMOO
    // ══════════════════════════════════════════════════════════
    { id: "mm-al-01", nombre: "MIC ON (2023)",            grupo: "mamamoo", categoria: "album",   precio: 28, badge: "new", descripcion: "4to álbum completo — Illella, Aya",              imagen: "imagenes/productos/mm-micon.jpg" },
    { id: "mm-al-02", nombre: "reality in BLACK (2019)",  grupo: "mamamoo", categoria: "album",   precio: 25, badge: null, descripcion: "2do álbum completo — HIP, Gleam",               imagen: "imagenes/productos/mm-rib.jpg" },
    { id: "mm-ls-01", nombre: "MAMAMOO Official Lightstick", grupo: "mamamoo", categoria: "lightstick", precio: 48, badge: "new", descripcion: "Diseño morado/rosa, edición MooMoo",      imagen: "imagenes/productos/mm-lightstick.jpg" },
    { id: "mm-ls-02", nombre: "MAMAMOO Lightstick 10th",  grupo: "mamamoo", categoria: "lightstick", precio: 60, badge: "ltd", descripcion: "Edición especial 10 años de MAMAMOO",          imagen: "imagenes/productos/mm-lightstick-10th.jpg" },
    { id: "mm-pe-01", nombre: "Muñeca Hwasa",             grupo: "mamamoo", categoria: "peluche",  precio: 35, badge: "hot", descripcion: "Peluche oficial 25cm, outfit MIC ON",            imagen: "imagenes/productos/mm-plush-hwasa.jpg" },
    { id: "mm-ro-01", nombre: "Hoodie MIC ON",            grupo: "mamamoo", categoria: "ropa",     precio: 65, badge: "new", descripcion: "Sudadera morada con micrófono dorado, S–XL",     imagen: "imagenes/productos/mm-hoodie.jpg" },

    // ══════════════════════════════════════════════════════════
    //  BIGBANG
    // ══════════════════════════════════════════════════════════
    { id: "bb-al-01", nombre: "STILL LIFE (2022)",        grupo: "bigbang", categoria: "album",   precio: 28, badge: "new", descripcion: "Single comeback — Still Life",                   imagen: "imagenes/productos/bb-stilllife.jpg" },
    { id: "bb-al-02", nombre: "MADE (2016)",              grupo: "bigbang", categoria: "album",   precio: 26, badge: null, descripcion: "Álbum completo — BANG BANG BANG, Loser",          imagen: "imagenes/productos/bb-made.jpg" },
    { id: "bb-ls-01", nombre: "BIGBANG Official Lightstick", grupo: "bigbang", categoria: "lightstick", precio: 55, badge: null, descripcion: "Lightstick oficial amarillo VIP",            imagen: "imagenes/productos/bb-lightstick.jpg" }
  ],

  // ----------------------------------------------------------
  //  MÉTODOS DE AYUDA
  //  Estas son funciones que simplifican el trabajo con la DB.
  //  En vez de filtrar con forEach cada vez, llamo a estos
  //  métodos directamente desde cualquier parte del código.
  // ----------------------------------------------------------

  // Devuelve todos los productos de un grupo específico
  // Uso: KventureDB.getProductosPorGrupo("bts")
  getProductosPorGrupo(grupoId) {
    return this.productos.filter(p => p.grupo === grupoId);
  },

  // Devuelve solo los productos de una categoría y grupo
  // Uso: KventureDB.getProductosPorCategoria("bts", "album")
  getProductosPorCategoria(grupoId, categoria) {
    return this.productos.filter(
      p => p.grupo === grupoId && p.categoria === categoria
    );
  },

  // Devuelve la info de un grupo por su id
  // Uso: KventureDB.getGrupo("bts")
  getGrupo(id) {
    return this.grupos.find(g => g.id === id);
  },

  // Devuelve la info de un producto por su id
  // Uso: KventureDB.getProducto("bts-al-01")
  getProducto(id) {
    return this.productos.find(p => p.id === id);
  },

  // Devuelve todos los grupos de una empresa
  // Uso: KventureDB.getGruposPorEmpresa("hybe")
  getGruposPorEmpresa(empresaId) {
    return this.grupos.filter(g => g.empresa === empresaId);
  },

  // Busca productos por texto en nombre o descripción
  // Uso: KventureDB.buscar("hoodie")
  buscar(texto) {
    const q = texto.toLowerCase();
    return this.productos.filter(
      p => p.nombre.toLowerCase().includes(q) ||
           p.descripcion.toLowerCase().includes(q)
    );
  }
};
