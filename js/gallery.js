document.addEventListener("DOMContentLoaded", function () {
  const galleryTrack = document.querySelector(".tm-office-gallery-grid");
  const images = document.querySelectorAll(".tm-office-gallery-img");
  const prevBtn = document.getElementById("tmGalleryPrev");
  const nextBtn = document.getElementById("tmGalleryNext");

  const modal = document.getElementById("tmImageModal");
  const modalImg = document.getElementById("tmImageModalImg");
  const modalClose = document.getElementById("tmImageModalClose");

  if (!galleryTrack || images.length === 0 || !modal || !modalImg || !modalClose) {
    return;
  }

  const scrollAmount = 380;

  function scrollGallery(direction) {
    galleryTrack.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      scrollGallery(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      scrollGallery(1);
    });
  }

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || "";
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      openModal(img.src, img.alt);
    });
  });

  modalClose.addEventListener("click", function () {
    closeModal();
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
});

