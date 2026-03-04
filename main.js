const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Carousel functionality
  const track = document.getElementById("carouselTrack");
  const items = document.querySelectorAll(".carousel-item");

  let index = 0;
  const itemWidth = items[0].offsetWidth + 32; // 32 = gap spacing

  function moveCarousel() {
    index++;

    if (index > items.length - 3) {
      index = 0;
    }

    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  setInterval(moveCarousel, 3000);
