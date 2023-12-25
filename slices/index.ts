// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  image_pleine_largeur: defineAsyncComponent(
    () => import("./ImagePleineLargeur/index.vue"),
  ),
  image_texte: defineAsyncComponent(() => import("./ImageTexte/index.vue")),
  images_simples: defineAsyncComponent(
    () => import("./ImagesSimples/index.vue"),
  ),
  paragraphe: defineAsyncComponent(() => import("./Paragraphe/index.vue")),
  recommandation: defineAsyncComponent(
    () => import("./Recommandation/index.vue"),
  ),
  tarifs: defineAsyncComponent(() => import("./Tarifs/index.vue")),
  texte_carousel: defineAsyncComponent(
    () => import("./TexteCarousel/index.vue"),
  ),
  texte_cartes_grille: defineAsyncComponent(
    () => import("./TexteCartesGrille/index.vue"),
  ),
  texte_cartes_verticales: defineAsyncComponent(
    () => import("./TexteCartesVerticales/index.vue"),
  ),
  texte_image_large: defineAsyncComponent(
    () => import("./TexteImageLarge/index.vue"),
  ),
  titre: defineAsyncComponent(() => import("./Titre/index.vue")),
});
