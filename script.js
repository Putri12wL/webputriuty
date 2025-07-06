function tampilkan(id) {
  const semua = document.querySelectorAll('.halaman');
  semua.forEach(hal => hal.classList.remove('aktif'));

  const aktif = document.getElementById(id);
  if (aktif) {
    aktif.classList.add('aktif');
  }
}
