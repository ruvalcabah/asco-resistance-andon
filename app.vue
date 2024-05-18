<template>
  <NuxtLayout />
</template>

<style lang="scss">
$white: #fff !default;
$gray-100: #f6f9fc !default;
$gray-200: #e9ecef !default;
$gray-300: #dee2e6 !default;
$gray-400: #ced4da !default;
$gray-500: #adb5bd !default;
$gray-600: #8898aa !default; // Line footer color
$gray-700: #525f7f !default; // Line p color
$gray-800: #32325d !default; // Line heading color
$gray-900: #212529 !default;
$black: #000 !default;

$scrollbar-track-color: $gray-100;
$scrollbar-thumb-color: $gray-200;
$scrollbar-thumb-hover-color: $gray-500;
$scrollbar-width: 8px;
$scrollbar-border-width: 4px;
$scrollbar-radius: 5px; // <= $scrollbar-width / 2

/* width */
::-webkit-scrollbar {
  width: $scrollbar-width;
  height: $scrollbar-width;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 $scrollbar-border-width rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 $scrollbar-border-width rgba(0, 0, 0, 0.3);
  border-radius: $scrollbar-radius;
  background-color: $scrollbar-track-color;
}

/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 $scrollbar-border-width rgba(0, 0, 0, .3);
  box-shadow: inset 0 0 $scrollbar-border-width rgba(0, 0, 0, 0.3);
  border-radius: $scrollbar-radius;
  // border: 5px solid transparent;
  // background-clip: content-box;
  background-color: $scrollbar-thumb-color;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $scrollbar-thumb-hover-color;
}

.scrollbar-outer {
  overflow: auto;
  visibility: hidden;
}

.scrollbar-inner,
.scrollbar-outer:hover,
.scrollbar-outer:focus {
  visibility: visible;
}

.scrollbar-inner {
  background-color: $white;
}
</style>