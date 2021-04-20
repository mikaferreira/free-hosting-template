function irPara(str, boolean) {
    if (boolean) { return window.open(str, "_blank", 'noopener'); }
    window.location.href = str;
}

  $(document).ready(function () {
    new WOW().init();
  });
